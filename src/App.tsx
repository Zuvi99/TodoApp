import {
    Box,
    Button, Checkbox,
    FormLabel,
    Heading,
    HStack,
    Input,
    // useColorMode,
    VStack
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md"
import {useEffect, useState} from "react";

function App() {
    // const { colorMode, toggleColorMode } = useColorMode();
    const [newTask, setNewTask] = useState<string>("");
    const [tasks, setTasks] = useState<Array<any>>([]);
    function handleSubmit() {
        setTasks(currentTasks => {
            return [
                ...currentTasks,
                {id: crypto.randomUUID(), title: newTask},
            ]
        })
    }

    function deleteTask(id: number) {
        setTasks(currentTasks => {
            return currentTasks.filter(task => task.id !== id)
        })
    }

    return (
        <>
            <Box
                width={"100%"}
                margin={"50px"}
            >
                <VStack>
                    <HStack width={"100%"} spacing={"70%"}>
                        <Box>
                            <VStack>
                                <Box>
                                    <FormLabel fontWeight={"bold"}>New Task</FormLabel>
                                    <Input
                                        value={newTask}
                                        onChange={event => setNewTask(event.target.value)}
                                        width={"500px"}
                                    />
                                </Box>
                                <Box width={"100%"}>
                                    <Button
                                        onClick={handleSubmit}
                                        width={"100%"}
                                    >Add Task</Button>
                                </Box>
                                <Box width={"100%"} marginTop={"100px"}>
                                    <Heading>Tasks</Heading>
                                </Box>
                                <Box width={"100%"}>
                                    <VStack>
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
                                    </VStack>
                                </Box>
                            </VStack>
                        </Box>
                    </HStack>
                </VStack>
            </Box>
        </>

    )
}
export default App
