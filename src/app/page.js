import Image from "next/image";
import styles from "./page.module.css";
import QRcodeLink from "@/components/QRcodeLink/QRcodeLink";
import Doubt from "@/components/Doubt/Doubt";

export default function Home() {
  return (
    <main>
      <QRcodeLink></QRcodeLink>
      <Doubt></Doubt>
    </main>
  );
}
