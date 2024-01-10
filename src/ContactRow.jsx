import React from "react";

const ContactRow = ({ contact, onClick }) => {
  return (
    <tr onClick={onClick} style={{ cursor: "pointer" }}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};

export default ContactRow;
