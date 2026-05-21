import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PRODUCTS, CATEGORIES, BRANDS, VEHICLE_DATA } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  
  const categoryFilter = searchParams.get('category') || 'All';
  const brandFilter = searchParams.get('brand') || 'All';
  const modelFilter = searchParams.get('model') || 'All';

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const selectedBrandData = useMemo(() => {
    return VEHICLE_DATA.find(v => v.brand === brandFilter);
  }, [brandFilter]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = searchQuery 
        ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.compatibility.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;
      
      const matchesCategory = categoryFilter === 'All' 
        ? true 
        : product.category === categoryFilter;
      
      const matchesBrand = brandFilter === 'All' 
        ? true 
        : product.brand === brandFilter;

      const matchesModel = modelFilter === 'All' 
        ? true 
        : product.compatibility.some(c => c.toLowerCase().includes(modelFilter.toLowerCase()));

      return matchesSearch && matchesCategory && matchesBrand && matchesModel;
    });
  }, [searchQuery, categoryFilter, brandFilter, modelFilter]);

  const updateFilter = (type: 'category' | 'brand' | 'search' | 'model', value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' || !value) {
      newParams.delete(type);
    } else {
      newParams.set(type, value);
    }
    
    // Reset model if brand changes
    if (type === 'brand') {
      newParams.delete('model');
    }
    
    setSearchParams(newParams);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">Catalog</h1>
          <p className="text-neutral-600 text-lg max-w-2xl">Search through our extensive database of parts compatible with every major vehicle brand and model in Kenya.</p>
        </header>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
            <Input 
              placeholder="Search by part name, brand or car model..." 
              className="pl-12 h-12 bg-white border-neutral-200 text-neutral-900 focus-visible:ring-red-600"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                updateFilter('search', e.target.value);
              }}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-12 border-neutral-200 bg-white text-neutral-900">
                  Category: {categoryFilter} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-neutral-200 text-neutral-900 max-h-96 overflow-y-auto w-[220px]">
                <DropdownMenuItem onClick={() => updateFilter('category', 'All')}>All Categories</DropdownMenuItem>
                {CATEGORIES.map((cat) => (
                  <DropdownMenuItem key={cat.id} onClick={() => updateFilter('category', cat.name)}>
                    {cat.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-12 border-neutral-200 bg-white text-neutral-900">
                  Brand: {brandFilter} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-neutral-200 text-neutral-900 max-h-96 overflow-y-auto w-[220px]">
                <DropdownMenuItem onClick={() => updateFilter('brand', 'All')}>All Brands</DropdownMenuItem>
                {BRANDS.map((brand) => (
                  <DropdownMenuItem key={brand} onClick={() => updateFilter('brand', brand)}>
                    {brand}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild disabled={brandFilter === 'All'}>
                <Button variant="outline" className="h-12 border-neutral-200 bg-white text-neutral-900 min-w-[140px]">
                  Model: {modelFilter} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-neutral-200 text-neutral-900 max-h-96 overflow-y-auto w-[220px]">
                <DropdownMenuItem onClick={() => updateFilter('model', 'All')}>All Models</DropdownMenuItem>
                {selectedBrandData?.models.map((model) => (
                  <DropdownMenuItem key={model} onClick={() => updateFilter('model', model)}>
                    {model}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {(categoryFilter !== 'All' || brandFilter !== 'All' || modelFilter !== 'All' || searchQuery) && (
              <Button 
                variant="ghost" 
                className="h-12 text-neutral-500 hover:text-neutral-900"
                onClick={() => setSearchParams(new URLSearchParams())}
              >
                <X className="mr-2 h-4 w-4" /> Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-neutral-600 font-medium">
            Showing <span className="text-neutral-900">{filteredProducts.length}</span> results
            {brandFilter !== 'All' && <span> for <span className="text-red-600">{brandFilter}</span></span>}
            {modelFilter !== 'All' && <span> <span className="text-red-600">{modelFilter}</span></span>}
          </p>
        </div>

        {/* Results */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-neutral-50 rounded-3xl border border-neutral-200 border-dashed">
            <div className="max-w-md mx-auto">
              <div className="h-16 w-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-neutral-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-neutral-900">No parts found</h3>
              <p className="text-neutral-600 mb-8">
                We couldn't find any parts matching your criteria. Try adjusting your filters or search term.
              </p>
              <Button variant="destructive" onClick={() => setSearchParams(new URLSearchParams())}>
                Reset All Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;