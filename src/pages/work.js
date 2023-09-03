import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Heading,
  Divider,
  Badge,
  Wrap,
  Card,
  Center,
  WrapItem,
  Button,
  Text,
  Box,
  //   Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { CloseIcon, ArrowBackIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "../components/colormode";

export async function getStaticProps() {
  const res = await axios.get("https://christophercarvalho.com/work.json");
  const data = res.data;
  return {
    props: { data },
  };
}

export default function WorkPage({ data }) {
  return (
    <>
      <Head>
        <title>The Work</title>
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
          content="https://unlockyoursound.com/wp-content/uploads/2021/08/Chris-Main-photo2-calendly-scaled.jpg"
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
          content="https://unlockyoursound.com/wp-content/uploads/2021/08/Chris-Main-photo2-calendly-scaled.jpg"
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
          content="https://unlockyoursound.com/wp-content/uploads/2021/08/Chris-Main-photo2-calendly-scaled.jpg"
        />
      </Head>
      <div>
        <Center>
          <ColorModeSwitch />
        </Center>
        <Container mt={10} mb={100}>
          <Link href="/" style={{ position: "relative" }}>
            {/* <Box > */}
            <ArrowBackIcon boxSize="30px" mb={10} cursor="pointer" />
            {/* </Box> */}
          </Link>
          <Heading as="h1" mb={10}>
            The Work
          </Heading>
          <Divider />
          {data.map((item) => (
            // <Center>
            <Container key={item.id} mb={5} mt={5} pl={0} pr={0}>
              {/* <Card maxW={350} minHeight={300} p={3} m={5}> */}
              <Heading as="h2" size="md" mb={5}>
                {item.title}
              </Heading>
              <Text mb={5}>{item.desc}</Text>
              <Wrap mt={2}>
                {item.skills.map((skill, index) => (
                  <div key={index}>
                    <WrapItem>
                      <Badge>{skill}</Badge>
                    </WrapItem>
                  </div>
                ))}
              </Wrap>
              <ChakraLink href={item.link} isExternal>
                <Button colorScheme="blue" size="sm" mt={7}>
                  Learn More
                </Button>
              </ChakraLink>
              <Divider mb={10} mt={10} />
              {/* </Card> */}
            </Container>
            //   </Center>
          ))}
          {/* <Divider /> */}
          <Center>
            <Link href="/" style={{ position: "relative" }}>
              <Box
                boxSize="30px"
                display="flex"
                alignItems="center"
                cursor="pointer"
              >
                <CloseIcon />
              </Box>
            </Link>
          </Center>
        </Container>
      </div>
    </>
  );
}
