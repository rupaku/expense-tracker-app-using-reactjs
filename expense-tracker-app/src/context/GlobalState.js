import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const initialState = {
  transactions: [
    { id: 1, text: "Splitwise", amount: -200 },
    { id: 2, text: "Salary Credit", amount: 2000 },
    { id: 3, text: "Paytm wallet", amount: 220 },
    { id: 4, text: "Shopping", amount: -500 },
  ],
}

//create context
export const GlobalContext = createContext(initialState)

//Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  //Action
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    })
    return toast("Deleted Successfully!", { type: "success" })
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    })
    return toast("Added Successfully!", { type: "success" })
  }
  return (
    <>
      <ToastContainer position="top-right" />
      <GlobalContext.Provider
        value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  )
}
