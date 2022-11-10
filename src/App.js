// import NavBar from './ui-components/NavBar';
// import NoteUICollection from './ui-components/NoteUICollection';
// import CreateNote from './ui-components/CreateNote';
// import UpdateNote from './ui-components/UpdateNote';
import { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { DataStore, API, Auth} from 'aws-amplify';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import ForgotPassword from './components/Forgotpassword';
import NoteHome from './components/NoteHome';
import Login from './components/Login';
import './index.css';


function App({ signOut}) {
  const [loggedIn, setLoggedIn] = useState(false);

  const getLoggedInState = () => {
    console.log('getLoggedInState');
    Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log(user, 'loggedIn');
      setLoggedIn(true);
    })
    .catch(() => {
      console.log('not logged in');
      setLoggedIn(false);
    })
  }

  const handleLogOut = () => {
    Auth.signOut();
    setLoggedIn(false);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NoteHome handleLogOut={handleLogOut}/>
    },
    {
      path: '/logIn',
      element: <Login onSignIn={getLoggedInState}/>
    },
    {
      path: '/forgotPassword',
      element: <ForgotPassword/>
    }
  ])

  useEffect(() => {
    getLoggedInState();
  }, [])

  return (
    <>
    <RouterProvider router={router}/>
    <div>
      {loggedIn ? 
      <NoteHome handleLogOut={handleLogOut}/>
      : <Login onSignIn={getLoggedInState}/>}
    </div>
    </>
  );
}

export default App;
