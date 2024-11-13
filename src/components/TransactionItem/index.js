import './index.css'

const TransactionItem = props => {
  const {details, deleteTransaction} = props
  const {title, amount, type, id, deleteIcon} = details
  const onDeleteTransaction = () => {
    deleteTransaction(id, type, amount)
  }

  return (
    <li className="table-content">
      <p className="head column">{title}</p>
      <p className="column">Rs {amount}</p>
      <p className="column">{`${type[0].toUpperCase()}${type
        .slice(1, type.length)
        .toLowerCase()}`}</p>
      <button
        onClick={onDeleteTransaction}
        className="delete-btn"
        type="button"
        data-testid="delete"
      >
        <img className="delete-icon" alt="delete" src={deleteIcon} />
      </button>
    </li>
  )
}

export default TransactionItem
