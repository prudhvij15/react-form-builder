import React from "react";
import { FormField } from "./types/index";

interface InputFieldProps {
  field: FormField;
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ field, value, onChange }) => {
  switch (field.type) {
    case "text":
      return (
        <div>
          <label>{field.label}</label>
          <input
            type="text"
            name={field.name}
            value={value || ""}
            placeholder={field.placeholder}
            required={field.required}
            onChange={onChange}
          />
        </div>
      );

    case "checkbox":
      return (
        <div>
          <label>
            <input
              type="checkbox"
              name={field.name}
              checked={value || false}
              required={field.required}
              onChange={onChange}
            />
            {field.label}
          </label>
        </div>
      );

    case "radio":
      return (
        <div>
          <label>{field.label}</label>
          {field.options?.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={field.name}
                value={option}
                checked={value === option}
                required={field.required}
                onChange={onChange}
              />
              {option}
            </label>
          ))}
        </div>
      );

    case "file":
      return (
        <div>
          <label>{field.label}</label>
          <input type="file" name={field.name} onChange={onChange} />
        </div>
      );

    case "select":
      return (
        <div>
          <label>{field.label}</label>
          <select
            name={field.name}
            value={value || ""}
            required={field.required}
            onChange={onChange}
          >
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );

    default:
      return null;
  }
};

export default InputField;
