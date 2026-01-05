import axios from 'axios';
// Explicitly importing types
import type { AxiosResponse } from 'axios'; 

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


async function fetchTodos() {
    try {
        // <Todo[]> tells TS: "The 'data' property in the response will be an array of Todos"
        const response: AxiosResponse<Todo[]> = 
        await axios.get
        (
            "[https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)"

        );

        // Now we get autocomplete for .userId, .title, etc.
        const todoData = response.data;
        console.log(todoData?.[0]?.title);

    } catch (error) {
        // Handling Errors Type-Safely
        if (axios.isAxiosError(error)) {
            // TS knows this is an AxiosError, so we can access .response, .status, etc.
            console.error("Axios Error:", error.message);
            console.error("Status:", error.response?.status);
        } else {
            console.error("Unknown Error:", error);
        }
    }
}


async function fetchTodosNative() {
    try {
        const response = 
        await fetch(
            "[https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Method 1: Casting using 'as' (Type Assertion)
        // We assume the parsed JSON matches our Todo interface
        const data = await response.json() as Todo[];

        // Method 2: Defining variable type
        // const data: Todo[] = await response.json();

        console.log(data?.[0]?.title);

    } catch (error) {
        // Typescript treats catch(error) as 'any' or 'unknown'
        if (error instanceof Error) {
            console.log("Error message:", error.message);
        }
    }
}