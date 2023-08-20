import { useGetTodosQuery, useCreateTodoMutation, useDeleteTodoMutation } from "../api/apiSlice";
import Spinner from './Spinner';
import ListItems from './ListItems';
import { nanoid } from '@reduxjs/toolkit'
import List from '@mui/material/List';
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {

    const {
        data: todos = [],
        isLoading,
        isError,
        error
    } = useGetTodosQuery();

    const [createTodo] = useCreateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const [todo, setTodo] = useState('');

    if (isLoading) {
        return <Spinner />
    } else if (isError) {
        return <div>{error}</div>
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!todo) {
            toast.error('Hey, please add something!', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return;
        }

        const newTodo = {
            id: nanoid(),
            text: todo,
            status: false,
        }

        toast.success('Added Successfully');

        createTodo(newTodo).unwrap();
        setTodo('');
    }

    const onDelete = (id) => {
        toast.success('Successfully deleted!', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        deleteTodo(id);
    }


    const renderTodosList = (arr) => {
        if (arr.length === 0) {
            return (
                <div>No Elements</div>
            )
        }

        return arr.map(({ id, ...props }) => (
            <ListItems
                key={id}
                {...props}
                onDelete={() => onDelete(id)}
            />
        ))
    }

    return (
        <div className="container">
            <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <form className="form" onSubmit={onSubmitHandler} >
                <TextField
                    id="standard-basic"
                    label="Todo"
                    variant="outlined"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />
                <Button
                    variant="contained"
                    color="success"
                    type='submit'>
                    Add new
                </Button>
            </form>

            <List>
                {renderTodosList(todos)}
            </List>
        </div>
    )
}

export default TodoList;
