import React from 'react';
import '../scss/Comment.scss';

function Comment (props) {
  return (
    <div className="Comment">
      <div className="Comment__Author">{props.author}</div>
      <div className="Comment__Created">{props.created}</div>
      <div className="Comment__Text">{props.text}</div>
      <div className="Comment__Delete" onClick={() => props.onDelete(props.id)}>✕</div>
    </div>
  );
}

export default Comment;
