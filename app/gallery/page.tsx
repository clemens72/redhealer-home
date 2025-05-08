"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs'
import { Play, X, ChevronLeft, ChevronRight, Camera, Youtube } from 'lucide-react'

// Photo gallery data
const photos = [
  // Live Performance Photos
  {
    id: 1,
    src: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Red Healer performing live on stage",
    category: "live",
    featured: true
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Concert lighting and atmosphere",
    category: "live"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Crowd at Red Healer concert",
    category: "live"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Stage view from audience perspective",
    category: "live"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Intimate acoustic performance",
    category: "live"
  },
  // Behind the Scenes Photos
  {
    id: 6,
    src: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Recording studio session",
    category: "behind-the-scenes",
    featured: true
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/4472026/pexels-photo-4472026.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Band rehearsal session",
    category: "behind-the-scenes"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/9809989/pexels-photo-9809989.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Writing session for new album",
    category: "behind-the-scenes"
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/7087660/pexels-photo-7087660.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Tour bus life",
    category: "behind-the-scenes"
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/4988131/pexels-photo-4988131.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Backstage moments",
    category: "behind-the-scenes"
  },
  // Press & Promo Photos
  {
    id: 11,
    src: "https://images.pexels.com/photos/8412419/pexels-photo-8412419.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Official band photo 2024",
    category: "press",
    featured: true
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/7170643/pexels-photo-7170643.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Album cover photoshoot",
    category: "press"
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/3388899/pexels-photo-3388899.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Press interview session",
    category: "press"
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/3389817/pexels-photo-3389817.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Magazine feature shoot",
    category: "press"
  }
]

// Video gallery data
const videos = [
  {
    id: 1,
    thumbnail: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Desert Calling - Official Music Video",
    duration: "4:32",
    category: "music-videos",
    featured: true,
    youtubeId: "dQw4w9WgXcQ" // Placeholder
  },
  {
    id: 2,
    thumbnail: "https://images.pexels.com/photos/354305/pexels-photo-354305.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Spirit Dance - Official Music Video",
    duration: "3:58",
    category: "music-videos",
    youtubeId: "dQw4w9WgXcQ" // Placeholder
  },
  {
    id: 3,
    thumbnail: "https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Red Moon Rising - Official Music Video",
    duration: "5:17",
    category: "music-videos",
    youtubeId: "dQw4w9WgXcQ" // Placeholder
  },
  {
    id: 4,
    thumbnail: "https://images.pexels.com/photos/3566708/pexels-photo-3566708.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Live at Red Rocks Amphitheatre (Full Show)",
    duration: "1:24:36",
    category: "live-performances",
    featured: true,
    youtubeId: "dQw4w9WgXcQ" // Placeholder
  },
  {
    id: 5,
    thumbnail: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "NPR Tiny Desk Concert",
    duration: "18:24",
    category: "live-performances",
    youtubeId: "dQw4w9WgXcQ" // Placeholder
  },
  {
    id: 6,
    thumbnail: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Making of 'Healing Echoes' - Documentary",
    duration: "42:18",
    category: "behind-the-scenes",
    featured: true,
    youtubeId: "dQw4w9WgXcQ" // Placeholder
  },
  {
    id: 7,
    thumbnail: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Studio Sessions - Recording 'Canyon Dreams'",
    duration: "12:45",
    category: "behind-the-scenes",
    youtubeId: "dQw4w9WgXcQ" // Placeholder
  }
]

