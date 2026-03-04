<script setup lang="ts">
import { Button } from '@/components/button'
import { Alert, AlertClose } from './components/alert'
import { Badge, BadgeDismiss } from './components/badge';
import { Avatar, AvatarFallback, AvatarImage } from './components/avatar';
import Logo from './assets/logo.svg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/tabs';
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
      <AvatarImage :src="Logo"></AvatarImage>
      <AvatarFallback>MD</AvatarFallback>
    </Avatar>

    <br>

    <Tabs default-value="profile">
      <TabsList aria-label="Account settings">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">...profile</TabsContent>
      <TabsContent value="security">...security</TabsContent>
    </Tabs>
  </div>
</template>

<style scoped></style>
