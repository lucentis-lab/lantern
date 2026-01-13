<script setup lang="ts">
import { Button } from '@/components/button'
import { Alert, AlertClose } from './primitives/alert'
</script>

<template>
  <div class="">ok</div>

  <Button>Test</Button>

  <Alert :duration="4000">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nemo?
    <AlertClose></AlertClose>
  </Alert>
</template>

<style scoped></style>
