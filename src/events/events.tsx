
import { EventsHero } from './events-hero';
import { EventsList } from './events-list';

export default function EventsPage() {
  return (
    <div className="events">
      <EventsHero />
      <EventsList />
    </div>
  );
}
