

import { useEffect, useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const TodoState = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {   
            setTodos(res.data)
            
        })
        .catch(err => console.log(err))
    }, [])
    
    

return(
    <fieldset>
        <legend>TodoState</legend>
    <Outlet />
    </fieldset>
)
};

export default TodoState;