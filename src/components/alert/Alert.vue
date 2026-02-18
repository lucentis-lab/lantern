<template>
  <Alert v-bind="props" :class="classes" class="l-alert" @dismiss="emit('dismiss')">
    <slot />
  </Alert>
</template>

<script setup lang="ts">
import Alert, { type AlertPrimitiveProps } from '../../primitives/alert/Alert.vue'
import { useComponentClasses } from '../../composables/useComponentClasses'
import { alertSpecs } from './alertSpecs'
import type { BaseProps } from '../../types'
import { computed, type HTMLAttributes } from 'vue'

interface AlertProps extends AlertPrimitiveProps, BaseProps {
  size?: string
  radius?: string
}

const props = defineProps<AlertProps>()

const emit = defineEmits<{
  dismiss: []
}>()

const classes = useComponentClasses(props, alertSpecs)
</script>
