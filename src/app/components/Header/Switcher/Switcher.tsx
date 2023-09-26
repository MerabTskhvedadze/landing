import styles from "./switcher.module.css";

export default function Switcher() {
  return (
    <div className={styles.switcher}>
      <input type="radio" id="switch1" name="mode_switcher" value="switch1" />
      <label htmlFor="switch1">Switch1</label>
      <input type="radio" id="switch2" name="mode_switcher" value="switch2" />
      <label htmlFor="switch2">Switch2</label>
    </div>
  );
}
