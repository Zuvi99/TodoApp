import {Box, Button, Checkbox} from "@chakra-ui/react";
import {MdDelete} from "react-icons/md";

// @ts-expect-error cant do anything
export function TaskList({tasks, deleteTask}) {
    return (
        <Box width={"100%"}>
            {tasks.length === 0 && "No Tasks to complete."}
            {tasks.map(task => {
                return (
                    <Box>
                        <Checkbox
                            marginLeft={"25px"}
                            marginBottom={"15px"}
                            colorScheme={"green"}
                            key={task.id}
                        >
                            {task.title}
                        </Checkbox>
                        <Button
                            marginLeft={"15px"}
                            leftIcon={<MdDelete />}
                            size={"xs"}
                            colorScheme={'red'}
                            onClick={() => deleteTask(task.id)}
                        >Delete</Button>
                    </Box>
                )
            })}
        </Box>
    )
}