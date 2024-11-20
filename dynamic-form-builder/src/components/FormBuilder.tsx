import React, { useState } from "react";
import InputField from "./InputField";
import { FormConfig, FormField } from "./types/index";
import "./styles/styles.css"; // Import custom styles

const FormBuilder: React.FC<FormConfig> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {fields.map((field: FormField) => (
        <InputField
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default FormBuilder;
