'use client'

import { useState } from 'react'
import { CarFront, ChevronDown, Menu, Phone, X } from 'lucide-react'

export const navItems = [
  ['Home', '/'],
  ['Inventory', '/cars-for-sale'],
  ['Loan Application', '/loan-application'],
  ['Car Finder', '/car-finder'],
  ['Value My Trade', '/value-my-trade'],
  ['Testimonials', '/testimonial'],
]

export function CarlyHeader() {
  const [open, setOpen] = useState(false)
  const [inventoryOpen, setInventoryOpen] = useState(false)
  const inventoryLinks = [
    ['All inventory', '/cars-for-sale'],
    ['Sedans', '/cars-for-sale?type=Sedan'],
    ['SUVs', '/cars-for-sale?type=SUV'],
    ['Trucks', '/cars-for-sale?type=Truck'],
  ]
  return <>
    <div className="topbar"><div className="container flex items-center justify-between gap-4"><span className="hidden sm:inline">Houston&apos;s trusted independent dealer since 2018</span><a href="tel:7139365512"><Phone /> (713) 936-5512</a><span className="hidden md:inline">842 Little York Rd, Suite B · Houston, TX 77076</span></div></div>
    <header className="site-header"><div className="container flex items-center justify-between gap-6"><a href="/" className="brand" aria-label="Carly Cars home"><span className="brand-mark"><CarFront /></span><span>CARLY<span>CARS</span></span></a><nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, href]) => label === 'Inventory' ? <div className="nav-dropdown" key={href}><button className="nav-dropdown-trigger" aria-expanded={inventoryOpen} onClick={() => setInventoryOpen(!inventoryOpen)}>{label}<ChevronDown /></button>{inventoryOpen && <div className="nav-dropdown-menu" role="menu">{inventoryLinks.map(([item, itemHref]) => <a key={itemHref} href={itemHref} role="menuitem" onClick={() => setInventoryOpen(false)}>{item}<span>›</span></a>)}</div>}</div> : <a key={href} href={href}>{label}</a>)}<a href="/#about">About <ChevronDown /></a></nav><div className="header-actions"><a className="phone-link" href="tel:7139365512"><Phone /><span className="hidden lg:inline">Call us</span></a><a className="button button-primary hidden sm:inline-flex" href="/cars-for-sale">Shop cars</a><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="/#about" onClick={() => setOpen(false)}>About</a></nav>}</header>
  </>
}

export function CarlyFooter() {
  return <footer className="footer"><div className="container footer-top"><a href="/" className="brand brand-light"><span className="brand-mark"><CarFront /></span><span>CARLY<span>CARS</span></span></a><p>Quality cars. Honest deals.<br />A better way to buy.</p><div className="footer-links">{navItems.slice(1, 5).map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="/#contact">Contact</a></div></div><div className="container footer-bottom"><span>© 2026 Carly Cars. All rights reserved.</span><span>Houston, Texas · 842 Little York Rd, Suite B</span></div></footer>
}

export function PageIntro({ kicker, title, children }: { kicker: string; title: React.ReactNode; children: React.ReactNode }) {
  return <section className="page-intro"><div className="container"><span className="section-kicker">{kicker}</span><h1>{title}</h1><p>{children}</p></div></section>
}

export function CarlyShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-background text-foreground"><CarlyHeader />{children}<CarlyFooter /></main>
}

export function LeadForm({ button = 'Submit request' }: { button?: string }) {
  const [sent, setSent] = useState(false)
  if (sent) return <div className="success-panel"><strong>Thanks — your request is in.</strong><span>A Carly Cars specialist will be in touch shortly.</span></div>
  return <form className="lead-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}><label>Full name<input required placeholder="Your name" /></label><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Phone number<input required type="tel" placeholder="(713) 000-0000" /></label><button className="button button-primary button-full" type="submit">{button}</button><small>By submitting, you agree to be contacted by Carly Cars.</small></form>
}

