import {
  Clapperboard,
  Lightbulb,
  PenTool,
  Users,
  type LucideIcon,
} from 'lucide-react'

export const profile = {
  name: 'Mandela Senghor',
  role: 'Communicant digital & créatif',
  location: 'Bamako, Mali',
  email: 'soungalofane3@gmail.com',
  phone: '+22390829443',
  phoneDisplay: '+223 90 82 94 43',
  statusLine: 'Création de contenu · graphisme · montage vidéo',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/share/1DLeFbhd3e/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@mandela_senghor' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/fane-soungalo-33967a277/',
    },
  ],
}

export type Expertise = {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export const expertise: Expertise[] = [
  {
    number: '01',
    title: 'Création de contenu',
    description:
      'Imaginer des contenus utiles, cohérents et adaptés aux plateformes et aux publics.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Community management',
    description:
      'Animer les échanges avec les communautés et donner une voix régulière aux marques.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Graphisme',
    description:
      'Créer des visuels qui rendent les messages plus visibles et plus faciles à retenir.',
    icon: PenTool,
  },
  {
    number: '04',
    title: 'Montage vidéo',
    description:
      'Assembler images, rythme et son pour raconter une idée dans un format vidéo.',
    icon: Clapperboard,
  },
]

export const experience = [
  {
    title: 'Stage — production radio',
    organization: 'Radio Maliba FM',
    period: 'Octobre 2024',
    location: 'ACI 2000, Bamako',
    details: [
      'Participation à la réalisation d’émissions et au montage audio.',
      'Animation de segments communautaires.',
    ],
  },
  {
    title: 'Digital Makers — formation pratique',
    organization: 'Kabakoo Academies',
    period: '2023',
    location: '',
    details: [
      'Apprentissage du no-code, du web, de l’UX/UI design et de la culture digitale.',
      'Réalisation de mini-projets digitaux collaboratifs.',
    ],
  },
  {
    title: 'Participation — Journée Nationale de la Cybersécurité',
    organization: 'CICB Bamako',
    period: '',
    location: '',
    details: [
      'Concours national de cybersécurité et sensibilisation à la sécurité des données.',
    ],
  },
]

export const education = [
  {
    title: 'Licence en communication',
    organization: 'IUT de Bamako',
    period: '2021–2025',
  },
  {
    title: 'Hack’Art Multimédia — animation 2D sur Blender',
    organization: 'Orange Digital Center',
    period: '19–23 mai 2025',
  },
  {
    title: 'Microsoft Office, développement web & UI/UX design',
    organization: 'Ecobooster Link, Bamako Coura',
    period: 'Juillet–septembre 2022',
  },
  {
    title: 'Baccalauréat malien — série Lettres',
    organization: 'LPMCAD, Djicoroni Para',
    period: '2020',
  },
  {
    title: 'Diplôme d’études fondamentales (DEF)',
    organization: 'Centre de Sagabala',
    period: '2017',
  },
]

export const skillGroups = [
  {
    title: 'Création & audiovisuel',
    items: ['Photoshop', 'Canva', 'Blender 2D', 'Premiere Pro', 'CapCut'],
  },
  {
    title: 'Digital & contenu',
    items: [
      'Community management',
      'Facebook · Instagram · TikTok · LinkedIn',
      'Rédaction web',
      'Gestion de contenu',
      'UX/UI design',
      'No-code',
      'HTML/CSS — bases',
    ],
  },
  {
    title: 'Bureautique',
    items: ['Word', 'Excel', 'PowerPoint', 'Access'],
  },
]

export const strengths = [
  'Leadership',
  'Créativité',
  'Autonomie',
  'Esprit d’équipe',
  'Communication',
]

export const interests = [
  'Lecture',
  'Technologie',
  'Musique',
  'Voyages',
  'Sport',
  'Cyberculture',
  'Design graphique',
]

export const languages = [
  { name: 'Bambara', level: 'Langue maternelle' },
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Intermédiaire' },
]

export type ProjectCategory =
  | 'Publicité & marque'
  | 'Événementiel'
  | 'Information & société'

export type PortfolioProject = {
  id: string
  category: ProjectCategory
  title: string
  summary: string
  tag: string
  theme: 'orange' | 'blue' | 'green'
  image: string
  alt: string
}

// Selected JPGs from the user's "Mes créa" folder, optimized for the website.
export const projects: PortfolioProject[] = [
  {
    id: '01',
    category: 'Publicité & marque',
    title: 'Black & Beauty',
    summary:
      'Visuel promotionnel autour d’une offre beauté et soins.',
    tag: 'Beauté',
    theme: 'orange',
    image: '/images/black-beauty.webp',
    alt: 'Affiche Black & Beauty avec portraits et offre beauté.',
  },
  {
    id: '02',
    category: 'Événementiel',
    title: 'Deviens créateur pro',
    summary:
      'Visuel d’annonce pour une formation en création de contenu et communication.',
    tag: 'Formation',
    theme: 'blue',
    image: '/images/business-conference.webp',
    alt: 'Affiche de formation Deviens créateur pro.',
  },
  {
    id: '03',
    category: 'Événementiel',
    title: 'Coupe du Mali — affiche de finale',
    summary:
      'Affiche sportive annonçant la finale de la Coupe du Mali.',
    tag: 'Sport',
    theme: 'green',
    image: '/images/mali-cup-final.webp',
    alt: 'Affiche sportive de la finale de la Coupe du Mali avec deux joueurs.',
  },
  {
    id: '04',
    category: 'Événementiel',
    title: 'Webinaire — flyer promotionnel',
    summary:
      'Création d’un flyer pour annoncer un webinaire et ses intervenants.',
    tag: 'Webinaire',
    theme: 'orange',
    image: '/images/webinar.webp',
    alt: 'Flyer promotionnel pour un webinaire.',
  },
  {
    id: '05',
    category: 'Information & société',
    title: 'Votre voix compte',
    summary:
      'Visuel d’information pour une enquête, avec un QR code vers le questionnaire.',
    tag: 'Enquête',
    theme: 'blue',
    image: '/images/voice-survey.webp',
    alt: 'Affiche Votre voix compte pour inviter le public à répondre à une enquête.',
  },
  {
    id: '06',
    category: 'Événementiel',
    title: 'Masterclass IA',
    summary:
      'Affiche de communication pour une masterclass consacrée à l’intelligence artificielle.',
    tag: 'Intelligence artificielle',
    theme: 'green',
    image: '/images/ai-masterclass.webp',
    alt: 'Affiche de promotion d’une masterclass sur l’intelligence artificielle.',
  },
  {
    id: '07',
    category: 'Publicité & marque',
    title: 'Street Food — bientôt disponible',
    summary:
      'Affiche d’annonce et de promotion d’une offre de restauration.',
    tag: 'Restauration',
    theme: 'orange',
    image: '/images/street-food.webp',
    alt: 'Affiche Street Food annonçant une offre de restauration.',
  },
  {
    id: '08',
    category: 'Publicité & marque',
    title: 'Services Impérial Com',
    summary:
      'Visuel de présentation de services de communication et de création.',
    tag: 'Services',
    theme: 'blue',
    image: '/images/imperial-services.webp',
    alt: 'Visuel de présentation des services d’Impérial Com.',
  },
]
