<template>
    <h1>Index page</h1>
    {{data}}
</template>
<script setup lang="ts">
    const { data } = await useFetch('/api/auth/signin', {
        method: 'post',
        body: { username: 'mujahed', password: '123456' }
    })
</script>