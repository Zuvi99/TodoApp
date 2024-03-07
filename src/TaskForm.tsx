import {Box, Button, FormLabel, Input} from "@chakra-ui/react";
import {useState} from "react";

export function NewTaskForm({onSubmit} : any) {
    const [newTask, setNewTask] = useState<string>("");

    function handleSubmit() {

        if (newTask == "") return
        onSubmit(newTask)
    }
    return (
        <>
            <Box>
                <FormLabel fontWeight={"bold"}>New Task</FormLabel>
                <Input
                    value={newTask}
                    onChange={event => setNewTask(event.target.value)}
                 width={"500px"}/>
            </Box>
            <Box width={"100%"}>
                <Button
                    onClick={handleSubmit}
                    width={"100%"}
                >Add Task</Button>
            </Box>
        </>
    )
}