<template>
  <span class="l-avatar" :data-state="state">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import { AVATAR_KEY } from '@/utils/keys'
import type { AvatarContext } from '@/types/components'

const imageError = ref(false)
const showFallback = ref(false)

const onError = () => {
  console.log('error image');

  imageError.value = true
  showFallback.value = true
}

const state = computed(() => (imageError.value ? 'fallback' : 'image'))

provide<AvatarContext>(AVATAR_KEY, {
  imageError,
  showFallback,
  onError,
})
</script>
