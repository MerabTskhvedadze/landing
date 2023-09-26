import Image, { StaticImageData } from "next/image";

import LowFiPlaceholder from "@/assets/images/landing/LowFiPlaceholder.jpg";

import styles from "./offercard.module.css";

type Props = {
  image?: StaticImageData;
  title: string;
  description: string;
};

export default function OfferCard({
  title,
  description,
  image = LowFiPlaceholder,
}: Props) {
  return (
    <article className={styles.article}>
      <header>
        <Image src={image} alt={"place holder"} width={48} height={48} />
      </header>
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
      </main>
    </article>
  );
}
