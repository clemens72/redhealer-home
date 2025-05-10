import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PlayCircle, Calendar, Disc, Users, Mail } from 'lucide-react'
import MusicSection from '@/components/home/MusicSection'
import TourSection from '@/components/home/TourSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import AudioPlayer from '@/components/AudioPlayer'

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
            <Button size="lg" className="gap-2" asChild>
              <a href="https://youtube.com/@redhealerband" target="_blank" rel="noopener noreferrer">
                <PlayCircle size={20} />
                Full Live Concert
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-black/30 text-white border-white/30 gap-2 hover:bg-black/50" asChild>
              <a href="#tour">
                <Calendar size={20} />
                Upcoming Shows
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section id="latest-release" className="section-spacing bg-background">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Release</h2>
              <h3 className="text-2xl font-bold text-primary mb-6">Singles</h3>
              <p className="text-muted-foreground mb-6">
                A couple singles we worked on in 2024 that are part of a larger project -- more details to come!
              </p>

              <AudioPlayer
                tracks={[
                  {
                    url: "http://localhost:3000/woof.mp3",
                    title: "Woof!"
                  },
                  {
                    url: "http://localhost:3000/cruise.mp3",
                    title: "Cruise"
                  }
                ]}
              />

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Listen on your favorite platform</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href="https://spotify.redhealerband.com/" target="_blank" rel="noopener noreferrer">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                      Spotify
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href="https://music.youtube.com/channel/UCOV7QfuCf80htLC21MDSSIQ" target="_blank" rel="noopener noreferrer">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/>
                      </svg>
                      YouTube Music
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href="https://music.apple.com/us/artist/red-healer/1623753967" target="_blank" rel="noopener noreferrer">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      Apple Music
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href="https://instagram.com/redhealerband" target="_blank" rel="noopener noreferrer">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                  </Button>
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
      {/* <MusicSection /> */}

      {/* Tour Section */}
      <TourSection id="tour" />

      {/* About Section */}
      <section className="section-spacing bg-background relative overflow-hidden">
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
                delay: "delay-400"
              },
              {
                name: "Will Ash",
                role: "Drums",
                image: will,
                delay: "delay-500"
              },
              {
                name: "Julian Dittmer",
                role: "Keys",
                image: julian,
                delay: "delay-600"
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