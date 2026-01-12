import { RegularServices } from "./regular-services"
import { SpecialEvents } from "./special-events"

export function EventsList() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <RegularServices />
          <SpecialEvents />
        </div>
      </div>
    </section>
  );
}
