import { z } from 'zod';

export const CreateTodoSchema = z.object({
  title: z.string().min(1, { message: "Title cannot be empty" }).max(255),
});

export const UpdateTodoSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  completed: z.boolean().optional(),
});