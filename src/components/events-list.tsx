import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";

type EventListProps = {
  events: EventoEvent[];
};
export default function EventsList({ events }: EventListProps) {
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
