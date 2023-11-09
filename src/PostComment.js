import {useEffect, useState} from "react";
function PostComment(props){

    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        async function getComments(){
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            const data = await response.json();
            setComments(data);
            setIsLoading(false); // Set loading to false once data is fetched
        }
        getComments();
    }, []);
    const postID = props.postID;
    const commentsJSX = comments.map((comment,index) =>{
       if(postID == comment.postId)return (
            <>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
            </>
        )
    })

    return(
        <>
         {isLoading ? 'Loading...' :
            <>
            {commentsJSX}
            </>
        }
        </>
    )
}
export default PostComment;