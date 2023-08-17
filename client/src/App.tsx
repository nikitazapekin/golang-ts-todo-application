/*import { useState } from 'react'

import {Box} from "@mantine/core"
import useSWR from "swr"
import AddTodo from './components/AddTodo'
import './App.css'
export const ENDPOINT ="http://localhost:4000"

const fetcher = (url: string)=> {
fetch(`${ENDPOINT}/${url}`).then(r=>r.json())
}  
function App() {

const {data, mutate}= useSWR<Todo[]>('api/todos', fetcher) 


fetch('http://localhost:4000/api/todos')
      .then(response => response.json())
      .then(json => console.log(json)) 
  return (
    <>
   <Box>
 {JSON.stringify(data)}  

 <AddTodo mutate={mutate} />
   </Box>
  </> 
  )
}

export default App
*/




/*
import React from 'react'; // Import React
import { Box } from "@mantine/core";
import useSWR from "swr";
import AddTodo from './components/AddTodo';
import './App.css';

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) => {
  return fetch(`${ENDPOINT}/${url}`).then(r => r.json()); // Return the fetch promise
}

function App() {
  const { data, mutate } = useSWR<Todo[]>('api/todos', fetcher);

  return (
    <Box>
      {JSON.stringify(data)}
      <AddTodo mutate={mutate} />
    </Box>
  );
}

export default App;
*/






/*
import React from 'react';
import { Box } from "@mantine/core";
import useSWR from "swr";
import AddTodo from './components/AddTodo';
import './App.css';
import { Todo } from './components/AddTodo'; // Import the Todo type from AddTodo

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) => {
  return fetch(`${ENDPOINT}/${url}`).then(r => r.json());
}

function App() {
  const { data, mutate } = useSWR<Todo[]>('api/todos', fetcher);

  return (
    <Box>
      {JSON.stringify(data)}
      <AddTodo mutate={mutate} />
    </Box>
  );
}

export default App;

*/

/*

import React from 'react';
import { Box } from "@mantine/core";
import useSWR from "swr";
import AddTodo, { Todo } from './components/AddTodo'; // Import the Todo type from AddTodo
import './App.css';

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) => {
  return fetch(`${ENDPOINT}/${url}`).then(r => r.json());
}

function App() {
  const { data, mutate } = useSWR<Todo[]>('api/todos', fetcher);

  return (
    <Box>
      {JSON.stringify(data)}
      <AddTodo mutate={mutate} data={data} />
    </Box>
  );
}

export default App; 

*/

/*
import { Box, List, ThemeIcon } from "@mantine/core";
import { CheckCircleFillIcon } from "@primer/octicons-react";
import useSWR from "swr";
import "./App.css";
import AddTodo from "./components/AddTodo";

export interface Todo {
  id: number;
  title: string;
  body: string;
  done: boolean;
}

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {
  const { data, mutate } = useSWR<Todo[]>("api/todos", fetcher);

  async function markTodoAdDone(id: number) {
    const updated = await fetch(`${ENDPOINT}/api/todosn/${id}/done`, {
      method: "PATCH",
    }).then((r) => r.json());

    mutate(updated);
  }

  return (
    <Box
      sx={(theme) => ({
        padding: "2rem",
        width: "100%",
        maxWidth: "40rem",
        margin: "0 auto",
      })}
    >
      <List spacing="xs" size="sm" mb={12} center>
        {data?.map((todo) => {
          return (
            <List.Item
              onClick={() => markTodoAdDone(todo.id)}
              key={`todo_list__${todo.id}`}
              icon={
                todo.done ? (
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <CheckCircleFillIcon size={20} />
                  </ThemeIcon>
                ) : (
                  <ThemeIcon color="gray" size={24} radius="xl">
                    <CheckCircleFillIcon size={20} />
                  </ThemeIcon>
                )
              }
            >
              {todo.title}
            </List.Item>
          );
        })}
      </List>

      <AddTodo mutate={mutate} />
    </Box>
  );
}

export default App;
*/





import { Box, List, ThemeIcon } from "@mantine/core";
import { CheckCircleFillIcon } from "@primer/octicons-react";
import useSWR from "swr";
import "./App.css";
import AddTodo from "./components/AddTodo";

export interface Todo {
  id: number;
  title: string;
  body: string;
  done: boolean;
}

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {
  const { data, mutate } = useSWR<Todo[]>("api/todos", fetcher);

  async function markTodoAdDone(id: number) {
    const updated = await fetch(`${ENDPOINT}/api/todosn/${id}/done`, {
      method: "PATCH",
    }).then((r) => r.json());

    mutate(updated);
  }

  return (
    <Box
      sx={(theme) => ({
        padding: "2rem",
        width: "100%",
        maxWidth: "40rem",
        margin: "0 auto",
      })}
    >
      <List spacing="xs" size="sm" mb={12} center>
        {data?.map((todo) => {
          return (
            <List.Item
              onClick={() => markTodoAdDone(todo.id)}
              key={`todo_list__${todo.id}`}
              icon={
                todo.done ? (
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <CheckCircleFillIcon size={20} />
                  </ThemeIcon>
                ) : (
                  <ThemeIcon color="gray" size={24} radius="xl">
                    <CheckCircleFillIcon size={20} />
                  </ThemeIcon>
                )
              }
            >
              {todo.title}
            </List.Item>
          );
        })}
      </List>

      <AddTodo mutate={mutate} />
    </Box>
  );
}

export default App;