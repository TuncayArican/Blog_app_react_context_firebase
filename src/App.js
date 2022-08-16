
import AppRouter from './app-router/AppRouter';
import AuthContextProvider from "./contexts/AuthContext";

import './App.css';
import BlogContextProvider from './contexts/BlogContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BlogContextProvider>

          <AppRouter />

        </BlogContextProvider>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
