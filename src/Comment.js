import {useEffect, useState} from "react";
function Comment(){

    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const [comment, setComment] = useState();
  
    useEffect(()=>{
        async function getComment(){
        const response = await fetch("https://jsonplaceholder.typicode.com/comments/90");
        const data = await response.json();
        setComment(data);
        setIsLoading(false); // Set loading to false once data is fetched
        }
        getComment();
    }, []);
    return(
        
        <>
            {isLoading ? 'Loading...' :
                <>
                    <p>post ID : {comment.postId}</p>
                    <p>ID : {comment.id}</p>
                    <p>name :{comment.name}</p>
                    <p>email :{comment.email}</p>
                    <p>body :{comment.body}</p>
                </>
            }
        </>
    )
}
export default Comment;