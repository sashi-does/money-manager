import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    transactions: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onDeleteTransaction = (id, type, amount) => {
    this.setState(prevState => ({
      transactions: prevState.transactions.filter(eachTransaction => {
        if (eachTransaction.id !== id) {
          return true
        }
        return false
      }),
    }))
    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        expenses: prevState.expenses - parseInt(amount),
      }))
    }
    if (type === 'INCOME') {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        income: prevState.income - parseInt(amount),
      }))
    }
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
      deleteIcon:
        'https://assets.ccbp.in/frontend/react-js/money-manager/delete.png',
    }
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
    }))
    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: parseInt(prevState.income) + parseInt(amount),
        balance: parseInt(prevState.balance) + parseInt(amount),
      }))
    }
    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: parseInt(prevState.expenses) + parseInt(amount),
        balance: parseInt(prevState.balance) - parseInt(amount),
      }))
    }
    this.setState({title: '', amount: '', type: 'INCOME'})
  }

  render() {
    const {
      type,
      title,
      amount,
      balance,
      expenses,
      income,
      transactions,
    } = this.state

    return (
      <div className="money-manager">
        <div className="dashboard">
          <div className="profile-section">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your{' '}
              <span className="highlighted-text">Money Manager</span>
            </p>
          </div>
          <div className="transaction-types">
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          </div>
          <div className="trasaction-details">
            <form className="add-transaction">
              <h1 className="transaction-histoy-heading">Add Transaction</h1>
              <div className="input-section">
                <label className="label-text" htmlFor="titleInput">
                  TITLE
                </label>
                <input
                  value={title}
                  onChange={this.onChangeTitle}
                  className="input-area"
                  id="titleInput"
                  placeholder="TITLE"
                  type="text"
                />
              </div>
              <div className="input-section">
                <label className="label-text" htmlFor="amountInput">
                  AMOUNT
                </label>
                <input
                  value={amount}
                  onChange={this.onChangeAmount}
                  className="input-area"
                  id="amountInput"
                  placeholder="AMOUNT"
                  type="text"
                />
              </div>
              <div className="input-section">
                <label className="label-text" htmlFor="typeInput">
                  TYPE
                </label>
                <select
                  value={type}
                  onChange={this.onChangeType}
                  className="input-area"
                  id="typeInput"
                >
                  {transactionTypeOptions.map(eachType => (
                    <option key={eachType.optionId} value={eachType.optionId}>
                      {eachType.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={this.addTransaction}
                className="add-transaction-btn"
                type="submit"
              >
                Add
              </button>
            </form>
            <div className="history">
              <h1 className="transaction-histoy-heading">History</h1>
              <div className="history-table">
                <div className="table-content">
                  <p className="column head">Title</p>
                  <p className="column">Amount</p>
                  <p className="column">Type</p>
                </div>
                <ul className="transactions">
                  {transactions.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      deleteTransaction={this.onDeleteTransaction}
                      details={eachTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
