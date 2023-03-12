import axios from "axios";
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
  Link as ChakraLink,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export async function getStaticProps() {
  const res = await axios.get(
    "https://nameless-castle-58273.herokuapp.com/work"
  );
  const data = res.data;
  return {
    props: { data },
  };
}

export default function WorkPage({ data }) {
  return (
    <div>
      <Container mt={100} mb={100}>
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
        <Link href="/" legacyBehavior style={{ position: "relative" }}>
          <CloseIcon />
        </Link>
      </Container>
    </div>
  );
}
