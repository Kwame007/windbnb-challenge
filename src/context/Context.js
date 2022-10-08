import { useReducer, createContext, useEffect, useState } from "react";

const ModalContext = createContext({
  isShowing: false,
  locationSelector: false,
  guestSelector: false,
  // adults: 1,
  // children: 2,
  // filteredStays: [],
  // showLocationSelector: () => {},
  // hideLocationSelector: () => {},
  // showGuestSelector: () => {},
  // hideGuestSelector: () => {},
  // showModal: () => {},
  // hideModal: () => {},
  // increaseAdults: () => {},
  // decreaseAdults: () => {},
  // increaseChildren: () => {},
  // decreaseChildren: () => {},
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
      return {
        ...state,
        adults: state.adults + 1,
        totalGuests: state.totalGuests + 1,
      };
    case "ADULT_DECREMENT":
      return {
        ...state,
        adults: state.adults - 1,
        totalGuests: state.totalGuests - 1,
      };
    case "CHILD_INCREMENT":
      return {
        ...state,
        children: state.children + 1,
        totalGuests: state.totalGuests + 1,
      };
    case "CHILD_DECREMENT":
      return {
        ...state,
        children: state.children - 1,
        totalGuests: state.totalGuests - 1,
      };
    case "FILTER_STAYS":
      return { ...state, filteredStays: action.payload };
    case "FETCH_STAYS":
      return { ...state, stays: action.payload };
    default:
      return state;
  }
};

export const ModalProvider = (props) => {
  const [staysData, setStaysData] = useState([]);

  // manage state with useReducer
  const [state, dispatch] = useReducer(reducer, {
    isShowing: false,
    locationSelector: false,
    guestSelector: false,
    adults: 0,
    children: 0,
    totalGuests: 0,
    stays: [],
    filteredStays: [],
  });

  useEffect(() => {
    // get data from json server
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/stays");

        // check if res ok
        if (!response.ok) {
          throw new Error("Could not fetch data");
        }

        const data = await response.json();
        setStaysData(data);
        dispatch({ type: "FETCH_STAYS", payload: data });
      } catch (error) {
        console.log(error.message);
      }
    };

    return () => {
      fetchData();
    };
  }, [staysData.length]);

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

  // filter stays by location and guests
  const filterStays = (stays, query, totalGuests) => {
    // get value from location input
    const queryString = query.split(",")[0].toLowerCase();

    // filtered stays
    const filteredStays = stays.filter((stay) => {
      return (
        stay.city.toLowerCase().includes(queryString) &&
        totalGuests <= stay.maxGuests
      );
    });
    dispatch({ type: "FILTER_STAYS", payload: filteredStays });
    console.log(filteredStays);
  };

  return (
    <ModalContext.Provider
      value={{
        isShowing: state.isShowing,
        locationSelector: state.locationSelector,
        guestSelector: state.guestSelector,
        adults: state.adults,
        children: state.children,
        totalGuests: state.totalGuests,
        stays: state.stays,
        filteredStays: state.filteredStays,
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
        filterStays,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
