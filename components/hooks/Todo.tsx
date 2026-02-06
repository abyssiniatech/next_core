"use client";
import React, { useState } from 'react';
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const addTodo = () => {
        if (newTodo.trim() === '') return;
        const todo: Todo = {
            id: Date.now(),
            text: newTodo,
            completed: false,
        };
        setTodos([...todos, todo]);
        setNewTodo('');
    };
    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Todo App</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    className="flex-grow border p-2 rounded"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button
                    className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={addTodo}
                >
                    Add
                </button>
            </div>
            <ul className="space-y-2">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className={`flex items-center justify-between p-2 border rounded ${
                            todo.completed ? 'bg-green-100' : ''
                        }`}
                    >
                        <span
                            className={`flex-grow cursor-pointer ${
                                todo.completed ? 'line-through text-gray-500' : ''
                            }`}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TodoApp;