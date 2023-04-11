import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Stack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import axios from 'axios';


export function PokeCards(props: string) {

  return (
    
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={props.image}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{props.name}</Heading>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
}
