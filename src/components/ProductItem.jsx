import {
  Badge,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ProductItem = () => {
  return (
    <Card maxW="sm" bg="none" border={"1px solid #a8b5c8"}>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          rounded="full"
          w={180}
          h={180}
          mx={"auto"}
          objectFit={"cover"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" as="h2" textAlign={"center"}>
            Living room Sofa
          </Heading>
          <Text fontSize="sm" textAlign={"center"}>
            This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned
            spaces and for people who love a chic design with a sprinkle of vintage design.
          </Text>

          <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
            <Text fontSize="sm" my={1}>
              Price:
              <Badge mx="2" colorScheme="purple">
                120
              </Badge>
            </Text>
            <Text fontSize="sm" my={1}>
              Brand:
              <Badge mx="2" colorScheme="green">
                Nike
              </Badge>
            </Text>
            <Text fontSize="sm" my={1} w={"full"}>
              Discount:
              <Badge mx="2" colorScheme="green">
                10%
              </Badge>
            </Text>
            <Text fontSize="sm" my={1} w={"full"}>
              Category:
              <Badge mx="2" colorScheme="purple">
                SMARTPHONES
              </Badge>
            </Text>
          </Flex>
        </Stack>
        <Button as={RouterLink} to={`/products/1`} colorScheme="purple" size="md" w={"full"} mt={4}>
          View Details
        </Button>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
