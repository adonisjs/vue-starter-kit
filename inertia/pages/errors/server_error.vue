<script setup lang="ts">
defineProps<{ error: { message: string } }>()
</script>

<template>
  <div class="container">
    <h1>{{ error.message }}</h1>
  </div>
</template>
