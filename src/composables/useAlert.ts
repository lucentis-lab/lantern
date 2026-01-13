import { ref } from 'vue'

export function useAlert() {
  const isVisible = ref(true)

  const dismiss = () => {
    isVisible.value = false
  }

  return {
    isVisible,
    dismiss,
  }
}
