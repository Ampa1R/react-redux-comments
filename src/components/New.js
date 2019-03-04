import React from 'react';
import '../scss/New.scss';

function New (props) {
  return (
    <div className="New">
      <input
        className="New__Author"
        type="text"
        value={props.commentAuthor}
        onChange={props.onCommentAuthorChange}
        placeholder="Имя автора"
      />
      <button className="New__Button" onClick={props.onCommentCreate}>Добавить комментарий</button>
      <textarea
        className="New__Text"
        value={props.newCommentValue}
        onChange={props.onCommentValueChange}
        placeholder="Текст комментария"
      />
    </div>
  );
}


export default New;
