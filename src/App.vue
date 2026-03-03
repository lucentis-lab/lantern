<script setup lang="ts">
import { Button } from '@/components/button'
import { Alert, AlertClose } from './components/alert'
import { Badge, BadgeDismiss } from './components/badge';
import { Avatar, AvatarFallback, AvatarImage } from './components/avatar';
</script>

<template>
  <div class="space-y-8 p-4">

    <div class="">ok</div>

    <Button>Test</Button>

    <Alert>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nemo?
      <AlertClose></AlertClose>
    </Alert>

    <Badge>
      new offer
      <BadgeDismiss></BadgeDismiss>
    </Badge>

    <br>

    <Avatar>
      <AvatarImage src="https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-red-image_15684333.jpg"></AvatarImage>
      <AvatarFallback>MD</AvatarFallback>
    </Avatar>
  </div>
</template>

<style scoped></style>
