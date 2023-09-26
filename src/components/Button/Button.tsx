import styles from "./button.module.css";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  mode?: "ghost" | "icon" | "default";
};

export function Button({ children, type = "button", mode = "default" }: Props) {
  const modeClassName =
    mode === "ghost"
      ? styles.ghostBtn
      : mode === "icon"
      ? styles.iconBtn
      : styles.defaultBtn;

  const btnStyles = `${styles.button} ${modeClassName}`;

  return (
    <button type={type} className={btnStyles}>
      {children}
    </button>
  );
}
