export const removeExtension = (handle: string): string => {
  return handle.replace('.lens', '')
}
