import styles from "./featurecard.module.css";

export default function FeatureCard() {
  return (
    <div className={styles.card}>
      <header>img</header>
      <main>
        <h1>Futures Trading</h1>
        <p>
          We launch new and high quality crypto projects efficiently with good
          liquidity.
        </p>
      </main>
    </div>
  );
}
