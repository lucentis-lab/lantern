<template>
  <span v-if="avatar?.showFallback.value" class="l-avatar-fallback">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { AVATAR_KEY } from '@/utils/keys'
import type { AvatarContext } from '@/types/components'

const avatar = inject<AvatarContext>(AVATAR_KEY)
</script>
