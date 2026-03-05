import { ref } from 'vue'

/**
 * Generic composable for managing a boolean open/visible state..
 */
export function useDisclosure(initialValue = false) {
  const isOpen = ref(initialValue)

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  return { isOpen, open, close, toggle }
}
