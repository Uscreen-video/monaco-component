declare module '*.css?inline' {
  const _stylesheet: string
  export = _stylesheet
}

declare module '*?worker' {
  const _worker: () => Worker
  export = _worker
}
declare module '*&url' {
  const _worker: string
  export = _worker
}

declare module '*.json' {
  const _json: Record<string, unknown>
  export = _json
}

declare module 'monaco-editor/esm/vs/editor/editor.all' {
  const _export: any
  export = _export
}
