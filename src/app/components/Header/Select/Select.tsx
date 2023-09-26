"use client";

import { useState } from "react";
import ArrowDown from "@/assets/images/landing/ArrowDown";

import styles from "./select.module.css";

type Props = {
  options: string[];
  children: React.ReactNode;
};

export default function Select({ options, children }: Props) {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className={styles.select}>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">{children}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className={styles.icon}>
        <ArrowDown />
      </div>
    </div>
  );
}
