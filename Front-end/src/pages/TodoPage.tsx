import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FiTrash } from 'react-icons/fi';
import useTodoStore from '../store/todoStore';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';
import EditTodoModal from '../components/EditTodoModal';
import { Todo } from '../interface/todo';

const TodoPage = () => {
  const {
    todos,
    loading,
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    clearCompleted,
  } = useTodoStore();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState<Todo | null>(null);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = async (title: string) => {
    await addTodo(title);
    toast.success('Todo added successfully!');
  };

  const handleToggleComplete = async (id: number, completed: boolean) => {
    await updateTodo(id, { completed });
    toast.success(`Todo marked as ${completed ? 'complete' : 'incomplete'}!`);
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    toast.error('Todo deleted!');
  };

  const handleClearCompleted = async () => {
    await clearCompleted();
    toast.success('Completed todos cleared!');
  };

  const openEditModal = (todo: Todo) => {
    setTodoToEdit(todo);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setTodoToEdit(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEdit = async (id: number, title: string) => {
    await updateTodo(id, { title });
    toast.success('Todo updated successfully!');
    closeEditModal();
  };

  const hasCompletedTodos = todos.some(todo => todo.completed);

  return (
    <>
      <main className="container mx-auto max-w-2xl px-4 py-12">
        <Header />
        <TodoForm onAddTodo={handleAddTodo} />

        <div className="mt-8">
          {loading ? (
            <LoadingSpinner />
          ) : todos.length > 0 ? (
            <>
              <TodoList
                todos={todos}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDelete}
                onEdit={openEditModal}
              />
              {hasCompletedTodos && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleClearCompleted}
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-rose-500 to-red-500 px-4 py-2 font-semibold text-white shadow-lg shadow-rose-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-500/50"
                  >
                    <FiTrash />
                    Clear Completed
                  </button>
                </div>
              )}
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </main>
      <EditTodoModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSave={handleSaveEdit}
        todo={todoToEdit}
      />
    </>
  );
};

export default TodoPage;