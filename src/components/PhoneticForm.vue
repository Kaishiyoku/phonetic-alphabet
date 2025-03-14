<script setup lang="ts">
import FormInput from '@/components/form/FormInput.vue';
import FormButton from '@/components/form/FormButton.vue';
import { ref } from 'vue';
import PhoneticAlphabetChars from '@/enums/PhoneticAlphabetChars.ts';

const text = ref('')
const phonetics = ref<string[]>([])

function handleSubmit(): void {
  phonetics.value = text.value
    .trim()
    .split('')
    .map(
      (char) =>
        PhoneticAlphabetChars[char.toLowerCase() as keyof typeof PhoneticAlphabetChars] || char,
    )
}

function handleReset(): void {
  text.value = ''
  phonetics.value = []
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <form-input id="text" type="text" label="Text" v-model="text" autofocus required />

    <div class="space-x-4">
      <form-button type="submit" @click="handleSubmit"> Submit</form-button>

      <form-button type="button" @click="handleReset"> Reset</form-button>
    </div>

    <div class="pt-4 prose">
      <ol v-if="phonetics.length > 0">
        <li v-for="(phonetic, index) in phonetics" :key="`${index}-${phonetic}`">
          {{ phonetic }}
        </li>
      </ol>
    </div>
  </form>
</template>
