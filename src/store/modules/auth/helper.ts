import { createLocalStorage } from '@/utils/storage'

const ss = createLocalStorage({ expire: 60 * 60 * 24 * 7, crypto: false }) //七天

const LOCAL_NAME = 'SECRET_TOKEN'

export function getToken() {
  return ss.get(LOCAL_NAME)
}

export function setToken(token: string) {
  return ss.set(LOCAL_NAME, token)
}

export function removeToken() {
  return ss.remove(LOCAL_NAME)
}
