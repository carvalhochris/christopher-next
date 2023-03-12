import { useColorMode, Box, Image, Divider, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode} mb={0} mt={10} mb={10} >
        {colorMode === "light" ? <MoonIcon size={5} /> : <SunIcon size={5} />}
      </Button>
    </>
  );
}
