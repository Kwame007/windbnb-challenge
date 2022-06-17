import { createContext } from "react";

const ModalContext = createContext({
  isShowing: false,
  showModal: () => {},
  hideModal: () => {},
});

export const ModalProvider = (props) => {
  return (
    <ModalContext.Provider
      value={{ isShowing: false, showModal: () => {}, hideModal: () => {} }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
