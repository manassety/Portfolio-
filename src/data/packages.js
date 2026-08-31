/**
 * Rate List & Package Data for SETY VIDEOS AND MIXING LAB
 * 
 * All package information, inclusions, pricing, and variant options are centralized here.
 * The studio owner can easily update, add, or modify packages without touching UI components.
 */

export const packagesData = [
  {
    id: 1,
    number: "01",
    name: "Classic Traditional Package",
    tagline: "Essential traditional photography & videography coverage for intimate ceremonies.",
    price: "₹30,000",
    priceNumber: 30000,
    isPopular: false,
    badge: "Classic",
    deliverables: {
      album: "Loaded Album 12 x 36 with Sparkle Cover",
      storage: "32 GB Pendrive + Google Drive Cloud Storage",
      frames: "1 Photo Frame (12 x 18)",
      coverage: "Traditional Videography & Traditional Photography"
    },
    features: [
      "Traditional Videography",
      "Traditional Photography",
      "32 GB Pendrive",
      "Loaded Album (12 x 36)",
      "Premium Sparkle Cover Finishing",
      "1 Photo Frame (12 x 18)",
      "All Original Data in Google Drive"
    ],
    coverImage: "./images/gallery/wedding-photo/DSC08475.JPG.jpeg"
  },
  {
    id: 2,
    number: "02",
    name: "Standard Aerial Package",
    tagline: "Comprehensive traditional coverage enhanced with aerial drone cinematography & social reels.",
    price: "₹40,000",
    priceNumber: 40000,
    isPopular: false,
    badge: "Popular Aerial",
    deliverables: {
      album: "Loaded Album 14 x 40 with 3D Box",
      storage: "32 GB Pendrive + Google Drive Cloud Storage",
      frames: "2 Photo Frames (12 x 18)",
      coverage: "Traditional Coverage + Drone Aerial Shoot + Social Reels"
    },
    features: [
      "Traditional Videography",
      "Traditional Photography",
      "32 GB Pendrive",
      "Trending Wedding Reels",
      "Loaded Album (14 x 40)",
      "Luxury Cover / 3D Box Packaging",
      "2 Photo Frames (12 x 18)",
      "Drone Shoot & Aerial Footage",
      "All Raw Data in Google Drive"
    ],
    coverImage: "./images/gallery/candid-photo/DSC_6300.JPG.jpeg"
  },
  {
    id: 3,
    number: "03",
    name: "Cinematic Film Package",
    tagline: "High-definition traditional shoots combined with cinematic wedding films and teaser trailers.",
    price: "₹50,000",
    priceNumber: 50000,
    isPopular: true,
    badge: "Most Requested",
    deliverables: {
      album: "Loaded Album 14 x 40 with Custom Box",
      storage: "32 GB Pendrive + Google Drive Cloud Storage",
      frames: "Photo Frame Included",
      coverage: "Traditional + Full Cinematic Video + Teaser Trailer + Reels"
    },
    features: [
      "Traditional Videography",
      "Traditional Photography",
      "32 GB Pendrive",
      "Cinematic Wedding Film",
      "Trending Reels",
      "Cinematic Teaser Trailer",
      "Loaded Album (14 x 40)",
      "Custom Protective Box",
      "All Raw Data in Google Drive"
    ],
    coverImage: "./images/gallery/wedding-photo/DSC_6225.JPG.jpeg"
  },
  {
    id: 4,
    number: "04",
    name: "Gimbal & Drone Custom Package",
    tagline: "Tailored cinematic gimbal video movement and aerial drone photography for large events.",
    price: "Price on Enquiry",
    priceNumber: null,
    isPopular: false,
    badge: "Customizable",
    isCustom: true,
    deliverables: {
      album: "Custom Luxury Album (Size on Request)",
      storage: "High Speed Pendrive + Cloud Access",
      frames: "Custom Wall Frames",
      coverage: "Gimbal Cinematic Video + Aerial Drone + Traditional Coverage"
    },
    features: [
      "Traditional Videography",
      "Traditional Photography",
      "High-Capacity Pendrive Storage",
      "Cinematic Video with Gimbal Stabilizer",
      "Drone Shoot & Aerial Shots",
      "Custom Album & Frame Options Available",
      "Full Raw Data Backup"
    ],
    note: "Specific pricing varies based on event duration and custom requirements. Contact us for an exact quote.",
    coverImage: "./images/gallery/wedding-photo/DSC08506.JPG.jpeg"
  },
  {
    id: 5,
    number: "05",
    name: "Royal Candid & Emboss Package",
    tagline: "Luxury dual-perspective coverage featuring candid artistry, drone films, and embossed albums.",
    price: "₹80,000",
    priceVariants: [
      { label: "Bride Side Coverage", price: "₹80,000", priceNumber: 80000 },
      { label: "Groom Side Coverage", price: "₹90,000", priceNumber: 90000 }
    ],
    isPopular: false,
    badge: "Royal Luxury",
    deliverables: {
      album: "Royal Album 14 x 40 with Emboss Finishing & 3D Box",
      storage: "32 / 64 GB Pendrive + Google Drive",
      frames: "2 Frames (12 x 18) + 2 Wall Portraits (16 x 24)",
      coverage: "Traditional + Cinematic + Candid Photography + Drone"
    },
    features: [
      "Traditional Videography & Photography",
      "32 / 64 GB High-Speed Pendrive",
      "Cinematic Video & Highlight Reel",
      "Candid Photography Artistry",
      "4K Drone Aerial Shoot",
      "Luxury Album (14 x 40) with 3D Box",
      "Emboss-Style Album Finishing & Page Transitions",
      "2 Photo Frames (12 x 18)",
      "2 Large Wall Portraits (16 x 24)",
      "All High-Res Raw Data in Google Drive"
    ],
    coverImage: "./images/gallery/candid-photo/DSC08665.JPG.jpeg"
  },
  {
    id: 6,
    number: "06",
    name: "Grand Master Multi-Camera Package",
    tagline: "The ultimate flagship event experience with multi-camera crew, gimbal movement, and premium finishes.",
    price: "₹1,20,000",
    priceNumber: 120000,
    isPopular: true,
    badge: "Flagship Suite",
    deliverables: {
      album: "Masterpiece Album 14 x 40 with Premium 3D Box & Custom Layouts",
      storage: "64 GB High Speed Pendrive + Permanent Drive Storage",
      frames: "Multiple Wall Portrait Frames Included",
      coverage: "Multi-Camera Crew + Gimbal + Candid + Drone + Complete Event Coverage"
    },
    features: [
      "Multi-Camera Live Event Coverage",
      "Traditional Videography & Photography",
      "32 / 64 GB Pendrive Storage",
      "Cinematic Video with Gimbal Stabilizers",
      "Candid Photography Specialist",
      "Cinematic Drone Aerial Shoot",
      "Masterpiece Album with Premium Box",
      "Custom Page Design & Metallic/Emboss Finishing",
      "Premium Photo Frames Selection",
      "All Original Data in Google Drive"
    ],
    coverImage: "./images/gallery/wedding-photo/DSC08911.JPG.jpeg"
  },
  {
    id: 7,
    number: "SP",
    name: "Special Bride / Groom Package",
    tagline: "Dedicated side-specific luxury wedding album and video highlights compilation.",
    price: "Bride ₹60,000 / Groom ₹70,000",
    priceVariants: [
      { label: "Bride Package", price: "₹60,000", priceNumber: 60000 },
      { label: "Groom Package", price: "₹70,000", priceNumber: 70000 }
    ],
    isPopular: false,
    badge: "Special Edition",
    deliverables: {
      album: "Loaded Album 14 x 40 with Custom Box & Special Layouts",
      storage: "Pendrive + Cloud Storage",
      frames: "1 Photo Frame (12 x 18) & 1 Photo Frame (16 x 24)",
      coverage: "Cinematic Teaser + Social Reels + Specialized Album"
    },
    features: [
      "Loaded Album (14 x 40) with Luxury Box",
      "1 Photo Frame (12 x 18) & 1 Photo Frame (16 x 24)",
      "Special Design Album Page Transitions",
      "Cinematic Wedding Reels",
      "Cinematic Teaser Trailer",
      "Customized Bride or Groom Centric Coverage"
    ],
    coverImage: "./images/gallery/photo-album/2c48ae672f49400795336ab8c6ef7fca.jpg"
  }
];

