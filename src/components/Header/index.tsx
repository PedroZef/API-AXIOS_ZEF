import { useModal } from "../../context/ModalContext";
import styles from "./styles.module.scss";

export function Header() {
  const { openModal } = useModal();
  return (
    <div className={styles.header}>
      <h1>Axios example</h1>

      <button
        type="button"
        onClick={() => openModal("inclua o novo usuário", "add")}
      >
        add user
      </button>
    </div>
  );
}
