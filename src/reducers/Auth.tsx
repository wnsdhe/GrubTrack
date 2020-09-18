
let auths = (state = [], action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return [
                ...state,
                {
                    username: action.username,
                }
            ]
        case 'REGISTER':
            return state
        case 'FORGET':
            return [
                ...state
            ]
        default:
            return state
    }
}

export default auths