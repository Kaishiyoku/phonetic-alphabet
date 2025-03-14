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
    <label
      :for="id"
      class="block pb-1"
    >
      {{ label }}
    </label>

    <input
      v-model="model"
      class="py-1 rounded"
      :id
      :type
      :autofocus
      :required
    />
  </div>
</template>
