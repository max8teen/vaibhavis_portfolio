export type Artwork = {
  id: string;
  title: string;
  medium: string;
  year: string;
  category: "Devotional" | "Portrait" | "Nature" | "Study";
  image: string;
};

export const artworks: Artwork[] = [
  {
    id: "ganesha",
    title: "Ganesha — Lotus Throne",
    medium: "Graphite on Rag",
    year: "2024",
    category: "Devotional",
    image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=1400&q=85&auto=format&fit=crop",
  },
  {
    id: "krishna",
    title: "Krishna — Dance of Form",
    medium: "Gouache on Paper",
    year: "2023",
    category: "Devotional",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1400&q=85&auto=format&fit=crop",
  },
  {
    id: "diya",
    title: "Diya — Flame of Devotion",
    medium: "Oil on Linen",
    year: "2024",
    category: "Devotional",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=1400&q=85&auto=format&fit=crop",
  },
  {
    id: "lotus",
    title: "Lotus Study",
    medium: "Watercolour",
    year: "2024",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1400&q=85&auto=format&fit=crop",
  },
  {
    id: "leaves",
    title: "Banyan Whisper",
    medium: "Ink on Rag",
    year: "2023",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=85&auto=format&fit=crop",
  },
  {
    id: "botanical",
    title: "Botanical Specimen IV",
    medium: "Pencil & Ink",
    year: "2024",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1579541591970-3a4eabb8d59a?w=1400&q=85&auto=format&fit=crop",
  },
  {
    id: "portrait1",
    title: "Silence & Form",
    medium: "Charcoal on Canvas",
    year: "2023",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1531123414780-f37cea4ad3a0?w=1400&q=85&auto=format&fit=crop",
  },
  {
    id: "portrait2",
    title: "The Listening Eye",
    medium: "Pencil on Rag",
    year: "2022",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1400&q=85&auto=format&fit=crop",
  },
  {
    id: "saree",
    title: "Crimson Veil",
    medium: "Oil on Linen",
    year: "2024",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1400&q=85&auto=format&fit=crop",
  },
  {
    id: "study1",
    title: "Hands Study I",
    medium: "Charcoal",
    year: "2021",
    category: "Study",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1400&q=85&auto=format&fit=crop",
  },
  {
    id: "study2",
    title: "Drapery Study",
    medium: "Ink Wash",
    year: "2022",
    category: "Study",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1400&q=85&auto=format&fit=crop",
  },
  {
    id: "study3",
    title: "Figure — Standing",
    medium: "Sanguine on Cartridge",
    year: "2023",
    category: "Study",
    image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=1400&q=85&auto=format&fit=crop",
  },
];