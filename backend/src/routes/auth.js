import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Mock User DB
const USERS = [
    { email: 'admin@wisptachira.com', password: 'admin' }
];

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = USERS.find(u => u.email === email && u.password === password);

    if (user) {
        const token = jwt.sign({ email: user.email }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

router.post('/register', (req, res) => {
    // Implement registration logic with DB if needed
    res.json({ message: 'Registration successful' });
});

export default router;
