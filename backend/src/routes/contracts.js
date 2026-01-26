import express from 'express';
import Contract from '../models/Contract.js';

const router = express.Router();

// GET all contracts
router.get('/', async (req, res) => {
    try {
        const contracts = await Contract.findAll({ order: [['createdAt', 'DESC']] });
        res.json(contracts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET one contract
router.get('/:id', async (req, res) => {
    try {
        const contract = await Contract.findByPk(req.params.id);
        if (!contract) return res.status(404).json({ error: 'Contract not found' });
        res.json(contract);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST new contract
router.post('/', async (req, res) => {
    try {
        const contract = await Contract.create(req.body);
        res.status(201).json(contract);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PUT update contract
router.put('/:id', async (req, res) => {
    try {
        const contract = await Contract.findByPk(req.params.id);
        if (!contract) return res.status(404).json({ error: 'Contract not found' });
        await contract.update(req.body);
        res.json(contract);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
