const error = (state = '', action) => {
  switch(action.type) {
    case 'SET_ERROR':
      return action.text;
    case 'DELETE_ERROR':
    default:
      return '';
  }
}

export default error;
