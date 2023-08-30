import { useColorMode, Box, Image, Divider, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {/* <Button > */}
      {colorMode === "light" ? (
        <MoonIcon size={5} onClick={toggleColorMode} mt={8} mb={8} style={{cursor:'pointer'}} />
      ) : (
        <SunIcon size={5} onClick={toggleColorMode} mt={8} mb={8}style={{cursor:'pointer'}} />
      )}
      {/* </Button> */}
    </>
  );
}
