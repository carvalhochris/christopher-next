import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
// import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Container } from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/close-button";
import { Center, Link as ChakraLink } from "@chakra-ui/react";
import { Text, Stack, Flex } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsMastodon } from "react-icons/bs";
import { Image } from "@chakra-ui/react";
import { GoCalendar } from "react-icons/go";
import ColorModeSwitch from "../components/colormode";
// import { InlineWidget } from "react-calendly";
// import { PopupButton } from "react-calendly";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let [loaded, setLoaded] = useState(false);

  return (
    <>
      <Head>
        <title>Christopher Carvalho</title>
        <meta
          name="description"
          content="Content writer, educator, and self-taught developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="public/chris-64.ico" /> */}

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Christopher Carvalho" />
        <meta
          itemprop="description"
          content="Content writer, educator, and self-taught developer"
        />
        <meta
          itemprop="image"
          content="https://unlockyoursound.io/wp-content/uploads/2021/08/Chris-Main-photo2-calendly-scaled.jpg"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://christophercarvalho.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Christopher Carvalho" />
        <meta
          property="og:description"
          content="Content writer, educator, and self-taught developer"
        />
        <meta
          property="og:image"
          content="https://unlockyoursound.io/wp-content/uploads/2021/08/Chris-Main-photo2-calendly-scaled.jpg"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Christopher Carvalho" />
        <meta
          name="twitter:description"
          content="Content writer, educator, and self-taught developer"
        />
        <meta
          name="twitter:image"
          content="https://unlockyoursound.io/wp-content/uploads/2021/08/Chris-Main-photo2-calendly-scaled.jpg"
        />
      </Head>
      <div>
        <Center>
          <ColorModeSwitch />
        </Center>
        <Center>
          {/* <Image
                className="artistimg"
                src="https://unlockyoursound.com/wp-content/uploads/2023/02/chris-500-2.jpeg"
                alt="artistprofile"
              /> */}
          <Image
            borderRadius="100"
            borderStyle="solid"
            borderColor="white"
            borderWidth={2}
            boxSize="150px"
            src="./chris-500.jpeg"
            alt="Christopher Carvalho"
            mt={0}
          />
        </Center>
        <br></br>
        <Center>
          <Text></Text>
          <Text></Text>
        </Center>
        <Center>
          <Stack spacing={6} maxW={350}>
            <Text fontSize="3xl" align="center" justify="center">
              Hi, I&apos;m Christopher.
            </Text>
            <Text fontSize="2xl" align="center" justify="center">
              Founder of{" "}
              <ChakraLink href="https://unlockyoursound.com/" isExternal>
                <Text as="u">Unlock Your Sound</Text>
              </ChakraLink>{" "}
              and{" "}
              <ChakraLink href="https://beta.songcards.io/" isExternal>
                <Text as="u">Songcards</Text>
              </ChakraLink>
              .
            </Text>
            <Text fontSize="1xl" align="center" justify="center">
              I use Next.js, ChakraUI, and Django Rest Framework.
            </Text>
            <Center>
              <Link
                href="/work"
                legacyBehavior
                style={{ position: "relative" }}
              >
                <Button
                  colorScheme="blue"
                  // onClick={() => setLoaded((loaded = !loaded))}
                  minW={300}
                >
                  View Work
                </Button>
              </Link>
            </Center>
            <Container mt={0} pt={0}></Container>
          </Stack>
        </Center>
        <Container mt={0} pt={0} maxW={340}>
          <Flex isInline gap={3}>
            <ChakraLink href="https://github.com/carvalhochris" isExternal>
              <AiFillGithub size={30} />
            </ChakraLink>
            <ChakraLink href="mailto:hello@christophercarvalho.com" isExternal>
              <AiOutlineMail size={30} />
            </ChakraLink>
            <ChakraLink
              href="https://www.linkedin.com/in/christopher-carvalho-music/"
              isExternal
            >
              <AiFillLinkedin size={30} />
            </ChakraLink>
            <ChakraLink href="https://twitter.com/mkdir_cc" isExternal>
              <AiOutlineTwitter size={30} />
            </ChakraLink>
            <ChakraLink
              href="https://mastodon.social/@carvalhochris"
              isExternal
            >
              <BsMastodon size={30} />
            </ChakraLink>
            <ChakraLink
              href="https://calendly.com/christopher-carvalho/30-minute-meeting-portfolio"
              isExternal
            >
              <GoCalendar size={30} />
            </ChakraLink>
          </Flex>
        </Container>
      </div>
    </>
  );
}
