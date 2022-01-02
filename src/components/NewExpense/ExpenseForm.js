import './ExpenseForm.css'

import React, { useState } from 'react'

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value)
    /**
     * Note: state won't do the merge but simply replace
     */
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
    /**
     * It is safer using this approach other than above as states change is 
     * scheduled, above way cannot guarantee you are having the latest state value,
     * this way is guaranteed to have latest previous state value
     */
    setUserInput(preState => {
      return {
        ...preState,
        enteredTitle: event.target.value
      }
    })
  }

  const amountChangeHandler = event => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    })
  }

  const dateChangeHandler = event => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    })
  }

  const submitFormHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }

    props.onSaveExpenseData(expenseData);

    // TODO: for two way binding, there might be better solution
    setUserInput({
      ...userInput,
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm