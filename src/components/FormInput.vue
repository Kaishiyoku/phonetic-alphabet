<script setup lang="ts">

import type {HtmlInputElementTypeAttribute} from '@/types/HtmlInputElementTypeAttribute.ts';

withDefaults(defineProps<{
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
</script>

<template>
  <div class="pb-4">
    <div class="pb-1">
      <label
        :for="id"
      >
        {{ label }}
      </label>
    </div>

    <input
      v-model="model"
      class="py-1 rounded dark:bg-zinc-800"
      :id
      :type
      :autofocus
      :required
    />
  </div>
</template>
