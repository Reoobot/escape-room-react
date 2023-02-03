import React, { useState} from "react"
import { TodoForm } from "../TodoForm"
import { ToDo } from "../ToDo"

export function TodoList() {
const [toDos, setToDos] = useState<any[]>([]);

const addToDo = (toDo:any) => {
if (!toDo.text || /^\s*$/.test(toDo.text)) {
return 
}

const newToDos = [toDo, ...toDos];
setToDos(newToDos);
console.log(newToDos)
} 

//Estas líneas comentadas, harían lo mismo que el spread operator
// let newData = toDos;
// newData.push(newToDos);
// setToDos(newData)
const removeToDo = (id:any) => {
const removeArr = [...toDos].filter(toDo => toDo.id !== id);
setToDos(removeArr);
}

const updateToDo = (toDoId:any, newValue:any) => {
if (!newValue.text || /^\s*$/.test(newValue.text)) {
return
}
setToDos(prev => prev.map(item => (item.id === toDoId ? newValue : item)))
}


return(
<>
<h1>What's your plan for today?</h1>
<TodoForm onSubmit={addToDo} />
<ToDo toDos={toDos} removeToDo={removeToDo} updateToDo={updateToDo} />
</>
)
} 