// Quick feature matrix for the comparison drawer modal
export const packageComparisonMatrix = [
  { feature: "Traditional Videography & Photography", pkg1: true, pkg2: true, pkg3: true, pkg4: true, pkg5: true, pkg6: true, pkgSp: true },
  { feature: "Pendrive Storage", pkg1: "32 GB", pkg2: "32 GB", pkg3: "32 GB", pkg4: "Included", pkg5: "32/64 GB", pkg6: "32/64 GB", pkgSp: "Included" },
  { feature: "Google Drive Raw Data", pkg1: true, pkg2: true, pkg3: true, pkg4: true, pkg5: true, pkg6: true, pkgSp: true },
  { feature: "Album Size & Box", pkg1: "12x36 Sparkle", pkg2: "14x40 3D Box", pkg3: "14x40 Box", pkg4: "Custom", pkg5: "14x40 Emboss", pkg6: "14x40 Premium", pkgSp: "14x40 Box" },
  { feature: "Photo Frames Included", pkg1: "1 Frame (12x18)", pkg2: "2 Frames (12x18)", pkg3: "Included", pkg4: "Optional", pkg5: "2 Frames + 2 (16x24)", pkg6: "Multiple Frames", pkgSp: "1 Frame (12x18) + 1 Frame (16x24)" },
  { feature: "Drone Aerial Shoot", pkg1: false, pkg2: true, pkg3: false, pkg4: true, pkg5: true, pkg6: true, pkgSp: false },
  { feature: "Cinematic Video / Gimbal", pkg1: false, pkg2: false, pkg3: true, pkg4: true, pkg5: true, pkg6: true, pkgSp: false },
  { feature: "Candid Photography", pkg1: false, pkg2: false, pkg3: false, pkg4: false, pkg5: true, pkg6: true, pkgSp: false },
  { feature: "Wedding Reels & Teaser", pkg1: false, pkg2: "Reels", pkg3: "Reels + Teaser", pkg4: false, pkg5: "Teaser/Reels", pkg6: "Reels + Teaser", pkgSp: "Reels + Teaser" },
  { feature: "Multi-Camera Crew", pkg1: false, pkg2: false, pkg3: false, pkg4: false, pkg5: false, pkg6: true, pkgSp: false },
];
