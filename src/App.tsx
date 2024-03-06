import {
    Box,
    Button, Checkbox,
    FormLabel,
    Heading,
    HStack,
    Input,
    useColorMode,
    VStack
} from "@chakra-ui/react";
import {useState} from "react";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [newItem, setNewItem] = useState("")

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
                                    < Input width={"500px"}/>
                                </Box>
                                <Box width={"100%"}>
                                    <Button
                                        // onClick={}
                                        width={"100%"}
                                    >Add Task</Button>
                                </Box>
                                <Box width={"100%"}>
                                    <Heading>Tasks</Heading>
                                </Box>
                                <Box width={"100%"}>
                                    <VStack>
                                        <Box width={"100%"}>
                                            <Checkbox colorScheme={"green"}>
                                                Item 1
                                            </Checkbox>
                                            <Button marginLeft={"25px"} size={"sm"}>Delete</Button>
                                        </Box>
                                    </VStack>
                                </Box>
                            </VStack>

                        </Box>
                        <Box>
                            <Button
                                size={"md"}
                                onClick={toggleColorMode}
                            >
                                {colorMode === "light" ? "Dark" : "Light"} Mode
                            </Button>
                        </Box>
                    </HStack>
                </VStack>
            </Box>
        </>

    )
}
export default App
