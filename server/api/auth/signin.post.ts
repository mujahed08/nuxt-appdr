export default defineEventHandler(async (event) => {
    const body = await useBody(event);
    const data = await $fetch(
        'http://localhost:8080/api/auth/signin',
        {'body' : body, method: 'POST' }
    )
    return data;
})