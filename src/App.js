import "./App.css";
import Modal, { BackDrop } from "./components/Modal";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div className="container mx-auto mt-5">
        <Navigation />
        <Modal />
      </div>
    </>
  );
}

export default App;
