import Layout from "@/components/layout/Layout";
import { Text, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, Heading, Checkbox, CheckboxGroup } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <div>
        <Text
          as={"span"}
          bgGradient={
            "linear(to-tr, brand.main, brand.200, brand.300, brand.400, brand.600)"
          }
          fontSize={{ md: "60px", sm: "6xl" }}
          fontWeight="extrabold"
        >
          Watchlist
        </Text>

        {/* Parent container for the SimpleGrid */}
        <div style={{ marginTop: '20px' }}>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
              <CardHeader>
                <Heading size='md'> CS 220: Programming Methodology</Heading>
              </CardHeader>
              <CardBody>
                <Text>Most iconic class with the most iconic professor Marius Minea.</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </div>
        
        <div>
        <Text
          as={"span"}
          bgGradient={
            "linear(to-tr, brand.main, brand.200, brand.300, brand.400, brand.600)"
          }
          fontSize={{ md: "60px", sm: "6xl" }}
          fontWeight="extrabold"
        >
          Classes Left to Take
        </Text>

        {/* Separate div for the checkboxes */}
        <div style={{ marginTop: '10px' }}>
          <div>
            <Checkbox>CS 220</Checkbox>
          </div>
          <div>
            <Checkbox>CS 250</Checkbox>
          </div>
          <div>
            <Checkbox>CS 501</Checkbox>
          </div>
          {/* Add more classes as needed */}
  
        </div>
      </div>
      </div>
    </Layout>
  );
}
