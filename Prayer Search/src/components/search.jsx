import prayerData from '../utils/prayerData.js'
import { useState } from 'react';
export default function Search () {
      const [searchQuery, setSearchQuery] = useState('')

    const filteredPrayers = prayerData.filter(prayer => {
        const titleMatch = prayer.title.toLowerCase().includes(searchQuery.toLowerCase());
        const categoryMatch = prayer.categories.toLowerCase().includes(searchQuery.toLowerCase())
        return titleMatch || categoryMatch
    })

    return (
        <section className="search-container">
            <form>
                <input type="text" id="search" name="search" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)}></input>
            </form>
            <div className='prayers-container'>
                   {filteredPrayers.map((prayer, i) => (
                    
                <div key={prayer.id} className='prayer-card'>
                    <h2 id="title">{prayer.title}</h2>
                    <p id="categories">{prayer.categories}</p>
                    <p id="book">Book: {prayer.book}</p>
                    <p id="page">Page: {prayer.page}</p>
                    <p id="description">{prayer.description}</p>
                </div>
                
            ))}
            </div>
        </section>

    )
}