export default function GalleryPage() {
  const [selectedTab, setSelectedTab] = useState('photos')
  const [photoFilter, setPhotoFilter] = useState('all')
  const [videoFilter, setVideoFilter] = useState('all')
  const [viewPhoto, setViewPhoto] = useState<number | null>(null)
  const [viewVideo, setViewVideo] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Filter photos based on selected category
  const filteredPhotos = photoFilter === 'all' ? 
    photos : 
    photos.filter(photo => photo.category === photoFilter)

  // Filter videos based on selected category
  const filteredVideos = videoFilter === 'all' ? 
    videos : 
    videos.filter(video => video.category === videoFilter)

  // Handle photo navigation
  const navigatePhoto = (direction: 'next' | 'prev') => {
    if (viewPhoto === null) return
    
    setIsAnimating(true)
    setTimeout(() => {
      const currentIndex = filteredPhotos.findIndex(photo => photo.id === viewPhoto)
      let newIndex
      
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % filteredPhotos.length
      } else {
        newIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      }
      
      setViewPhoto(filteredPhotos[newIndex].id)
      setIsAnimating(false)
    }, 300)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewPhoto !== null) {
        if (e.key === 'ArrowRight') navigatePhoto('next')
        if (e.key === 'ArrowLeft') navigatePhoto('prev')
        if (e.key === 'Escape') setViewPhoto(null)
      }
      if (viewVideo !== null) {
        if (e.key === 'Escape') setViewVideo(null)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [viewPhoto, viewVideo, filteredPhotos])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (viewPhoto !== null || viewVideo !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [viewPhoto, viewVideo])

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-card overflow-hidden">
        <div className="content-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Page under construction. Check back soon for more photos and videos from our journey.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Navigation */}
      {/* <section className="py-8 bg-background border-b border-border">
        <div className="content-container">
          <Tabs defaultValue="photos" value={selectedTab} onValueChange={setSelectedTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="photos" className="text-lg py-3">
                  <Camera className="mr-2 h-5 w-5" />
                  Photos
                </TabsTrigger>
                <TabsTrigger value="videos" className="text-lg py-3">
                  <Youtube className="mr-2 h-5 w-5" />
                  Videos
                </TabsTrigger>
              </TabsList>
            </div> */}
            
            {/* Photos Tab Content */}
            {/* <TabsContent value="photos" className="mt-4">
              <div className="flex justify-center mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button 
                    variant={photoFilter === 'all' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setPhotoFilter('all')}
                  >
                    All Photos
                  </Button>
                  <Button 
                    variant={photoFilter === 'live' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setPhotoFilter('live')}
                  >
                    Live Performances
                  </Button>
                  <Button 
                    variant={photoFilter === 'behind-the-scenes' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setPhotoFilter('behind-the-scenes')}
                  >
                    Behind the Scenes
                  </Button>
                  <Button 
                    variant={photoFilter === 'press' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setPhotoFilter('press')}
                  >
                    Press & Promo
                  </Button>
                </div>
              </div> */}
              
              {/* Featured Photos */}
              {/* {photoFilter === 'all' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Photos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {photos.filter(photo => photo.featured).map((photo) => (
                      <div 
                        key={photo.id} 
                        className="gallery-item aspect-[4/3] cursor-pointer"
                        onClick={() => setViewPhoto(photo.id)}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-medium">View Photo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
              
              {/* Photo Grid */}
              {/* <div>
                <h2 className="text-2xl font-bold mb-6">
                  {photoFilter === 'all' ? 'All Photos' : 
                   photoFilter === 'live' ? 'Live Performance Photos' :
                   photoFilter === 'behind-the-scenes' ? 'Behind the Scenes Photos' :
                   'Press & Promo Photos'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredPhotos.map((photo) => (
                    <div 
                      key={photo.id} 
                      className="gallery-item aspect-square cursor-pointer"
                      onClick={() => setViewPhoto(photo.id)}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium">View Photo</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent> */}
            
            {/* Videos Tab Content */}
            {/* <TabsContent value="videos" className="mt-4">
              <div className="flex justify-center mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button 
                    variant={videoFilter === 'all' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setVideoFilter('all')}
                  >
                    All Videos
                  </Button>
                  <Button 
                    variant={videoFilter === 'music-videos' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setVideoFilter('music-videos')}
                  >
                    Music Videos
                  </Button>
                  <Button 
                    variant={videoFilter === 'live-performances' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setVideoFilter('live-performances')}
                  >
                    Live Performances
                  </Button>
                  <Button 
                    variant={videoFilter === 'behind-the-scenes' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setVideoFilter('behind-the-scenes')}
                  >
                    Behind the Scenes
                  </Button>
                </div>
              </div>
               */}
              {/* Featured Videos */}
              {/* {videoFilter === 'all' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {videos.filter(video => video.featured).map((video) => (
                      <div 
                        key={video.id} 
                        className="gallery-item cursor-pointer"
                        onClick={() => setViewVideo(video.id)}
                      >
                        <div className="relative aspect-video">
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <Play className="h-12 w-12 text-white" />
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <h3 className="font-medium mt-2">{video.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
              
              {/* Video Grid */}
              {/* <div>
                <h2 className="text-2xl font-bold mb-6">
                  {videoFilter === 'all' ? 'All Videos' : 
                   videoFilter === 'music-videos' ? 'Music Videos' :
                   videoFilter === 'live-performances' ? 'Live Performances' :
                   'Behind the Scenes Videos'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {filteredVideos.map((video) => (
                    <div 
                      key={video.id} 
                      className="gallery-item cursor-pointer"
                      onClick={() => setViewVideo(video.id)}
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <h3 className="font-medium mt-2">{video.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}
      
      {/* Photo Lightbox Modal */}
      {/* {viewPhoto !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary p-2"
            onClick={() => setViewPhoto(null)}
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary p-2"
            onClick={() => navigatePhoto('prev')}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <div className={`relative max-w-5xl max-h-[85vh] transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {filteredPhotos.find(photo => photo.id === viewPhoto) && (
              <div className="relative">
                <div className="relative max-h-[75vh]">
                  <Image
                    src={filteredPhotos.find(photo => photo.id === viewPhoto)?.src || ''}
                    alt={filteredPhotos.find(photo => photo.id === viewPhoto)?.alt || ''}
                    width={1200}
                    height={800}
                    style={{ objectFit: 'contain', maxHeight: '75vh', width: 'auto', margin: '0 auto' }}
                  />
                </div>
                <div className="mt-4 text-white text-center">
                  <p className="text-lg">{filteredPhotos.find(photo => photo.id === viewPhoto)?.alt}</p>
                </div>
              </div>
            )}
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary p-2"
            onClick={() => navigatePhoto('next')}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
       */}
      {/* Video Modal */}
      {/* {viewVideo !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-primary p-2"
              onClick={() => setViewVideo(null)}
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="relative w-full aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videos.find(video => video.id === viewVideo)?.youtubeId}?autoplay=1`}
                title={videos.find(video => video.id === viewVideo)?.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{videos.find(video => video.id === viewVideo)?.title}</h3>
            </div>
          </div>
        </div>
      )}
       */}
      {/* Instagram Feed Section */}
      {/* <section className="py-16 bg-card">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Follow Us on Instagram</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow us on Instagram for daily updates, behind-the-scenes content, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <a 
                key={index}
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gallery-item aspect-square"
              >
                <Image
                  src={`https://images.pexels.com/photos/${1000000 + index}/pexels-photo-${1000000 + index}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                  alt="Instagram post"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View on Instagram</span>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                View Instagram Profile
              </a>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}