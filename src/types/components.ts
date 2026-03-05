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

export interface BadgeContext {
  isVisible: Ref<boolean>
  dismiss: () => void
}

export interface TabsContext {
  activeTab: Ref<string>
  setTab: (value: string) => void
  uid: string
}

export interface AccordionContext {
  isOpen: (value: string) => boolean
  toggle: (value: string) => void
  uid: string
}

export interface AccordionItemContext {
  value: string
  isOpen: Ref<boolean>
  triggerId: string
  contentId: string
}

export interface PopoverContext {
  isOpen: Ref<boolean>
  open: () => void
  close: () => void
  toggle: () => void
  triggerId: string
  contentId: string
}

export interface DropdownContext {
  isOpen: Ref<boolean>
  open: () => void
  close: () => void
  toggle: () => void
  triggerId: string
  contentId: string
}

export interface TooltipContext {
  isOpen: Ref<boolean>
  open: () => void
  close: () => void
  tooltipId: string
}

export interface DialogContext {
  isOpen: Ref<boolean>
  open: () => void
  close: () => void
  toggle: () => void
  triggerId: string
  dialogId: string
}
