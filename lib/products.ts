export interface Product {
  slug: string;
  sku: string;
  num: string;
  title: string;
  titleAccent?: string; // italic accent word in the title
  titleAfter?: string;  // text after the accent
  sub: string;
  category: string;
  material: string;
  dimensions: string;
  weight: string;
  finish: string;
  deck: string;
  maker: string;
  leadTime: string;
  provenance: { title: string; body: string }[];
  images: number; // count of images in public/assets/products/<slug>/
  hasVideo: boolean;
  imageFormat?: "avif" | "png"; // override image format when a specific uploaded asset is more reliable
  videoFile?: string; // override filename (without extension) if SKU doesn't match the uploaded MP4 name
  theme?: string;
  colorPalette?: string;
  mood?: string;
  tags?: string[];
}

export const products: Product[] = [
  {
    slug: "wmnxmf27",
    sku: "WMNXMF27",
    num: "Nº 001",
    title: "Verdant Sun ",
    titleAccent: "Panorama",
    titleAfter: "",
    sub: "The same radiant bloom, opened wider across the wall.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "122 × 91 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Verdant Sun Panorama extends the floral mandala language into a horizontal format that feels expansive and architectural. The central bloom remains the heart of the work, while the wider framing lets the surrounding pattern breathe. It is ideal where a room needs softness, symmetry, and scale at once.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Sacred Bloom",
    colorPalette: "Leaf green, marigold, coral, blush, and ivory",
    mood: "Generous, balanced, luminous",
    tags: ["verdant sun panorama","wide mandala","floral luxury decor","panoramic wall art","premium layered panel"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "Where the square version feels like a jewel, this version feels like a room-set sunrise. The broader frame allows the ornament to exhale, giving the piece a calm, panoramic splendor.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A broad contemporary piece that balances motion, proportion, and calm authority.",
      },
      {
        title: "Edition & customisation",
        body: "A wide-format floral mandala artwork in green and gold, crafted for expansive, elegant interiors.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "wmnxmf16",
    sku: "WMNXMF16",
    num: "Nº 002",
    title: "Aureate ",
    titleAccent: "Rhapsody",
    titleAfter: "",
    sub: "A sweeping composition where ornament moves like music.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "183 × 76 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Aureate Rhapsody is exuberant without losing grace. The composition unfolds from the center outward in melodic curves, giving the work the energy of a cresting aria. Its warmth and movement make it a true statement piece for interiors that welcome expressive luxury.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Baroque Horizon",
    colorPalette: "Amber, apricot, sage, terracotta, teal, and antique gold",
    mood: "Opulent, rhythmic, expansive",
    tags: ["aureate rhapsody","panoramic artwork","ornamental luxury decor","statement wall art","layered wood panel"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "The piece behaves like a musical composition: a resonant center, a rise in intensity, and a beautifully sustained flourish. It fills a wall the way a generous melody fills a room—richly, but never without structure.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A grand panoramic work that feels architectural, collected, and lasting.",
      },
      {
        title: "Edition & customisation",
        body: "A sweeping wide-format ornamental artwork with a radiant center and richly layered flowing detail.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "wmnxmf02",
    sku: "WMNXMF02",
    num: "Nº 003",
    title: "Rosette of ",
    titleAccent: "Dawn",
    titleAfter: "",
    sub: "A luminous mandala composed like the opening of first light.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "91 × 91 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Rosette of Dawn is a celebration of symmetry with a distinctly human warmth. Its layered geometry feels precise, yet the palette keeps the work alive and welcoming rather than austere. Displayed alone, it gives a wall the grace of a crafted centerpiece.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Sacred Bloom",
    colorPalette: "Coral, antique gold, slate blue, blush, and ivory",
    mood: "Radiant, balanced, ceremonial",
    tags: ["rosette of dawn","mandala artwork","circular decor","sacred geometry art","premium wall medallion"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "The piece is built around repetition, but nothing about it feels mechanical. Its rhythm is closer to breathing—measured, luminous, and quietly uplifting, like the room receiving its first light.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A meditative square artwork that pairs crisp structure with quiet warmth.",
      },
      {
        title: "Edition & customisation",
        body: "A refined circular mandala in coral, gold, and slate, crafted as a radiant focal point for elegant interiors.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "wmnxmf05",
    sku: "WMNXMF05",
    num: "Nº 004",
    title: "Compass of ",
    titleAccent: "Affection",
    titleAfter: "",
    sub: "A ceremonial compass softened by the language of the heart.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "91 × 91 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Compass of Affection turns geometry into feeling. The composition suggests orientation, direction, and centeredness, yet the repeating heart forms temper it with intimacy and warmth. It is ideal for collectors who want sacred geometry with personality and charm.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Sacred Bloom",
    colorPalette: "Emerald, rose, marigold, charcoal blue, and cream",
    mood: "Joyful, centered, symbolic",
    tags: ["compass of affection","sacred geometry","circular artwork","symbolic decor","luxury layered mandala"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "What first appears architectural gradually reveals something more tender. By weaving heart forms into a strict radial order, the work suggests that guidance can come not only from reason, but from feeling.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A confident square piece defined by repetition, depth, and visual resonance.",
      },
      {
        title: "Edition & customisation",
        body: "A vibrant circular artwork blending compass geometry with heart motifs in a layered handcrafted composition.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    imageFormat: "png",
  },
  {
    slug: "wmnxmf17",
    sku: "WMNXMF17",
    num: "Nº 005",
    title: "Solar ",
    titleAccent: "Canticle",
    titleAfter: "",
    sub: "A radiant study of rotation, order, and ceremonial brightness.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "152 × 76 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Solar Canticle feels both architectural and devotional. The spiraling centerpiece gives it motion, while the dense surrounding pattern keeps it grounded in craft and precision. It works beautifully where a room calls for intricate detail with an uplifting, luminous tone.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Architectures of Light",
    colorPalette: "Sun yellow, coral, olive, terracotta, and ivory",
    mood: "Bright, dynamic, composed",
    tags: ["solar canticle","geometric artwork","radiant wall decor","premium rectangular art","layered pattern piece"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "Rotation is the soul of this piece. It draws the eye inward and outward at the same time, creating the sensation that the wall itself has begun to turn gently toward the light.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A sophisticated wide-format piece where scale and shadow create understated drama.",
      },
      {
        title: "Edition & customisation",
        body: "A radiant rectangular artwork with floral rotation, layered geometry, and a warm handcrafted finish.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "wmnxmf19",
    sku: "WMNXMF19",
    num: "Nº 006",
    title: "House of ",
    titleAccent: "Amber",
    titleAfter: "",
    sub: "An ornate symmetry shaped with the depth of carved light.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "122 × 61 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "House of Amber carries the gravitas of an heirloom object. Its dense filigree and symmetrical layering create a sculptural presence, while the warm, low-lit palette keeps the work intimate and deeply sophisticated. It is ideal for rooms that lean toward collected elegance.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Architectures of Light",
    colorPalette: "Amber, bronze, walnut, plum, and gold",
    mood: "Regal, intimate, composed",
    tags: ["house of amber","ornate mandala","luxury panel art","warm geometric decor","premium layered work"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "This work feels less like a picture and more like a chamber built from pattern. Its center acts as a quiet hearth, while every surrounding line contributes to a sense of shelter, richness, and order.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A versatile premium format that feels simultaneously calm, sculptural, and complete.",
      },
      {
        title: "Edition & customisation",
        body: "A richly layered rectangular mandala in amber and bronze tones, designed for elegant collector-style interiors.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "wmnxmf22",
    sku: "WMNXMF22",
    num: "Nº 007",
    title: "Midnight ",
    titleAccent: "Aureole",
    titleAfter: "",
    sub: "A deep-toned medallion where gold seems to glow from within.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "91 × 91 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Midnight Aureole is composed for drama, but of a refined kind. The dark tonal base intensifies every golden line, allowing the work to feel illuminated even in soft evening light. It is especially striking in interiors that favor contrast, mood, and quiet luxury.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Nocturne Geometry",
    colorPalette: "Slate blue, charcoal, amber, ivory, and antique gold",
    mood: "Nocturnal, opulent, meditative",
    tags: ["midnight aureole","dark mandala","luxury medallion art","moody geometric decor","premium circular wall art"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "The work holds light rather than simply reflecting it. Against its nocturne palette, every amber edge reads like a line of fire, giving the mandala the presence of an object discovered, not merely designed.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A square composition that feels disciplined, contemplative, and quietly luxurious.",
      },
      {
        title: "Edition & customisation",
        body: "A luxurious circular mandala in deep slate and amber tones, crafted for moody and elegant interiors.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "wmnxmf26",
    sku: "WMNXMF26",
    num: "Nº 008",
    title: "Arc Study ",
    titleAccent: "No. I",
    titleAfter: "",
    sub: "A cropped composition that turns pattern into pure design language.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "61 × 91 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Arc Study No. I has the elegance of an excerpt—the beauty of seeing only a portion of a larger order. Its cropped geometry feels modern and graphic, while the layered craft preserves warmth and tactility. It is particularly effective in curated, design-forward spaces.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Architectures of Light",
    colorPalette: "Marigold, sage, rose, charcoal plum, and ivory",
    mood: "Graphic, precise, design-led",
    tags: ["arc study no. i","architectural abstract","geometric panel","premium modern wall art","layered design piece"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "By refusing the full circle, the piece becomes more intriguing. It invites the eye to complete the form mentally, making absence just as important as ornament.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A tall, elegant composition made to elevate compact walls with architectural grace.",
      },
      {
        title: "Edition & customisation",
        body: "A refined cropped geometric artwork with layered arches, petals, and bold contemporary rhythm.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "wmnxmf39",
    sku: "WMNXMF39",
    num: "Nº 009",
    title: "Petals of ",
    titleAccent: "Reverie",
    titleAfter: "",
    sub: "A floral medallion drawn with warmth, rhythm, and quiet joy.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "91 × 91 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Petals of Reverie carries a celebratory softness. Its sunflower-like center and repeated teardrop petals give the piece a joyful cadence, while the layered construction preserves depth and sophistication. It is especially effective in interiors that want color without losing refinement.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Sacred Bloom",
    colorPalette: "Coral, honey gold, leaf green, blush, and ivory",
    mood: "Joyful, warm, uplifting",
    tags: ["petals of reverie","floral mandala","circular luxury decor","warm geometric artwork","premium wall medallion"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "The piece does not ask for attention through scale alone; it wins it through cadence. Each outward ring feels like an answered echo, creating a work that is bright, gracious, and immediately uplifting.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A gallery-like square artwork created to bring stillness, depth, and quiet prestige.",
      },
      {
        title: "Edition & customisation",
        body: "A radiant floral mandala in warm coral and gold tones, layered for joyful elegance and depth.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    imageFormat: "png",
  },
  {
    slug: "winxmf00",
    sku: "WINXMF00",
    num: "Nº 010",
    title: "The Secret ",
    titleAccent: "Garden",
    titleAfter: "",
    sub: "A portrait where memory, ornament, and silence bloom together.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "61 × 91 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "The Secret Garden is composed like an interior monologue—ornamental, intimate, and quietly radiant. The hand on the heart gives the portrait tenderness, while the layered geometry around the face suggests thoughts unfolding like petals. It brings a refined note of femininity and introspection to a space.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Mythic Muse",
    colorPalette: "Butter yellow, coral pink, sage green, teal, and muted mauve",
    mood: "Tender, introspective, luminous",
    tags: ["the secret garden","feminine artwork","abstract portrait","modern muse art","premium wood wall decor"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "This portrait is not about likeness; it is about presence. The face appears half revealed, half protected, as though the work is holding a private thought just before it turns into speech.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. An elegant vertical format that creates intimacy, height, and softness in compact spaces.",
      },
      {
        title: "Edition & customisation",
        body: "A layered feminine portrait with floral geometry and elegant color, created for intimate, art-led interiors.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    imageFormat: "png",
  },
  {
    slug: "winxmf01",
    sku: "WINXMF01",
    num: "Nº 011",
    title: "Keeper of ",
    titleAccent: "Instinct",
    titleAfter: "",
    sub: "A dreamlike portrait crowned by the wild grace of a ram.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "61 × 91 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Keeper of Instinct brings together tenderness and primal energy in one layered composition. The ram rests like a crest of intuition above the figure, suggesting guardianship, courage, and untamed knowing. Rich curves and concentric forms make the work feel ceremonial, expressive, and unmistakably collectible.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Mythic Muse",
    colorPalette: "Golden yellow, blush pink, turquoise, cream, and soft plum",
    mood: "Mystical, assured, expressive",
    tags: ["keeper of instinct","surreal portrait","ram motif art","premium figurative decor","symbolic wall piece"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "The ram appears here not as decoration, but as a keeper of inner force. Wrapped around the figure in loops of color and ritual geometry, it turns the portrait into an emblem of intuition made visible.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A calm yet fluid composition that adds visual movement without disturbing the room.",
      },
      {
        title: "Edition & customisation",
        body: "A layered surreal portrait with a ram motif, balancing feminine grace with symbolic power and color.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "winxmf02",
    sku: "WINXMF02",
    num: "Nº 012",
    title: " ",
    titleAccent: "Oracle",
    titleAfter: " by the Window",
    sub: "A quiet scene of vision, symbols, and suspended time.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "61 × 91 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Oracle by the Window carries the stillness of a private chamber charged with meaning. The figure’s gesture suggests concealment and revelation at once, while the birdlike form introduces the feeling of omen, witness, and message. Structured yet poetic, the artwork lends narrative depth to contemporary interiors.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Mythic Muse",
    colorPalette: "Saffron yellow, jade, rose, teal, ivory, and mauve",
    mood: "Enigmatic, poised, contemplative",
    tags: ["oracle by the window","narrative art","symbolic portrait","luxury layered decor","collector wall art"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "It feels as though the room has paused for a revelation. Between the figure’s lowered arm and the strange, watchful companion, the piece leaves space for mystery—the kind that makes a wall feel more like a story than a surface.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. Designed for interiors that value silence, balance, and subtle material richness.",
      },
      {
        title: "Edition & customisation",
        body: "A layered narrative artwork with figure, symbolism, and architectural geometry for collector-style interiors.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "winxmf03",
    sku: "WINXMF03",
    num: "Nº 013",
    title: "Ember ",
    titleAccent: "Plume",
    titleAfter: "",
    sub: "A vertical flourish of warmth, movement, and ornamental fire.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "61 × 91 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Ember Plume is built on upward motion. Its layered arcs and leaf-like tendrils create the sensation of something rising—elegant, alive, and richly composed. The warm amber, rose, and bronze tones make it especially beautiful in interiors that value warmth, craft, and sculptural detail.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Baroque Flame",
    colorPalette: "Amber, terracotta, rose, bronze, and smoked plum",
    mood: "Warm, ascending, lyrical",
    tags: ["ember plume","ornamental abstract","vertical artwork","warm luxury decor","layered wood art"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "The composition rises the way flame rises—never rigid, always articulate. Each line feels guided by breath, turning the piece into a study of motion that remains unexpectedly serene.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A reflective piece that brings both sculptural depth and emotional subtlety to the room.",
      },
      {
        title: "Edition & customisation",
        body: "A warm, layered ornamental artwork with plume-like movement and a refined arched composition.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "winxmf04",
    sku: "WINXMF04",
    num: "Nº 014",
    title: "Profile in ",
    titleAccent: "Reverie",
    titleAfter: "",
    sub: "A contemplative profile drawn from pattern, memory, and shadow.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "61 × 61 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Profile in Reverie is both portrait and atmosphere. The outer line remains minimal and calm, while the inner patterned body suggests hidden thought, memory, and private architecture. It is an elegant piece for spaces that prefer subtle emotion over literal statement.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Quiet Silhouettes",
    colorPalette: "Honey wood, cocoa, blush, sand, and muted rose",
    mood: "Reflective, soft, restrained",
    tags: ["profile in reverie","silhouette art","feminine wall decor","premium wood artwork","quiet portrait"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "The beauty of the piece lies in what it withholds. Rather than describe a face fully, it lets pattern speak for interior life—turning stillness into the most expressive part of the portrait.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A compact statement designed for intimate walls where detail and refinement matter most.",
      },
      {
        title: "Edition & customisation",
        body: "An elegant layered silhouette artwork with quiet pattern and warm tones for calm contemporary interiors.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "wanxmf05",
    sku: "WANXMF05",
    num: "Nº 015",
    title: "Dune ",
    titleAccent: "Sovereigns",
    titleAfter: "",
    sub: "A procession of freedom across a sunlit horizon.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "122 × 61 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Dune Sovereigns captures the power of movement held inside a moment of quiet light. The layered silhouettes of the horses give the piece a rhythmic grace, while the warm desert palette lends it calm, cinematic depth. It is a work about freedom, companionship, and the noble beauty of forward motion.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Desert Reverie",
    colorPalette: "Sand, ivory, camel, ochre, and dusk mauve",
    mood: "Free, sun-warmed, noble",
    tags: ["dune sovereigns","horse artwork","desert decor","premium figurative art","layered wood panel"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "At first glance, the piece reads like a tranquil desert scene; look closer, and it becomes a meditation on instinct and direction. The horses do not race in chaos—they travel with purpose, carrying the quiet grandeur of open land into the room.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A wide, gallery-style composition with layered depth and a calm architectural presence.",
      },
      {
        title: "Edition & customisation",
        body: "Layered horse artwork set against desert dunes and a rising sun, crafted for warm, elegant interiors.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
  {
    slug: "wmnxmf27_sq",
    sku: "WMNXMF27_sq",
    num: "Nº 016",
    title: "Verdant ",
    titleAccent: "Sun",
    titleAfter: "",
    sub: "A square mandala radiant with garden light and measured symmetry.",
    category: "Wall art",
    material: "Dimensional Wood Relief",
    dimensions: "91 × 91 cm · 4.57 cm deep",
    weight: "On request",
    finish: "Hand Painted with Protective PU Coat",
    deck: "Verdant Sun offers the richness of a mandala and the composure of a square composition. The floral geometry feels cultivated rather than merely decorative, giving the piece a stately warmth that suits premium interiors beautifully. It reads as both focal point and atmosphere.",
    maker: "Wallantq Private Atelier",
    leadTime: "Ready to ship · 7 days",
    theme: "Sacred Bloom",
    colorPalette: "Leaf green, marigold, coral, blush, and ivory",
    mood: "Lush, radiant, harmonious",
    tags: ["verdant sun","square mandala","green luxury decor","floral geometry art","premium layered wall piece"],
    provenance: [
      {
        title: "Story behind the piece",
        body: "This work feels cultivated in the best sense of the word. Its petals unfold with precision, yet the overall impression is lush and generous—like a formal garden translated into geometry.",
      },
      {
        title: "Craft & material",
        body: "Hand-finished layered wood art. A centered geometric piece that feels both intellectual and atmospheric.",
      },
      {
        title: "Edition & customisation",
        body: "A lush square mandala in green and gold tones, layered for depth and a refined botanical presence.. Custom sizes, finishes, and palettes available on request — lead time 14 days.",
      },
      {
        title: "Care & assurance",
        body: "Dust gently with a dry soft cloth. Keep away from excess moisture and direct harsh sunlight.. Craftsmanship assurance against manufacturing defects.. Ships in protective corrugated packaging within 5–10 business days across India.",
      },
    ],
    images: 1,
    hasVideo: true,
    
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelated(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}
