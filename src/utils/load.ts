import { Dependencies, Themes } from '../types'
import { setupMonaco } from './setup'

let promise: Dependencies | undefined = undefined

export const loadTheme = (name: keyof typeof Themes) =>
  import(`../../node_modules/monaco-themes/themes/${Themes[name]}.json`)

export const loadDependencies = (
  theme: keyof typeof Themes
) => {
  if (promise) return promise
  promise = Promise.all([
    import('monaco-editor/esm/vs/editor/editor.api'),
    import('monaco-editor/min/vs/editor/editor.main.css?inline'),
    loadTheme(theme),
    import('./languages'),
    import('monaco-editor/esm/vs/editor/editor.all'),
  ])

  promise?.then(async ([_monaco, _, _theme]) => {
    _monaco.editor.defineTheme(theme, _theme)
    _monaco.editor.setTheme(theme)
    setupMonaco(_monaco)
  })

  return promise
}
