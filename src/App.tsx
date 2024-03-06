import {Box, Button, FormLabel, HStack, Input, useColorMode, VStack} from "@chakra-ui/react";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            width={"100%"}
            margin={"50px"}
        >
            <VStack>
                <HStack width={"100%"} spacing={"70%"}>
                    <Box>
                        <FormLabel fontWeight={"bold"}>New Task</FormLabel>
                        < Input width={"500px"}/>
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
    )
}
export default App
