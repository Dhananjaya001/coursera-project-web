import type { Plant } from '../types';

export const plants: Plant[] = [
  // Indoor Plants
  {
    id: 1,
    name: 'Snake Plant',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1509423350716-97f2360af6a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    category: 'Indoor Plants',
    description: 'Low maintenance plant perfect for beginners'
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Indoor Plants',
    description: 'Beautiful split-leaf plant that makes a statement'
  },
  
  // Outdoor Plants
  {
    id: 3,
    name: 'Lavender',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Outdoor Plants',
    description: 'Fragrant herb perfect for gardens and aromatherapy'
  },
  {
    id: 4,
    name: 'Rose Bush',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Outdoor Plants',
    description: 'Classic garden rose with beautiful blooms'
  },

  // Succulents
  {
    id: 5,
    name: 'Aloe Vera',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Succulents',
    description: 'Medicinal plant with healing properties'
  },
  {
    id: 6,
    name: 'Jade Plant',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Succulents',
    description: 'Symbol of good luck and prosperity'
  }
];

export const getPlantsByCategory = (category: string): Plant[] => {
  return plants.filter(plant => plant.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(plants.map(plant => plant.category))];
};
