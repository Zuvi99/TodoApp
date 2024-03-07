import {
    Box, Button,
    Heading,
    HStack, useColorMode,
    // useColorMode,
    VStack
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {NewTaskForm} from "./TaskForm.tsx";
import {TaskList} from "./TaskList.tsx";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [tasks, setTasks] = useState<Array<any>>(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []
        return JSON.parse(localValue)
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(tasks))
    }, [tasks]);

    function addTask(title: never) {
            setTasks(currentTasks => {
                return [
                    ...currentTasks,
                    {id: crypto.randomUUID(), title},
                ]
            })
        }
    function deleteTask(id: number) {
        setTasks(currentTasks => {
            return currentTasks.filter(task => task.id !== id)
        })
    }

    return (
            <Box
                width={"100%"}
                margin={"50px"}
            >
                <VStack>
                    <HStack width={"100%"} spacing={"70%"}>
                        <Box>
                            <VStack>
                                <Box>
                                    <HStack width={"100%"}>
                                        <Box>
                                            <NewTaskForm onSubmit={addTask}/>
                                        </Box>
                                        <Box marginLeft={"900px"}>
                                            <Button
                                                size={"md"}
                                                onClick={toggleColorMode}
                                            >
                                                {colorMode === "light" ? "Dark" : "Light"} Mode
                                            </Button>
                                        </Box>
                                    </HStack>
                                </Box>

                                <Box width={"100%"} marginTop={"100px"}>
                                    <Heading>Tasks</Heading>
                                </Box>
                                <Box width={"100%"}>
                                    <VStack>
                                        <TaskList tasks={tasks} deleteTask={deleteTask}/>
                                    </VStack>
                                </Box>
                            </VStack>
                        </Box>
                    </HStack>
                </VStack>
            </Box>
    )
}
export default App
