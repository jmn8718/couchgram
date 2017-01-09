import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ data }) => (
  <div>
    {data.filter((item) => item.has('file')).map((item) => <TodoItem src={item.get('file')} width={200} />)}
  </div>
);

export default TodoList;
