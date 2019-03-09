const author = (state = '', action) => {
  switch(action.type) {
    case 'CHANGE_AUTHOR':
      return action.text;
    default:
      return state;
  }
}

export default author;
