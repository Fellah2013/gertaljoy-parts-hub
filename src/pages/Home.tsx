import React from 'react';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import SearchSection from '@/components/home/SearchSection';
import ProductCard from '@/components/shop/ProductCard';
import { PRODUCTS } from '@/data/products';
import { Link } from 'react-router-dom';
import { CheckCircle, Truck, Clock, ShieldCheck } from 'lucide-react';

const Home = () => {
  return (
    <div className="pb-20">
      <Hero />
      <SearchSection />
      <Categories />

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-neutral-900">Why Gertaljoy Autoparts?</h2>
            <p className="text-neutral-600">
              We are committed to providing only the best for our customers in Kisumu and across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Genuine Parts', desc: '100% original and certified automotive components.' },
              { icon: CheckCircle, title: 'Affordable Pricing', desc: 'Competitive market rates without compromising quality.' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Quick dispatch and delivery to your location in Kisumu.' },
              { icon: Clock, title: 'Expert Support', desc: 'Technical guidance from experienced automotive pros.' },
            ].map((feature, i) => (
              <div key={i} className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 transition-colors hover:border-red-600/30">
                <feature.icon className="h-10 w-10 text-red-600 mb-6" />
                <h3 className="text-xl font-bold mb-3 text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-neutral-900">New Arrivals</h2>
              <p className="text-neutral-600">Our latest selection of premium parts for your vehicle.</p>
            </div>
            <Link to="/shop" className="text-red-500 font-semibold hover:underline">
              Browse All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-red-600 p-8 lg:p-16 text-center">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Need a Specific Part?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
              If you can't find what you're looking for, contact us directly and we'll source it for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/254729658126" 
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition-colors"
              >
                Inquire on WhatsApp
              </a>
              <a 
                href="tel:+254729658126" 
                className="bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-800 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-64 w-64 rounded-full bg-red-500 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-red-400 blur-3xl opacity-50" />
        </div>
      </section>
    </div>
  );
};

export default Home;