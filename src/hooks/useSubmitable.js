import { useEffect, useState } from "react";

export default function useSubmitable(form, requiredFields) {
  const [submitable, setSubmitable] = useState(false);
  const requiredData = requiredFields.map((field) => form[field]);

  useEffect(() => {
    if (requiredData.every((field) => field) && requiredFields.length > 0) {
      setSubmitable(true);
    } else {
      setSubmitable(false);
    }
  }, [form]);

  return submitable;
}
