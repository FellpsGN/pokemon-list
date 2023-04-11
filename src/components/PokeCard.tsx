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
    <Card>
      <Image src={props.image}/>
      <CardBody textAlign={'center'}>
        {props.name}
      </CardBody>
    </Card>

    </>
  );
}
