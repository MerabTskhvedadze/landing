import styles from "./adsection.module.css";

import { Button } from "antd";
import { Button as CustomButton } from "@/components/Button/Button";
import OfferCard from "./OfferCard/OfferCard";

import AppleIcon from "@/assets/images/landing/AppleIcon";
import GooglePlayIcon from "@/assets/images/landing/GooglePlayIcon";
import QRIcon from "@/assets/images/landing/QRIcon";
import GoogleIcon from "@/assets/images/landing/GoogleIcon";

const offers = [
  {
    title: "Win up to 1,500 USDT",
    description: "Refer friends to Unlock free coins",
  },
  {
    title: "Enjoy up to 16% API",
    description: "Simplify your path to earn on hot cryptos",
  },
  {
    title: "Win up to 1,500 USDT",
    description: "Refer friends to Unlock free coins",
  },
  {
    title: "Enjoy up to 16% API",
    description: "Simplify your path to earn on hot cryptos",
  },
];

export function AdSection() {
  return (
    <section className={`${styles.adSection} container`}>
      <main>
        <article className={styles.description}>
          <h1>Buy, trade, and hold cryptocurrencies</h1>
          <p>Get started in minutes</p>
          <Button
            type="primary"
            size="large"
            style={{ maxWidth: "411px", width: "100%" }}
          >
            Sign up with Email or Phone
          </Button>
          <div>
            <CustomButton mode="ghost">
              <GoogleIcon />
              google
            </CustomButton>
            <CustomButton mode="ghost">
              <AppleIcon />
              apple
            </CustomButton>
          </div>
        </article>
        <aside className={styles.adImage}>
          <div />
          <div>
            <CustomButton mode="icon">
              <AppleIcon />
            </CustomButton>
            <CustomButton mode="icon">
              <GooglePlayIcon />
            </CustomButton>
            <CustomButton mode="icon">
              <QRIcon />
            </CustomButton>
          </div>
        </aside>
      </main>
      <article className={`${styles.offers} ${styles.gridContainer}`}>
        {offers.map((offer, i) => {
          return (
            <OfferCard
              key={i}
              title={offer.title}
              description={offer.description}
            />
          );
        })}
      </article>
    </section>
  );
}
