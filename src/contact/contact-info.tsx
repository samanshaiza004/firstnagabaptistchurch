import { MapPin, Clock, Mail, Phone, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactDetails = [
  {
    icon: MapPin,
    title: "Location",
    primary: "Burton Hill Baptist Church",
    secondary: "Fort Worth, TX",
    note: "We worship at Burton Hill Baptist Church, who graciously hosts our services.",
  },
  {
    icon: Clock,
    title: "Service Times",
    primary: "Sunday Worship: 3:00 PM",
    secondary: "Fellowship follows after service",
    note: "Join us every Sunday for worship, teaching, and community.",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "firstnagabaptistchurch@yahoo.com",
    link: "mailto:firstnagabaptistchurch@yahoo.com",
  },
  {
    icon: Phone,
    title: "Phone",
    primary: "469 236-7545",
    link: "tel:+4692367545",
  },
];

export function ContactInfo() {
  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
        Contact Information
      </h2>
      <p className="text-muted-foreground mb-8">
        Find us at our worship location or reach out through any of the channels
        below.
      </p>

      <div className="space-y-4">
        {contactDetails.map((detail) => (
          <Card key={detail.title} className="border-border">
            <CardContent className="p-4 flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <detail.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {detail.title}
                </p>
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {detail.primary}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <p className="font-semibold text-foreground">
                    {detail.primary}
                  </p>
                )}
                {detail.secondary && (
                  <p className="text-sm text-muted-foreground">
                    {detail.secondary}
                  </p>
                )}
                {detail.note && (
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {detail.note}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Service times highlight */}
      <div className="mt-8 bg-primary text-primary-foreground rounded-lg p-6">
        <h3 className="font-serif text-lg font-semibold mb-4">
          Join Us This Sunday
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-2">
            <span className="text-primary-foreground/80">Sunday Worship</span>
            <span className="font-semibold">3:00 PM</span>
          </div>
          <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-2">
            <span className="text-primary-foreground/80">
              Fellowship and Refreshments
            </span>
            <span className="font-semibold">After Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}
