export function classNames(...classes: string[]) {
  return classes.filter(Boolean)
    .join(' ')
}

export interface LocalStorageItem {
  [key: string]: string
}

export const setLocalStorage = (localStorageItems: LocalStorageItem) => {
  for (const key in localStorageItems) {
    localStorage.setItem(key, localStorageItems[key])
  }
}

export const clearLocalStorage = (keys: string[]) => {
  for (const key in keys) {
    localStorage.removeItem(key)
  }
}

export const timeFrom = (start: Date, end: Date) => {
  const diff = end.getTime() - start.getTime()
  const days = Math.floor(diff / (24 * 3600 * 1000))
  const leave1 = diff % (24 * 3600 * 1000)
  const hours = Math.floor(leave1 / (3600 * 1000))
  const leave2 = leave1 % (3600 * 1000)
  const minutes = Math.floor(leave2 / (60 * 1000))
  return [days, hours, minutes]
}

export const timeFromNow = (start: Date) => {
  const [days, hours, minutes] = timeFrom(start, new Date())
  if (days > 0) {
    return [days, 'days']
  } else if (hours > 0) {
    return [hours, 'hours']
  } else {
    return [minutes, 'minutes']
  }
}

export function range(start: number, end: number) {
  return (new Array(end - start + 1)).fill(undefined)
    .map((_, i) => i + start)
}
