import { Router } from 'express';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  clearCompletedTodos,
} from '../controller/todo.controller';

const router = Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.post('/clear-completed', clearCompletedTodos);

export default router;