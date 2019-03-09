const localState = JSON.parse(localStorage.getItem('comments'));
const initialState = localState || [];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      const d = new Date();
      const hour = d.getHours().toString().padStart(2, 0);
      const minute = d.getMinutes().toString().padStart(2, 0);
      const day = d.getDay().toString().padStart(2, 0);
      const month = d.getMonth().toString().padStart(2, 0);
      const year = d.getFullYear();

      const addState = [{
          id: action.id,
          created: `${hour}:${minute} ${day}.${month}.${year}`,
          author: action.author,
          text: action.text
        },
        ...state
      ];
      localStorage.setItem('comments', JSON.stringify(addState));
      return addState;

    case 'DELETE_COMMENT':
      const deleteState = state.filter(item => item.id !== action.id);
      localStorage.setItem('comments', JSON.stringify(deleteState));
      return deleteState;

    default:
      return state;
  }
}
export default comments;
