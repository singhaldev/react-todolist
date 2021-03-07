import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import db from "../firebase";
import firebase from "firebase";

function App() {
	const [inputText, setInputText] = useState("");
	const [items, setItems] = useState([]);

	useEffect(() => {
		db.collection("todos")
			.orderBy("timestamp", "desc")
			// Most Recent one has the highest value
			.onSnapshot((snapshot) => {
				// snapshot.docs.map(doc => doc.data()) => return a array of object
				// but we need a array of elements
				// console.log(snapshot.docs.map((doc) => doc));
				setItems(
					snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
				);
				//this is only read from db
			});
	}, []);

	function addItem() {
		// setItems((prevItems) => {
		// 	return [...prevItems, inputText];
		// });
		// else

		db.collection("todos").add({
			todo: inputText,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInputText("");
	}

	// function deleteItem(id) {
	// 	setItems((prevItems) => {
	// 		return prevItems.filter((item, index) => {
	// 			return index !== id;
	// 		});
	//   });
	// }

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<form>
				<div className="form">
					<input
						onChange={(e) => setInputText(e.target.value)}
						type="text"
						value={inputText}
					/>
					<button disabled={!inputText} type="submit" onClick={addItem}>
						<span>Add</span>
					</button>
				</div>
			</form>
			<div>
				<ul>
					{items.map((todoItem) => (
						<ToDoItem key={todoItem.id} obj={todoItem} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
