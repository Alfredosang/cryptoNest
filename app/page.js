'use client'
import { useContext, useEffect } from 'react';
import MyContext from '../store/MyContext';
import Hero from '@/components/Hero';
// import Homelist from '@/components/Homelist';
import Search from '../components/Search'


const page = () => {

      //Getting the global dark mode state from context store
      const { darkMode, setDarkMode } = useContext(MyContext);


  return (
    <div>
      <Search/>
      <Hero/>
      {/* <Homelist/> */}
    </div>

  )
}

export default page





// // app/page.js (or any other route file in app/)
// export default async function Page() {
//   const res = await fetch('https://pro-api.coinmarketcap.com/v2/cryptocurrency/info', {
//     headers: {
//       'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
//       Accept: '*/*',
//     },
//   });
//   const data = await res.json();

//   return (
//     <div>
//       <h1>Cryptocurrency Information</h1>
//       <p>{JSON.stringify(data)}</p>
//     </div>
//   );
// }






// 'use client';

// import { useState } from 'react';
// import useSWR from 'swr';

// // Fetcher function to be used by SWR
// const fetcher = async (url) => {
//   const res = await fetch(url, {
//     headers: {
//       'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
//       Accept: '*/*',
//     },
//   });

//   if (!res.ok) {
//     throw new Error('Error fetching data');
//   }

//   return res.json();
// };

// export default function Page() {
//   const [slug, setSlug] = useState('');
//   const [search, setSearch] = useState('');

//   // SWR hook to fetch data dynamically when slug changes
//   const { data, error } = useSWR(
//     slug ? `/api/crypto?slug=${slug}` : null, // Only fetch when slug is not empty
//     fetcher
//   );

//   const handleSearch = (event) => {
//     event.preventDefault();
//     setSlug(search.trim()); // Set the slug from user input
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Cryptocurrency Information</h1>

//       <form onSubmit={handleSearch} className="mb-4">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Enter cryptocurrency slug (e.g., bitcoin)"
//           className="border p-2 rounded mr-2"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Search
//         </button>
//       </form>

//       {error && <p className="text-red-500">{error.message}</p>}

//       {!data && !error && <p>Enter a cryptocurrency slug to fetch data.</p>}

//       {data && (
//         <div>
//           <h2 className="text-xl font-bold">Result:</h2>
//           <pre className="bg-gray-100 p-4 rounded">
//             {JSON.stringify(data, null, 2)}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// }
