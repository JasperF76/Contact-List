import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
import ContactList from "./ContactList";

const selectedContact  = ({selectedContactId, setSelectedContactId}) => {
    const [contact, setContact] = useState(null);
    useEffect(() => {
        async function fetchContact() {
            try {
              const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setContact(result);
                console.log(result);
            } catch (error) {
              console.error(error);
            }
          }
          fetchContact()
    }, []);
    return (<> {
        contact && 
   <div>
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name: {contact.name}</td>
                    </tr>
                    <tr>
                    <td>Email: {contact.email}</td>
                    </tr>
                    <tr>
                    <td>Username: {contact.username}</td>
                    </tr>
                    <tr>
                        <td>Phone: {contact.phone}</td>
                    </tr>
                    <tr>
                        <td>Website: {contact.website}</td>
                    </tr>
                    <tr>
                        <td>Address: {contact.address.street}</td>
                    </tr>
                
            </tbody>
        </table>
        
        <button onClick= { () => {
            setSelectedContactId(null)}}>Return to Contacts</button>
        </div>
}</>
);
};

export default selectedContact;