import { FiCheck, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Todo } from '../interface/todo';
import { cn } from '../lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

const TodoItem = ({ todo, onToggleComplete, onDelete, onEdit }: TodoItemProps) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className="flex items-center justify-between rounded-xl bg-white/60 p-4 shadow-lg shadow-blue-200/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-200/50"
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggleComplete(todo.id, !todo.completed)}
          className={cn(
            'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300',
            todo.completed
              ? 'border-emerald-400 bg-gradient-to-br from-emerald-400 to-green-500 text-white'
              : 'border-gray-300 bg-white hover:border-emerald-400'
          )}
        >
          {todo.completed && <FiCheck className="h-5 w-5" />}
        </button>
        <span
          className={cn(
            'text-lg text-gray-700 transition-all duration-300',
            todo.completed && 'text-gray-400 line-through'
          )}
        >
          {todo.title}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onEdit(todo)}
          className="p-2 text-gray-500 rounded-full transition-colors duration-200 hover:bg-yellow-100 hover:text-yellow-600"
          aria-label="Edit todo"
        >
          <FiEdit2 className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-gray-500 rounded-full transition-colors duration-200 hover:bg-red-100 hover:text-red-600"
          aria-label="Delete todo"
        >
          <FiTrash2 className="h-5 w-5" />
        </button>
      </div>
    </motion.li>
  );
};

export default TodoItem;