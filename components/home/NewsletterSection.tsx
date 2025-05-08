"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      if (email && email.includes('@')) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    }, 1000)
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-card" style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.25) saturate(1.2)',
      }} />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-background/10 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/10 shadow-xl animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join Our Community</h2>
          <p className="text-lg text-white/90 mb-8">
            Subscribe to our newsletter for exclusive updates, behind-the-scenes content,
            and early access to tickets and merchandise.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
              />
              <Button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="shrink-0"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            
            {status === 'success' && (
              <Alert className="mt-4 bg-green-500/20 border-green-500/40 text-white">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>
                  Thanks for subscribing! Check your email to confirm.
                </AlertDescription>
              </Alert>
            )}
            
            {status === 'error' && (
              <Alert className="mt-4 bg-destructive/20 border-destructive/40 text-white">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Please enter a valid email address.
                </AlertDescription>
              </Alert>
            )}
          </form>
          
          <p className="text-sm text-white/70 mt-6">
            By subscribing, you agree to receive emails from Red Healer Band. 
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  )
}