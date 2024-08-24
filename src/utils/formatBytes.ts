// atenção na criação do nome do arq, pois deve ser minúsculo

export function formatBytes(bytes: number) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']

  let values = bytes
  let unitIndex = 0

  while (values >= 1024 && unitIndex < units.length - 1) {
    values /= 1024
    unitIndex++
  }
  return `${values.toFixed(1)} ${units[unitIndex]}`
}
