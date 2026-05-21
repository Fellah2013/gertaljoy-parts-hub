export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number | 'Request Price';
  image: string;
  description: string;
  compatibility: string[];
}

export interface BrandModels {
  brand: string;
  models: string[];
}

export const CATEGORIES = [
  { 
    id: 'engine', 
    name: 'Engine Parts', 
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-engine-parts-b63a46dc-1777978215203.webp' 
  },
  { 
    id: 'brakes', 
    name: 'Brake Systems', 
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-brake-systems-b657f0f2-1777978212573.webp' 
  },
  { 
    id: 'suspension', 
    name: 'Suspension', 
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-suspension-280d5b35-1777978213061.webp' 
  },
  { 
    id: 'filters', 
    name: 'Filters', 
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-filters-2ceacb02-1777978213066.webp' 
  },
  { 
    id: 'batteries', 
    name: 'Batteries', 
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-batteries-e6b80bc5-1777978213673.webp' 
  },
  { 
    id: 'exterior', 
    name: 'Exterior', 
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/exterior-category-899ed3c6-1777979299711.webp' 
  },
  { 
    id: 'lighting', 
    name: 'Lighting', 
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/lighting-category-8a1543eb-1777979303829.webp' 
  },
  { 
    id: 'transmission', 
    name: 'Transmission', 
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/transmission-category-c999ef5d-1777979304345.webp' 
  },
  { 
    id: 'electrical', 
    name: 'Electrical', 
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/electrical-category-744f364f-1777979300526.webp' 
  },
  { 
    id: 'interior', 
    name: 'Interior', 
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/interior-category-db5990b9-1777979301849.webp' 
  },
];

export const VEHICLE_DATA: BrandModels[] = [
  {
    brand: 'Toyota',
    models: ['Premio', 'Axio', 'Harrier', 'Land Cruiser', 'Prado', 'Hilux', 'Corolla', 'Fielder', 'Probox', 'Succeed', 'RAV4', 'Noah', 'Voxy', 'Wish', 'Vitz', 'Mark X', 'Crown', 'Passo', 'Rush', 'Camry', 'Fortuner', 'Hiace']
  },
  {
    brand: 'Nissan',
    models: ['Note', 'Sylphy', 'Sunny', 'Tiida', 'Patrol', 'X-Trail', 'Navara', 'Serena', 'March', 'AD Van', 'Teana', 'Juke', 'Dualis', 'Qashqai', 'Lafesta']
  },
  {
    brand: 'Subaru',
    models: ['Impreza', 'Forester', 'Legacy', 'Outback', 'XV', 'Levorg', 'Exiga', 'WRX']
  },
  {
    brand: 'Mazda',
    models: ['Demio', 'Axela', 'Atenza', 'CX-5', 'CX-3', 'Bongo', 'CX-7', 'CX-8', 'Premacy', 'Verisa']
  },
  {
    brand: 'Mitsubishi',
    models: ['Lancer', 'Pajero', 'Outlander', 'Canter', 'L200', 'Galant', 'RVR', 'Delica', 'Eclipse Cross']
  },
  {
    brand: 'Honda',
    models: ['Fit', 'Civic', 'CR-V', 'Accord', 'Insight', 'Vezel', 'Stream', 'Airwave', 'Stepwgn', 'Freed']
  },
  {
    brand: 'Suzuki',
    models: ['Swift', 'Jimny', 'Vitara', 'SX4', 'Escudo', 'Alto', 'Every', 'Ignis']
  },
  {
    brand: 'Isuzu',
    models: ['D-Max', 'N-Series (Elf)', 'F-Series (Forward)', 'MU-X']
  },
  {
    brand: 'Mercedes-Benz',
    models: ['C-Class', 'E-Class', 'S-Class', 'G-Wagon', 'GLE', 'GLC', 'GLA', 'A-Class', 'B-Class', 'CLA', 'Vito']
  },
  {
    brand: 'BMW',
    models: ['3 Series', '5 Series', '7 Series', 'X1', 'X3', 'X5', 'X6', '1 Series']
  },
  {
    brand: 'Volkswagen',
    models: ['Golf', 'Tiguan', 'Touareg', 'Polo', 'Passat', 'Jetta', 'Transporter', 'Amarok']
  },
  {
    brand: 'Audi',
    models: ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7']
  },
  {
    brand: 'Lexus',
    models: ['RX', 'LX', 'NX', 'IS', 'ES', 'GX']
  },
  {
    brand: 'Land Rover',
    models: ['Range Rover Vogue', 'Range Rover Sport', 'Range Rover Evoque', 'Discovery', 'Defender', 'Freelander']
  },
  {
    brand: 'Ford',
    models: ['Ranger', 'Everest', 'Focus', 'Fiesta', 'Explorer', 'Transit']
  },
  {
    brand: 'Hyundai',
    models: ['Tucson', 'Santa Fe', 'Elantra', 'Accent', 'I30', 'Kona']
  },
  {
    brand: 'Kia',
    models: ['Sportage', 'Sorento', 'Cerato', 'Rio', 'Picanto']
  },
  {
    brand: 'Peugeot',
    models: ['208', '308', '508', '3008', '5008']
  }
];

