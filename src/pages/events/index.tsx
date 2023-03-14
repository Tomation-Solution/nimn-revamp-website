import { Inter } from "next/font/google";
import HeadComponent from "@/components/head";
import {
  EventsShowCase,
  EventsConfrence,
  Event,
  EventPricing,
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadComponent pageName="Events" />
      <main>
        < EventsShowCase />
        <EventsConfrence />
        <Event />
      </main>
    </>
  );
}
