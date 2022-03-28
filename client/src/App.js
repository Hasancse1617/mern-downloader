import './App.css';
import Router from './router/Router';
import { Provider } from "react-redux";
import Store from "./store";
import { BrowserRouter } from 'react-router-dom';

function App() { 
  return (
    <>
       <Provider store={Store}>
         <BrowserRouter>
           <Router/>
         </BrowserRouter>
       </Provider> 
   </>
  );
}

export default App;
