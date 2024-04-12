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
