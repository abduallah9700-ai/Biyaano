export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  year: string;
  location: string;
  details: string;
  images?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
}
