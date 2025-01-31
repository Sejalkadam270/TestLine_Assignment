const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// API endpoint to fetch quiz data
app.get('/api/quiz', async (req, res) => {
    try {
        const response = await axios.get('https://api.jsonserve.com/Uw5CrX');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching quiz data');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
