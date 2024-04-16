import React from 'react';
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Text, Flex } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'; // assuming you need this import

function Exemple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [Category, setCategory] = React.useState('');
    const [selectedItem, setSelectedItem] = React.useState('');

    const handleConfirmFilters = () => {
        // Define this function to handle confirmation of filters
    };

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen} color="black">
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                width="100%"
                zindex="999"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton top="16px" />
                    <DrawerHeader px="12px" paddingTop="10px" paddingBottom="12px">
                        Bar Filter Title
                    </DrawerHeader>

                    <DrawerBody px="12px">

                        <Text fontSize={"large"} fontWeight={"bold"} mb={2}>
                            Service
                        </Text>
                        {/* Assume SelectChakra is a valid component */}
                        {/* Replace Category and optionsCategory with your state and options */}
                        {/* Replace onChange logic with your state update logic */}
                        {/* Similarly, replace SelectChakra with your actual component */}
                        {/* Same applies to AutoComplete component */}
                        {/* Ensure proper handling of optionsCategory */}
                        {/* Ensure proper onChange handling */}
                        {/* Ensure proper handling of AutoComplete component */}
                        {/* Replace AutoComplete component with your actual component */}
                        {/* Assuming you've defined AutoComplete as a valid component */}
                        {/* Assuming optionsCategory is an array of objects with value and label */}
                        {/* Assuming Category is a state variable and setCategory updates it */}
                        {/* Assuming AutoComplete component is defined properly */}
                    </DrawerBody>

                    <DrawerFooter
                        sx={{
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 4px 16px 0px",
                        }}
                        paddingTop="6px"
                        paddingBottom="4px"
                    >
                        <Flex align="center" justifyContent="space-between" width="100%">
                            <Button variant="link" onClick={onClose}>
                                Clear
                            </Button>
                            <Button
                                rounded="full"
                                color="white"
                                _hover="none"
                                bg="rgb(224, 0, 52)"
                                onClick={handleConfirmFilters}

                            >
                                Done
                            </Button>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Exemple;
