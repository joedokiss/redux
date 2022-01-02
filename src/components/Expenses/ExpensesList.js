import React from 'react'
import ExpenseItem from './ExpenseItem'

import './ExpensesList.css'

const ExpensesList = props => {
  const expenses = props.items

  if (expenses.length === 0) {
    return (<h2 className='expenses-list__fallback'>Found no expenses</h2>)
  }

  return (
    <ul className='expenses-list'>
      {
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amout={expense.amount}
          />
        ))
      }
    </ul>
  )
}

export default ExpensesList