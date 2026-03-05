import { onMounted, onUnmounted } from 'vue'
import { useDisclosure } from '@/composables/useDisclosure'

export function useDismissible(referenceEl: () => HTMLElement | null) {
  const { isOpen, open, close, toggle } = useDisclosure(false)

  const onOutsideClick = (e: MouseEvent) => {
    if (!isOpen.value) return
    const ref = referenceEl()
    if (ref && ref.contains(e.target as Node)) return
    close()
  }

  const onEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') close()
  }

  onMounted(() => {
    document.addEventListener('pointerdown', onOutsideClick)
    document.addEventListener('keydown', onEscape)
  })

  onUnmounted(() => {
    document.removeEventListener('pointerdown', onOutsideClick)
    document.removeEventListener('keydown', onEscape)
  })

  return { isOpen, open, close, toggle }
}
