import React from 'react'


const AddList = ({task,index,removeTask}) => {
  return (
    <>

<div className='list-task'> 
{task.title}

<button className='edit-button'>Edit</button>
<button onClick={()=>{removeTask(index)}} className='delete-button'>Delete</button>

</div>

    </>
  );
};

export default AddList;