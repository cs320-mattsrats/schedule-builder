import Layout from "@/components/layout/Layout";
import {
  Text,
} from "@chakra-ui/react";
import Schedule from '@/components/homepage/Schedule';
import Suggestions from '@/components/homepage/Suggestions';
import Watchlist from '@/components/homepage/Watchlist';
import './page.css';

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
            Home
          </Text>
          <h1 className="heading">Watchlist</h1>
          <Watchlist/>
          <h1 className="heading">Your Schedule</h1>
          <Schedule/>
          <h1 className="heading">Suggested Courses</h1>
          <Suggestions/>
      </div>
    </Layout>
  );
}
