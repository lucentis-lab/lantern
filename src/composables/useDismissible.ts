import { ref, onMounted, onUnmounted } from 'vue'

export function useDismissible(referenceEl: () => HTMLElement | null) {
  const isOpen = ref(false)

  const open = () => { isOpen.value = true }
  const close = () => { isOpen.value = false }
  const toggle = () => { isOpen.value = !isOpen.value }

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
