import { ReactNode, createContext, useState, useContext } from "react";

interface ModalContextData {
  isOpen: boolean;
  modalTitle: string;
  user: User;
  typeModal: typeModal;
  openModal: (title: string, modalType: typeModal, userEdit?: User) => void;
  closeModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

type User = {
  id: number;
  name: string;
  image: string;
  stars: number;
};

type typeModal = "add" | "edit";

const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("insira os dados");
  const [typeModal, setTypeModal] = useState<typeModal>("add");
  const [user, setUser] = useState<User>({} as User);

  const openModal = (title: string, modalType: typeModal, userEdit?: User) => {
    setModalTitle(title);
    setIsOpen(true);
    setTypeModal(modalType);

    if (modalType === "edit" && userEdit) {
      setUser(userEdit);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, modalTitle, typeModal, user }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
