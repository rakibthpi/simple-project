import Image from "next/image";
import styles from "./page.module.css";
import QRcodeLink from "@/components/QRcodeLink/QRcodeLink";

export default function Home() {
  return (
    <main>
      <QRcodeLink></QRcodeLink>
    </main>
  );
}
