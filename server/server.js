const PORT = process.env.PORT ?? 8000
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors());
app.use(express.json()); // Allows us to access the req.body.

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Get all users.
// app.get('/users/:user_email', async (req, res) => {
//     console.log(req);
//     const user_email = req.params;
//     try {
//         const users = await pool.query('SELECT * FROM supplier WHERE email = $1', [user_email]);
//         res.json(users.rows);
//     } catch (error) {
//         console.error(error.message);
//     }
// })

// Add a user.
app.post('/supplier-login', (req, res) => {
    const { business_name, address, phone_number, email, password } = req.body
    console.log(business_name, address, phone_number, email, password)
    const id = uuidv4();
    try {
        pool.query(`INSERT INTO supplier (supp_id, business_name, address, phone_number, email, hashed_password) VALUES($1, $2, $3, $4, $5)`,
            [id, business_name, address, phone_number, email, password])
        console.log(req.body);
    } catch (err) {
        console.error(err);
    }
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))