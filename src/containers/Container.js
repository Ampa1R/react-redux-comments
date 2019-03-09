import React from 'react';
import { connect } from 'react-redux';
import { addComment, deleteComment } from '../actions';

let Container = (props) => {
  console.log(props);
  return (
    <div>
      {props.comments.length}
      <div onClick={() => props.addComment('asd', 'zzzz')}>add</div>
      <div onClick={() => props.deleteComment(counter)}>remove</div>
    </div>
  );
}


const mapStateToProps = state => state;

const mapDispatchToState = dispatch => {
  return {
    addComment: (author, text) => {
      dispatch(addComment(author, text));
      // localStorage.setItem('comments', JSON.stringify(props.comments));
    },
    deleteComment: id => {
      dispatch(deleteComment(id))
      // localStorage.setItem('comments', JSON.stringify(props.comments));
    },
    changeAuthor: e => dispatch(changeAuthor(e.target.value)),
    changeText: e => {
      const lastChar = e.target.value.charAt(e.target.value.length - 1);
      if(lastChar === '<' || lastChar === '>')
        return;
      else dispatch(changeText(e.target.value));
    }
  }
}

Container = connect(mapStateToProps, mapDispatchToState)(Container);

export default Container;
