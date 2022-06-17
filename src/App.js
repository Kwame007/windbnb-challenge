import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import ModalContext from "./context/Context";
import { useContext } from "react";

function App() {
  const ctx = useContext(ModalContext);
  return (
    <>
      <div className="container mx-auto mt-5">
        <Navigation />
        {ctx.isShowing && <Modal />}
      </div>
    </>
  );
}

export default App;
