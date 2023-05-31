
export const apiSignup = async (payload) => {
    return await useEndpoint('auth/signup', payload, 'post')
}

export const apiSignin = async (payload) => {
    return await useEndpoint('auth/signin', payload, 'post')
}