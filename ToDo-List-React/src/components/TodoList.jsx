/* eslint-disable react/prop-types */
// import React from 'react'
import ListElement from "./ListElement"

export default function TodoList({todoListItems,setTodoListItems}) {

  
  
  return (
    <>
      <ul id="tasks-list" className="ui segments" >
			{todoListItems.length===0?<div className="ui icon warning message">
				<i className="inbox icon"></i>
				<div className="content">
					<div className="header">You have nothing task today!</div>
					<div>Enter your tasks today above.</div>
				</div>
        </div> :
          todoListItems.map((item,ind) => {
            return <ListElement todoListItems={ todoListItems} setTodoListItems={setTodoListItems} key={ind} index={ind}>{item}</ListElement>
      })}
		</ul>
      
    </>
  )
}
