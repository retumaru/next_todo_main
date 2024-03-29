import { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getTodos = async () => {
    const url = API_URL + "/data/todo.json"; // APIからTODOデータを取得するURLを設定
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos) return;
    const url = API_URL + "/data/todo.json"; // APIにTODOデータを送信するURLを設定
    const data = JSON.stringify(todos);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
}
