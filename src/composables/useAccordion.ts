import { ref } from 'vue'

export function useAccordion(type: 'single' | 'multiple') {
  const openItems = ref<string[]>([])

  const uid = Math.random().toString(36).slice(2, 7)

  const isOpen = (value: string) => openItems.value.includes(value)

  const toggle = (value: string) => {
    if (type === 'single') {
      openItems.value = isOpen(value) ? [] : [value]
    } else {
      openItems.value = isOpen(value)
        ? openItems.value.filter((v) => v !== value)
        : [...openItems.value, value]
    }
  }

  return { isOpen, toggle, uid }
}
