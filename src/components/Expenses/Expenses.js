import './Expenses.css'

import React, { useState } from 'react'

import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

const Expenses = (props) => {
  console.log('Expenses Component is rendered')

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    console.log('selected year is changed to', selectedYear)

    setFilteredYear(selectedYear)
    // setFilteredYear(preState => {
    //   return {}
    // })
  }

  const filteredExpenses = props.items.filter((expense) => {
    let expenseYear = expense.date.getFullYear().toString()
    return expenseYear === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />

      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses