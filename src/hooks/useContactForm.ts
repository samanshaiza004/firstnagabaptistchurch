/* eslint-disable no-useless-escape */
import { useState, useCallback } from "react";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export interface UseContactFormReturn {
  formData: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
  submitError: string | null;
  updateField: (field: keyof ContactFormData, value: string) => void;
  validateForm: () => boolean;
  submitForm: (useNetlifyFunction?: boolean) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const initialErrors: ContactFormErrors = {};

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));

      // Clear error for this field when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }

      // Clear submit error when user makes changes
      if (submitError) {
        setSubmitError(null);
      }
    },
    [errors, submitError]
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: ContactFormErrors = {};

    // Required field validations
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // Optional phone validation (if provided)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ""))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const submitForm = useCallback(
    async (useNetlifyFunction: boolean = false): Promise<void> => {
      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);
      setSubmitError(null);

      try {
        if (useNetlifyFunction) {
          // Use Netlify Function for advanced email handling
          const response = await fetch("/.netlify/functions/contact-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          const result = await response.json();

          if (!response.ok || !result.success) {
            throw new Error(
              result.error || "Failed to send message. Please try again."
            );
          }
        } else {
          // Use Netlify Forms (built-in)
          const formDataToSend = new FormData();

          // Add form fields
          Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
          });

          // Add additional fields for email formatting
          const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;
          formDataToSend.append("fullName", fullName);

          // Format email content
          const emailContent = `
Subject: ${formData.subject}

From: ${fullName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

Message:
${formData.message}

---
This message was sent from the First Naga Baptist Church website contact form.
        `.trim();

          formDataToSend.append("formattedMessage", emailContent);

          // Submit to Netlify Forms
          const response = await fetch("/", {
            method: "POST",
            body: formDataToSend,
          });

          if (!response.ok) {
            throw new Error("Failed to send message. Please try again.");
          }
        }

        setIsSubmitted(true);
        setFormData(initialFormData); // Reset form on success
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm]
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors(initialErrors);
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
    validateForm,
    submitForm,
    resetForm,
  };
}
