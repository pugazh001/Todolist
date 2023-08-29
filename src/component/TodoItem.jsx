import React from "react";

function TodoItem(props){

    // const[isDone,setDone]=useState(false);

    // function handleClic(){

    //     setDone(prevalue=>{
    //         // console.log(prevalue);
    //         return !prevalue;
           
    //     })
    //}
    return(
    //  <div onClick={handleClic}>
    <div onClick={()=>
        {
            props.onChecked(props.id)
        }}>
       <li 
    //    style={{textDecoration:isDone?"line-through":"none"}}
        >{props.text}</li>
      </div>
    )
};
export default TodoItem;