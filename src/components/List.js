import React from 'react';

export default function List(props) {
  const { data } = props;

  return (
    data.map(item => (
      <div className="list-item" key={item.id}>
        <p>ID: {item.id}</p>
        <p>Title: {item.title}</p>
        <p>Completed: {item.completed}</p>
      </div>
    ))
  );
}
