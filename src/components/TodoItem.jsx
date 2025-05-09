import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleClick(itemName) {
    const newArr = todos.map((todo) =>
      todo.name === itemName ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArr);
  }
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item)); // Returns all items that do not match the condition and does not return the one that matches
  }
  const doneClass = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={doneClass} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.divider} />
    </div>
  );
}
