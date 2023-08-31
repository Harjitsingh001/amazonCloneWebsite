import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Payment from './Payment';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './SttateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './Footer';
// import { Payment } from '@mui/icons-material;


const promise =loadStripe("pk_test_51NRB9OSDHbD7XrX9zyPMuR5PEA9UZgtX94WEsPKCB190khh72EJ6VcVsPC81sMU5d0R1c73wXLP7riGQuQwcqm7j00ttAeU5XU")

function App() {
  const [{ }, dispatch] = useStateValue();

  // a lister function to always keep traaack thatt which user  is sign in  in login page 
  //Now we need to set a listener to Firebase so that our React app knows that user is authenticated.
  // Just add this useEffect block in App.js
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <Router>
      <div>
        <Routes>
          <Route path='/checkout' element={<><Header /><Checkout /> </>} />
          <Route path='/amazon-clone' element={<><Header /> <Home /> <Footer/></>} />
          <Route path='/amazon-clone/login' element={<> <Login /></>} />
          <Route path='/payment' element={<><Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>


          </>} />
        </Routes>

      </div>
    </Router >
  )
}

export default App