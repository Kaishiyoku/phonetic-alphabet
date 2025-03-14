<script setup lang="ts">
import {RouterView} from 'vue-router';
import NavLink from '@/components/NavLink.vue'
</script>

<template>
  <div>
      <header>
        <nav class="flex justify-between space-x-2 p-2 bg-zinc-100">
          <div class="flex space-x-2">
            <nav-link to="/">Startseite</nav-link>
            <nav-link to="/about">Über</nav-link>
          </div>

          <nav-link to="/imprint">Impressum</nav-link>
        </nav>
      </header>

    <main class="p-4 border-t border-zinc-300">
      <router-view/>
    </main>
  </div>
</template>
