import styles from "./topcryptosection.module.css";

import Image from "next/image";

import getCrypto from "@/lib/getCrypto";

import WaveChart from "@/assets/images/landing/WaveChart.jpg";
import CryptoPlaceholder from "@/assets/images/landing/CryptoPlaceholder";
import { Chart } from "./Chart";

export async function TopCryptoSection() {
  const cryptos = await getCrypto(5);

  return (
    <section className={styles.topCurrencies}>
      <header>
        <h1>Top cryptocurrencies</h1>
        <p>Your assets. Your choices. Our technology</p>
      </header>
      <main>
        <div>
          <div>switch</div>
          <div>View Market</div>
        </div>
        <div className={styles.currencyTable}>
          <div>
            <p>Market</p>
            <p>Price</p>
            <p>24h change</p>
            <p>24h Trading volume</p>
            <p>Last 3 days</p>
          </div>
          {cryptos.map(
            ({ id, symbol, changePercent24Hr, volumeUsd24Hr, priceUsd }) => {
              return (
                <div key={id}>
                  <div>
                    <CryptoPlaceholder />
                    <p>{symbol}</p>
                  </div>
                  <p
                    className={`${
                      priceUsd && Number(priceUsd) <= 2 ? "red" : "green"
                    }`}
                  >
                    ${Number(priceUsd).toFixed(6)}
                  </p>
                  <p
                    className={`${
                      changePercent24Hr && changePercent24Hr[0] === "-"
                        ? "red"
                        : "green"
                    }`}
                  >
                    {changePercent24Hr}%
                  </p>
                  <p>${Number(volumeUsd24Hr).toFixed(2)}</p>
                  <div className={styles.chart}>
                    <Chart />
                  </div>
                </div>
              );
            }
          )}
        </div>
      </main>
    </section>
  );
}
