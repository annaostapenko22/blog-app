export const deletePost = (state, payload)=> {
    return state.filter(item=> item.id !== payload)
}

export const updatePost = (state, payload)=> {
    return state.filter(item=> item.id === payload)
}