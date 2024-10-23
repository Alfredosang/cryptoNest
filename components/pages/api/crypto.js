// pages/api/crypto.js

export default async function handler(req, res) {
    const { slug } = req.query; // Get slug from the query parameter
    const apiKey = process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY;
  
    const myHeaders = new Headers();
    myHeaders.append("X-CMC_PRO_API_KEY", apiKey);
    myHeaders.append("Accept", "*/*");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    try {
      const response = await fetch(
        `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?slug=${slug}`,
        requestOptions
      );
  
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch data' });
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
  