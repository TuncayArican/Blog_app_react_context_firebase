import app from "./firebase"
import { getDatabase,onValue,ref, remove, update} from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "./toastify"


/// I have moved ADD user part to BlogContext in order to be able to add user automatically

/* export const AddUser=(info)=>{
    const { currentUser } = useContext(AuthContext);
    const db = getDatabase(app);
    const userRef=ref(db,"milestone/")
    const newUserRef=push(userRef);
    set(newUserRef,{
        imageUrl:info.imageUrl,
        title:info.title,
        content:info.content,
        user : currentUser.email
    })

} */

export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [bloglist,setBloglist]=useState();

   useEffect(() => {
       const db = getDatabase(app);
       const userRef=ref(db,"milestone/")
       onValue(userRef,(snapshot)=>{
           const data=snapshot.val();
           const userArray=[]

           for (let id in data){
               userArray.push({id,...data[id]})
           }
           setBloglist(userArray)
           setIsLoading(false)
       })
   },[])
   return {isLoading,bloglist}
}


export const DeleteUser=(id)=>{
    console.log(id);
   const db = getDatabase(app);
    remove(ref(db,"milestone/"+id));
    Toastify("Deleted")
}

export const UpdateUser=(info)=>{
    const db = getDatabase(app);
    const updates={}
    updates["milestone/"+info.id]=info
    Toastify("Updated Successfully")
    return update(ref(db),updates)

}