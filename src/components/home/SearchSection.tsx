import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchSection = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="relative z-20 -mt-12 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <form 
          onSubmit={handleSearch}
          className="bg-white p-4 lg:p-6 rounded-2xl shadow-2xl border border-neutral-100 flex flex-col md:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <Input 
              placeholder="Search parts by car model (e.g., Toyota Prado, Nissan Note...)" 
              className="pl-12 h-14 bg-neutral-50 border-neutral-200 focus-visible:ring-red-600 text-neutral-900 text-lg shadow-inner placeholder:text-neutral-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Button type="submit" size="lg" className="h-14 px-10 text-lg shadow-sm font-bold active:scale-95 transition-transform" variant="destructive">
            Search Parts
          </Button>
        </form>
        <div className="mt-4 flex flex-wrap gap-3 justify-center">
          <span className="text-sm text-neutral-500 font-medium">Popular Searches:</span>
          {['Toyota Prado J150', 'Nissan Note E12', 'Subaru Forester SK', 'Mazda CX-5', 'Mercedes-Benz C200'].map((model) => (
            <button
              key={model}
              type="button"
              onClick={() => navigate(`/shop?search=${model}`)}
              className="text-sm text-neutral-500 hover:text-red-600 transition-colors font-medium underline underline-offset-4 decoration-neutral-200 hover:decoration-red-600/30"
            >
              {model}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;