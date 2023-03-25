import { useColorMode, Box, Image, Divider, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode} mt={5} mb={5} >
        {colorMode === "light" ? <MoonIcon size={5} /> : <SunIcon size={5} />}
      </Button>
    </>
  );
}
