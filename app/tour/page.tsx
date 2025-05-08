"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Ticket, 
  Filter, 
  Search,
  AlertCircle
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
/* import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion" */
import { Alert, AlertDescription } from '@/components/ui/alert'

import nataliescrowd from '../../public/nataliescrowd.jpg'

// Sample tour data
const allTourDates = [
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

// FAQ data
const faqItems = [
  {
    question: "Do I need to print my tickets?",
    answer: "No, digital tickets on your phone are accepted at all venues. Simply show the QR code at the entrance."
  },
  {
    question: "What time should I arrive?",
    answer: "We recommend arriving at least 30-45 minutes before the show starts. This allows time for parking, security checks, and finding your seat."
  },
  {
    question: "Are there VIP packages available?",
    answer: "Yes, we offer VIP packages that include early entry, a pre-show acoustic set, and exclusive merchandise. These can be purchased when buying tickets."
  },
  {
    question: "What's your refund policy?",
    answer: "Tickets are generally non-refundable, but can be transferred to another person. In case of event cancellation, full refunds will be processed automatically."
  },
  {
    question: "Do you offer accessible seating?",
    answer: "Yes, all venues provide accessible seating options. Please contact the venue directly or note accessibility requirements when purchasing tickets."
  },
  {
    question: "What's the policy on photography?",
    answer: "Non-professional photography is allowed, but no flash photography or professional cameras with detachable lenses. Video recording is not permitted."
  }
]

export default function TourPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [regionFilter, setRegionFilter] = useState('all')
  
  // Filter tour dates based on search term and region filter
  const filteredTourDates = allTourDates.filter(tourDate => {
    const matchesSearch = 
      tourDate.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tourDate.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tourDate.date.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesRegion = regionFilter === 'all' || tourDate.region === regionFilter
    
    return matchesSearch && matchesRegion
  })

  // Group tour dates by month
  const groupedTourDates = filteredTourDates.reduce((acc, tourDate) => {
    const month = tourDate.date.split(',')[0].split(' ')[0] // Extract month name
    if (!acc[month]) {
      acc[month] = []
    }
    acc[month].push(tourDate)
    return acc
  }, {} as Record<string, typeof allTourDates>)

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-card overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src={nataliescrowd}
            alt="Concert crowd"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="content-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 py-24">Tour Dates</h1>
            {/* <p className="text-xl text-muted-foreground mb-8">
              Join us on our 2025 Healing Echoes Tour. Experience the music live and 
              connect with us in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Ticket className="h-5 w-5" />
                Get Tickets
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Tour Dates
              </Button>
            </div> */}
          </div>
        </div>
      </section>
      
      {/* Tour Dates Section */}
      <section className="py-16 bg-background">
        <div className="content-container">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 pb-6 border-b border-border">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by city, venue or date" 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-48">
                <Select value={regionFilter} onValueChange={setRegionFilter}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Filter by region" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="West">West</SelectItem>
                    <SelectItem value="Midwest">Midwest</SelectItem>
                    <SelectItem value="South">South</SelectItem>
                    <SelectItem value="East">East</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Upcoming Shows</h2>
            <p className="text-muted-foreground">
              {filteredTourDates.length} {filteredTourDates.length === 1 ? 'show' : 'shows'} found
            </p>
          </div>

          {/* No results message */}
          {filteredTourDates.length === 0 && (
            <Alert className="mb-8">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                No tour dates match your search. Try adjusting your filters or check back later for updates.
              </AlertDescription>
            </Alert>
          )}
          
          {/* Tour dates grouped by month */}
          <div className="space-y-10">
            {Object.entries(groupedTourDates).map(([month, dates]) => (
              <div key={month}>
                <h3 className="text-xl font-bold mb-4">{month}</h3>
                <div className="grid gap-4">
                  {dates.map((event) => (
                    <Card 
                      key={event.id} 
                      className="tour-card hover:bg-card/80"
                    >
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-6 items-center p-4 md:p-6">
                          <div className="md:col-span-1 mb-4 md:mb-0">
                            <div className="flex md:flex-col md:items-start">
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
                            <Badge variant={
                              event.status === "Sold Out" ? "secondary" : 
                              event.status === "Selling Fast" ? "destructive" : 
                              "default"
                            }>
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
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Venue Information */}
      {/* <section className="py-16 bg-card">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Venue Information</h2>
            <p className="text-muted-foreground">
              All venues are carefully selected to provide the best possible experience for our fans.
              For venue-specific details, please check the individual event pages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Doors Open</h3>
              <p className="text-muted-foreground">
                Doors typically open 1 hour before the show start time.
                We recommend arriving early to avoid lines.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Directions</h3>
              <p className="text-muted-foreground">
                Detailed directions and parking information are available
                on each venue's website and your ticket confirmation.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg text-center">
              <Ticket className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Box Office</h3>
              <p className="text-muted-foreground">
                Box offices open 2 hours prior to the show.
                Will-call tickets can be picked up with ID.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* FAQ Section */}
      {/* <section className="py-16 bg-background">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-10 text-center">
              <p className="text-muted-foreground mb-4">
                Have a question that's not answered here?
              </p>
              <Button asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Newsletter Section */}
      <section className="py-16 bg-accent">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Sign up for our newsletter to receive tour updates, presale codes, and exclusive content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background"
              />
              <Button type="submit" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}