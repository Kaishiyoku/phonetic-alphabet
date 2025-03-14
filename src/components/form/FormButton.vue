<script setup lang="ts">
import type {HtmlButtonElementTypeAttribute} from '@/types/HtmlButtonElementTypeAttribute.ts';
import { computed } from 'vue'
import clsx from 'clsx'

const props = withDefaults(defineProps<{
  type: HtmlButtonElementTypeAttribute;
  color?: 'black';
  plain?: boolean;
}>(), {
  plain: false,
});

const classes = computed(() => clsx('px-2 py-1.5 sm:text-sm border focus:outline-offset-2 focus:outline-zinc-600 rounded-md', {
  'text-zinc-300 border-zinc-600 bg-black hover:bg-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-600': props.color === 'black' && !props.plain,
  'border-transparent hover:bg-zinc-200': props.plain,
  'shadow': !props.plain,
}));
</script>

<template>
  <button
    :class="classes"
    :type
  >
    <slot/>
  </button>
</template>
