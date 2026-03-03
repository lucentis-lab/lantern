import { ref } from 'vue'

export function useBadge() {
  const isVisible = ref(true)

  const dismiss = () => {
    isVisible.value = false
  }

  return {
    isVisible,
    dismiss,
  }
}
