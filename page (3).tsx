'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  DollarSign,
  Fuel,
  Heart,
  Link,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Tags,
  X,
  Youtube,
} from 'lucide-react'

const inventory = [
  { year: 2022, make: 'Toyota', model: 'Camry SE', price: 22995, miles: '38,420', type: 'Sedan', fuel: '30 MPG', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=85', featured: true },
  { year: 2021, make: 'Chevrolet', model: 'Tahoe LT', price: 38995, miles: '54,110', type: 'SUV', fuel: '22 MPG', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85', featured: true },
  { year: 2020, make: 'Honda', model: 'Accord Sport', price: 24995, miles: '47,805', type: 'Sedan', fuel: '29 MPG', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=900&q=85', featured: false },
  { year: 2023, make: 'Ford', model: 'F-150 XLT', price: 41995, miles: '26,640', type: 'Truck', fuel: '24 MPG', image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=85', featured: false },
  { year: 2022, make: 'Nissan', model: 'Rogue SV', price: 26500, miles: '31,220', type: 'SUV', fuel: '28 MPG', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=900&q=85', featured: false },
  { year: 2019, make: 'Jeep', model: 'Grand Cherokee', price: 23995, miles: '63,450', type: 'SUV', fuel: '25 MPG', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85', featured: false },
]

const reviews = [
  { quote: 'The easiest car-buying experience I have ever had. No pressure, honest answers, and the SUV was exactly as described.', name: 'Marisol R.', meta: 'Verified Google review' },
  { quote: 'Carly Cars made everything simple. They worked with my budget and got me on the road the same afternoon.', name: 'Darius T.', meta: 'Verified Google review' },
  { quote: 'Great selection, fair prices, and a team that actually cares. I recommend them to everyone in Houston.', name: 'Jennifer L.', meta: 'Verified Google review' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Featured')
  const [saved, setSaved] = useState<number[]>([])
  const [submitted, setSubmitted] = useState(false)

  const filteredInventory = useMemo(() => {
    const list = filter === 'All' ? inventory : inventory.filter((car) => car.type === filter)
    return [...list].sort((a, b) => sort === 'Price: Low' ? a.price - b.price : sort === 'Price: High' ? b.price - a.price : Number(b.featured) - Number(a.featured))
  }, [filter, sort])

  const toggleSaved = (price: number) => setSaved((current) => current.includes(price) ? current.filter((item) => item !== price) : [...current, price])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="topbar"><div className="container flex items-center justify-between gap-4"><span className="hidden sm:inline">Houston&apos;s trusted independent dealer since 2018</span><a href="tel:7139365512"><Phone data-icon="inline-start" /> (713) 936-5512</a><span className="hidden md:inline"><MapPin data-icon="inline-start" /> 842 Little York Rd, Suite B · Houston, TX 77076</span></div></div>
      <header className="site-header"><div className="container flex items-center justify-between gap-6"><a href="#home" className="brand" aria-label="Carly Cars home"><span className="brand-mark"><CarFront /></span><span>CARLY<span>CARS</span></span></a><nav className="desktop-nav" aria-label="Primary navigation"><a href="#home">Home</a><a href="/cars-for-sale">Inventory <ChevronDown /></a><a href="/loan-application">Loan Application</a><a href="/car-finder">Car Finder</a><a href="/value-my-trade">Value My Trade</a><a href="/testimonial">Testimonials</a><a href="#about">About <ChevronDown /></a></nav><div className="header-actions"><a className="phone-link" href="tel:7139365512"><Phone /> <span className="hidden lg:inline">Call us</span></a><a className="button button-primary hidden sm:inline-flex" href="/cars-for-sale">Shop cars <ArrowRight /></a><button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="/cars-for-sale" onClick={() => setMenuOpen(false)}>Inventory</a><a href="/loan-application" onClick={() => setMenuOpen(false)}>Loan Application</a><a href="/car-finder" onClick={() => setMenuOpen(false)}>Car Finder</a><a href="/value-my-trade" onClick={() => setMenuOpen(false)}>Value My Trade</a><a href="/testimonial" onClick={() => setMenuOpen(false)}>Testimonials</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a></nav>}</header>

      <section id="home" className="hero"><div className="hero-overlay" /><div className="container hero-content"><div className="eyebrow"><span className="eyebrow-dot" /> Houston, TX · Open today until 7 PM</div><h1>A better car<br /><em>starts here.</em></h1><p>Quality pre-owned vehicles, transparent pricing, and a team that treats you like family. Find your next ride without the dealership runaround.</p><div className="hero-actions"><a className="button button-primary button-large" href="/cars-for-sale">Browse inventory <ArrowRight /></a><a className="button button-ghost button-large" href="/loan-application">Get pre-approved <ChevronRight /></a></div><div className="hero-proof"><div className="avatar-stack"><span>MR</span><span>DT</span><span>JL</span></div><div><div className="stars">★★★★★</div><strong>4.8 on Google</strong><span> · 200+ happy drivers</span></div></div></div><div className="hero-stamp"><span>HOUSTON</span><strong>CARLY<br />CARS</strong><small>Drive happy.</small></div></section>

      <section className="trust-strip"><div className="container trust-grid"><div><ShieldCheck /><strong>Inspected inventory</strong><span>Every car checked by our team</span></div><div><Tags /><strong>Prices you can trust</strong><span>No hidden dealer add-ons</span></div><div><BadgeCheck /><strong>Financing for every story</strong><span>Options for all credit types</span></div><div><Clock3 /><strong>Fast, friendly service</strong><span>Get on the road today</span></div></div></section>

      <section id="inventory" className="section"><div className="container"><div className="section-heading"><div><span className="section-kicker">THE CARLY COLLECTION</span><h2>Find a car that <em>feels right.</em></h2><p>Hand-picked vehicles, ready for their next chapter.</p></div><a className="text-link" href="/cars-for-sale">View all inventory <ArrowRight /></a></div><div className="inventory-toolbar"><div className="filter-pills" role="group" aria-label="Filter inventory">{['All', 'SUV', 'Sedan', 'Truck'].map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><label className="sort-select">Sort by <select value={sort} onChange={(event) => setSort(event.target.value)}><option>Featured</option><option>Price: Low</option><option>Price: High</option></select><ChevronDown /></label></div><div className="inventory-grid">{filteredInventory.slice(0, 4).map((car) => <article className="car-card" key={`${car.year}-${car.model}`}><div className="car-image"><img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} /><span className="car-badge">{car.featured ? 'Featured' : 'Just arrived'}</span><button className="save-button" aria-label={`Save ${car.make} ${car.model}`} onClick={() => toggleSaved(car.price)}><Heart fill={saved.includes(car.price) ? 'currentColor' : 'none'} /></button></div><div className="car-details"><div className="car-year">{car.year} · {car.type}</div><h3>{car.make}{' '}{car.model}</h3><div className="car-specs"><span>{car.miles} mi</span><span>{car.fuel}</span><span><Fuel /> Automatic</span></div><div className="car-bottom"><strong>${car.price.toLocaleString()}</strong><a href="#contact" aria-label={`View details for ${car.make} ${car.model}`}>View details <ArrowUpRightIcon /></a></div></div></article>)}</div><div className="inventory-foot"><span>Showing {filteredInventory.length} of 24 available vehicles</span><a className="button button-dark" href="/car-finder">Can&apos;t find what you need? <Search /></a></div></div></section>

      <section id="financing" className="split-section"><div className="container split-grid"><div className="split-copy"><span className="section-kicker">MAKE IT YOURS</span><h2>Your next car.<br /><em>Your way.</em></h2><p>Whether you&apos;re rebuilding credit or have a perfect score, our finance team finds a payment that fits your life — not the other way around.</p><ul className="check-list"><li><Check /> Apply in 2 minutes, with no obligation</li><li><Check /> Flexible options for all credit types</li><li><Check /> Get your real payment before you visit</li></ul><a className="button button-primary" href="#contact">Start my application <ArrowRight /></a></div><div className="finance-card"><div className="finance-top"><Sparkles /><span>QUICK PRE-QUALIFICATION</span></div><h3>Know your buying power.</h3><p>See your options with a soft credit check that won&apos;t affect your score.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><label>What&apos;s your name?<input required placeholder="First and last name" /></label><label>Mobile number<input required type="tel" placeholder="(713) 000-0000" /></label><button className="button button-primary button-full" type="submit">{submitted ? 'You’re on your way' : 'See my options'} <ArrowRight /></button></form><small>By continuing, you agree to be contacted by Carly Cars.</small></div></div></section>

      <section id="trade" className="trade-section"><div className="container trade-inner"><div><span className="section-kicker">TRADE IN WITH CONFIDENCE</span><h2>What&apos;s your current car <em>worth?</em></h2><p>Get a real offer based on today&apos;s market — and put its value toward something you love.</p></div><a className="button button-light button-large" href="#contact">Value my trade <DollarSign /></a></div></section>

      <section id="reviews" className="section reviews-section"><div className="container"><div className="section-heading"><div><span className="section-kicker">REAL PEOPLE. REAL REVIEWS.</span><h2>Don&apos;t take our word <em>for it.</em></h2></div><div className="review-score"><span className="stars">★★★★★</span><strong>4.8 / 5</strong><span>Google rating</span></div></div><div className="reviews-grid">{reviews.map((review) => <figure className="review-card" key={review.name}><div className="stars">★★★★★</div><blockquote>“{review.quote}”</blockquote><figcaption><span className="review-avatar">{review.name.split(' ').map((part) => part[0]).join('')}</span><span><strong>{review.name}</strong><small>{review.meta}</small></span><BadgeCheck /></figcaption></figure>)}</div></div></section>

      <section id="about" className="about-section"><div className="container about-grid"><div className="about-image"><img src="https://images.unsplash.com/photo-1562141961-8f7a8f5d7a0f?auto=format&fit=crop&w=1100&q=85" alt="Carly Cars team member standing beside a vehicle" /><div className="about-caption"><strong>Locally owned.</strong><span>Houston proud.</span></div></div><div className="about-copy"><span className="section-kicker">WHY CARLY CARS</span><h2>Good cars.<br /><em>Good people.</em></h2><p>We started Carly Cars because buying a used car should feel exciting — not exhausting. Our small, local team is here to give Houston drivers a straightforward experience and a vehicle they can feel good about.</p><div className="about-stats"><div><strong>200+</strong><span>5-star reviews</span></div><div><strong>24</strong><span>cars in stock</span></div><div><strong>8 yrs</strong><span>serving Houston</span></div></div><a className="text-link" href="#contact">Meet the Carly Cars team <ArrowRight /></a></div></div></section>

      <section id="contact" className="contact-section"><div className="container contact-grid"><div><span className="section-kicker">COME SAY HELLO</span><h2>Your next car is<br /><em>waiting.</em></h2><p>Visit us in North Houston or give us a call. We&apos;ll have the coffee ready.</p><div className="contact-details"><a href="tel:7139365512"><Phone /> (713) 936-5512</a><span><MapPin /> 842 Little York Rd, Suite B<br />Houston, TX 77076</span><span><Clock3 /> Mon–Sat: 9 AM–7 PM<br />Sun: 11 AM–5 PM</span></div></div><div className="map-card"><div className="map-lines" /><div className="map-pin"><MapPin fill="currentColor" /></div><div className="map-label"><strong>Carly Cars</strong><span>842 Little York Rd, Houston</span><a href="https://www.google.com/maps/search/?api=1&query=Carly+Cars+842+Little+York+Rd+Houston+TX" target="_blank" rel="noreferrer">Get directions <ArrowUpRightIcon /></a></div></div></div></section>

      <footer className="footer"><div className="container footer-top"><a href="#home" className="brand brand-light"><span className="brand-mark"><CarFront /></span><span>CARLY<span>CARS</span></span></a><p>Quality cars. Honest deals.<br />A better way to buy.</p><div className="footer-links"><a href="/cars-for-sale">Inventory</a><a href="/loan-application">Financing</a><a href="/value-my-trade">Value my trade</a><a href="#contact">Contact</a></div><div className="socials"><a href="#contact" aria-label="Facebook"><Link /></a><a href="#contact" aria-label="Instagram"><Link /></a><a href="#contact" aria-label="Youtube"><Link /></a></div></div><div className="container footer-bottom"><span>© 2026 Carly Cars. All rights reserved.</span><span>Houston, Texas · Dealer license available upon request</span></div></footer><a className="mobile-call" href="tel:7139365512"><Phone /> Call Carly Cars</a>
    </main>
  )
}

function ArrowUpRightIcon() { return <ArrowRight /> }
