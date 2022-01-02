import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const title = props.title
  const amount = props.amount
  const date = props.date

  // const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    // setTitle('Hello World')
    // It will show the old title, coz setTitle is not happening instantly
    // console.log(title)
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">
            {amount}
          </div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  )
}

export default ExpenseItem