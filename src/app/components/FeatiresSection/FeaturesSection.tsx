import { Button } from "antd";
import FeatureCard from "./FeatureCard/FeatureCard";

import styles from "./featuressection.module.css";
import Link from "next/link";

export function FeaturesSection() {
  return (
    <section className={`${styles.features} container`}>
      <h1>Products and Features</h1>
      <main>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </main>
      <Link href="#">
        <Button type="primary">Let&apos;s Start</Button>
      </Link>
    </section>
  );
}
