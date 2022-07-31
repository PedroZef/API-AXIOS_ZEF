import { Header } from "./components/Header";
import { ListUsers } from "./components/ListUsers";
import { Modal } from "./components/Modal";
import { useModal } from "./context/ModalContext";

function App() {
  const { isOpen, modalTitle, typeModal, user } = useModal();

  return (
    <>
      {isOpen && <Modal title={modalTitle} type={typeModal} user={user} />}
      <Header />
      <ListUsers />
    </>
  );
}

export default App;
