import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiSave, FiX } from 'react-icons/fi';
import { Todo } from '../interface/todo';

interface EditTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: number, title: string) => void;
  todo: Todo | null;
}

const EditTodoModal = ({ isOpen, onClose, onSave, todo }: EditTodoModalProps) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
    }
  }, [todo]);

  const handleSave = () => {
    if (todo && title.trim()) {
      onSave(todo.id, title.trim());
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: -20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-md rounded-xl bg-white/80 backdrop-blur-xl border border-purple-200 p-6 shadow-2xl shadow-purple-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-t-xl"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Edit Todo
            </h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border-2 border-purple-200 bg-purple-50/50 px-4 py-3 text-gray-800 placeholder-gray-400 transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-400/30"
              placeholder="Enter new todo title"
            />
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 font-semibold text-gray-700 transition-transform duration-200 hover:bg-gray-300 hover:scale-105"
              >
                <FiX />
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
              >
                <FiSave />
                Save Changes
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditTodoModal;