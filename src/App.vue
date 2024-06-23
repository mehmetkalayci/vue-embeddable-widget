<template>
  <div class="widget-container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('My Widget Title');
const message = ref('This is a message from the Vue.js widget.');
</script>

<style scoped>
.widget-container {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  width: 300px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}
</style>
