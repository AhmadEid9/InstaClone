import axios from "axios";
import { useEffect } from "react";

const PostsList = (props)=>{
    let response;
    const fetchPosts = async ()=>{
      await axios.get("http://localhost:8000/api/posts/?user_id="+props.user_id)
      .then((response)=> {props.setPosts(response.data)
      console.log(response.data)})
      .catch((e) => console.log(e));
      
    }
    useEffect(()=>{
      fetchPosts()
    }, [])
  
    return (
      <div className="contact-list">
        <Contacts contacts={props.contacts}/>
      </div>
    )
  }

  export default PostsList;