import axios from "axios";
import styles from "./runningLine.module.css";
import getCrypto from "@/lib/getCrypto";

const token = "b6adb923-3b05-4ddb-8425-f0783df44412";

export default async function RunningLine() {
  const cryptos = await getCrypto(500);

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <div className={styles.content}>
          {cryptos.map(({ symbol, id, changePercent24Hr }) => {
            return (
              <p key={id}>
                {symbol}/USDT
                <span
                  className={`${
                    changePercent24Hr && changePercent24Hr[0] === "-"
                      ? "red"
                      : "green"
                  }`}
                >
                  {changePercent24Hr && changePercent24Hr.slice(0, 5)}%
                </span>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
