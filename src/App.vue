<script setup lang="ts">
import { Button } from '@/components/button'
import { Alert, AlertClose } from './components/alert'
import { Badge, BadgeDismiss } from './components/badge';
import { Avatar, AvatarFallback, AvatarImage } from './components/avatar';
import Logo from './assets/logo.svg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/accordion';
import { Popover, PopoverContent, PopoverTrigger } from './primitives/popover';
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from './components/dropdown';
import { Tooltip, TooltipContent, TooltipTrigger } from './components/tooltip';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './components/dialog';

const onEdit = () => {
  console.log('edit clicked');
}
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

    <Accordion type="multiple">
      <AccordionItem value="faq-1">
        <AccordionTrigger>What is this?</AccordionTrigger>
        <AccordionContent>This is an accordion.</AccordionContent>
      </AccordionItem>

      <AccordionItem value="faq-2">
        <AccordionTrigger>What is this 2?</AccordionTrigger>
        <AccordionContent>This is an accordion 2.</AccordionContent>
      </AccordionItem>
    </Accordion>

    <Popover>
      <PopoverTrigger>open me</PopoverTrigger>
      <PopoverContent placement="right-start">yeah u opened me!</PopoverContent>
    </Popover>

    <br>

    <Dropdown>
      <DropdownTrigger>Options</DropdownTrigger>
      <DropdownContent placement="bottom-start">
        <DropdownItem @click="onEdit">Edit</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
        <DropdownItem disabled>Archive</DropdownItem>
      </DropdownContent>
    </Dropdown>

    <br>

    <Tooltip>
      <TooltipTrigger>Delete</TooltipTrigger>
      <TooltipContent>This action is irreversible</TooltipContent>
    </Tooltip>

    <br>

    <Dialog>
      <DialogTrigger>Open dialog</DialogTrigger>
      <DialogContent>
        <p>Some content</p>
        <DialogClose />
      </DialogContent>
    </Dialog>
  </div>
</template>

<style scoped></style>
