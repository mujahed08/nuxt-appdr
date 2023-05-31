<template>
    <div>
      <!-- This page correctly has only one single root element -->
      <span class="p-2">Page patient</span>
      <NuxtLink to="/patient/edit-233">Edit</NuxtLink>
    </div>
</template>

<script>
  // This will work in both `<script setup>` and `<script>`
  definePageMeta({
    layout: "custom",
  });
</script>