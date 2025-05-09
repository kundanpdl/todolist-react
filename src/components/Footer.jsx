import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total: {totalTodos}</span>
      <span className={styles.item}>Completed: {completedTodos}</span>
      <span className={styles.item}>
        Remaining: {totalTodos - completedTodos}{" "}
      </span>
    </div>
  );
}
