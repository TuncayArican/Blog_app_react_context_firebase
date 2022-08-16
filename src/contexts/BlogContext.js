import { createContext,useContext, useState} from "react";
import { useFetch, DeleteUser, UpdateUser} from "../helpers/functions";
import app from "../helpers/firebase"
import { getDatabase,ref, push, set} from "firebase/database";
import { AuthContext } from "../contexts/AuthContext";

export const BlogContext = createContext();




const initialValues={imageUrl:"",title:"",content:""}

const BlogContextProvider = ({ children }) => {

  const { currentUser } = useContext(AuthContext);

  const AddUser=(info)=>{
    
    const db = getDatabase(app);
    const userRef=ref(db,"milestone/")
    const newUserRef=push(userRef);
    set(newUserRef,{
        imageUrl:info.imageUrl,
        title:info.title,
        content:info.content,
        user : currentUser.email
    })

}
    
  const [info,setInfo]=useState(initialValues)

  const {isLoading,bloglist} = useFetch();
  

  
  return (
    <BlogContext.Provider value={{ isLoading,bloglist, AddUser, info,setInfo, DeleteUser, UpdateUser}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;