
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import './Page/Login.css';
import './Page/Register.css';
import './Page/Home/Home.css';
import './Page/Map/Maps.css';
import './Page/็Hotel/EditHotel.css';
import './Page/Concert/AddConcet.css';

import LoginPage from './Page/Login';
import RegisterPage from './Page/Register';
import HomePage from './Page/Home/Home';
import AddHotelPage from './Page/็Hotel/AddHotel';
import MapsPage from './Page/Map/Maps';
import EditHotelPage from './Page/็Hotel/EditHotel';
import AddConcertPage from './Page/Concert/AddConcert';
import './Page/Concert/EditConcet.css';
import EditConcertPage from './Page/Concert/EditConcert';

function App() {
  const routers = createBrowserRouter(
    [
      { path: "/", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/addhotel", element: <AddHotelPage /> },
      { path: "/edithotel", element: <EditHotelPage /> },
      { path: "/addconcert", element: <AddConcertPage /> },
      { path: "/editconcert", element: <EditConcertPage /> },
      { path: "/maps", element: <MapsPage /> },
    ]
  );
  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
