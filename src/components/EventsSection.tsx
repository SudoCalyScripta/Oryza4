import React, { useState } from 'react';
import { EVENTS_DATA } from '../data/mockData';
import { CommunityEvent } from '../types';
import { Clock, MapPin, Users, Check, Plus } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

export const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<CommunityEvent[]>(EVENTS_DATA);

  const toggleRsvp = (eventId: string) => {
    setEvents((prev) =>
      prev.map((evt) => {
        if (evt.id === eventId) {
          const newRsvp = !evt.rsvpd;
          return {
            ...evt,
            rsvpd: newRsvp,
            attendeesCount: newRsvp ? evt.attendeesCount + 1 : evt.attendeesCount - 1,
          };
        }
        return evt;
      })
    );
  };

  return (
    <section
      id="events"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#F7F3E8] text-[#252821] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-6 h-px bg-[#C8A96B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#657A52] flex items-center gap-1.5">
              <RiceGrainIcon className="w-3.5 h-3.5 text-[#C8A96B]" />
              Gatherings & Agenda
            </span>
            <span className="w-6 h-px bg-[#C8A96B]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[#354936] font-normal leading-tight">
            Community Events
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756653] font-light">
            Ruang temu, kebersamaan, dan musyawarah yang menghidupkan keakraban antar 25 keluarga.
          </p>
        </div>

        {/* Elegant Vertical Timeline */}
        <div className="relative border-l-2 border-[#354936]/15 ml-4 sm:ml-28 md:ml-36 space-y-12">
          {events.map((event) => (
            <div key={event.id} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Date Circle / Tag */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#354936] border-4 border-[#F7F3E8] shadow-sm flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-[#D8C28F]">
                <span className="w-2 h-2 rounded-full bg-[#C8A96B]" />
              </div>

              {/* Large Editorial Date Display on Desktop */}
              <div className="hidden sm:block absolute -left-32 md:-left-36 top-0 text-right w-24">
                <div className="font-display text-4xl text-[#354936] font-normal leading-none tracking-tight">
                  {event.day}
                </div>
                <div className="text-xs font-semibold tracking-[0.2em] text-[#657A52] uppercase mt-1">
                  {event.month} {event.year}
                </div>
              </div>

              {/* Timeline Event Card with Frost UI */}
              <div className="frost-glass rounded-3xl p-6 sm:p-8 border border-[#354936]/12 transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(53,73,54,0.15),0_0_20px_rgba(216,194,143,0.3)] hover:bg-white/95 hover:border-[#D8C28F]">
                {/* Mobile Date indicator */}
                <div className="sm:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#354936]/10 text-[#354936] text-xs font-mono font-semibold mb-3">
                  <span>
                    {event.day} {event.month} {event.year}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-[#354936] font-normal leading-snug">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#756653] leading-relaxed max-w-2xl font-light">
                      {event.description}
                    </p>
                  </div>

                  {/* RSVP Button */}
                  <button
                    onClick={() => toggleRsvp(event.id)}
                    className={`shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-sm ${
                      event.rsvpd
                        ? 'bg-[#354936] text-[#F7F3E8] hover:bg-[#D8C28F] hover:text-[#252821]'
                        : 'bg-white/90 border border-[#354936]/20 hover:bg-[#D8C28F] hover:text-[#252821] hover:border-[#D8C28F] text-[#354936]'
                    }`}
                  >
                    {event.rsvpd ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#D8C28F]" />
                        <span>Akan Hadir</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 text-[#354936]" />
                        <span>Konfirmasi Hadir</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Event Details Footer */}
                <div className="mt-6 pt-4 border-t border-[#354936]/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#756653]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#657A52]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#657A52]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto text-[#354936] font-medium">
                    <Users className="w-3.5 h-3.5 text-[#C8A96B]" />
                    <span>{event.attendeesCount} Keluarga Berencana Hadir</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
