<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>

<template>
  <router-link
    class="relative block px-3 py-2 text-sm font-semibold hover:bg-zinc-200 rounded"
    v-slot="{isActive}"
    :to
  >
    <slot/>

    <div v-if="isActive" class="absolute inset-x-2 -bottom-2 h-0.5 rounded-full bg-zinc-950 dark:bg-white"/>
  </router-link>
</template>
