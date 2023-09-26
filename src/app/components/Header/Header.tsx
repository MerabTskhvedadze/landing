import styles from "./header.module.css";

import Logo from "@/assets/images/landing/Logo";

import Link from "next/link";
import { Button } from "antd";

import Switcher from "./Switcher/Switcher";

import Download from "@/assets/images/landing/DownloadIcon";
import EarthIcon from "@/assets/images/landing/EarthIcon";
import Select from "./Select/Select";
import RunningLine from "./RunningLine/RunningLine";

export function Header() {
  return (
    <header className="container">
      <div className={styles.navigation}>
        <nav className={styles.actions}>
          <ul>
            <li>
              <Link href="/">
                <Logo />
              </Link>
            </li>
            <li>
              <Switcher />
            </li>
            <li>
              <Select options={["Trade1", "Trade2", "Trade3", "Trade4"]}>
                Trade
              </Select>
              <Select options={["Market1", "Market2", "Market3", "Market4"]}>
                Markets
              </Select>
              <Link href="#">Educational</Link>
              <Select options={["More1", "More2", "More3", "More4"]}>
                More
              </Select>
            </li>
          </ul>
        </nav>
        <nav className={styles.auth}>
          <ul>
            <li>
              <Link href="#">
                <Button size="large" type="link">
                  Log in
                </Button>
              </Link>
              <Link href="#">
                <Button size="large" type="primary">
                  Sign Up
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Button type="text">
                  <Download />
                </Button>
              </Link>
              <Link href={"#"}>
                <Button type="text">
                  <EarthIcon />
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <RunningLine />
    </header>
  );
}
