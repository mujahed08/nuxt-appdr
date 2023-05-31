export const useSecureFetch = (url: string, options?) => {
    return useFetch(url, {
        ...options,
        async onResponse({ request, response, options }) {
            console.log('[fetch response]')
        },
        async onResponseError({ request, response, options }) {
            console.log('[fetch response error]')
        },

        async onRequest({ request, options }) {
            console.log(options)
            console.log('[fetch request]')
        },
        async onRequestError({ request, options, error }) {
            console.log('[fetch request error]')
        }
    })
}

export const onRequest = async ({ request, options }) => {
    console.log(options)
    console.log('[fetch request]')
}

export const onRequestError = async ({ request, options, error }) => {
    console.log('[fetch request error]')
}