// import prayerData from '../utils/prayerData.js'
// import { useState } from 'react';

// export default function Prayers () {
//     const [searchQuery, setSearchQuery] = useState('')

//     const filteredPrayers = prayerData.filter(prayer => {
//         const titleMatch = prayer.title.toLowerCase().includes(searchQuery.toLowerCase());
//     })

//     return (
//         <section className='prayers-container'>
//             {filteredPrayers.map((prayer, i) => (
//                 <h2>{prayer.title}</h2>
//             ))}

//         </section>
//     )
// }