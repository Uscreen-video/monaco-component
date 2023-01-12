import { nanoid } from 'nanoid'
import { Languages, Monaco } from '../types'

export const getModel = (monaco: Monaco, path: string) => {
  return monaco
    .editor
    .getModel(monaco.Uri.parse(path))
}

export const createModel = (
  monaco: Monaco,
  path: string,
  value: string = '',
  language: keyof typeof Languages
) => {
  return monaco
    .editor
    .createModel(value, language, monaco.Uri.parse(path))
}

export const getOrCreateModel = (
  monaco: Monaco,
  path: string = nanoid(),
  value: string,
  language: keyof typeof Languages
) => {
  const _path = Languages.typescript || Languages.javascript ? `ts://${path}.tsx` : `inmemory://${path}`
  return getModel(monaco, _path) || createModel(monaco, path, value, language)
}
