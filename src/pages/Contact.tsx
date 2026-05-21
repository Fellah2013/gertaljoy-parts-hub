import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you shortly.');
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-neutral-900">Contact Us</h1>
          <p className="text-neutral-600 text-lg">We're here to help you get the parts you need.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-neutral-50 p-8 lg:p-12 rounded-3xl border border-neutral-200"
          >
            <h2 className="text-2xl font-bold mb-8 text-neutral-900">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-neutral-700">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-white border-neutral-200 text-neutral-900" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-neutral-700">Phone Number</Label>
                  <Input id="phone" placeholder="+254..." className="bg-white border-neutral-200 text-neutral-900" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="part" className="text-neutral-700">What part are you looking for?</Label>
                <Input id="part" placeholder="e.g., Brake pads for Toyota Premio" className="bg-white border-neutral-200 text-neutral-900" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-neutral-700">Message</Label>
                <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[150px] bg-white border-neutral-200 text-neutral-900" />
              </div>
              <Button type="submit" className="w-full h-14 text-lg" variant="destructive">
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
                <Phone className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="font-bold text-neutral-900 mb-2">Call Us</h3>
                <a href="tel:+254729658126" className="text-neutral-600 hover:text-red-600 transition-colors">
                  +254 729 658 126
                </a>
              </div>
              <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
                <MessageCircle className="h-8 w-8 text-[#25D366] mb-4" />
                <h3 className="font-bold text-neutral-900 mb-2">WhatsApp</h3>
                <a href="https://wa.me/254729658126" className="text-neutral-600 hover:text-red-600 transition-colors">
                  Chat with us now
                </a>
              </div>
              <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
                <MapPin className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="font-bold text-neutral-900 mb-2">Location</h3>
                <span className="text-neutral-600">Kisumu, Kenya</span>
              </div>
              <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
                <Mail className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="font-bold text-neutral-900 mb-2">Email</h3>
                <a href="mailto:info@gertaljoy.com" className="text-neutral-600 hover:text-red-600 transition-colors">
                  info@gertaljoy.com
                </a>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="h-[300px] w-full rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200 relative shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Google Map View of Kisumu Location</p>
                </div>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127670.61331289115!2d34.69769002241684!3d-0.10220935661139417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa30883658f8b%3A0xc3f736006f1947b7!2sKisumu%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, opacity: 0.8 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;