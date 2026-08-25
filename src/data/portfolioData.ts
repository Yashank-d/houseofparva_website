export interface ArtisticWork {
  id: string;
  figNum: string;
  couple: string;
  location: string;
  date: string;
  styleType: "pink-journal" | "handwritten-vows" | "blue-ink-polaroid" | "paperclip-stack" | "artistic-letter";
  mainImage: string;
  secondaryImage?: string;
  vowText?: string;
  handwrittenStory: string;
  highlightedText?: string;
  blueQuote?: string;
  details: string;
  gallery: string[];
}

export const artisticWorks: ArtisticWork[] = [
  {
    id: "ashwathy-abheek",
    figNum: "FIG. 01",
    couple: "Ashwathy and Abheek",
    location: "Bangalore, Karnataka",
    date: "December 2025",
    styleType: "pink-journal",
    mainImage: "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786346951/copy_of_artboard_1.jpg",
    handwrittenStory: "Ashwathy and Abheek lost in the golden hour glow of a warm evening. A quiet moment held between the shadows and the amber light as the sun dipped low.",
    highlightedText: "golden hour glow of a warm evening",
    details: "Archival medium format film. Bangalore evening session.",
    gallery: [
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786346522/Artboard_7.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786346632/Artboard_6.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786347196/Artboard_31.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786347109/Artboard_3.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786347125/Artboard_4.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786346522/Artboard_5.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786347212/Artboard_622.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786347075/Artboard_2.jpg",
    ],
  },
  // {
  //   id: "sara-ruairi",
  //   figNum: "FIG. 02",
  //   couple: "Sara and Ruairí",
  //   location: "Udaipur, Rajasthan",
  //   date: "January 20, 2026",
  //   styleType: "handwritten-vows",
  //   mainImage: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=85",
  //   vowText: `I Sara, take you, Ruairí to be my husband, my constant friend & partner, and my love. I will work to build on our bond of honesty, respect & trust. One that will stand the test of time along with our love. I vow to hold you tight for all that comes.`,
  //   handwrittenStory: "Quiet vows spoken under the amber glow of Lake Pichola.",
  //   details: "Handwritten vow archive. 35mm monochrome stills.",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=85",
  //     "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
  //   ],
  // },
  {
    id: "blue-ink-love",
    figNum: "FIG. 03",
    couple: "Indhu and Abhinandhan",
    location: "Bangalore, Karnataka",
    date: "April 19, 2026",
    styleType: "blue-ink-polaroid",
    mainImage: "https://res.cloudinary.com/fdzu3ih2/image/upload/v1787640364/Edits_DSC02683_Large.jpg",
    blueQuote: `"Engaged — two souls, one quiet promise"`,
    handwrittenStory: "An engagement evening in the ancestral courtyard — henna-stained hands, marigolds and quiet laughter between two families as the rituals draw near.",
    details: "Engagement — taped silver gelatin with indigo hand-lettering. Ancestral home, Bangalore.",
    gallery: [
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1787640290/Indhu_Delivered_Collection.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1787640280/15.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1787640279/20.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1787640278/5.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1787640278/14.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1787640286/3.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1787640278/8.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1787640279/18.jpg",
    ],
  },
  // {
  //   id: "stacked-birds",
  //   figNum: "FIG. 04",
  //   couple: "Meera and Kabir",
  //   location: "Goa Shore",
  //   date: "May 10, 2026",
  //   styleType: "paperclip-stack",
  //   mainImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
  //   secondaryImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  //   handwrittenStory: "What if we just pull over to the side of the road and breathe about what brought us here... under the honest sun.",
  //   details: "Paperclipped scrap notes & layered coastal monochrome stills.",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
  //   ],
  // },
  {
    id: "artistic-letter",
    figNum: "",
    couple: "Arunima and Udish",
    location: "Bangalore, Karnataka",
    date: "July 25, 2026",
    styleType: "artistic-letter",
    mainImage: "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786343468/DSC02052.jpg",
    handwrittenStory: "A quiet stroll under the sprawling canopies of Bangalore. Just the two of them, away from the city's rush, wrapped in the silent rhythm of their promises.",
    details: "Fine art couple journal record.",
    gallery: [
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786343483/DSC02048.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786343477/DSC01948.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786343476/DSC01890.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786343466/DSC02144.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786343463/DSC02099.jpg",
      "https://res.cloudinary.com/fdzu3ih2/image/upload/v1786343463/DSC02000.jpg",
    ],
  },
];
