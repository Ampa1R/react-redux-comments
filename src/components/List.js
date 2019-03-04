import React from 'react';
import Comment from './Comment';
import '../scss/List.scss';

function List (props) {
  return (
    <div className="List">
      {props.comments.map(
        item => <Comment
                  key={item.id}
                  id={item.id}
                  created={item.created}
                  author={item.author}
                  text={item.text}
                  onDelete={props.onDelete}
                />
      )}
    </div>
  );
}

export default List;
