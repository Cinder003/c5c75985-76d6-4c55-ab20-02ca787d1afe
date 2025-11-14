import { AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';
import { Todo } from '../interface/todo';

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

const TodoList = ({ todos, onToggleComplete, onDelete, onEdit }: TodoListProps) => {
  return (
    <ul className="mt-6 space-y-4">
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;