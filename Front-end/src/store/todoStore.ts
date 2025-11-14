import { create } from 'zustand';
import {
  getTodos,
  createTodo,
  updateTodo as apiUpdateTodo,
  deleteTodo as apiDeleteTodo,
  clearCompletedTodos,
} from '../api/service';
import { Todo } from '../interface/todo';

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  fetchTodos: () => Promise<void>;
  addTodo: (title: string) => Promise<void>;
  updateTodo: (id: number, data: Partial<Todo>) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  clearCompleted: () => Promise<void>;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  loading: false,
  error: null,

  fetchTodos: async () => {
    set({ loading: true, error: null });
    try {
      const todos = await getTodos();
      set({ todos, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch todos', loading: false });
    }
  },

  addTodo: async (title: string) => {
    try {
      const newTodo = await createTodo(title);
      set((state) => ({ todos: [newTodo, ...state.todos] }));
    } catch (error) {
      set({ error: 'Failed to add todo' });
    }
  },

  updateTodo: async (id: number, data: Partial<Todo>) => {
    try {
      const updatedTodo = await apiUpdateTodo(id, data);
      set((state) => ({
        todos: state.todos.map((todo) => (todo.id === id ? updatedTodo : todo)),
      }));
    } catch (error) {
      set({ error: 'Failed to update todo' });
    }
  },

  deleteTodo: async (id: number) => {
    try {
      await apiDeleteTodo(id);
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    } catch (error) {
      set({ error: 'Failed to delete todo' });
    }
  },

  clearCompleted: async () => {
    try {
      await clearCompletedTodos();
      set((state) => ({
        todos: state.todos.filter((todo) => !todo.completed),
      }));
    } catch (error) {
      set({ error: 'Failed to clear completed todos' });
    }
  },
}));

export default useTodoStore;