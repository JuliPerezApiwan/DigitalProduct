// import { PrimeReactProvider } from 'primereact/api';
// import { AppProps } from 'next/app'
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';     
import 'primeicons/primeicons.css';                       
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import TitleComponent from './components/TitleComponent';
import Presentation from './components/Presentation';

// export default function App({ Component}: AppProps) {
//     return (
//         <PrimeReactProvider>
//           <Component  />
//         </PrimeReactProvider>
//     );
// }

export const App = () => {
  return (
      <Routes>
      <Route path='/' element={ <><TitleComponent /><Presentation /></>} />
    </Routes>
  );
}
    