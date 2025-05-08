import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlayCircle, Disc, ExternalLink, Music, Headphones } from 'lucide-react'

// Sample albums data
const albums = [
  {
    id: "healing-echoes",
    title: "Healing Echoes",
    year: "2024",
    cover: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Our most personal album yet, exploring themes of healing, transformation, and connection. Recorded in the heart of the desert, this album captures the raw energy and spiritual journey of the band over the past year.",
    tracks: [
      { title: "Desert Calling", duration: "4:32" },
      { title: "Spirit Dance", duration: "3:58" },
      { title: "Red Moon Rising", duration: "5:17" },
      { title: "Canyon Dreams", duration: "4:45" },
      { title: "Healing Waters", duration: "6:12" },
      { title: "Mountain Echo", duration: "4:08" },
      { title: "Sunset Prayer", duration: "5:23" },
      { title: "Ancient Roads", duration: "3:47" },
      { title: "Starlight Journey", duration: "7:02" },
      { title: "Return to Source", duration: "5:51" }
    ]
  }
]

// Singles and EPs
const otherReleases = [
  {
    title: "Winter Sessions",
    type: "EP",
    year: "2021",
    cover: "https://images.pexels.com/photos/3323694/pexels-photo-3323694.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tracks: ["Winter Light", "Frozen Lake", "Fireside", "First Snow"]
  }
]

export default function MusicPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-card overflow-hidden">
        <div className="content-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Music</h1>
            <p className="text-xl text-muted-foreground">
              Page under construction.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Album */}
      {/* <section className="py-16 md:py-24 bg-background">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-muted inline-block px-3 py-1 rounded-full text-sm font-medium text-muted-foreground mb-4">
                Featured Album
              </div>
              <h2 className="text-3xl font-bold mb-2">Woof! [Single]</h2>
              <p className="text-primary mb-6">Released January 2024</p>
              
              <p className="text-muted-foreground mb-6">
                Our most personal album yet, exploring themes of healing, transformation, and connection.
                Recorded in the heart of the desert, this album captures the raw energy and spiritual journey
                of the band over the past year.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button className="gap-2">
                  <PlayCircle size={18} />
                  Listen Now
                </Button>
                <Button variant="outline" className="gap-2">
                  View Album Details
                </Button>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-medium">1. Desert Calling</span>
                  <span className="text-muted-foreground">4:32</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-medium">2. Spirit Dance</span>
                  <span className="text-muted-foreground">3:58</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-medium">3. Red Moon Rising</span>
                  <span className="text-muted-foreground">5:17</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-medium">4. Canyon Dreams</span>
                  <span className="text-muted-foreground">4:45</span>
                </div>
                <Button variant="link" className="px-0">
                  See full tracklist
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Indie Folk", "Americana", "Alternative", "Desert Rock"].map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Healing Echoes Album Cover"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-full p-4 shadow-lg">
                <Disc className="h-10 w-10" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Albums Section */}
      {/* <section className="py-16 bg-card">
        <div className="content-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Albums</h2>
          
          <Tabs defaultValue="grid" className="w-full mb-8">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
              
              <div className="text-muted-foreground">
                <span className="font-medium">{albums.length}</span> albums
              </div>
            </div>
            
            <TabsContent value="grid" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {albums.map((album) => (
                  <Card key={album.id} className="bg-background overflow-hidden hover:shadow-md transition-all duration-300">
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
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <h3 className="font-bold text-xl">{album.title}</h3>
                        <p className="text-muted-foreground">{album.year}</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {album.description}
                      </p>
                      <Button variant="default" size="sm" className="w-full gap-2" asChild>
                        <Link href={`/music/${album.id}`}>
                          <Music size={16} />
                          View Album
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="list" className="mt-6">
              <div className="space-y-4">
                {albums.map((album) => (
                  <div 
                    key={album.id} 
                    className="bg-background rounded-lg border border-border p-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4 lg:w-1/6 shrink-0">
                        <div className="relative aspect-square rounded-md overflow-hidden">
                          <Image
                            src={album.cover}
                            alt={album.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                          <div>
                            <h3 className="font-bold text-xl">{album.title}</h3>
                            <p className="text-primary">{album.year}</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <Button variant="outline" size="sm" className="gap-2">
                              <PlayCircle size={16} />
                              Play Album
                            </Button>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {album.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-4">
                          {album.tracks.slice(0, 6).map((track, idx) => (
                            <div key={idx} className="flex justify-between items-center">
                              <span className="text-sm font-medium">{idx+1}. {track.title}</span>
                              <span className="text-sm text-muted-foreground">{track.duration}</span>
                            </div>
                          ))}
                          {album.tracks.length > 6 && (
                            <div className="text-sm text-primary">
                              +{album.tracks.length - 6} more tracks
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <Button variant="default" size="sm" asChild>
                            <Link href={`/music/${album.id}`}>
                              View Album Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}
      
      {/* Singles & EPs Section */}
      {/* <section className="py-16 bg-background">
        <div className="content-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Singles & EPs</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherReleases.map((release, index) => (
              <Card key={index} className="bg-card overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative aspect-square">
                  <Image
                    src={release.cover}
                    alt={release.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" size="icon" className="rounded-full border-white/50 text-white">
                      <PlayCircle className="h-8 w-8" />
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary rounded-full px-3 py-1 text-xs font-bold text-white">
                    {release.type}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-xl">{release.title}</h3>
                    <p className="text-muted-foreground">{release.year}</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    {release.tracks.map((track, idx) => (
                      <div key={idx} className="flex items-center">
                        <PlayCircle size={14} className="text-primary mr-2" />
                        <span className="text-sm">{track}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Headphones size={16} />
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Streaming Platforms */}
      {/* <section className="py-16 bg-accent">
        <div className="content-container text-center">
          <h2 className="text-3xl font-bold mb-6">Listen On Your Favorite Platform</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Red Healer's music is available on all major streaming platforms. 
            Follow us to stay updated on our latest releases.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { platform: "Spotify", url: "https://spotify.com" },
              { platform: "Apple Music", url: "https://music.apple.com" },
              { platform: "YouTube Music", url: "https://music.youtube.com" },
              { platform: "Amazon Music", url: "https://music.amazon.com" },
              { platform: "Bandcamp", url: "https://bandcamp.com" },
              { platform: "SoundCloud", url: "https://soundcloud.com" }
            ].map((platform, index) => (
              <a 
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-background hover:bg-background/90 rounded-full text-foreground font-medium transition-colors duration-200"
              >
                {platform.platform}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
          
          <Button variant="default" size="lg" className="gap-2">
            <Headphones size={18} />
            See All Platforms
          </Button>
        </div>
      </section> */}
    </div>
  )
}