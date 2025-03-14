<script setup lang="ts">

import type {HtmlInputElementTypeAttribute} from '@/types/HtmlInputElementTypeAttribute.ts';
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  id: string;
  type: HtmlInputElementTypeAttribute;
  label: string;
  autofocus?: boolean;
  required?: boolean;
}>(), {
  autofocus: false,
  required: false,
});

const model = defineModel<string>();

const classes = computed(() => ({"after:content-['*'] after:pl-1 after:text-red-600": props.required}));
</script>

<template>
  <div class="pb-4">
    <div class="pb-1">
      <label
        :for="id"
        :class="classes"
      >
        {{ label }}
      </label>
    </div>

    <input
      v-model="model"
      class="py-1 border-zinc-400 focus:border-blue-600 ring-blue-600 dark:bg-zinc-800 shadow rounded"
      :id
      :type
      :autofocus
      :required
    />
  </div>
</template>
