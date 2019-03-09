import React, { Component } from 'react';

import List from '../components/List';
import New from '../components/New';

import { connect } from 'react-redux';
import { addComment, deleteComment, changeAuthor, changeText, setError, deleteError } from '../actions';

import '../scss/App.scss';


let App = ({ author, changeAuthor, text, changeText, addComment, deleteComment, comments, error, setError, deleteError }) => {
  const commentCreateHandler = () => {
    if(!author || !text) return setError('Заполнены не все поля');
    else deleteError();

    const id = (comments[0]) ? comments[0].id + 1 : 0;
    addComment(id, author, text);
    changeAuthor('');
    changeText('');
  }
  return (
    <div className="App">
      <h1 className="App__Header">Комментарии</h1>
      <New
        commentAuthor={author}
        onAuthorChange={changeAuthor}
        newCommentValue={text}
        onCommentValueChange={changeText}
        onCommentCreate={commentCreateHandler}
      />
      {error &&
        <div className="App__Error">{error}</div>
      }
      <List
        comments={comments}
        onDelete={deleteComment}
      />
    </div>
  );
}

const mapStateToProps = state => state;

const mapDispatchToState = dispatch => {
  return {
    addComment: (id, author, text) => dispatch(addComment(id, author, text)),
    deleteComment: id => dispatch(deleteComment(id)),
    changeAuthor: text => dispatch(changeAuthor(text)),
    changeText: text => {
      const lastChar = text.charAt(text.length - 1);
      if(lastChar === '<' || lastChar === '>')
        return;
      else dispatch(changeText(text));
    },
    setError: text => dispatch(setError(text)),
    deleteError: () => dispatch(deleteError())
  }
}

App = connect(mapStateToProps, mapDispatchToState)(App);

export default App;
