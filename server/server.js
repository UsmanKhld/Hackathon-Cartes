const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users/:user_email', async (req, res) => {
    console.log(req);
    const user_email = req.params;
    try {
        const users = await pool.query('SELECT * FROM supplier WHERE email = $1', [user_email]);
        res.json(users.rows);
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))