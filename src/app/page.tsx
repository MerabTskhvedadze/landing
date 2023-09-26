import {
  AdSection,
  FeaturesSection,
  Footer,
  Header,
  TopCryptoSection,
} from "./components";

import styles from "./page.module.css";

export default function Landing() {
  return (
    <>
      <Header />
      <AdSection />
      <FeaturesSection />
      <TopCryptoSection />
      <Footer />
    </>
  );
}
