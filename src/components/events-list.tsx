import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";
import { sleep } from "@/lib/utils";

type EventListProps = {
  city: string;
};

export default async function EventsList({ city }: EventListProps) {
  await sleep(3000);
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
