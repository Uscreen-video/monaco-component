import { urlAlphabet, customAlphabet } from 'nanoid'
import { Languages, Monaco } from '../types'

const nanoid = customAlphabet(urlAlphabet, 10)
export const getModel = (monaco: Monaco, uri: any) => {
  return monaco
    .editor
    .getModel(uri)
}

export const createModel = (
  monaco: Monaco,
  uri: any,
  value: string = '',
  language: keyof typeof Languages
) => {
  return monaco
    .editor
    .createModel(value, language, uri)
}

export const getOrCreateModel = (
  monaco: Monaco,
  path: string,
  value: string,
  language: keyof typeof Languages
) => {
  const name = (path || nanoid()).replace(/[^a-zA-Z0-9-_]/g, '')
  const _path = language === 'typescript' || language === 'javascript'
    ? `ts:${(name)}.ts`
    : `inmemory:${name}`
  const uri = monaco.Uri.parse(_path)
  return getModel(monaco, uri) || createModel(monaco, uri, value, language)
}
