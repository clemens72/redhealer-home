import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Disc, PlayCircle, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

import woof from '../../public/woofsingle.png'
import cashmerefeel from '../../public/cashmerefeel.jpg'
import quarantep from '../../public/quarantep.jpg'


const albums = [
  {
    title: "Cruise [Single]",
    year: "2024",
    cover: woof,
    link: "/music/cruise"
  },
  {
    title: "Woof! [Single]",
    year: "2024",
    cover: woof,
    link: "/music/woof"
  },
  {
    title: "QuarantEP",
    year: "2020",
    cover: quarantep,
    link: "/music/quarantep"
  },
  {
    title: "Cashmere Feel",
    year: "2019",
    cover: cashmerefeel,
    link: "/music/cashmere-feel"
  }
]

export default function MusicSection() {
  return (
    <section className="section-spacing bg-card">
      <div className="content-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="md:max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Music</h2>
            <p className="text-muted-foreground">
              Explore our discography, from our latest release to our earliest works. 
              Each album represents a unique chapter in our musical journey.
            </p>
          </div>
          <Button className="mt-4 md:mt-0" asChild>
            <Link href="/music">
              View All Music <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {albums.map((album, index) => (
            <Card 
              key={index}
              className="bg-background overflow-hidden border border-border hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" size="icon" className="rounded-full border-white/50 text-white">
                    <PlayCircle className="h-8 w-8" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{album.title}</h3>
                    <p className="text-muted-foreground">{album.year}</p>
                  </div>
                  <Disc className="h-5 w-5 text-primary" />
                </div>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href={album.link}>View Album</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <h3 className="font-bold text-xl mb-4">Listen on your favorite platform</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { platform: "Spotify", url: "https://spotify.redhealerband.com/" },
                { platform: "Apple Music", url: "https://music.apple.com/us/artist/red-healer/1623753967" },
                { platform: "YouTube Music", url: "https://music.youtube.com/channel/UCOV7QfuCf80htLC21MDSSIQ" },
                { platform: "Amazon Music", url: "https://www.amazon.com/music/player/artists/B0B14M2DMT/red-healer" },
                { platform: "YouTube Videos", url: "https://youtube.com/@redhealerband" },
                { platform: "Clemens & Co Youtube", url: "https://youtube.com/@clemensandco" }
              ].map((platform, index) => (
                <a 
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  {platform.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}