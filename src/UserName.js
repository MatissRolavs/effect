import {useEffect, useState} from "react";
function UserName(props){

    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const [names, setNames] = useState([]);

    useEffect(()=>{
        async function getUserNames(){
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setNames(data);
            setIsLoading(false); // Set loading to false once data is fetched
        }
        getUserNames();
    }, []);
    const nameID = props.userNameId;
    const namesJSX = names.map((name,index) =>{
       if(nameID == name.id)return (
            <>
                <p>User name:{name.name}</p>
            </>
        )
    })

    return(
        <>
         {isLoading ? 'Loading...' :
            <>
            {namesJSX}
            </>
        }
        </>
    )
}
export default UserName;