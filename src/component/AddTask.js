import React,{useState} from 'react'

const AddTask = ({addTask}) => {

  const [value,setValue] = useState("")

  const addItem = ()=>{
    addTask(value);
    setValue("");
  };

  return (
    <>
<div className='input-conatiner'>

<input type='text' value={value} placeholder='Add todo...'

    onChange={(e)=>{setValue(e.target.value)}}
/>
<button onClick={addItem} className='add-button'>
ADD
 
</button>

</div>

    </>
  )
}

export default AddTask;
