import prayerData from '../utils/prayerData.js'
import { useState, useRef, useEffect } from 'react';
export default function Search () {
      const [searchQuery, setSearchQuery] = useState('')

      const inputRef = useRef(null)

      useEffect(() => {
        function handleClickOutside(event) {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                inputRef.current.blur()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
      }, [inputRef])

    const filteredPrayers = prayerData.filter(prayer => {
        const titleMatch = prayer.title.toLowerCase().includes(searchQuery.toLowerCase());
        const categoryMatch = prayer.categories.toLowerCase().includes(searchQuery.toLowerCase())
        const bookMatch = prayer.book.toLowerCase().includes(searchQuery.toLowerCase());
        return titleMatch || categoryMatch || bookMatch
    })

    return (
        <section className="search-container">
            <form>
                <input type="text" id="search" name="search" placeholder="Search" ref={inputRef} onChange={(e) => setSearchQuery(e.target.value)}></input>
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