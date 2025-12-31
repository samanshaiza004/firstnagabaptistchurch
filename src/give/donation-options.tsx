
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Smartphone, QrCode } from "lucide-react"

const donationMethods = [
  {
    name: "PayPal",
    description: "Secure online payments with buyer protection",
    contact: "firstnagabaptistchurch@yahoo.com",
    instructions: [
      "Visit paypal.com or use the PayPal app",
      "Send payment to: firstnagabaptistchurch@yahoo.com",
      "Include 'Donation' in the payment notes",
      "All transactions are secure and encrypted",
    ],
    color: "bg-[#0070ba]",
  },
  {
    name: "Zelle",
    description: "Fast, free bank-to-bank transfers",
    contact: "(817) 724-6922",
    instructions: [
      "Open your banking app with Zelle",
      "Send to phone: (817) 724-6922",
      "Enter your donation amount",
      "Complete the secure transfer",
    ],
    color: "bg-[#6d1ed4]",
  },
]


export function DonationOptions() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-secondary-foreground uppercase tracking-wider mb-2">Ways to Give</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Donation Method
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scan the QR code with your phone camera or payment app to make a secure donation. All transactions are
            encrypted and protected.
          </p>
        </div>

        {/* QR Code Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {donationMethods.map((method) => (
            <Card key={method.name} className="overflow-hidden border-2 hover:border-primary/30 transition-colors">
              <CardHeader className={`${method.color} text-white`}>
                <div className="flex items-center gap-3">
                  <QrCode className="w-6 h-6" />
                  <div>
                    <CardTitle className="text-xl">{method.name}</CardTitle>
                    <CardDescription className="text-white/80">{method.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Contact Info */}
                <div className="bg-accent/50 p-4 rounded-lg mb-6 text-center">
                  <p className="font-semibold text-foreground mb-1">{method.name} Contact:</p>
                  <p className="text-lg font-mono text-primary">{method.contact}</p>
                </div>

                {/* Donation Image */}
                <div className="bg-white p-4 rounded-xl shadow-inner mb-6 mx-auto w-fit">
                  <img
                    src={method.name === "PayPal" ? "/paypal.jpg" : "/zelle.jpg"}
                    alt={`${method.name} donation information`}
                    className="w-48 h-48 object-contain"
                  />
                </div>

                {/* Instructions */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-primary" />
                    How to Donate
                  </h4>
                  <ol className="space-y-2">
                    {method.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium">
                          {index + 1}
                        </span>
                        {instruction}
                      </li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Suggested Amounts 
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-center text-foreground mb-6">Suggested Giving Amounts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suggestedAmounts.map((item) => (
              <div
                key={item.amount}
                className="text-center p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors"
              >
                <p className="font-serif text-2xl font-bold text-primary mb-1">{item.amount}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
*/}
        {/* Security Notice */}
        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <Shield className="w-5 h-5 text-green-600" />
          <p>All donations are secure, encrypted, and tax-deductible</p>
        </div>
      </div>
    </section>
  )
}
