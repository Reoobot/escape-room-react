import React, { useState} from "react"
import { TodoForm } from "../TodoForm"
import { RiCloseCircleLine } from "react-icons/ri"
import { TiEdit } from "react-icons/ti"

export function ToDo({toDos, removeToDo, updateToDo}:any) {
const [edit, setEdit] = useState({
id: null,
value: ""
})

const submitUpdate = (value:any) => {
updateToDo(edit.id, value);
setEdit({
id: null,
value: ""
})
}

if (edit.id) {
return <TodoForm edit={edit} onSubmit={submitUpdate} /> 
}

return toDos.map((toDo:any, index:any) => (
<div className='toDo-row' key={index}>

<div key={toDo.id}>
{toDo.text}
</div>

<div className='icons'>
<RiCloseCircleLine onClick={() => removeToDo(toDo.id)} className='delete-icon'/>
<TiEdit onClick={() => setEdit({id: toDo.id, value: toDo.text})}/>
</div>

</div>
))
} 