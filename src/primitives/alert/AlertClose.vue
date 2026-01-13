<script setup lang="ts">
import { inject } from 'vue'
import Button from '../button/Button.vue'
import { ALERT_KEY } from '@/utils/keys'
import type { AlertContext } from '@/types/components'

const alert = inject<AlertContext>(ALERT_KEY)
</script>

<template>
  <Button type="button" @click="alert?.dismiss()" aria-label="Close alert">
    <slot>×</slot>
  </Button>
</template>
