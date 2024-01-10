import React, { useState, useEffect } from "react";

const SelectedContact = ({ contactId, onBack }) => {
  const [contactDetails, setContactDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContactDetails() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${contactId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContactDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (contactId) {
      fetchContactDetails();
    }
  }, [contactId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!contactDetails) return <div>No contact selected</div>;

  return (
    <div>
      <button onClick={onBack}>Back to Contact List</button>

      <h2>Contact Details</h2>
      <p>
        <strong>Name:</strong> {contactDetails.name}
      </p>
      <p>
        <strong>Email:</strong> {contactDetails.email}
      </p>
      <p>
        <strong>Phone:</strong> {contactDetails.phone}
      </p>
    </div>
  );
};

export default SelectedContact;
