'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { CarlyShell, PageIntro, QuickLinks, VehicleCard, inventory } from '@/components/carly-shell'

const types = ['All', 'SUV', 'Sedan', 'Truck', 'Hatchback'] as const
const sortOptions = ['Date Added: Newest', 'Price: Low to High', 'Price: High to Low', 'Mileage: Low to High'] as const

export default function CarsForSalePage() {
  const [type, setType] = useState<(typeof types)[number]>('All')
  const [query, setQuery] = useState('')
  const [make, setMake] = useState('All Makes')
  const [maxPrice, setMaxPrice] = useState(60000)
  const [maxMiles, setMaxMiles] = useState(200000)
  const [sort, setSort] = useState<(typeof sortOptions)[number]>(sortOptions[0])

  const makes = ['All Makes', ...Array.from(new Set(inventory.map((car) => car.make)))]
  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()
    const results = inventory.filter((car) => {
      const searchable = `${car.year} ${car.make} ${car.model} ${car.stock} ${car.vin}`.toLowerCase()
      return (type === 'All' || car.type === type) &&
        (make === 'All Makes' || car.make === make) &&
        (!search || searchable.includes(search)) && car.price <= maxPrice && Number(car.miles.replace(/,/g, '')) <= maxMiles
    })
    return [...results].sort((a, b) => sort === 'Price: Low to High' ? a.price - b.price : sort === 'Price: High to Low' ? b.price - a.price : sort === 'Mileage: Low to High' ? Number(a.miles.replace(/,/g, '')) - Number(b.miles.replace(/,/g, '')) : b.year - a.year)
  }, [type, query, make, maxPrice, maxMiles, sort])

  const clearFilters = () => { setType('All'); setQuery(''); setMake('All Makes'); setMaxPrice(60000); setMaxMiles(200000); setSort(sortOptions[0]) }

  return <CarlyShell>
    <PageIntro kicker="Carly Cars inventory" title={<>Find your next <em>everyday favorite.</em></>}>Browse quality pre-owned cars, trucks, and SUVs in Houston, TX. Search by make, model, stock number, or VIN.</PageIntro>
    <section className="section"><div className="container">
      <div className="inventory-page-toolbar"><div className="filter-pills">{types.map((item) => <button key={item} className={type === item ? 'active' : ''} onClick={() => setType(item)}>{item}</button>)}</div><div className="inventory-search-row"><span>Showing 1–{filtered.length} of {inventory.length}</span><select value={sort} onChange={(e) => setSort(e.target.value as (typeof sortOptions)[number])} aria-label="Sort inventory">{sortOptions.map((option) => <option key={option}>{option}</option>)}</select><label className="inventory-search"><Search /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Stock # or VIN" aria-label="Search stock number or VIN" /></label></div></div>
      <div className="inventory-layout"><aside className="inventory-filters"><div className="filter-heading"><strong><SlidersHorizontal /> Filter Inventory</strong><button onClick={clearFilters}>Clear</button></div><label>Condition<div className="check-row"><input type="checkbox" checked readOnly /> Used ({inventory.length})</div></label><label>Make, Model &amp; Trim<select value={make} onChange={(e) => setMake(e.target.value)}>{makes.map((item) => <option key={item}>{item}</option>)}</select></label><label>Price up to <strong>${maxPrice.toLocaleString()}</strong><input type="range" min="5000" max="60000" step="500" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} /></label><label>Mileage up to <strong>{maxMiles.toLocaleString()} mi</strong><input type="range" min="20000" max="200000" step="5000" value={maxMiles} onChange={(e) => setMaxMiles(Number(e.target.value))} /></label><button className="button button-outline button-full" onClick={clearFilters}><X /> Reset all filters</button></aside><div className="inventory-results"><div className="inventory-results-label">{filtered.length} vehicle{filtered.length === 1 ? '' : 's'} match your search</div><div className="inventory-grid">{filtered.map((car) => <VehicleCard key={car.stock} car={car} />)}</div>{filtered.length === 0 && <div className="empty-panel">No vehicles match those filters. Try clearing a filter or searching another stock number.</div>}</div></div><QuickLinks />
    </div></section>
  </CarlyShell>
}
