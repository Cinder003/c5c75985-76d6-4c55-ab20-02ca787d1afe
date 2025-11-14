import { Request, Response } from 'express';
import prisma from '../config/db.config';
import { CreateTodoSchema, UpdateTodoSchema } from '../validation/todo.validation';
import { ZodError } from 'zod';

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todos', error });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const validatedData = CreateTodoSchema.parse(req.body);
    const newTodo = await prisma.todo.create({
      data: {
        title: validatedData.title,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Failed to create todo', error });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validatedData = UpdateTodoSchema.parse(req.body);

    const updatedTodo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: validatedData,
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Failed to update todo', error });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.todo.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete todo', error });
  }
};

export const clearCompletedTodos = async (req: Request, res: Response) => {
  try {
    await prisma.todo.deleteMany({
      where: { completed: true },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Failed to clear completed todos', error });
  }
};