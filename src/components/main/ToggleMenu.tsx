import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, useDisclosure } from "@chakra-ui/react";
import TopGamesNav from "../sidenavbar/TopGamesNav";
import GenreList from "../sidenavbar/GenreList";

const ToggleMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box marginRight={1.5}>
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon boxSize="6" />}
        onClick={onOpen}
        display={{ xl: "none" }}
  
      ></IconButton>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} >
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
                <TopGamesNav />
                <GenreList />
            </DrawerBody>
        </DrawerContent>

      </Drawer>
    </Box>
  );
};

export default ToggleMenu;
