<template>
    <div class="modal fade show" :class="{ load : loadingFlag }" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const loadingFlag = computed(() => useUi().loadingFlag)
</script>

<style>
    .load {
        display: block;
        background-color: #000;
        opacity: 0.5;
    }
</style>