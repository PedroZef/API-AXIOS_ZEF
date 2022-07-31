import { AiFillStar } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { useModal } from "../../context/ModalContext";
import { useUsers } from "../../context/UsersContext";
import styles from "./styles.module.scss";

export const ListUsers = () => {
  const { openModal } = useModal();
  const { users, removeUser } = useUsers();

  return (
    <>
      <div className={styles.container}>
        {users.map((user) => (
          <div key={user.id} className={styles.userContainer}>
            <div className={styles.userContent}>
              <img src={user.image} alt="user" />
              <div className={styles.user}>
                <strong>{user.name}</strong>
                <span>
                  {user.stars}
                  <AiFillStar color="#EE6C4D" />
                </span>
              </div>
            </div>

            <div>
              <BsPencil
                className={styles.editIcon}
                onClick={() => openModal("insira as alterações", "edit", user)}
              />
              <RiDeleteBinLine className={styles.editIcon} onClick={() => removeUser(user.id)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
