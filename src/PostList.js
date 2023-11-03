import {useEffect, useState} from "react";
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
                <p>user ID: {post.userId}</p>
                <p>ID: {post.id}</p>
                <p>title: {post.title}</p>
                <p>body: {post.body}</p>
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