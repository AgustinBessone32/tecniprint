import React, {useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'firebase/auth'
import { FormScreen } from "./screens/FormScreen";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { useState } from "react";

function App() {


  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(window.sessionStorage.getItem('user'))
  }, [user])


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />}></Route>
        <Route path="/form" element={user ? <FormScreen /> : <LoginScreen />}>

        </Route>

      </Routes>
    </BrowserRouter>


  );
}

export default App;
