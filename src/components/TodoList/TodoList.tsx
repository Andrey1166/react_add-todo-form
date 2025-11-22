import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import { User } from '../../types/User';

type Props = {
  todos: Todo[];
  users: User[];
};

export const TodoList: React.FC<Props> = ({ todos, users }) => (
  <section className="TodoList">
    {todos.map(todo => {
      const user = users.find(u => u.id === todo.userId);

      return <TodoInfo todo={todo} key={todo.id} user={user} />;
    })}
  </section>
);
