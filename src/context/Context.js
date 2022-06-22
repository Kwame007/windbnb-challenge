import { useReducer, createContext } from "react";

const ModalContext = createContext({
  isShowing: false,
  locationSelector: false,
  guestSelector: false,
  adults: 1,
  children: 2,
  showLocationSelector: () => {},
  hideLocationSelector: () => {},
  showGuestSelector: () => {},
  hideGuestSelector: () => {},
  showModal: () => {},
  hideModal: () => {},
  increaseAdults: () => {},
  decreaseAdults: () => {},
  increaseChildren: () => {},
  decreaseChildren: () => {},
});

// reducer function
const reducer = (state, action) => {
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
    case "ADULT_INCREMENT":
      console.log(state.adults);
      return { ...state, adults: state.adults + 1 };
    case "ADULT_DECREMENT":
      console.log(state.adults);
      return { ...state, adults: state.adults - 1 };
    case "CHILD_INCREMENT":
      console.log(state.children);
      return { ...state, children: state.children + 1 };
    case "CHILD_DECREMENT":
      console.log(state.children);
      return { ...state, children: state.children - 1 };
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
    adults: 0,
    children: 0,
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

  // handleIncreaseAdults
  const handleAdultIncrement = () => {
    dispatch({ type: "ADULT_INCREMENT" });
  };

  // handleDecreaseAdults
  const handleAdultDecrement = () => {
    dispatch({ type: "ADULT_DECREMENT" });
  };

  // handleIncreaseChildren
  const handleChildIncrement = () => {
    dispatch({ type: "CHILD_INCREMENT" });
  };

  // handleDecreaseChildren
  const handleChildDecrement = () => {
    dispatch({ type: "CHILD_DECREMENT" });
  };

  return (
    <ModalContext.Provider
      value={{
        isShowing: state.isShowing,
        locationSelector: state.locationSelector,
        guestSelector: state.guestSelector,
        adults: state.adults,
        children: state.children,
        showModal: handleShowModal,
        hideModal: handleHideModal,
        showLocationSelector: handleShowLocationSelector,
        showGuestSelector: handleShowGuestSelector,
        hideLocationSelector: handleHideLocationSelector,
        hideGuestSelector: handleHideGuestSelector,
        increaseAdults: handleAdultIncrement,
        decreaseAdults: handleAdultDecrement,
        increaseChildren: handleChildIncrement,
        decreaseChildren: handleChildDecrement,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
