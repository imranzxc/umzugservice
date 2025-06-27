import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, locale: string = "de-CH"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "CHF",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function calculateDistance(from: string, to: string): number {
  // Mock distance calculation - in real app, would use Google Maps API
  const mockDistances: Record<string, number> = {
    "luzern-luzern": 5,
    "luzern-zug": 25,
    "luzern-zurich": 50,
    "luzern-bern": 80,
    "luzern-basel": 120,
  };

  const key = `${from.toLowerCase()}-${to.toLowerCase()}`;
  return mockDistances[key] || Math.floor(Math.random() * 50) + 10;
}

export function calculateMovePrice(
  distance: number,
  volume: string,
  floor: number,
  elevator: boolean,
  optionalServices: string[]
): number {
  let basePrice = 0;

  // Base price by volume
  const volumePrices: Record<string, number> = {
    "1.5": 800,
    "2.5": 1200,
    "3.5": 1600,
    "4.5": 2000,
    "5.5": 2400,
    "6.5": 2800,
  };

  basePrice = volumePrices[volume] || 1200;

  // Distance factor
  const distanceFactor = distance * 2;

  // Floor factor
  const floorFactor = elevator ? 0 : (floor - 1) * 50;

  // Optional services
  const servicePrices: Record<string, number> = {
    packing: 300,
    cleaning: 200,
    storage: 150,
    assembly: 250,
    piano: 500,
  };

  const servicesPrice = optionalServices.reduce((total, service) => {
    return total + (servicePrices[service] || 0);
  }, 0);

  return basePrice + distanceFactor + floorFactor + servicesPrice;
}
