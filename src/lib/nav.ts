export type NavLink = {
  label: string
  href: string
}

export type NavItem = {
  label: string
  href: string
  children?: NavLink[]
}

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Paddock Paradise',
    href: '/paddock-paradise',
    children: [
      { label: 'Concept', href: '/paddock-paradise' },
      { label: 'Create Your Paddock Paradise', href: '/paddock-paradise/create-your-paddock-paradise' },
    ],
  },
  {
    label: 'Natural Care',
    href: '/natural-care/natural-food',
    children: [
      { label: 'Natural Food', href: '/natural-care/natural-food' },
      { label: 'Natural Trimming', href: '/natural-care/natural-trimming' },
      { label: 'Energy Healing', href: '/natural-care/energy-healing' },
      { label: 'Dentistry', href: '/natural-care/dentistry' },
    ],
  },
  {
    label: 'Horsemanship',
    href: '/horsemanship/philosophy',
    children: [
      { label: 'Philosophy', href: '/horsemanship/philosophy' },
      { label: 'Groundwork', href: '/horsemanship/groundwork' },
      { label: 'Group Workshops', href: '/horsemanship/group-workshops' },
    ],
  },
  { label: 'Mountain Trail', href: '/mountain-trail' },
  {
    label: 'Equine-Assisted Coaching',
    href: '/equine-coaching/introduction',
    children: [
      { label: 'Introduction', href: '/equine-coaching/introduction' },
      { label: 'Individual Coaching', href: '/equine-coaching/individual-coaching' },
      { label: 'Team Coaching', href: '/equine-coaching/team-coaching' },
      { label: 'Constellations / Systemic Coaching', href: '/equine-coaching/constellations' },
      { label: 'Personal Development Workshops', href: '/equine-coaching/workshops' },
    ],
  },
]

export const secondaryNav: NavItem[] = [
  { label: 'Events', href: '/events' },
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'Shop', href: '/shop' },
      { label: 'Online Memberships', href: '/shop/memberships' },
    ],
  },
  {
    label: 'Useful Information',
    href: '/useful-information/team',
    children: [
      { label: 'The Team', href: '/useful-information/team' },
      { label: 'Access & Contact', href: '/useful-information/access-contact' },
      { label: 'Useful Links', href: '/useful-information/useful-links' },
    ],
  },
  {
    label: 'Connected',
    href: '/connected/photo-galleries',
    children: [
      { label: 'Photo Galleries', href: '/connected/photo-galleries' },
      { label: 'Videos', href: '/connected/videos' },
    ],
  },
]
