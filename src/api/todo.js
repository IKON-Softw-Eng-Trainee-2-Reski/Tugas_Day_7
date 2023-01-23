import axios from "axios";

export const getTodo = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const todos = response.data.splice(0,10)
        return todos
    } catch (error) {
        throw new Error(error.message)
    }
}