import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PlayCircle, Calendar, Headphones, Disc, Users, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import MusicSection from '@/components/home/MusicSection'
import TourSection from '@/components/home/TourSection'
import NewsletterSection from '@/components/home/NewsletterSection'

import woof from '../public/woofsingle.png'
import rhlive from '../public/rhlive.jpg'
import eric from '../public/eric.jpg'
import mike from '../public/mike.jpg'
import kristin from '../public/kristin.jpg'
import kristen from '../public/kristen.jpg'
import will from '../public/will.jpg'
import julian from '../public/julian.jpg'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src={rhlive}
            alt="Red Healer Band performing live"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fade-in mb-4 text-shadow">
            RED HEALER
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in delay-100 text-shadow">
            Feel-Good Folk soul
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
            <Button size="lg" className="gap-2">
              <PlayCircle size={20} />
              Full Live Concert
            </Button>
            <Button size="lg" variant="outline" className="bg-black/30 text-white border-white/30 gap-2 hover:bg-black/50">
              <Calendar size={20} />
              Upcoming Shows
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="section-spacing bg-background">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Release</h2>
              <h3 className="text-2xl font-bold text-primary mb-6">Singles</h3>
              <p className="text-muted-foreground mb-6">
                A couple singles we worked on in 2024 that are part of a larger project -- more details to come!
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button className="gap-2">
                  <PlayCircle size={18} />
                  Listen Now
                </Button>
                <Button variant="outline" className="gap-2">
                  See All Albums
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">1. Woof!</span>
                  <span className="text-muted-foreground">4:32</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-medium">2. Cruise</span>
                  <span className="text-muted-foreground">3:58</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in delay-100">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={woof}
                  alt="Woof! Album Art"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-full p-4 shadow-lg">
                <Disc className="h-12 w-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <MusicSection />

      {/* About Section */}
      <section className="section-spacing bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Textured background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="content-container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About The Band</h2>
            <p className="text-muted-foreground text-lg">
            Red Healer fuses folk and soul with light-hearted lyricism that never takes itself too seriously.
            Inspired by the energy of the red heeler (Australian cattle dog).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Eric Clemens",
                role: "Vocals & Guitar",
                image: eric,
                delay: "delay-100"
              },
              {
                name: "Mike Stull",
                role: "Bass & Vocals",
                image: mike,
                delay: "delay-200"
              },
              {
                name: "Kristin Nicole",
                role: "Vocals",
                image: kristin,
                delay: "delay-300"
              },
              {
                name: "Kristen Elliott",
                role: "Violin & Vocals",
                image: kristen,
                delay: "delay-300"
              },
              {
                name: "Will Ash",
                role: "Drums",
                image: will,
                delay: "delay-300"
              },
              {
                name: "Julian Dittmer",
                role: "Keys",
                image: julian,
                delay: "delay-300"
              }
            ].map((member, index) => (
              <Card key={index} className={`bg-card/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden animate-fade-in ${member.delay}`}>
                <div className="aspect-[2/3] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in delay-400">
            <Button size="lg" asChild>
              <Link href="/about">
                <Users className="mr-2 h-5 w-5" />
                Read Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <TourSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Contact CTA Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="content-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Book Us For Your Event</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in delay-100">
            Looking to bring Red Healer to your venue, festival, or private event?
            We'd love to hear from you!
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-white/40 hover:bg-white/10 animate-fade-in delay-200"
            asChild
          >
            <Link href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}