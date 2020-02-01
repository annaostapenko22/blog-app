export const deletePost = (state, payload)=> {
    return state.filter(item=> item.id !== payload)
}
