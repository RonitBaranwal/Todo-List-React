/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ListElement({
    children,
    setTodoListItems,
    todoListItems,
    index,
}) {
    const [checkbox, setCheckbox] = useState(false);
    // setTodoListItems(index);
    const DeleteHandler = (ind) => {
        console.log("listItem");
        setTodoListItems(ind);
    };
    const handleCheckBox = () => {
        setCheckbox(!checkbox);
    };
    const [inputValue, setInputValue] = useState('');

  const notify = () => {
    toast.info(
      <div>
        <p>Enter the edit value</p>
        <input
          type="text" value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
          
        />
        <button onClick={() => handleNotificationSubmit()}>Submit</button>
      </div>,
      {
        position: 'top-right',
        autoClose: false,
      }
    );
  };

  const handleNotificationSubmit = () => {
      toast.success(`You entered: ${inputValue}`);
      setInputValue('');
  };
    

    return (
        <>
            <li className="ui segment grid equal width">
                <div className="ui column">
                    <label>
                        <input
                            type="checkbox"
                            onChange={handleCheckBox}
                            checked={checkbox}
                            id="checkbox"
                        />
                        {children}
                    </label>
                </div>
                <div className="column">
                    <i
                        data-id={index}
                        className="edit outline icon"
                        onClick={notify}
                    ></i>
                    <i
                        data-id={index}
                        className="trash alternate outline remove icon"
                        onClick={() => DeleteHandler(index)}
                    ></i>
                </div>
            </li>
        </>
    );
}
