import { useCallback, useState } from "react";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
}

export type ContactField = keyof ContactFormData;
export type ContactFormErrors = Partial<Record<ContactField, string>>;

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (data.firstName.trim().length < 2) {
    errors.firstName = "First name must be at least 2 characters";
  }
  if (data.lastName.trim().length < 2) {
    errors.lastName = "Last name must be at least 2 characters";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  const normalizedPhone = data.phone.replace(/[\s\-().]/g, "");
  if (normalizedPhone && !/^\+?[1-9]\d{6,14}$/.test(normalizedPhone)) {
    errors.phone = "Please enter a valid phone number";
  }
  if (data.subject.trim().length < 5) {
    errors.subject = "Subject must be at least 5 characters";
  }
  if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

export function useContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = useCallback((field: ContactField, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError(null);
  }, []);

  const submitForm = useCallback(async () => {
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/.netlify/functions/contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.error || "Failed to send your message. Please try again."
        );
      }

      setFormData(initialFormData);
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    submitError,
    updateField,
    submitForm,
    resetForm,
  };
}
