
import { Car } from "../components/CarCard";

// Array of car images for demonstration purposes
const carImages = [
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=480&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=480&q=80",
  "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=480&q=80",
  "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=480&q=80",
  "https://images.unsplash.com/photo-1555652736-e92021d28a10?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=480&q=80",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=480&q=80",
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=480&q=80",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=480&q=80",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=480&q=80"
];

// Array of luxury car makes
const carMakes = [
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Porsche",
  "Bentley",
  "Rolls-Royce",
  "Ferrari",
  "Lamborghini",
  "Aston Martin",
  "Maserati",
  "Jaguar",
  "Land Rover"
];

// Array of models based on makes
const carModels: Record<string, string[]> = {
  "Mercedes-Benz": ["S-Class", "E-Class", "G-Class", "AMG GT", "Maybach S-Class"],
  "BMW": ["7 Series", "X7", "8 Series", "M5", "i8"],
  "Audi": ["A8", "Q8", "RS7", "R8", "e-tron GT"],
  "Porsche": ["911", "Cayenne", "Panamera", "Taycan", "Macan"],
  "Bentley": ["Continental GT", "Bentayga", "Flying Spur", "Mulsanne"],
  "Rolls-Royce": ["Phantom", "Ghost", "Cullinan", "Wraith", "Dawn"],
  "Ferrari": ["Roma", "SF90 Stradale", "F8 Tributo", "812 GTS", "Portofino"],
  "Lamborghini": ["Aventador", "Huracán", "Urus", "Sián", "Countach"],
  "Aston Martin": ["DB11", "Vantage", "DBS Superleggera", "DBX", "Valkyrie"],
  "Maserati": ["Ghibli", "Levante", "Quattroporte", "MC20", "GranTurismo"],
  "Jaguar": ["F-Type", "XJ", "F-Pace", "I-Pace", "XF"],
  "Land Rover": ["Range Rover", "Range Rover Sport", "Defender", "Discovery", "Velar"]
};

// Generate a random car
const generateRandomCar = (id: string, featured: boolean = false): Car => {
  const make = carMakes[Math.floor(Math.random() * carMakes.length)];
  const models = carModels[make];
  const model = models[Math.floor(Math.random() * models.length)];
  
  const fuelTypes = ["Gasoline", "Diesel", "Hybrid", "Electric"];
  const transmissions = ["Automatic", "Manual", "DCT", "CVT"];
  const colors = ["Black", "White", "Silver", "Gray", "Blue", "Red"];
  
  const year = Math.floor(Math.random() * (2024 - 2018 + 1)) + 2018;
  const price = Math.floor(Math.random() * (300000 - 50000 + 1)) + 50000;
  const mileage = Math.floor(Math.random() * 50000);
  
  return {
    id,
    make,
    model,
    year,
    price,
    mileage,
    fuelType: fuelTypes[Math.floor(Math.random() * fuelTypes.length)],
    transmission: transmissions[Math.floor(Math.random() * transmissions.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    image: carImages[Math.floor(Math.random() * carImages.length)],
    featured
  };
};

// Generate random cars data
export const generateCars = (count: number): Car[] => {
  const cars: Car[] = [];
  for (let i = 0; i < count; i++) {
    const featured = i < Math.floor(count * 0.2); // Make 20% of cars featured
    cars.push(generateRandomCar(`car-${i + 1}`, featured));
  }
  return cars;
};

// Generate car details images (multiple views of the same car)
export const generateCarDetailImages = (count: number = 6): string[] => {
  const images: string[] = [];
  for (let i = 0; i < count; i++) {
    images.push(carImages[Math.floor(Math.random() * carImages.length)]);
  }
  return images;
};

// Categories for browsing
export const carCategories = [
  {
    id: "new-arrivals",
    name: "New Arrivals",
    description: "The latest additions to our exclusive collection",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    count: 12
  },
  {
    id: "luxury-sedans",
    name: "Luxury Sedans",
    description: "Elegant, sophisticated, and comfortable luxury sedans",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    count: 25
  },
  {
    id: "exotic-sports",
    name: "Exotic Sports Cars",
    description: "High-performance vehicles that deliver thrilling experiences",
    image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    count: 18
  },
  {
    id: "luxury-suvs",
    name: "Luxury SUVs",
    description: "Combining capability, performance, and refined luxury",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    count: 22
  },
  {
    id: "classic-vintage",
    name: "Classic & Vintage",
    description: "Timeless automobiles that represent automotive heritage",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    count: 15
  },
  {
    id: "convertibles",
    name: "Convertibles",
    description: "Open-top driving experiences for the ultimate enthusiast",
    image: "https://images.unsplash.com/photo-1507767439269-2c64f167bb05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    count: 10
  }
];

// Sample data for filters
export const filterData = {
  makes: carMakes,
  models: carModels["Mercedes-Benz"].concat(carModels["BMW"], carModels["Audi"]),
  years: [2024, 2023, 2022, 2021, 2020, 2019, 2018],
  colors: ["Black", "White", "Silver", "Gray", "Blue", "Red"],
  minPrice: 50000,
  maxPrice: 500000
};
