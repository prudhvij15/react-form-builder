import React, { useState } from "react";
import "./App.css";
import { FormBuilder, FormField } from "quick-form-builder";
import "quick-form-builder/dist/styles/styles.css";

const App: React.FC = () => {
  const [formData, setFormData] = useState<any>({});

  const handleFormSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
    setFormData(data);
  };

  const fields: FormField[] = [
    {
      type: "text",
      label: "First Name",
      name: "firstName",
      placeholder: "Enter your first name",
      required: true,
    },
    {
      type: "text",
      label: "Last Name",
      name: "lastName",
      placeholder: "Enter your last name",
      required: true,
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "acceptTerms",
      required: true,
    },
    {
      type: "radio",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female", "Other"],
      required: true,
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      options: ["USA", "Canada", "India"],
      required: true,
    },
  ];

  return (
    <div className="App">
      <h1>Test Form</h1>
      <FormBuilder fields={fields} onSubmit={handleFormSubmit} />
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default App;
