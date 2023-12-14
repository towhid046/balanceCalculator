import { useContext, useState } from 'react';
import { GlobalContext } from './../context/GlobalState';

const AddTransaction = () => {

	const [text, setText] = useState('')
	const [amount, setAmount] = useState('')
	const {state, dispatch } = useContext(GlobalContext)
	
const submitHandelar =(e) => {
	e.preventDefault()
	dispatch({type: 'ADD_ITEM', payload: {text}})
	dispatch({type: 'ADD_AMOUNT', payload: {amount}})
}

// const addItem = () =>{
// 	dispatch({})
// }

	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={submitHandelar} >
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						placeholder="Enter text..."
						onChange={(e)=>setText(e.target.value)}
						value={text}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type="number"
						value={amount}
						placeholder="Enter amount..."
						onChange={(e)=>setAmount(e.target.value)}
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	);
};

export default AddTransaction;