export const inventory = [
  { year: 2019, make: 'Honda', model: 'Civic', trim: 'Sport Hatchback', price: 18750, miles: '66,532', type: 'Hatchback', stock: '204107', vin: 'SHHFK7H47KU204107', engine: '1.5L I4 Gasoline 180hp', drivetrain: 'Front Wheel Drive', color: 'Silver', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/69646a6a-0193-4403-89a0-7b45cad61442', image: 'https://images.unsplash.com/photo-1605816988069-b11383b50717?auto=format&fit=crop&w=900&q=85' },
  { year: 2011, make: 'Lincoln', model: 'MKS', trim: 'Base Sedan', price: 9250, miles: '51,967', type: 'Sedan', stock: '605620', vin: '1LNHL9DR0BG605620', engine: '3.7L V6 Gasoline 273hp', drivetrain: 'Front Wheel Drive', color: 'Pewter', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/f298e0a6-996b-401e-9eab-d4a529d54f42', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85' },
  { year: 2016, make: 'Chevrolet', model: 'Silverado 1500', trim: 'LTZ Z71 Crew Cab', price: 25995, miles: '76,495', type: 'Truck', stock: '275359', vin: '3GCUKSEC3GG275359', engine: '5.3L V8 Gasoline 355hp', drivetrain: 'Four Wheel Drive', color: 'Red', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/bc97b63a-7dec-48ee-9f66-64d8e9484e56', image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=85' },
  { year: 2016, make: 'Chevrolet', model: 'Suburban', trim: 'LTZ SUV', price: 19125, miles: '112,397', type: 'SUV', stock: '406290', vin: '1GNSKJKC7GR406290', engine: '5.3L V8 Flex Fuel 355hp', drivetrain: 'Four Wheel Drive', color: 'Gray', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/3e1726ab-aeb6-4c3b-8f0f-f21b5acff888', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85' },
  { year: 2021, make: 'Nissan', model: 'Rogue Sport', trim: 'S Crossover', price: 16850, miles: '22,629', type: 'SUV', stock: '317866', vin: 'JN1BJ1AV7MW317866', engine: '2.0L I4 Gasoline 141hp', drivetrain: 'Front Wheel Drive', color: 'Blue', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/7c6a4d72-77ba-4335-88e2-3ff8241f6c19', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=900&q=85' },
  { year: 2023, make: 'Dodge', model: 'Charger', trim: 'SXT Sedan', price: 18850, miles: '54,927', type: 'Sedan', stock: '588688', vin: '2C3CDXBG0PH588688', engine: '3.6L V6 Gasoline 292hp', drivetrain: 'Rear Wheel Drive', color: 'White', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/824295ee-2464-44bf-9b81-1fd9c41ac176', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=900&q=85' },
  { year: 2024, make: 'Kia', model: 'Sportage', trim: 'LX SUV', price: 21150, miles: '40,979', type: 'SUV', stock: '237558', vin: 'KNDPUCDF7R7237558', engine: '2.5L I4 Gasoline 187hp', drivetrain: 'All Wheel Drive', color: 'Gray', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/7473b316-80cf-461e-9030-b0f095b57c75', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=85' },
  { year: 2014, make: 'Chevrolet', model: 'Silverado 1500', trim: 'LTZ Z71 Crew Cab', price: 22850, miles: '64,927', type: 'Truck', stock: '106173', vin: '3GCUKSEC4EG106173', engine: '5.3L V8 Flex Fuel 355hp', drivetrain: 'Four Wheel Drive', color: 'Red', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/820750fd-ccda-4c7a-bc05-3fcee0bad543', image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=85' },
  { year: 2025, make: 'Honda', model: 'Accord', trim: 'SE Sedan', price: 22895, miles: '27,499', type: 'Sedan', stock: '011299', vin: '1HGCY1F41SA011299', engine: '1.5L I4 Gasoline 192hp', drivetrain: 'Front Wheel Drive', color: 'Platinum White Pearl', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/aef6d861-5341-46a4-8bc3-297993eeca39', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=85' },
  { year: 2016, make: 'Ford', model: 'Focus', trim: 'SE Sedan', price: 6250, miles: '118,444', type: 'Sedan', stock: '283291', vin: '1FADP3F25GL283291', engine: '2.0L I4 Flex Fuel 160hp', drivetrain: 'Front Wheel Drive', color: 'Silver', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/35015ed9-868c-4178-b2c8-193591a8b141', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85' },
  { year: 2017, make: 'GMC', model: 'Yukon', trim: 'SLT SUV', price: 18999, miles: '79,761', type: 'SUV', stock: '261104', vin: '1GKS1BKC4HR261104', engine: '5.3L V8 Flex Fuel 355hp', drivetrain: 'Rear Wheel Drive', color: 'Dark Sapphire Blue Metallic', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/07038136-2885-4803-9472-031cd6f1a064', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85' },
  { year: 2016, make: 'Ford', model: 'Fiesta', trim: 'SE Sedan', price: 5650, miles: '128,774', type: 'Sedan', stock: '119769', vin: '3FADP4BJ0GM119769', engine: '1.6L I4 Gasoline 120hp', drivetrain: 'Front Wheel Drive', color: 'Ruby Red Metallic Tinted Clearcoat', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/13ffcfdf-3cdc-4957-a25f-07df7c18d09e', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85' },
  { year: 2019, make: 'Nissan', model: 'Sentra', trim: 'S Sedan', price: 6225, miles: '164,039', type: 'Sedan', stock: 'See details', vin: 'Not provided', engine: '1.8L I4 Gasoline 124hp', drivetrain: 'Front Wheel Drive', color: 'Fresh Powder', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/71d28f3a-148c-48ae-881e-c96168eb237d', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85' },
  { year: 2011, make: 'Nissan', model: 'Sentra', trim: '2.0 S', price: 3750, miles: '169,120', type: 'Sedan', stock: 'See details', vin: 'Not provided', engine: '2.0L I4 Gasoline 140hp', drivetrain: 'Front Wheel Drive', color: 'Brilliant Silver', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/0db631f3-86f7-4292-8836-4cea98f76c0e', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85' },
  { year: 2015, make: 'Ford', model: 'F-150', trim: 'XL', price: 9800, miles: '197,625', type: 'Truck', stock: 'See details', vin: 'Not provided', engine: '3.5L V6 Gasoline 365hp', drivetrain: 'Rear Wheel Drive', color: 'Oxford White', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/1d737361-9a3e-4482-a34f-4427b0c54db7', image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=85' },
  { year: 2013, make: 'Hyundai', model: 'Accent', trim: 'GS', price: 5850, miles: '131,278', type: 'Hatchback', stock: 'See details', vin: 'Not provided', engine: '1.6L I4 Gasoline 138hp', drivetrain: 'Front Wheel Drive', color: 'Century White', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/f8c8f630-2cfe-4b8c-828e-46fa5cb0e334', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85' },
  { year: 2016, make: 'Dodge', model: 'Grand Caravan', trim: 'SE', price: 9250, miles: '106,790', type: 'Minivan', stock: 'See details', vin: 'Not provided', engine: '3.6L V6 Flex Fuel 283hp', drivetrain: 'Front Wheel Drive', color: 'Granite Crystal Metallic Clear Coat', detailUrl: 'https://carlycarsdealer.com/Inventory/Details/0395a8fe-92e5-45d5-82e1-8943627dae96', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=85' },
]

export function VehicleCard({ car }: { car: typeof inventory[number] }) {
  return <article className="car-card"><div className="car-image"><img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} /><span className="car-badge">Available</span></div><div className="car-details"><div className="car-year">{car.year} · {car.type} · Stock #{car.stock}</div><h3>{car.make} {car.model}</h3><p className="car-trim">{car.trim}</p><div className="car-specs"><span>{car.miles} mi</span><span>{car.engine}</span><span>{car.drivetrain}</span><span>{car.color}</span></div><div className="car-bottom"><strong>${car.price.toLocaleString()}</strong><a className="text-link" href="/loan-application">Apply now</a></div><div className="car-actions"><a href={car.detailUrl} target="_blank" rel="noreferrer">View full details</a><a href={`mailto:sales@carlycars.com?subject=Question about ${car.year} ${car.make} ${car.model}`}>Email</a><a href="tel:7139365512">Call</a></div><div className="car-identifiers"><span>VIN: {car.vin}</span><a href={car.detailUrl} target="_blank" rel="noreferrer">Carfax / report</a></div></div></article>
}

export function QuickLinks() {
  return <div className="quick-links"><a href="/cars-for-sale"><strong>Shop inventory</strong><span>See every available vehicle</span></a><a href="/loan-application"><strong>Get pre-approved</strong><span>Start with a soft credit check</span></a><a href="/value-my-trade"><strong>Value your trade</strong><span>Turn your current car into buying power</span></a></div>
}
