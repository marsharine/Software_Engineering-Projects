// collectibles.js
const axios = require('axios');
const cheerio = require('cheerio');
const ebayResponse = await axios.get(ebayUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Define the URLs for eBay and collectibles.com (replace with specific search URLs if needed)
            const ebayUrl = 'https://www.ebay.com/sch/i.html?_nkw=fashion+collectibles';
            const collectiblesUrl = 'https://www.collectibles.com/search?q=fashion+collectibles';

            // Fetch eBay collectibles
            const ebayResponse = await axios.get(ebayUrl);
            const ebayItems = parseEbay(ebayResponse.data);

            // Fetch Collectibles.com
            const collectiblesResponse = await axios.get(collectiblesUrl);
            const collectiblesItems = parseCollectibles(collectiblesResponse.data);

            // Combine results
            const items = [...ebayItems, ...collectiblesItems];

            // Return the results
            res.status(200).json({ items });
        } catch (error) {
            console.error('Error fetching collectibles:', error);
            res.status(500).json({ error: 'Failed to fetch collectibles.' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// Function to parse eBay items
function parseEbay(html) {
    const $ = cheerio.load(html);
    const items = [];
    
    $('.s-item').each((index, element) => {
        const title = $(element).find('.s-item__title').text();
        const price = $(element).find('.s-item__price').text();
        const image_url = $(element).find('.s-item__image-img').attr('src');
        
        if (title && price) {
            items.push({ title, price, image_url });
        }
    });
    
    return items;
}

// Function to parse Collectibles.com items
function parseCollectibles(html) {
    const $ = cheerio.load(html);
    const items = [];
    
    $('.item').each((index, element) => {
        const title = $(element).find('.item-title').text();
        const price = $(element).find('.item-price').text();
        const image_url = $(element).find('img').attr('src');

        if (title && price) {
            items.push({ title, price, image_url });
        }
    });
    
    return items;
}