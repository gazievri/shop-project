import React from "react";
import Header from "./layout/Header";
import Shop from "./layout/Shop";
import Footer from "./layout/Footer";
import { ContextProvider } from './context/context';


function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
