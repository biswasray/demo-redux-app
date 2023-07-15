// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createContext, useContext, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./ContactList";

export const ContactContext = createContext(null);
// export const conxt = useContext(ContactContext);
// eslint-disable-next-line react-refresh/only-export-components
export function useContact() {
  const context = useContext(ContactContext);
  if(!context) throw Error("ContactContext never used");
  return context;
}

function App() {
  const [contacts, setContacts] = useState([]);
  // const [theme,setTheme] = useState("light");
  return (
    <ContactContext.Provider value={{
      contacts,
      setContacts,
    }}>
      <div>
        <h1>header</h1>
        <ContactForm />
        <ContactList />
      </div>
    </ContactContext.Provider>
  )
}
export default App
