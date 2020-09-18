export let login = (login: any) => {
    return {
        type: 'Login',
        payload: login
    }
}