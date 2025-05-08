import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { PlayCircle, Music, Award, Heart } from 'lucide-react'

import ericandmike from '../../public/ericandmike.jpg'

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-card overflow-hidden">
        <div className="content-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground">
              From open mics to headlining festivals, the journey of Red Healer
              has been one of passion, perseverance, and healing through music.
            </p>
          </div>
        </div>
      </section>

      {/* Band Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">The Journey</h2>
              <p className="text-muted-foreground mb-4">
              Eric Clemens built his foundation of music in open mics during his teenage years.  Testing out song after song, this is where the music grew from rudimentary chords to the stories they are today.
              </p>
              <p className="text-muted-foreground mb-6">
              Alongside his friend and roommate Mike Stull, they formed an acoustic duo that frequented Java Central, a coffee shop in Westerville, while in college.  They also released a handful of covers on YouTube.
              </p>
              <p className="text-muted-foreground mb-6">
              The pandemic in 2020 saw the end of live music for a time, and the band spent lots of time apart.  The decision to rebrand came with a vision of better days to come, and songs that would help bring that positivity and vivacity back to live music.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={ericandmike}
                  alt="Eric Clemens and Mike Stull"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute bottom-0 right-0 transform translate-y-1/4 bg-primary text-white p-4 rounded-lg shadow-lg">
                <span className="font-bold">Est. 2015</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}