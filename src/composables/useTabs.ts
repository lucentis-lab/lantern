import { ref } from 'vue'

export function useTabs(defaultValue: string) {
  const activeTab = ref(defaultValue)

  const setTab = (value: string) => {
    activeTab.value = value
  }

  const uid = Math.random().toString(36).slice(2, 7)

  return {
    activeTab,
    setTab,
    uid,
  }
}
