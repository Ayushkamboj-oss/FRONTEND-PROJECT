import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './Components/Layout.jsx';
import Home from './Components/Pages/Home.jsx';
import GitHub from './Components/Pages/GitHub.jsx';
import Login from './Components/Pages/Login.jsx';
import Search from './Components/Pages/Search.jsx';
import ContactUs from './Components/Pages/ContactUs.jsx';
import { store } from './store/store.jsx';
import CreateAccount from './Components/Pages/CreateAccount.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Redirect root to /home */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Layout with nested routes */}
      <Route path="/home" element={<Layout />}>
        <Route index element={<Home />} /> {/* ✅ Renders at /home */}
        <Route path="github" element={<GitHub />} /> {/* ✅ Renders at /home/github */}
        <Route path="login" element={<Login />} /> {/* ✅ Renders at /home/login */}
        <Route path="search" element={<Search />} /> {/* ✅ Renders at /home/linkedin */}
        <Route path="contactus" element={<ContactUs />} /> {/* Placeholder for Contact Us page */}
        <Route path="createaccount" element={<CreateAccount />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>

);
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css';
// import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
// import Layout from './Components/Layout.jsx'
// import Home from './Components/Pages/Home.jsx'
// import GitHub from './Components/Pages/GitHub.jsx'
// import Login from './Components/Pages/Login.jsx'
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/home" element={<Layout />}>
//       <Route  index element={<Home />} />
//       <Route path="/github" element={<GitHub />} />
//       <Route path="/login" element={<Login />} />
//     </Route>
//   )
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )
