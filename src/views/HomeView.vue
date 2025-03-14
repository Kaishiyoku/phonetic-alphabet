<script setup lang="ts">
import {ref} from 'vue';
import PhoneticAlphabetChars from '@/enums/PhoneticAlphabetChars.ts';

const input = ref('');
const phonetics = ref<string[]>([]);

function handleSubmit(): void {
  phonetics.value = input.value
    .trim()
    .split('')
    .map((char) => PhoneticAlphabetChars[char.toLowerCase() as keyof typeof PhoneticAlphabetChars] || char)
}

function handleReset(): void {
  input.value = '';
  phonetics.value = [];
}
</script>

<template>
  <main>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="input"/>

      <button type="submit" @click="handleSubmit">
        Submit
      </button>

      <button type="button" @click="handleReset">
        Reset
      </button>

      <div class="prose">
        <ol v-if="phonetics.length > 0">
          <li v-for="(phonetic, index) in phonetics" :key="`${index}-${phonetic}`">
            {{ phonetic }}
          </li>
        </ol>
      </div>
    </form>
  </main>
</template>
