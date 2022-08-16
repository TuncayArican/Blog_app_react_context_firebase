import { createContext, useEffect, useState } from "react";
import { userObserver, auth} from "../helpers/firebase";


export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  
  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
 

  console.log(auth)
  
  return (
    <AuthContext.Provider value={{ currentUser, auth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;