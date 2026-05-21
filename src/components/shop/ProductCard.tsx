import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = `https://wa.me/254729658126?text=Hi, I'm interested in the ${product.name} (${product.brand})`;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      <Card className="overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col">
        <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-neutral-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
              <ExternalLink className="text-neutral-900 h-6 w-6" />
            </div>
          </div>
        </Link>
        <CardContent className="p-5 flex-grow">
          <div className="text-xs text-red-600 font-bold uppercase tracking-wider mb-2">
            {product.category}
          </div>
          <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-1 group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-neutral-500 mb-3">Brand: <span className="text-neutral-700 font-medium">{product.brand}</span></p>
          
          {/* Black background for description area */}
          <div className="bg-black text-white p-3 rounded-lg text-sm mb-4 leading-relaxed line-clamp-2">
            {product.description}
          </div>

          <div className="text-xl font-extrabold text-neutral-900">
            {typeof product.price === 'number' 
              ? `KES ${product.price.toLocaleString()}` 
              : product.price}
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0 gap-2">
          <Button 
            className="flex-[3] bg-[#25D366] hover:bg-[#128C7E] text-white border-none h-11 text-sm font-bold shadow-sm active:scale-95 transition-transform"
            onClick={(e) => {
              e.preventDefault();
              window.open(whatsappUrl, '_blank');
            }}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp Inquiry
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            asChild 
            className="flex-1 h-11 border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 hover:text-red-600 shadow-sm transition-colors"
          >
            <Link to={`/product/${product.id}`}>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;