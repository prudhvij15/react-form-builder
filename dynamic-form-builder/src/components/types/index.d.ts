export interface FormField {
  type: "text" | "checkbox" | "radio" | "file" | "select"; // add more input types as needed
  label: string;
  name: string;
  options?: string[]; // For radio and select fields
  placeholder?: string;
  required?: boolean;
}

export interface FormConfig {
  fields: FormField[];
  onSubmit: (data: any) => void;
}
