# Quick Form Builder

A simple and customizable React form builder for creating dynamic forms with various input types like text, checkbox, radio, and select. The form builder provides an easy-to-use API for defining form fields and handling form submission.

## Features

- Dynamic form fields with various input types (text, checkbox, radio, select)
- Simple and customizable form submission handler
- CSS support with custom styles for better UI

## Installation

To install `quick-form-builder`, use npm or yarn:

```bash
npm install quick-form-builder

Usage
Here is a basic example of how to use the form builder in your React application

import React, { useState } from "react";
import { FormBuilder, FormField } from "quick-form-builder";
import "quick-form-builder/dist/styles/styles.css"; // Import the styles

const App = () => {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    console.log("Form data submitted:", data);
    setFormData(data);
  };

  const fields = [
    { type: "text", label: "First Name", name: "firstName", required: true },
    { type: "text", label: "Last Name", name: "lastName", required: true },
    { type: "checkbox", label: "Accept Terms", name: "acceptTerms", required: true },
    { type: "radio", label: "Gender", name: "gender", options: ["Male", "Female"], required: true },
    { type: "select", label: "Country", name: "country", options: ["USA", "Canada", "India"], required: true },
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

API
FormBuilder
The main component for rendering the form.

Props:

fields: Array of form field objects (required).
onSubmit: Callback function to handle form submission (required).
FormField
An object representing a form field.

Field Object Structure:

{
  type: string;   // Input type: 'text', 'checkbox', 'radio', 'select'
  label: string;  // Label for the field
  name: string;   // Unique name for the field
  required: boolean;  // Whether the field is required
  options?: string[]; // Options for 'radio' and 'select' fields
  placeholder?: string; // Placeholder for 'text' fields
}
```
