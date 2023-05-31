export const endpoint  = () => {
    return 'http://localhost:8080/api/'
}

export const apiSignupaaaa = () => {
    return `${endpoint}/auth/signin`
}

export const apiSignupx = (payload) => {
    return useAsyncData(
        'signup',
        () => $fetch('/auth/signin', { baseURL: endpoint(), method: 'post', body: payload })
    )
}

export const apiSignupxx = (payload) => {
    return useAsyncData(
        'signup',
        () => $fetch(`${endpoint()}auth/signin`, { method: 'post', body: payload }),
        {initialCache: false}
    )
}