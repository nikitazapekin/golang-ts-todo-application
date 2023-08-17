


import { useState } from "react";
import { Button, Modal, Group, TextInput, Textarea } from "@mantine/core";
import { ENDPOINT, Todo } from "../App";
import { KeyedMutator } from "swr";

function AddTodo({ mutate }: { mutate: KeyedMutator<Todo[]> }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function createTodo() {
    if (!title || !body) return;

    const values = { title, body };

    const updated = await fetch(`${ENDPOINT}/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((r) => r.json());

    mutate(updated);
    setTitle("");
    setBody("");
    setOpen(false);
  }

  return (
    <>
      <Modal opened={open} onClose={() => setOpen(false)} title="Create todo">
      </Modal>
        <div>
          <TextInput
            required
            mb={12}
            label="Todo"
            placeholder="What do you want to do?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            required
            mb={12}
            label="Body"
            placeholder="Tell me more..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <Button type="button" onClick={createTodo}>
            Create todo
          </Button>
        </div>

      <Group position="center">
      
      </Group>
    </>
  );
}

export default AddTodo;

