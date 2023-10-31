import {useState} from "react";
function ToDo(props){
    const [checkBox, setCheckBox] = useState(props.completed);
    function handleCheckBox(event){
        setCheckBox(event.target.checked);
    }
        return(
            <>  
                <p>User ID:{props.userId}</p>
                <p>ID:{props.id} </p>
                <input type="checkbox" checked={checkBox} onChange={handleCheckBox}></input>
                <p>{props.title}</p>
                
            </>
        )
    }
export default ToDo;