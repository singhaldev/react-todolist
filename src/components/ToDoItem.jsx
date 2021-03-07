import React from "react";
import db from "../firebase";

function ToDoItem(props) {
	return (
		<div onClick={(e) => db.collection("todos").doc(props.obj.id).delete()}>
			<li>{props.obj.todo}</li>
		</div>
	);
}

export default ToDoItem;
