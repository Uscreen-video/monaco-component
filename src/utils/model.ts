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
  path: string,
  value: string,
  language: keyof typeof Languages
) => {
  const pathString = path || nanoid()
  const _path = Languages.typescript || Languages.javascript ? `ts://${pathString}.tsx` : `inmemory://${pathString}`
  return getModel(monaco, _path) || createModel(monaco, _path, value, language)
}
