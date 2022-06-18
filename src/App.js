import { createPortal } from "react-dom";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import { useContext } from "react";
import ModalContext from "./context/Context";

function App() {
  const { isShowing } = useContext(ModalContext);

  return (
    <>
      <div className="container mx-auto mt-5">
        <Navigation />
        {isShowing &&
          createPortal(<Modal />, document.getElementById("modal-root"))}
      </div>
    </>
  );
}

export default App;
