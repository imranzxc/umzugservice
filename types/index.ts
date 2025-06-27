export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface CalculatorFormData {
  from: string;
  to: string;
  volume: string;
  floor: number;
  elevator: boolean;
  optionalServices: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Locale {
  navigation: {
    home: string;
    services: string;
    calculator: string;
    about: string;
    contact: string;
    faq: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    calculator: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Record<string, { title: string; subtitle: string }>;
  };
  calculator: {
    title: string;
    subtitle: string;
    from: string;
    to: string;
    volume: string;
    floor: string;
    elevator: string;
    optionalServices: string;
    calculate: string;
    estimate: string;
    volumeOptions: Record<string, string>;
    optionalServicesOptions: Record<string, string>;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    values: Record<string, string>;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    address: string;
    phoneNumber: string;
    emailAddress: string;
    officeAddress: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    legal: string;
    privacy: string;
    terms: string;
    imprint: string;
    followUs: string;
    copyright: string;
  };
  faq: {
    title: string;
    questions: FAQ[];
  };
}
