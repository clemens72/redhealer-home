"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
import { 
  Mail, 
  Send, 
  User, 
  Phone, 
  MapPin, 
  Ticket, 
  Music, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  CheckCircle2 
} from 'lucide-react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    submitted: false,
    loading: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ ...formState, loading: true })
    
    // Simulate form submission
    setTimeout(() => {
      setFormState({
        ...formState,
        loading: false,
        submitted: true
      })
    }, 1500)
  }

  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      submitted: false,
      loading: false
    })
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-card overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/3532326/pexels-photo-3532326.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Background texture"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="content-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a question, want to book us, or just want to say hello?
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formState.submitted ? (
                    <div className="text-center py-8">
                      <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                      <Button onClick={resetForm}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="name" 
                            placeholder="Enter your name" 
                            className="pl-10"
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="Your email address"
                              className="pl-10"
                              value={formState.email}
                              onChange={(e) => setFormState({...formState, email: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number (Optional)</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="phone" 
                              type="tel" 
                              placeholder="Your phone number"
                              className="pl-10"
                              value={formState.phone}
                              onChange={(e) => setFormState({...formState, phone: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select 
                          value={formState.subject}
                          onValueChange={(value) => setFormState({...formState, subject: value})}
                          required
                        >
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="booking">Booking Request</SelectItem>
                            <SelectItem value="press">Press Inquiry</SelectItem>
                            <SelectItem value="collaboration">Collaboration Opportunity</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Enter your message here..." 
                          rows={6}
                          value={formState.message}
                          onChange={(e) => setFormState({...formState, message: e.target.value})}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={formState.loading}
                      >
                        {formState.loading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  We're always happy to hear from our fans, promoters, press, and anyone
                  interested in our music. Here's how you can reach us.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:info@redhealerband.com" className="text-muted-foreground hover:text-primary">
                        info@redhealerband.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a href="tel:+15125551234" className="text-muted-foreground hover:text-primary">
                        (512) 555-1234
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">
                        Austin, Texas, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              {/* Specific Inquiries */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Specific Inquiries</h2>
                
                <div className="space-y-6">
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <div className="flex items-center mb-3">
                      <Ticket className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-semibold">Booking & Management</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      For booking requests, tour information, and management inquiries:
                    </p>
                    <a href="mailto:booking@redhealerband.com" className="text-primary hover:underline">
                      booking@redhealerband.com
                    </a>
                  </div>
                  
                  <div className="bg-card rounded-lg p-4 border border-border">
                    <div className="flex items-center mb-3">
                      <Music className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-semibold">Press & Media</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      For press kits, interview requests, and media inquiries:
                    </p>
                    <a href="mailto:press@redhealerband.com" className="text-primary hover:underline">
                      press@redhealerband.com
                    </a>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              {/* Social Media */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media to stay updated with our latest news, music, and tour dates.
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-card/80 transition-colors rounded-full p-3 border border-border"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-card/80 transition-colors rounded-full p-3 border border-border"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-card/80 transition-colors rounded-full p-3 border border-border"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-card/80 transition-colors rounded-full p-3 border border-border"
                  >
                    <Youtube className="h-6 w-6" />
                    <span className="sr-only">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-card">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Don't hesitate to reach out to us directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How can I book Red Healer for a private event?",
                answer: "For private event bookings, please email us at booking@redhealerband.com with details about your event, including the date, location, and type of event."
              },
              {
                question: "Do you offer music licensing for films or commercials?",
                answer: "Yes, we do license our music for various media projects. Please contact us at info@redhealerband.com with details about your project for licensing information."
              },
              {
                question: "How can I get physical copies of your albums?",
                answer: "Physical copies of our albums are available at our shows and through our online store. You can also find them at select independent record stores."
              },
              {
                question: "Are you available for interviews or press features?",
                answer: "Yes, we're open to interview requests and press features. Please send your inquiry to press@redhealerband.com with information about your publication or platform."
              }
            ].map((item, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm border border-border">
                <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-background">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mailing List</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive updates on new music, tour dates, and exclusive content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
              />
              <Button type="submit" className="shrink-0">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}