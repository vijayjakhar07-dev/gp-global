export const COMPANY = {
  name: 'GP Global Petro Energy',
  gstin: '06EVZPS4105J2ZR',
  address: 'Rajendra Park, Haryana – 122001',
  phoneDisplay: '+91 9828102506',
  phoneTel: '+919828102506',
  email: 'vijay.kumar.jakhar.dev@gmail.com',
  whatsapp: 'https://wa.me/919828102506',
}

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export const SERVICES = [
  {
    slug: 'road-construction',
    title: 'Road Construction',
    summary: 'Structured support for road construction programmes, from material planning to on-site coordination.',
    body: 'Road programmes depend on consistent materials, disciplined sequencing and clear site communication. We work with project teams to supply and coordinate bituminous materials for new carriageways and related civil works.',
  },
  {
    slug: 'highway-infrastructure',
    title: 'Highway & Infrastructure',
    summary: 'Material and logistics support for highway and civil infrastructure development.',
    body: 'Highway corridors require predictable bulk supply and careful handling. Our work is organised around reliable dispatch, documented movement and alignment with the construction programme on site.',
  },
  {
    slug: 'bituminous-road-works',
    title: 'Bituminous Road Works',
    summary: 'VG-30 bulk bitumen supply for surfacing, paving and related bituminous applications.',
    body: 'Bituminous works sit at the centre of our offering. We supply industrial-grade bulk bitumen for road surfacing and related applications, with clear documentation for tax, movement and receipt on site.',
  },
  {
    slug: 'civil-construction',
    title: 'Civil Construction',
    summary: 'Supporting civil construction teams with materials and coordinated delivery.',
    body: 'Civil packages often run in parallel with road works. We support contractors who need dependable bitumen supply as part of a broader civil construction programme.',
  },
  {
    slug: 'road-maintenance',
    title: 'Road Maintenance',
    summary: 'Material support for repair, strengthening and upkeep of existing road assets.',
    body: 'Maintenance windows are short. We organise supply so repair and strengthening works can proceed without unnecessary waiting on material.',
  },
  {
    slug: 'infrastructure-development',
    title: 'Infrastructure Development',
    summary: 'Project-minded supply for infrastructure development and execution teams.',
    body: 'Infrastructure programmes need a supplier who understands drawings, schedules and site constraints. We work as a materials partner, not only as a trader.',
  },
]

export const VALUES = [
  { title: 'Quality', text: 'Materials and documentation are treated as part of the same delivery. What leaves the yard must match what the site expects.' },
  { title: 'Reliable execution', text: 'Dispatch, movement and receipt are planned so construction teams can work to programme.' },
  { title: 'Technical capability', text: 'Bitumen grades, handling and application context are understood, not treated as generic cargo.' },
  { title: 'Safety', text: 'Bulk petroleum products require careful movement. Safety is part of how consignments are organised.' },
  { title: 'Project management', text: 'Orders are handled with clear references, movement records and a single point of contact.' },
  { title: 'Customer focus', text: 'Construction calendars drive our response. We organise around the site, not around a catalogue.' },
]

export const EQUIPMENT = [
  {
    name: 'Bulk bitumen tanker movement',
    type: 'Logistics',
    purpose: 'Movement of bulk VG-30 bitumen from dispatch points to construction sites.',
    note: 'Vehicle and transporter details are assigned per consignment. Specifications are confirmed on the movement documents for each order.',
  },
  {
    name: 'Yard dispatch coordination',
    type: 'Operations',
    purpose: 'Loading, documentation and release of bulk material against purchase and tax records.',
    note: 'Operational capacity is organised around live orders. Detailed plant inventories will be published when verified photographs and specifications are available.',
  },
  {
    name: 'Site receipt support',
    type: 'Field coordination',
    purpose: 'Alignment with the receiving contractor on quantity, timing and documentation.',
    note: 'On-site handling equipment belongs to the receiving project unless otherwise agreed in writing.',
  },
]

export const PLACEHOLDER_PROJECTS = [
  {
    id: 'p1',
    name: 'Project record to be published',
    location: 'Location to be confirmed',
    category: 'Road Works',
    status: 'Placeholder',
    src: '/images/vetted/highway-day.jpg',
    alt: 'Urban highway carriageway at dusk, representative industry photograph',
    description: 'A completed or active road programme will be described here once the client permits public reference.',
  },
  {
    id: 'p2',
    name: 'Highway package — pending clearance',
    location: 'Location to be confirmed',
    category: 'Highway',
    status: 'Placeholder',
    src: '/images/vetted/highway.jpg',
    alt: 'Aerial view of a multi-level highway interchange, representative industry photograph',
    description: 'Highway and corridor work will be listed with verified location, scope and status only.',
  },
  {
    id: 'p3',
    name: 'Bituminous surfacing — sample card',
    location: 'Location to be confirmed',
    category: 'Bituminous',
    status: 'Placeholder',
    src: '/images/vetted/excavator.jpg',
    alt: 'Heavy excavator on a civil works site, representative industry photograph',
    description: 'Surfacing and paving references will replace this card when photographs and project facts are approved.',
  },
  {
    id: 'p4',
    name: 'Civil works support — sample card',
    location: 'Location to be confirmed',
    category: 'Civil',
    status: 'Placeholder',
    src: '/images/vetted/site.jpg',
    alt: 'Civil construction deck with site crew, representative industry photograph',
    description: 'Civil construction support entries will be added with real names, sites and descriptions.',
  },
]

export const GALLERY = [
  { id: 'g1', src: '/images/vetted/highway.jpg', category: 'Infrastructure', alt: 'Aerial highway interchange, representative industry photograph' },
  { id: 'g2', src: '/images/vetted/construction.jpg', category: 'Construction', alt: 'Civil construction deck with rebar works, representative industry photograph' },
  { id: 'g3', src: '/images/vetted/excavator.jpg', category: 'Machinery', alt: 'Tracked excavator on a construction site, representative industry photograph' },
  { id: 'g4', src: '/images/vetted/site.jpg', category: 'Projects', alt: 'Open civil works site with construction crew, representative industry photograph' },
  { id: 'g5', src: '/images/vetted/highway-day.jpg', category: 'Road Works', alt: 'Multi-lane urban highway at sunset, representative industry photograph' },
  { id: 'g6', src: '/images/vetted/civil-works.jpg', category: 'Construction', alt: 'Formwork and civil construction activity, representative industry photograph' },
  { id: 'g7', src: '/images/vetted/civil-pour.jpg', category: 'Construction', alt: 'Concrete pour on a civil works site, representative industry photograph' },
  { id: 'g8', src: '/images/vetted/highway-trucks.jpg', category: 'Road Works', alt: 'Heavy trucks on a highway, representative industry photograph' },
]

export const IMAGES = {
  hero: '/images/vetted/highway.jpg',
  about: '/images/vetted/construction.jpg',
  bitumen: '/images/vetted/excavator.jpg',
  road: '/images/vetted/highway-day.jpg',
  plant: '/images/vetted/site.jpg',
  night: '/images/vetted/highway-trucks.jpg',
}

export const PROJECT_TYPES = [
  'Road Construction',
  'Highway & Infrastructure',
  'Bituminous Road Works',
  'Civil Construction',
  'Road Maintenance',
  'Other',
]
