import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/data/products';
import { Badge } from '@/components/ui/badge';

const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center bg-white min-h-screen">
        <h2 className="text-2xl font-bold text-neutral-900">Product not found</h2>
        <Link to="/shop" className="text-red-600 hover:underline mt-4 inline-block">Return to Shop</Link>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/254729658126?text=Hi, I'm inquiring about the ${product.name} (${product.brand})`;

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <Link to="/shop" className="flex items-center text-neutral-500 hover:text-neutral-900 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-200">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-2">
              <Badge variant="destructive" className="mb-4 uppercase tracking-widest">{product.category}</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-neutral-900">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-neutral-900">
                {typeof product.price === 'number' 
                  ? `KES ${product.price.toLocaleString()}` 
                  : product.price}
              </span>
              <div className="h-6 w-px bg-neutral-200" />
              <span className="text-neutral-500">Brand: <span className="text-neutral-900 font-medium">{product.brand}</span></span>
            </div>

            {/* Black background for description */}
            <div className="bg-black text-white p-6 rounded-2xl mb-8 shadow-lg">
              <h3 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-2">Description</h3>
              <p className="text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 mb-10">
              <h3 className="font-bold text-neutral-900 mb-4">Compatibility:</h3>
              <div className="flex flex-wrap gap-2">
                {product.compatibility.map((model) => (
                  <span key={model} className="px-3 py-1 bg-white text-neutral-700 rounded-lg text-sm border border-neutral-200 shadow-sm">
                    {model}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Button 
                size="lg" 
                className="flex-1 h-14 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                WhatsApp Inquiry
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="flex-1 h-14 text-lg border-neutral-200 hover:bg-neutral-50 text-neutral-900"
                asChild
              >
                <a href="tel:+254729658126">
                  <Phone className="mr-3 h-6 w-6 text-red-600" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-neutral-200">
              <div className="text-center">
                <ShieldCheck className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <span className="text-xs text-neutral-500 block">Genuine Parts</span>
              </div>
              <div className="text-center">
                <Truck className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <span className="text-xs text-neutral-500 block">Fast Delivery</span>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <span className="text-xs text-neutral-500 block">Easy Returns</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;