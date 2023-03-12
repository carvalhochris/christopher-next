import axios from "axios";
import {
  Container,
  Heading,
  Divider,
  Badge,
  Wrap,
  Card,
  Center,
  WrapItem,
} from "@chakra-ui/react";

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
      <Container mt={100}>
        <Heading as="h1">The Work</Heading>
        <Divider />
        {data.map((item) => (
          // <Center>
          <div key={item.id}>
            {/* <Card maxW={350} minHeight={300} p={3} m={5}> */}
            {item.title}
            <Divider />
            <Wrap mt={2}>
              {item.skills.map((skill, index) => (
                <div key={index}>
                  <WrapItem>
                    <Badge>{skill}</Badge>
                  </WrapItem>
                </div>
              ))}
            </Wrap>
            {/* </Card> */}
          </div>
          //   </Center>
        ))}
      </Container>
    </div>
  );
}
