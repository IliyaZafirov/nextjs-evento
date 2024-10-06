import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";

type EventListProps = {
  events: EventoEvent[];
};
export default function EventsList({ events }: EventListProps) {
  return (
    <section>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
