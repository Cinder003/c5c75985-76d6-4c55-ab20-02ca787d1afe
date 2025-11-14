import { useState, FormEvent } from 'react';
import { FiPlus } from 'react-icons/fi';

interface TodoFormProps {
  onAddTodo: (title: string) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="relative">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new vibrant task..."
          className="w-full rounded-xl border-2 border-transparent bg-white py-4 pl-5 pr-40 text-lg text-gray-800 shadow-lg shadow-purple-200/50 transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-400/30"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 m-2 flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-6 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
        >
          <FiPlus className="h-5 w-5" />
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;