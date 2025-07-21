import prayerData from '../utils/prayerData.js'
import { useState } from 'react';
export default function Search () {
      const [searchQuery, setSearchQuery] = useState('')

    const filteredPrayers = prayerData.filter(prayer => {
        const titleMatch = prayer.title.toLowerCase().includes(searchQuery.toLowerCase());
        const categoryMatch = prayer.category.toLowerCase().includes(searchQuery.toLowerCase())
        return titleMatch || categoryMatch
    })

    return (
        <section className="search-container">
            <form>
                <input type="text" id="search" name="search" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)}></input>
            </form>
            <div className='prayers-container'>
                   {filteredPrayers.map((prayer, i) => (
                    
                <div className='prayer-card'>
                    <h2>{prayer.title}</h2>
                    <p>{prayer.category}</p>
                    <p>{prayer.description}</p>
                </div>
                
            ))}
            </div>
        </section>

    )
}