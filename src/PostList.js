import {useEffect, useState} from "react";
import UserName from "./UserName.js";
import PostComment from "./PostComment.js";
function PostList(){
    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const [postList, setPostList] = useState([]);
  
    useEffect(()=>{
        async function getPostList(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPostList(data);
            setIsLoading(false); // Set loading to false once data is fetched
        }
        getPostList();
    }, []);

    const postsJSX = postList.map((post,index) =>{
        return (
                <>
                <UserName userNameId={post.userId}/>
                <p>ID: {post.id}</p>
                <p>title: {post.title}</p>
                <p>body: {post.body}</p>
                <p>comments: <PostComment postID={post.userId}/> </p>
                <p>-------------------------------------------------</p>
                </>    
        )
    })
    return(
    <>
        {isLoading ? 'Loading...' :
            <>
            {postsJSX}
            </>
        }
    </>
    );
}
export default PostList;