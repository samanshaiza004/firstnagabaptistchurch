import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// Validation schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phone: Yup.string()
    .nullable()
    .notRequired()
    .matches(/^[+]?[1-9]\d{0,15}$/, {
      message: "Please enter a valid phone number",
      excludeEmptyString: true,
    }),

  subject: Yup.string()
    .trim()
    .min(5, "Subject must be at least 5 characters")
    .required("Subject is required"),
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

// Initial form values
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  if (isSubmitted) {
    return (
      <div className="bg-muted rounded-lg p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out! We will get back to you as soon as
          possible.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
        try {
          const response = await fetch("/.netlify/functions/contact-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          const result = await response.json();

          if (!response.ok || !result.success) {
            throw new Error(
              result.error || "Failed to send message. Please try again."
            );
          }

          setIsSubmitted(true);
          resetForm();
        } catch (error) {
          console.error("Form submission error:", error);
          setStatus({
            error:
              error instanceof Error
                ? error.message
                : "An unexpected error occurred. Please try again.",
          });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status, errors, touched }) => (
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
            Send Us a Message
          </h2>
          <p className="text-muted-foreground mb-8">
            Fill out the form below and we will respond as soon as we can.
          </p>

          {/* Error Alert */}
          {status?.error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3 mb-6">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-800 mb-1">
                  Error Sending Message
                </h4>
                <p className="text-sm text-red-700">{status.error}</p>
              </div>
            </div>
          )}

          <Form className="space-y-6">
            {/* Name Fields */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Field
                  as={Input}
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  className={
                    errors.firstName && touched.firstName
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }
                />
                <ErrorMessage name="firstName">
                  {(msg) => (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {msg}
                    </p>
                  )}
                </ErrorMessage>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Field
                  as={Input}
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  className={
                    errors.lastName && touched.lastName
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }
                />
                <ErrorMessage name="lastName">
                  {(msg) => (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {msg}
                    </p>
                  )}
                </ErrorMessage>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className={
                  errors.email && touched.email
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {msg}
                  </p>
                )}
              </ErrorMessage>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Field
                as={Input}
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                className={
                  errors.phone && touched.phone
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }
              />
              <ErrorMessage name="phone">
                {(msg) => (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {msg}
                  </p>
                )}
              </ErrorMessage>
              <p className="text-xs text-muted-foreground">
                Optional, but helpful for us to contact you
              </p>
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <Label htmlFor="subject">
                Subject <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Input}
                id="subject"
                name="subject"
                placeholder="How can we help?"
                className={
                  errors.subject && touched.subject
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }
              />
              <ErrorMessage name="subject">
                {(msg) => (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {msg}
                  </p>
                )}
              </ErrorMessage>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message">
                Message <span className="text-red-500">*</span>
              </Label>
              <Field
                as={Textarea}
                id="message"
                name="message"
                placeholder="Tell us more about your inquiry, prayer request, or question..."
                rows={5}
                className={
                  errors.message && touched.message
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }
              />
              <ErrorMessage name="message">
                {(msg) => (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {msg}
                  </p>
                )}
              </ErrorMessage>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                "Send Message"
              )}
            </Button>

            {/* Privacy Notice */}
            <p className="text-xs text-muted-foreground text-center">
              Your information is secure and will only be used to respond to
              your message.
            </p>
          </Form>
        </div>
      )}
    </Formik>
  );
}
