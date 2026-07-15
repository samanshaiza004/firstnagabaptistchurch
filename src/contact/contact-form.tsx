import type { FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/useContactForm";
import type { ContactField } from "@/hooks/useContactForm";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} className="flex items-center gap-1 text-sm text-red-600">
      <AlertCircle className="h-3 w-3" aria-hidden="true" />
      {message}
    </p>
  );
}

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

  const fieldProps = (field: ContactField) => ({
    value: formData[field],
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => updateField(field, event.target.value),
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitForm();
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-muted p-8 text-center" role="status">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="mb-2 font-serif text-2xl font-semibold text-foreground">
          Message sent successfully
        </h2>
        <p className="mb-6 text-muted-foreground">
          Thank you for reaching out. We will respond as soon as we can.
        </p>
        <Button onClick={resetForm} variant="outline">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-2 font-serif text-2xl font-bold text-foreground md:text-3xl">
        Send Us a Message
      </h2>
      <p className="mb-8 text-muted-foreground">
        Fill out the form below and we will respond as soon as we can.
      </p>

      {submitError && (
        <div
          className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <div>
            <h3 className="mb-1 font-medium text-red-800">
              Error sending message
            </h3>
            <p className="text-sm text-red-700">{submitError}</p>
          </div>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="absolute left-[-10000px]" aria-hidden="true">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            {...fieldProps("website")}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              name="firstName"
              autoComplete="given-name"
              maxLength={80}
              {...fieldProps("firstName")}
            />
            <FieldError id="firstName-error" message={errors.firstName} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              maxLength={80}
              {...fieldProps("lastName")}
            />
            <FieldError id="lastName-error" message={errors.lastName} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={254}
            {...fieldProps("email")}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={30}
            {...fieldProps("phone")}
          />
          <FieldError id="phone-error" message={errors.phone} />
          <p className="text-xs text-muted-foreground">
            Optional, but helpful if you would like us to call you.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            name="subject"
            maxLength={150}
            {...fieldProps("subject")}
          />
          <FieldError id="subject-error" message={errors.subject} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            maxLength={5000}
            {...fieldProps("message")}
          />
          <FieldError id="message-error" message={errors.message} />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending message…
            </>
          ) : (
            "Send message"
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Your information will only be used to respond to your message.
        </p>
      </form>
    </div>
  );
}
