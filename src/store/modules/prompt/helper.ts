import { ss } from '@/utils/storage'

const LOCAL_NAME = '模板商店'

export type PromptList = []

export interface PromptStore {
  promptList: PromptList
}

export function getLocalPromptList(): PromptStore {
  const promptStore: PromptStore | undefined = ss.get(LOCAL_NAME)
  return promptStore ?? { promptList: [] }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}
