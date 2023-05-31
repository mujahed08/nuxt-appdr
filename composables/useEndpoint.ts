
export default async (path, payload, method, interceptor?) => {
    const ui = useUi()
    ui.$patch({loading : true})
    
    const { data, error } = await useFetch(path, { 
        method: 'post', 
        body: payload, 
        baseURL:endpoint(), 
        server: false, 
        initialCache: false,
        ...interceptor
    })
    ui.$patch({loading : false})

    if(error?.value) {
        //console.log(error.value)
        ui.toggleModal(error.value)
        throw new Error(`${error.value}`);
    }
    return data;
}