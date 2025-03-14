<script setup lang="ts">
import type {HtmlButtonElementTypeAttribute} from '@/types/HtmlButtonElementTypeAttribute.ts';

defineProps<{
  type: HtmlButtonElementTypeAttribute;
}>();
</script>

<template>
  <button
    class="px-2 py-1 border rounded hover:bg-zinc-100"
    :type
  >
    <slot/>
  </button>
</template>
