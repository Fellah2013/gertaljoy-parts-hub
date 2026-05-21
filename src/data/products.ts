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
    models: [
      'Land Cruiser 300', 'Land Cruiser 200', 'Land Cruiser 100', 'Land Cruiser 80', 'Land Cruiser 70',
      'Prado 150', 'Prado 120', 'Prado 90', 'Hilux Vigo', 'Hilux Revo', 'Fortuner', 'RAV4',
      'Harrier', 'Vanguard', 'Noah', 'Voxy', 'Alphard', 'Vellfire', 'Hiace', 'Probox',
      'Succeed', 'Wish', 'Isis', 'Premio', 'Allion', 'Corolla', 'Axio', 'Fielder',
      'Auris', 'Vitz', 'Passo', 'Rush', 'Mark X', 'Crown', 'Camry', 'Avensis',
      'IST', 'Ractis', 'Sienta', 'Belta', 'Aqua', 'Rumion', 'Caldina', 'Altezza'
    ]
  },
  {
    brand: 'Nissan',
    models: [
      'Patrol Y62', 'Patrol Y61', 'X-Trail T32', 'X-Trail T31', 'Navara', 'NP300',
      'Serena', 'Elgrand', 'Murano', 'Juke', 'Qashqai', 'Dualis', 'Note',
      'Tiida', 'Sylphy', 'Bluebird', 'Teana', 'Sunny', 'March', 'Wingroad',
      'AD Van', 'NV200', 'Caravan E25', 'Caravan E26', 'Lafesta', 'Fuga', 'Skyline'
    ]
  },
  {
    brand: 'Subaru',
    models: [
      'Forester SK', 'Forester SJ', 'Forester SH', 'Forester SG', 'Outback',
      'Legacy', 'Impreza', 'XV', 'Levorg', 'Exiga', 'WRX', 'Trezia', 'Tribeca'
    ]
  },
  {
    brand: 'Honda',
    models: [
      'CR-V', 'Vezel', 'Fit', 'Insight', 'Civic', 'Accord', 'Stream', 'Airwave',
      'Stepwgn', 'Freed', 'Shuttle', 'Crossroad', 'Jade', 'Odyssey', 'HR-V'
    ]
  },
  {
    brand: 'Mitsubishi',
    models: [
      'Pajero V98', 'Pajero V73', 'Pajero Sport', 'Outlander', 'L200', 'Triton',
      'Canter', 'Fuso', 'RVR', 'Eclipse Cross', 'Galant', 'Lancer', 'Delica',
      'Airtrek', 'Colt', 'Mirage'
    ]
  },
  {
    brand: 'Mazda',
    models: [
      'CX-5', 'CX-3', 'CX-7', 'CX-8', 'CX-9', 'Demio', 'Axela', 'Atenza',
      'Premacy', 'Biante', 'Bongo', 'Familia', 'MPV', 'Verisa', 'CX-30', 'MX-5'
    ]
  },
  {
    brand: 'Suzuki',
    models: [
      'Vitara', 'Grand Vitara', 'Escudo', 'Swift', 'Jimny', 'SX4', 'Alto',
      'Every', 'Carry', 'Ignis', 'Ertiga', 'Baleno', 'Spacia'
    ]
  },
  {
    brand: 'Isuzu',
    models: ['D-Max', 'MU-X', 'Elf', 'Forward', 'Giga', 'Trooper', 'Bighorn']
  },
  {
    brand: 'Mercedes-Benz',
    models: [
      'C-Class W205', 'C-Class W204', 'E-Class W213', 'E-Class W212', 'S-Class',
      'G-Wagon', 'GLE', 'GLC', 'GLA', 'ML-Class', 'GLK', 'A-Class', 'B-Class',
      'CLA', 'Vito', 'V-Class', 'Sprinter'
    ]
  },
  {
    brand: 'BMW',
    models: [
      'X5', 'X6', 'X3', 'X1', '3 Series G20', '3 Series F30', '3 Series E90',
      '5 Series G30', '5 Series F10', '7 Series', '1 Series', '2 Series', '4 Series'
    ]
  },
  {
    brand: 'Volkswagen',
    models: [
      'Touareg', 'Tiguan', 'Golf Mk7', 'Golf Mk6', 'Polo', 'Passat', 'Jetta',
      'Amarok', 'Transporter', 'Caddy', 'Scirocco', 'Beetle', 'Touran'
    ]
  },
  {
    brand: 'Audi',
    models: ['Q7', 'Q5', 'Q3', 'A6', 'A4', 'A3', 'A5', 'A1', 'Q2', 'TT']
  },
  {
    brand: 'Lexus',
    models: ['LX570', 'LX470', 'RX450h', 'RX350', 'NX200t', 'GX460', 'IS250', 'ES300h', 'LS460', 'CT200h']
  },
  {
    brand: 'Land Rover',
    models: [
      'Range Rover Vogue', 'Range Rover Sport', 'Range Rover Evoque', 'Range Rover Velar',
      'Discovery 5', 'Discovery 4', 'Discovery Sport', 'Defender 110', 'Defender 90', 'Freelander 2'
    ]
  },
  {
    brand: 'Ford',
    models: ['Ranger', 'Everest', 'Focus', 'Fiesta', 'Explorer', 'EcoSport', 'Transit', 'Figo', 'F-150']
  },
  {
    brand: 'Volvo',
    models: ['XC90', 'XC60', 'V40', 'S60', 'S90', 'XC40', 'V60']
  },
  {
    brand: 'Hyundai',
    models: ['Tucson', 'Santa Fe', 'Elantra', 'Accent', 'I30', 'Kona', 'I10', 'I20', 'H1 (Staria)']
  },
  {
    brand: 'Kia',
    models: ['Sportage', 'Sorento', 'Cerato', 'Rio', 'Picanto', 'K2500', 'Soul', 'Seltos']
  },
  {
    brand: 'Peugeot',
    models: ['3008', '5008', '208', '308', '508', 'Partner', '2008']
  },
  {
    brand: 'Jeep',
    models: ['Wrangler', 'Grand Cherokee', 'Compass', 'Renegade', 'Cherokee']
  },
  {
    brand: 'Porsche',
    models: ['Cayenne', 'Macan', 'Panamera', '911']
  },
  {
    brand: 'Mahindra',
    models: ['Scorpio', 'XUV500', 'Pick-up', 'Bolero']
  },
  {
    brand: 'Tata',
    models: ['Xenon', 'Prima', 'LPT']
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
    compatibility: ['Toyota Premio', 'Toyota Corolla', 'Toyota Vitz', 'Toyota Allion', 'Toyota Axio']
  },
  {
    id: '2',
    name: 'Performance Brake Pads',
    category: 'Brake Systems',
    brand: 'Nissan',
    price: 4500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-brake-systems-b657f0f2-1777978212573.webp',
    description: 'Ceramic brake pads for superior stopping power and low dust. Ideal for Nissan X-Trail.',
    compatibility: ['Nissan X-Trail T31', 'Nissan X-Trail T32', 'Nissan Qashqai', 'Nissan Serena']
  },
  {
    id: '3',
    name: 'Shock Absorber Set',
    category: 'Suspension',
    brand: 'Subaru',
    price: 12000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-suspension-280d5b35-1777978213061.webp',
    description: 'Heavy-duty rear shock absorbers for Subaru Forester. Provides excellent stability on all terrains.',
    compatibility: ['Subaru Forester SG', 'Subaru Forester SH', 'Subaru Forester SJ', 'Subaru Outback', 'Subaru Legacy']
  },
  {
    id: '4',
    name: 'Oil Filter High Flow',
    category: 'Filters',
    brand: 'Mazda',
    price: 1200,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-filters-2ceacb02-1777978213066.webp',
    description: 'Genuine high-efficiency oil filter for Mazda SkyActiv engines.',
    compatibility: ['Mazda Demio', 'Mazda CX-5', 'Mazda Axela', 'Mazda CX-3']
  },
  {
    id: '5',
    name: 'Premium Car Battery 65Ah',
    category: 'Batteries',
    brand: 'Toyota',
    price: 8500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-batteries-e6b80bc5-1777978213673.webp',
    description: 'Maintenance-free 65Ah battery with 2-year warranty.',
    compatibility: ['Toyota Hilux Revo', 'Toyota Hilux Vigo', 'Toyota Land Cruiser 200', 'Toyota Prado 150']
  },
  {
    id: '6',
    name: 'Air Filter Element',
    category: 'Filters',
    brand: 'Honda',
    price: 1800,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-filters-2ceacb02-1777978213066.webp',
    description: 'Long-lasting air filter element for Honda Fit and Civic.',
    compatibility: ['Honda Fit', 'Honda Civic', 'Honda CR-V', 'Honda Vezel']
  },
  {
    id: '7',
    name: 'Front Bumper Assembly',
    category: 'Exterior',
    brand: 'Toyota',
    price: 15500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/toyota-front-bumper-47bef44a-1777979302691.webp',
    description: 'OEM-grade front bumper assembly for Toyota Corolla. Durable and perfect fit.',
    compatibility: ['Toyota Corolla', 'Toyota Axio', 'Toyota Fielder']
  },
  {
    id: '8',
    name: 'LED Headlight Kit',
    category: 'Lighting',
    brand: 'Subaru',
    price: 7500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/subaru-led-headlights-aef6d940-1777979306471.webp',
    description: 'Ultra-bright LED headlight conversion kit. Enhanced visibility and modern look.',
    compatibility: ['Subaru Forester SJ', 'Subaru Impreza', 'Subaru XV']
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
    compatibility: ['Mitsubishi L200', 'Mitsubishi Triton', 'Mitsubishi Pajero V98']
  },
  {
    id: '11',
    name: 'High Output Alternator',
    category: 'Electrical',
    brand: 'Honda',
    price: 18500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/honda-alternator-cd50a71f-1777979304979.webp',
    description: 'Reliable high-output alternator for consistent electrical performance.',
    compatibility: ['Honda CR-V', 'Honda Accord', 'Honda Odyssey']
  },
  {
    id: '12',
    name: 'Engine Radiator',
    category: 'Engine Parts',
    brand: 'BMW',
    price: 28000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/bmw-radiator-3ad7846d-1777979308611.webp',
    description: 'High-performance aluminum radiator for optimal engine cooling.',
    compatibility: ['BMW 3 Series F30', 'BMW 5 Series F10', 'BMW X5']
  },
  {
    id: '13',
    name: 'Iridium Spark Plugs',
    category: 'Electrical',
    brand: 'Mercedes-Benz',
    price: 6400,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/mercedes-spark-plugs-2589a142-1777979306647.webp',
    description: 'Set of 4 high-performance iridium spark plugs for better fuel efficiency.',
    compatibility: ['Mercedes-Benz C-Class W205', 'Mercedes-Benz E-Class W213', 'Mercedes-Benz GLC']
  },
  {
    id: '14',
    name: 'Ventilated Brake Rotors',
    category: 'Brake Systems',
    brand: 'Mazda',
    price: 14000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/mazda-brake-rotors-a2117d3c-1777979307500.webp',
    description: 'Precision-engineered ventilated brake rotors for improved heat dissipation.',
    compatibility: ['Mazda Axela', 'Mazda Atenza', 'Mazda CX-5']
  },
  {
    id: '15',
    name: 'Side Mirror Set',
    category: 'Exterior',
    brand: 'Nissan',
    price: 9500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/nissan-side-mirrors-5d28a4cd-1777979307499.webp',
    description: 'Replacement side mirrors with electric adjustment and indicators.',
    compatibility: ['Nissan Tiida', 'Nissan Sylphy', 'Nissan Note', 'Nissan Bluebird']
  },
  {
    id: '16',
    name: 'Dashboard Sun Mats',
    category: 'Interior',
    brand: 'Toyota',
    price: 3500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/toyota-dashboard-mats-7f9ef62f-1777979308611.webp',
    description: 'Custom fit dashboard mats to protect from UV rays and reduce glare.',
    compatibility: ['Toyota Prado 150', 'Toyota Prado 120', 'Toyota Hilux Revo', 'Toyota Land Cruiser 200']
  },
  {
    id: '17',
    name: 'Fuel Injector Set',
    category: 'Engine Parts',
    brand: 'Volkswagen',
    price: 22000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-engine-parts-b63a46dc-1777978215203.webp',
    description: 'High-precision fuel injectors for VW TSI engines.',
    compatibility: ['Volkswagen Golf Mk7', 'Volkswagen Tiguan', 'Volkswagen Passat']
  },
  {
    id: '18',
    name: 'Cabin Air Filter',
    category: 'Filters',
    brand: 'Lexus',
    price: 2500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-filters-2ceacb02-1777978213066.webp',
    description: 'Activated carbon cabin filter for clean air inside the vehicle.',
    compatibility: ['Lexus RX350', 'Lexus NX200t', 'Lexus LX570']
  },
  {
    id: '19',
    name: 'Air Suspension Bellow',
    category: 'Suspension',
    brand: 'Land Rover',
    price: 'Request Price',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-suspension-280d5b35-1777978213061.webp',
    description: 'Front air suspension bellows for Range Rover Vogue.',
    compatibility: ['Range Rover Vogue', 'Range Rover Sport', 'Discovery 4']
  },
  {
    id: '20',
    name: 'Wheel Hub Bearing',
    category: 'Suspension',
    brand: 'Isuzu',
    price: 8500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/03861bcf-0f36-41ad-a861-3767634062e3/category-suspension-280d5b35-1777978213061.webp',
    description: 'Heavy duty wheel hub bearing for Isuzu D-Max.',
    compatibility: ['Isuzu D-Max', 'Isuzu MU-X']
  }
];