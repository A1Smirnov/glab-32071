// ./src/components/Form.js

import { useState } from "react";

export default function Form({ moviesearch }) {
  // State to track Form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // Change handler in Form
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Looking for term in Handler's Form
  const handleSubmit = (event) => {
    event.preventDefault();
    moviesearch(formData.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
