import { useState } from "react";
import ContactList from "./ContactList";
import SelectedContact from "./SelectedContact";
import "./App.css";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div>
      {selectedContactId ? (
        <SelectedContact
          contactId={selectedContactId}
          onBack={() => setSelectedContactId(null)}
        />
      ) : (
        <ContactList onContactSelect={setSelectedContactId} />
      )}
    </div>
  );
}

export default App;
