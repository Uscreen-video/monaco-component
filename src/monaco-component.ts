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

export class MonacoEditor extends LitElement {
  static styles = unsafeCSS(styles)

  /** Initial value */
  @property()
  value = ''

  /** 
   * There will be an input generated if the name present
   * It might be helpful for those who use component within a `form`
   */
  @property()
  name = ''

  @property()
  filename = ''

  @property()
  theme: keyof typeof Themes = 'github'

  @property()
  language: keyof typeof Languages = Languages.javascript

  @property({ type: Boolean })
  disabled = false

  @state()
  monacoStyles!: string

  @query('.container')
  container?: HTMLDivElement

  _input?: HTMLInputElement
  monaco!: Monaco
  editor!: editor.IStandaloneCodeEditor

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

  @watch('language', { waitUntilFirstUpdate: true })
  handleLanguageChange(){
    if (!Languages[this.language]) {
      return console.warn(`"${this.language}" language is not included in the bundle`)
    }
    this.editor?.dispose()
    this.createEditor()
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.initialize()
  }

  connectedCallback(): void {
    super.connectedCallback()
    dependencies = loadDependencies(this.theme)
    if (!this.name) return
    this._input = createHiddenInput(this, this.name)
  }

  disconnectedCallback(): void {
    window.removeEventListener('resize', this.resizeEditor);
    if (this.editor) {
      this.editor.dispose();
    }
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
      this.language
    )
  
    model.updateOptions({ tabSize: 2 })
    model.setValue(this.value)

    this.editor = this.monaco.editor.create(
      this.container!, {
        model,
        language: this.language,
        readOnly: this.disabled,
        formatOnPaste: true,
        minimap: {
          enabled: true
        },
        suggest: {
          snippetsPreventQuickSuggestions: false
        }
    })

    this.editor.addCommand(this.monaco.KeyMod.CtrlCmd | this.monaco.KeyCode.KeyS, () => {
      this.formatCode()
      emit(this, 'submit')
    })

    this.editor.onDidChangeModelContent(() => {
      this.value = this.editor.getValue()
    })
  }

  formatCode = () => {
    this.editor.getAction('editor.action.formatDocument').run()
  }

  resizeEditor = () => {
    this.editor.layout()
  }

  render() {
    return html`
      <style>${this.monacoStyles}</style>
      <div class="container"></div>
    `
  }
}

if (!customElements.get('monaco-editor')) {
  customElement('monaco-editor')(MonacoEditor)
}