export const BRANDS = VEHICLE_DATA.map(v => v.brand);

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cylinder Head Assembly',
    category: 'Engine Parts',
    brand: 'Toyota',
    price: 'Request Price',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-engine-parts-b63a46dc-1777978215203.webp',
    description: 'High-quality genuine cylinder head assembly for Toyota 2NZ-FE engines. Includes valves and cams.',
    compatibility: ['Toyota Premio', 'Toyota Corolla', 'Toyota Vitz']
  },
  {
    id: '2',
    name: 'Performance Brake Pads',
    category: 'Brake Systems',
    brand: 'Nissan',
    price: 4500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-brake-systems-b657f0f2-1777978212573.webp',
    description: 'Ceramic brake pads for superior stopping power and low dust. Ideal for Nissan X-Trail.',
    compatibility: ['Nissan X-Trail', 'Nissan Qashqai', 'Nissan Serena']
  },
  {
    id: '3',
    name: 'Shock Absorber Set',
    category: 'Suspension',
    brand: 'Subaru',
    price: 12000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-suspension-280d5b35-1777978213061.webp',
    description: 'Heavy-duty rear shock absorbers for Subaru Forester. Provides excellent stability on all terrains.',
    compatibility: ['Subaru Forester', 'Subaru Legacy', 'Subaru Outback']
  },
  {
    id: '4',
    name: 'Oil Filter High Flow',
    category: 'Filters',
    brand: 'Mazda',
    price: 1200,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-filters-2ceacb02-1777978213066.webp',
    description: 'Genuine high-efficiency oil filter for Mazda SkyActiv engines.',
    compatibility: ['Mazda Demio', 'Mazda CX-5', 'Mazda Axela']
  },
  {
    id: '5',
    name: 'Premium Car Battery 65Ah',
    category: 'Batteries',
    brand: 'Toyota',
    price: 8500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-batteries-e6b80bc5-1777978213673.webp',
    description: 'Maintenance-free 65Ah battery with 2-year warranty.',
    compatibility: ['Toyota Hilux', 'Toyota Land Cruiser', 'Toyota Prado']
  },
  {
    id: '6',
    name: 'Air Filter Element',
    category: 'Filters',
    brand: 'Honda',
    price: 1800,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-filters-2ceacb02-1777978213066.webp',
    description: 'Long-lasting air filter element for Honda Fit and Civic.',
    compatibility: ['Honda Fit', 'Honda Civic', 'Honda CR-V']
  },
  {
    id: '7',
    name: 'Front Bumper Assembly',
    category: 'Exterior',
    brand: 'Toyota',
    price: 15500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/toyota-front-bumper-47bef44a-1777979302691.webp',
    description: 'OEM-grade front bumper assembly for Toyota Corolla. Durable and perfect fit.',
    compatibility: ['Toyota Corolla', 'Toyota Axio']
  },
  {
    id: '8',
    name: 'LED Headlight Kit',
    category: 'Lighting',
    brand: 'Subaru',
    price: 7500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/subaru-led-headlights-aef6d940-1777979306471.webp',
    description: 'Ultra-bright LED headlight conversion kit. Enhanced visibility and modern look.',
    compatibility: ['Subaru Forester', 'Subaru Impreza', 'Subaru XV']
  },
  {
    id: '9',
    name: 'Leather Seat Covers',
    category: 'Interior',
    brand: 'Mazda',
    price: 12500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/leather-seat-covers-e773eee0-1777979303822.webp',
    description: 'Premium synthetic leather seat covers. Waterproof and easy to clean.',
    compatibility: ['Mazda CX-5', 'Mazda CX-3', 'Universal Fit']
  },
  {
    id: '10',
    name: 'Heavy Duty Clutch Kit',
    category: 'Transmission',
    brand: 'Mitsubishi',
    price: 24000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/mitsubishi-clutch-kit-e26e44a6-1777979306647.webp',
    description: 'Complete clutch kit including pressure plate, disc, and release bearing.',
    compatibility: ['Mitsubishi L200', 'Mitsubishi Pajero']
  },
  {
    id: '11',
    name: 'High Output Alternator',
    category: 'Electrical',
    brand: 'Honda',
    price: 18500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/honda-alternator-cd50a71f-1777979304979.webp',
    description: 'Reliable high-output alternator for consistent electrical performance.',
    compatibility: ['Honda CR-V', 'Honda Accord']
  },
  {
    id: '12',
    name: 'Engine Radiator',
    category: 'Engine Parts',
    brand: 'BMW',
    price: 28000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/bmw-radiator-3ad7846d-1777979308611.webp',
    description: 'High-performance aluminum radiator for optimal engine cooling.',
    compatibility: ['BMW 3 Series', 'BMW 5 Series']
  },
  {
    id: '13',
    name: 'Iridium Spark Plugs',
    category: 'Electrical',
    brand: 'Mercedes-Benz',
    price: 6400,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/mercedes-spark-plugs-2589a142-1777979306647.webp',
    description: 'Set of 4 high-performance iridium spark plugs for better fuel efficiency.',
    compatibility: ['Mercedes-Benz C-Class', 'Mercedes-Benz E-Class']
  },
  {
    id: '14',
    name: 'Ventilated Brake Rotors',
    category: 'Brake Systems',
    brand: 'Mazda',
    price: 14000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/mazda-brake-rotors-a2117d3c-1777979307500.webp',
    description: 'Precision-engineered ventilated brake rotors for improved heat dissipation.',
    compatibility: ['Mazda Axela', 'Mazda Atenza']
  },
  {
    id: '15',
    name: 'Side Mirror Set',
    category: 'Exterior',
    brand: 'Nissan',
    price: 9500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/nissan-side-mirrors-5d28a4cd-1777979307499.webp',
    description: 'Replacement side mirrors with electric adjustment and indicators.',
    compatibility: ['Nissan Tiida', 'Nissan Sylphy']
  },
  {
    id: '16',
    name: 'Dashboard Sun Mats',
    category: 'Interior',
    brand: 'Toyota',
    price: 3500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/toyota-dashboard-mats-7f9ef62f-1777979308611.webp',
    description: 'Custom fit dashboard mats to protect from UV rays and reduce glare.',
    compatibility: ['Prado', 'Hilux']
  }
];",path:"src/data/products.ts"},{content: