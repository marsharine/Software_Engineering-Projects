document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

// Enable CORS
app.use(cors());

// Rate limiting
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10 // Limit each IP to 10 requests per windowMs
});
app.use(limiter);

// Scraper for eBay Fashion Collectibles
app.get('/api/ebay-fashion-collectibles', async (req, res) => {
    try {
        const response = await axios.get('https://www.ebay.com/sch/i.html?_nkw=fashion+collectibles');
        const html = response.data;
        const $ = cheerio.load(html);

        const items = [];
        $('.s-item__info.clearfix').each((index, element) => {
            const title = $(element).find('.s-item__title').text();
            const price = $(element).find('.s-item__price').text();
            const imageUrl = $(element).find('.s-item__image-img').attr('src');
            const itemUrl = $(element).find('.s-item__link').attr('href');

            if (title && price && imageUrl) {
                items.push({ title, price, imageUrl, itemUrl });
            }
        });

        res.json({ items });
    } catch (error) {
        console.error('Error fetching eBay fashion collectibles:', error);
        res.status(500).send('Error fetching eBay fashion collectibles');
    }
});

// Scraper for Fashion Items on Collectibles.com
app.get('/api/collectibles-fashion', async (req, res) => {
    try {
        const response = await axios.get('https://www.collectibles.com/categories/fashion');
        const html = response.data;
        const $ = cheerio.load(html);

        const items = [];
        $('.product-item').each((index, element) => {
            const title = $(element).find('.product-title').text().trim();
            const price = $(element).find('.product-price').text().trim();
            const imageUrl = $(element).find('img').attr('src');
            const itemUrl = $(element).find('a').attr('href');

            if (title && price && imageUrl) {
                items.push({ title, price, imageUrl, itemUrl });
            }
        });

        res.json({ items });
    } catch (error) {
        console.error('Error fetching fashion collectibles:', error);
        res.status(500).send('Error fetching fashion collectibles');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});