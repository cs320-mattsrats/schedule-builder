'use client'

import Layout from "@/components/layout/Layout";
import {
  Text,
} from "@chakra-ui/react";

export default function Recommendation() {
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
            This is a Recommendation page
          </Text>
      </div>
    </Layout>
  );
}
