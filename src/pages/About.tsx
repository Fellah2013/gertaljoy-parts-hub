import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, History, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-600 font-bold uppercase tracking-widest mb-4 block">Our Story</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-8">
              Driving Excellence in <br />
              <span className="text-red-600">Kisumu Automotive.</span>
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Gertaljoy Autoparts was founded with a simple mission: to provide vehicle owners in Kisumu and Kenya with access to genuine, high-quality spare parts at affordable prices.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Over the years, we have built a reputation for reliability, expertise, and exceptional customer service. We understand that your vehicle is more than just a machine; it's a vital part of your daily life.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-red-600 h-6 w-6" />
                <span className="text-neutral-900 font-medium">100% Genuine</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-red-600 h-6 w-6" />
                <span className="text-neutral-900 font-medium">Expert Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-red-600 h-6 w-6" />
                <span className="text-neutral-900 font-medium">Quality Tested</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-red-600 h-6 w-6" />
                <span className="text-neutral-900 font-medium">Customer First</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/hero-parts-display-5f950760-1777978214348.webp" 
              alt="Gertaljoy Team" 
              className="rounded-3xl border border-neutral-200 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
            />
            <div className="absolute -bottom-10 -right-10 bg-red-600 p-10 rounded-3xl hidden md:block shadow-2xl">
              <span className="text-5xl font-bold text-white block">10+</span>
              <span className="text-white/80 font-medium">Years Experience</span>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: History, 
              title: 'Reliability', 
              desc: 'We only stock parts that meet strict quality standards, ensuring your safety and vehicle longevity.' 
            },
            { 
              icon: Users, 
              title: 'Customer Service', 
              desc: 'Our knowledgeable staff is always ready to help you find the exact part you need for your specific model.' 
            },
            { 
              icon: Award, 
              title: 'Affordability', 
              desc: "Quality doesn't have to be expensive. We offer the best value for genuine automotive components in the region." 
            },
          ].map((item, i) => (
            <div key={i} className="bg-neutral-50 p-10 rounded-3xl border border-neutral-200 hover:border-red-600/30 transition-colors">
              <div className="h-16 w-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 border border-red-600/20">
                <item.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;