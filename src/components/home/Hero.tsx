import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/hero-parts-display-5f950760-1777978214348.webp" 
          alt="Premium car parts display" 
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 text-red-500 text-sm font-bold tracking-widest uppercase mb-4 border border-red-600/20">
              Trusted in Kisumu
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Quality Auto Parts <br />
              <span className="text-red-600">You Can Trust.</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-400 mb-10 max-w-xl">
              Affordable, Genuine & Reliable car parts for all major brands. 
              Get the performance your vehicle deserves with Gertaljoy Autoparts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg" variant="destructive" asChild>
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="h-14 px-8 text-lg border-neutral-700 hover:bg-neutral-800" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-neutral-800 pt-8"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-neutral-900 rounded-lg">
                <ShieldCheck className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-sm font-medium text-neutral-300">Genuine Parts</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-neutral-900 rounded-lg">
                <Zap className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-sm font-medium text-neutral-300">Fast Service</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-neutral-900 rounded-lg">
                <Settings className="h-5 w-5 text-red-600" />
              </div>
              <span className="text-sm font-medium text-neutral-300">Expert Advice</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;