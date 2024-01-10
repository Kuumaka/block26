import React, { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const ContactList = ({ onContactSelect }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onClick={() => onContactSelect(contact.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
