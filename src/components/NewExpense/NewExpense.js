import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditting, setIsEditting] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData)

    setIsEditting(false)
  }

  const stopEdittingHandler = () => {
    setIsEditting(false)
  }

  const startEdittingHandler = () => {
    setIsEditting(true)
  }

  const expenseFormContent = isEditting
    ? (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdittingHandler} />)
    : <button onClick={startEdittingHandler}>Add New Expense</button>

  return (
    <div className="new-expense">
      {expenseFormContent}
    </div>
  )
}

export default NewExpense