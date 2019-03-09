export const addComment = (id, author, text) => ({type: 'ADD_COMMENT', id, author, text});
export const deleteComment = id => ({type: 'DELETE_COMMENT', id});
export const changeAuthor = text => ({type: 'CHANGE_AUTHOR', text});
export const changeText = text => ({type: 'CHANGE_TEXT', text});
export const setError = text => ({type: 'SET_ERROR', text});
export const deleteError = () => ({type: 'DELETE_ERROR'});
