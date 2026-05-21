# Plan - Expand Catalog with Comprehensive Kenyan Vehicle Data

The goal is to populate the catalog filters with an exhaustive list of vehicle brands and models common in the Kenyan market, enhancing the search and filtering experience for Gertaljoy Autoparts customers.

## 1. Data Expansion (`src/data/products.ts`)
- **Comprehensive Brand/Model Mapping**: Update `VEHICLE_DATA` to include detailed models for all major brands in Kenya:
  - Japanese: Toyota, Nissan, Subaru, Honda, Mazda, Mitsubishi, Suzuki, Isuzu.
  - European: Mercedes-Benz, BMW, Volkswagen, Audi, Land Rover, Volvo, Peugeot.
  - Others: Lexus, Ford, Hyundai, Kia.
- **Update Compatibility Strings**: Ensure existing products in `PRODUCTS` have updated `compatibility` arrays that match some of these new specific models to demonstrate the filtering.

## 2. UI/UX Enhancements for Large Data (`src/pages/Shop.tsx`)
- Ensure the Brand and Model dropdowns remain performant and usable with many entries.
- Maintain the current logic where the Model dropdown is enabled only after a Brand is selected.
- Verify that the "Clear" button correctly resets all filters including the new model selections.

## 3. Home Search Optimization (`src/components/home/SearchSection.tsx`)
- Update the popular search suggestions to reflect more specific models (e.g., "Toyota Prado J150", "Nissan Note E12").

## 4. Verification
- Test filtering by specific models (e.g., Toyota -> Vitz).
- Verify "Request Price" logic and WhatsApp CTA remains functional.
- Ensure the layout remains clean with the white/black color scheme as requested.
