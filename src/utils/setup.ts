import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker&url'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker&url'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker&url'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker&url'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker&url'
import { Monaco } from '../types'

const createWorker = (url: string) => {
  const content = `importScripts("${url}");`;
  const object = URL.createObjectURL(new Blob([content], { type: "text/javascript" }));
  return new Worker(object);
}

export const setupMonacoWorkers = () => {
  (window as any).MonacoEnvironment = {
    getWorker: (_: any, label: string): any => {
      switch (label) {
        case 'css':
          return createWorker(cssWorker)
        case 'html':
        case 'liquid':
          return createWorker(htmlWorker)
        case 'json':
          return createWorker(jsonWorker)
        case 'typescript':
        case 'javascript':
          return createWorker(tsWorker)
        default:
          return createWorker(editorWorker)
      }
    }
  }
}

const setCompilerOptions = (monaco: Monaco) => {
  const compilerDefaults = {
    jsx: monaco.languages.typescript.JsxEmit.React,
    target: monaco.languages.typescript.ScriptTarget.ESNext,
  };

  monaco.languages.typescript.typescriptDefaults.setMaximumWorkerIdleTime(-1);
  monaco.languages.typescript.javascriptDefaults.setMaximumWorkerIdleTime(-1);
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
    compilerDefaults
  );
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions(
    compilerDefaults
  );

  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: false
  });
  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: false
  });
}

export const setupMonaco = (monaco: Monaco) => {
  setupMonacoWorkers()
  setCompilerOptions(monaco)
}
