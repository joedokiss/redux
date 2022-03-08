import './Expenses.css'

import React, { useState } from 'react'

import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses