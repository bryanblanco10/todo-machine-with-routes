import React, { useReducer } from "react";

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  // const {
  //   loading,
  //   error,
  //   item,
  // } = state;

  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [item, setItem] = React.useState(initialValue);

  // ACTIONS CREATORS
  const loadItem = (items) => {
    dispatch({ type: actionTypes.item, payload: items});
  }

  const onLoading = (value) => {
    dispatch({ type: actionTypes.loading, payload: value });
  }

  const onError = (value) => {
    dispatch({ type: actionTypes.error, payload: value });
  }


  // useEffect para determinar cuándo ejecutamos o no el código de nuestro efecto.
  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;

        if (localStorage.getItem(itemName)) {
          parsedItem = JSON.parse(localStorage.getItem(itemName));
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }

        // setItem(parsedItem);
        loadItem(parsedItem);
        onLoading(false);
        // setLoading(false);
      } catch (error) {
        onError(true);
        // setError(error);
      }
    }, 1000);
  }, [])

  const saveUpdateItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      loadItem(newItem)
      // setItem(newItem);
    } catch (error) {
      // setError(error);
      onError(true);
    }
  }

  // Cuando se retornan mas de 2 variables es recomendable usar Object
  return {
    // item,
    ...state,
    saveUpdateItem,
    // loading,
    // error,
  }
}

const initialState = ({ initialValue }) => ({
  loading: true,
  error: false,
  item: initialValue
});

const actionTypes = {
  error: "ERROR",
  loading: "LOADING",
  item: "ITEM",
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: payload,
  },
  [actionTypes.loading]: {
    ...state,
    loading: payload,
  },
  [actionTypes.item]: {
    ...state,
    item: payload
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
}

export { useLocalStorage };