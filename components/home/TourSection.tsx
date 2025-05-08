"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock, ExternalLink, Ticket } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

// Sample tour data
const tourDates = [
  {
    id: 1,
    date: "May 23, 2025",
    venue: "St Mary's Food Truck Fest",
    location: "684 S 3rd St, Columbus, OH",
    time: "5:00 PM",
    status: "Free",
    ticketLink: "none",
    region: "West",
    country: "USA"
  },
  {
    id: 2,
    date: "June 22, 2025",
    venue: "Plain City Music Series [Trio]",
    location: "Pastime Park, Plain City, OH",
    time: "7:00 PM",
    status: "Free",
    ticketLink: "none",
    region: "West",
    country: "USA"
  },
  {
    id: 3,
    date: "June 28, 2025",
    venue: "Comfest - Gazebo Stage",
    location: "Goodale Park, Columbus, OH",
    time: "9:00 PM",
    status: "Free",
    ticketLink: "none",
    region: "West",
    country: "USA"
  }
]

export default function TourSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedTours = showAll ? tourDates : tourDates.slice(0, 4)

  return (
    <section className="section-spacing bg-background">
      <div className="content-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="md:max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Tour Dates</h2>
            {/* <p className="text-muted-foreground">
              Join us on our 2025 Healing Echoes Tour. Experience the music live and
              connect with us in person.
            </p> */}
          </div>
          <Button className="mt-4 md:mt-0" asChild>
            <Link href="/tour">
              View All Dates <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4">
          {displayedTours.map((event, index) => (
            <Card
              key={event.id}
              className="tour-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-6 items-center p-4 md:p-6">
                  <div className="md:col-span-1 mb-4 md:mb-0">
                    <div className="flex md:flex-col md:items-center">
                      <Calendar className="h-5 w-5 text-primary mr-2 md:mr-0 md:mb-2" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                  </div>

                  <div className="md:col-span-2 mb-4 md:mb-0">
                    <h3 className="font-bold text-lg">{event.venue}</h3>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="md:col-span-1 mb-4 md:mb-0">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <div className="md:col-span-1 mb-4 md:mb-0">
                    <Badge variant={event.status === "Sold Out" ? "secondary" : "default"}>
                      {event.status}
                    </Badge>
                  </div>

                  <div className="md:col-span-1 flex justify-start md:justify-end">
                    {/* <Button
                      variant={event.status === "Sold Out" ? "outline" : "default"}
                      disabled={event.status === "Sold Out"}
                      asChild
                    >
                      <a href={event.ticketLink} target="_blank" rel="noopener noreferrer">
                        <Ticket className="mr-2 h-4 w-4" />
                        {event.status === "Sold Out" ? "Sold Out" : "Tickets"}
                      </a>
                    </Button> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAll && tourDates.length > 4 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="animate-fade-in"
            >
              Show All Tour Dates
            </Button>
          </div>
        )}

        <div className="mt-12 text-center animate-fade-in">
          <h3 className="text-xl font-bold mb-4">Can't find a show near you?</h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            We're adding new dates regularly. Subscribe to our newsletter to be
            the first to know when we announce shows in your area.
          </p>
          <Button asChild>
            <Link href="/contact">
              Request a Show
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}