import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import { useContext } from "react";
import ModalContext from "./context/Context";

function App() {
  const test = useContext(ModalContext);
  console.log(test);
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
