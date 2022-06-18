import { useReducer, createContext } from "react";

const ModalContext = createContext({
  isShowing: false,
  locationSelector: false,
  guestSelector: false,
  showLocationSelector: () => {},
  hideLocationSelector: () => {},
  showGuestSelector: () => {},
  hideGuestSelector: () => {},
  showModal: () => {},
  hideModal: () => {},
});

// reducer function
const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, isShowing: true };
    case "HIDE_MODAL":
      return { ...state, isShowing: false };
    case "SHOW_LOCATION_SELECTOR":
      return { ...state, locationSelector: true };
    case "SHOW_GUEST_SELECTOR":
      return { ...state, guestSelector: true };
    case "HIDE_LOCATION_SELECTOR":
      return { ...state, locationSelector: false };
    case "HIDE_GUEST_SELECTOR":
      return { ...state, guestSelector: false };
    default:
      return state;
  }
};

export const ModalProvider = (props) => {
  // manage state with useReducer
  const [state, dispatch] = useReducer(reducer, {
    isShowing: false,
    locationSelector: false,
    guestSelector: false,
  });

  // handleShowModal
  const handleShowModal = () => {
    dispatch({ type: "SHOW_MODAL" });
  };
  // handleHideModal
  const handleHideModal = () => {
    dispatch({ type: "HIDE_MODAL" });
  };

  // handleShowLocationSelector
  const handleShowLocationSelector = () => {
    dispatch({ type: "SHOW_LOCATION_SELECTOR" });
  };

  // handleShowGuestSelector
  const handleShowGuestSelector = () => {
    dispatch({ type: "SHOW_GUEST_SELECTOR" });
  };

  // handleHideLocationSelector
  const handleHideLocationSelector = () => {
    dispatch({ type: "HIDE_LOCATION_SELECTOR" });
  };
  // handleHideGuestSelector
  const handleHideGuestSelector = () => {
    dispatch({ type: "HIDE_GUEST_SELECTOR" });
  };

  return (
    <ModalContext.Provider
      value={{
        isShowing: state.isShowing,
        locationSelector: state.locationSelector,
        guestSelector: state.guestSelector,
        showModal: handleShowModal,
        hideModal: handleHideModal,
        showLocationSelector: handleShowLocationSelector,
        showGuestSelector: handleShowGuestSelector,
        hideLocationSelector: handleHideLocationSelector,
        hideGuestSelector: handleHideGuestSelector,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
