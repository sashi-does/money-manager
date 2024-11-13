import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <>
      <div className="balance each-type">
        <img
          className="each-type-logo"
          alt="Balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p className="each-type-category">Your Balance</p>
          <p data-testid="balanceAmount" className="each-type-money">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income each-type">
        <img
          className="each-type-logo"
          alt="Income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div>
          <p className="each-type-category">Your Income</p>
          <p data-testid="incomeAmount" className="each-type-money">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses each-type">
        <img
          className="each-type-logo"
          alt="Expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div>
          <p className="each-type-category">Your Expenses</p>
          <p data-testid="expensesAmount" className="each-type-money">
            Rs {expenses}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
