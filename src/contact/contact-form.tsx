import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactForm() {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    submitError,
    updateField,
    submitForm,
    resetForm,
  } = useContactForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm(true); // Use Netlify Function for better email handling
  };

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
          Thank you for reaching out, {formData.firstName}! We will get back to
          you as soon as possible.
        </p>
        <Button onClick={resetForm} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
        Send Us a Message
      </h2>
      <p className="text-muted-foreground mb-8">
        Fill out the form below and we will respond as soon as we can.
      </p>

      {/* Netlify Form Configuration */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Hidden input for Netlify Forms */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field for spam protection */}
        <div style={{ display: "none" }}>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </div>

        {/* Error Alert */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-red-800 mb-1">
                Error Sending Message
              </h4>
              <p className="text-sm text-red-700">{submitError}</p>
            </div>
          </div>
        )}

        {/* Name Fields */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              placeholder="John"
              className={
                errors.firstName ? "border-red-500 focus:border-red-500" : ""
              }
            />
            {errors.firstName && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              placeholder="Doe"
              className={
                errors.lastName ? "border-red-500 focus:border-red-500" : ""
              }
            />
            {errors.lastName && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="john@example.com"
            className={
              errors.email ? "border-red-500 focus:border-red-500" : ""
            }
          />
          {errors.email && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="(555) 123-4567"
            className={
              errors.phone ? "border-red-500 focus:border-red-500" : ""
            }
          />
          {errors.phone && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.phone}
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            Optional, but helpful for us to contact you
          </p>
        </div>

        {/* Subject Field */}
        <div className="space-y-2">
          <Label htmlFor="subject">
            Subject <span className="text-red-500">*</span>
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={(e) => updateField("subject", e.target.value)}
            placeholder="How can we help?"
            className={
              errors.subject ? "border-red-500 focus:border-red-500" : ""
            }
          />
          {errors.subject && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Tell us more about your inquiry, prayer request, or question..."
            rows={5}
            className={
              errors.message ? "border-red-500 focus:border-red-500" : ""
            }
          />
          {errors.message && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.message}
            </p>
          )}
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
          Your information is secure and will only be used to respond to your
          message.
        </p>
      </form>
    </div>
  );
}
