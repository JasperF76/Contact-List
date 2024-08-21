import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from "./components/SelectedContact.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
      // what are the properties below doing?
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      ) : (
      <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}

export default App
