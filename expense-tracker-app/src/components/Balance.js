import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map((transaction) => transaction.amount)

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  return (
    <div className="balance">
      <h4>Your Balance </h4>
      <h3>${total}</h3>
    </div>
  )
}
