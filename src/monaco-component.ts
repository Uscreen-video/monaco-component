import { unsafeCSS, LitElement, html, PropertyValueMap } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'
import styles from './styles.css?inline'
import { getOrCreateModel } from './utils/model'
import { watch } from './utils/watch'
import { emit } from './utils/event'
import { createHiddenInput } from './utils/input'
import { loadDependencies, loadTheme } from './utils/load'

import type { editor } from 'monaco-editor'
import { Dependencies, Languages, Monaco, Themes } from './types'

let dependencies: Dependencies | undefined = undefined;

/**
 * `<monaco-editor>` is a web component that wraps the 
 * [Monaco Editor](https://microsoft.github.io/monaco-editor/). 
 * The main achievement of this component is to provide a simple 
 * way to use Monaco Editor in your web application without the need 
 * for any bundler or build tools. You can simply load this component 
 * from CDN and use it. The default version is the bare minimum, 
 * but additional languages and themes might be loaded just by providing proper attributes.
 * @tag monaco-editor
 * @cssprop [--monaco-editor-height=300px] min-height of the editor
 * @event save - Fired when `ctrl + s` or `cmd + s` is pressed
 * @event ready - Fired when the editor is initialized
 */
export class MonacoEditor extends LitElement {
  static styles = unsafeCSS(styles)

  /**
   * The value of the editor. If `name` is present, 
   * the value will be set to the hidden input as well
   */
  @property()
  value = ''

  /** 
   * If present, a hidden input will be created with this name
   * It might be helpful for those who use component within a `form`
   */
  @property()
  name = ''

  /**
   * An abstract file name that used for faster models caching and cross-editor
   * communication.  
   * 
   * <small>eq: In case you have multiple typescript files, this property will allow to import
   * types from one of the to another.</small>
   */
  @property()
  filename = ''

  /**
   * The one of predefined themes. You may customize the theme
   * by setting its directly to the `monaco` object.  
   * 
   * ```javascript 
   * const editorElement = document.querySelector('monaco-editor')  
   * editorElement.monaco.editor.defineTheme('my-theme', {...})  
   * editorElement.editor.setTheme('my-theme')  
   * ```
   */
  @property()
  theme: keyof typeof Themes = 'github'


  /**
   * The editor content language.
   */
  @property()
  lang: keyof typeof Languages = 'javascript'

  /**
   * Makes the editor submit closest form on `ctrl + s` or `cmd + s` pressing.
   */
  @property({ type: Boolean, attribute: 'submit-on-save' })
  submitOnSave = false

  /**
   * Will prevent the component from any user actions.
   * You may still copy the value or focus into the editor
   */
  @property({ type: Boolean })
  disabled = false

  /**
   * If `true`, the editor will render minimap on the right side.
   */
  @property({ type: Boolean })
  minimap = false

  /**
   * Shows line numbers in the editor
   */
  @property({ type: Boolean, attribute: 'line-numbers' })
  lineNumbers = false

  /**
   * @type {any}
   * Editor options. Read more about available options 
   * [here](https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html)
   */
  @property({ type: Object })
  options: editor.IStandaloneEditorConstructionOptions = {}

  @state()
  monacoStyles!: string

  @query('.container')
  container?: HTMLDivElement

  private _input?: HTMLInputElement

  /**
   * Monaco global namespace. Read more about it 
   * [here](https://microsoft.github.io/monaco-editor/typedoc/index.html)
   * @type { any }
   */
  public monaco!: Monaco

  /**
   * Monaco editor instance. Read more about it 
   * [here](https://microsoft.github.io/monaco-editor/typedoc/modules/editor.html)
   * @type { any }
   */
  public editor!: editor.IStandaloneCodeEditor

  /**
   * Formats the code in the editor
   * 
   * ```javascript
   * getElementsByTagName('monaco-editor')[0].formatCode()
   * ```
   */
  public formatCode = () => {
    this.editor.getAction('editor.action.formatDocument').run()
  }

  /**
   * Manually triggers the resize of the editor
   * 
   * ```javascript
   * getElementsByTagName('monaco-editor')[0].resizeEditor()
   * ```
   */
  public resizeEditor = () => {
    this.editor.layout()
  }

  @watch('value')
  handleValueChange() {
    if (this._input) this._input.value = this.value
    if (this.editor && this.value === this.editor.getValue()) {
      emit(this, 'input')
    } else {
      this.editor?.setValue(this.value)
    }
  }

  @watch('theme', { waitUntilFirstUpdate: true })
  async handleThemeChange() {
    if (!Themes[this.theme]) {
      return console.warn(`"${this.theme}" theme is not provided in the bundle`)
    }
    const theme = await loadTheme(this.theme)
    this.monaco.editor.defineTheme(this.theme, theme)
    this.monaco.editor.setTheme(this.theme)
  }

  @watch('lang', { waitUntilFirstUpdate: true })
  @watch('lineNumbers', { waitUntilFirstUpdate: true })
  @watch('minimap', { waitUntilFirstUpdate: true })
  handleLanguageChange(){
    this.editor?.dispose()
    this.createEditor()
  }

  private handleKeyDown = (e: KeyboardEvent): any => {
    e.stopPropagation()
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.initialize()
  }

  connectedCallback(): void {
    super.connectedCallback()
    dependencies = loadDependencies(this.theme)
    if (!this.name) return
    this._input = createHiddenInput(this, this.name)
    this._input.value = this.value
  }

  disconnectedCallback(): void {
    window.removeEventListener('resize', this.resizeEditor);
    this.editor?.dispose();
  }

  initialize = async () => {
    const [monaco, styles] = await dependencies!
    this.monaco = monaco
    this.monacoStyles = styles.default
    
    this.createEditor()

    window.addEventListener('resize', this.resizeEditor)

    emit(this, 'ready')
  }

  createEditor() {
    const model = getOrCreateModel(
      this.monaco,
      this.filename || this.name,
      this.value,
      this.lang
    )
  
    model.updateOptions({ tabSize: 2 })
    model.setValue(this.value)

    this.editor = this.monaco.editor.create(
      this.container!, {
        model,
        language: this.lang,
        readOnly: this.disabled,
        lineNumbers: this.lineNumbers ? 'on' : 'off',
        minimap: {
          enabled: this.minimap
        },
        suggest: {
          snippetsPreventQuickSuggestions: false
        },
        ...this.options
    })

    this.editor.addCommand(this.monaco.KeyMod.CtrlCmd | this.monaco.KeyCode.KeyS, () => {
      if (this.submitOnSave) this.closest('form')?.submit()
      emit(this, 'save')
    })

    this.editor.onDidChangeModelContent(() => {
      this.value = this.editor.getValue()
    })
  }

  render() {
    return html`
      <style>${this.monacoStyles}</style>
      <div 
        class="container"
        @keydown=${this.handleKeyDown}
      ></div>
    `
  }
}

if (!customElements.get('monaco-editor')) {
  customElement('monaco-editor')(MonacoEditor)
}

declare global {
  interface HTMLElementTagNameMap {
    'monaco-editor': MonacoEditor;
  }
}
