// // import { NextResponse } from 'next/server';

// // export async function GET(request) {
// //   const { searchParams } = new URL(request.url);
// //   const slug = searchParams.get('slug');

// //   if (!slug) {
// //     return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
// //   }

// //   try {
// //     const response = await fetch(
// //       `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?slug=${slug}`,
// //       {
// //         headers: {
// //           'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
// //           Accept: '*/*',
// //         },
// //       }
// //     );

// //     if (!response.ok) {
// //       throw new Error('Failed to fetch data from CoinMarketCap');
// //     }

// //     const data = await response.json();
// //     return NextResponse.json(data);
// //   } catch (error) {
// //     return NextResponse.json({ error: error.message }, { status: 500 });
// //   }
// // }



// import { NextResponse } from 'next/server';

// export async function GET(request) {
//     const { searchParams } = new URL(request.url);
//     const slug = searchParams.get('slug');

//     if (!slug) {
//         return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
//     }

//     console.log(`Fetching data for slug: ${slug}`); // Log the slug

//     try {
//         const response = await fetch(
//             `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?slug=${slug}`,
//             {
//                 headers: {
//                     'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
//                     Accept: '*/*',
//                     'Access-Control-Allow-Origin': '*',
//                     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//                     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//                 },
//             }
//         );

//         if (!response.ok) {
//             throw new Error(`Failed to fetch data from CoinMarketCap. Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(`Data fetched successfully:`, data); // Log the data

//         return NextResponse.json(data);
//     } catch (error) {
//         console.error('Error fetching data:', error); // Log the error
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }