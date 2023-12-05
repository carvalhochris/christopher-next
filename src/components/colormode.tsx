import { useColorMode, Box, Image, Divider, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {/* <Button > */}
      {colorMode === "light" ? (
        <MoonIcon boxSize={5} onClick={toggleColorMode} mt={8} mb={8} style={{cursor:'pointer'}} />
      ) : (
        <SunIcon boxSize={5} onClick={toggleColorMode} mt={8} mb={8}style={{cursor:'pointer'}} />
      )}
      {/* </Button> */}
    </>
  );
}
