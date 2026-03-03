<template>
  <Button v-bind="props" :class="classes" class="l-button">
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import { buttonSpecs } from './buttonSpecs'
import { useComponentClasses } from '@/composables/useComponentClasses.js'
import Button, { type ButtonPrimitiveProps } from '@/primitives/button/Button.vue'
import type { BaseProps } from '../../types'

interface ButtonProps extends BaseProps, ButtonPrimitiveProps {
  size?: string
  radius?: string
}

const props = defineProps<ButtonProps>()

const classes = useComponentClasses(props, buttonSpecs)
</script>
