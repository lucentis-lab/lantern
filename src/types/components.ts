import type { Ref } from 'vue'

export interface AlertContext {
  isVisible: Ref<boolean>
  dismiss: () => void
}

export interface AvatarContext {
  imageError: Ref<boolean>
  showFallback: Ref<boolean>
  onError: CallableFunction
}
