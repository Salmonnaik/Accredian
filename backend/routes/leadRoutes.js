const express = require('express');
const { createLead, getLeads, getLeadById } = require('../controllers/leadController');

const router = express.Router();

// POST /api/lead - Create a new lead
router.post('/', createLead);

// GET /api/lead - Get all leads
router.get('/', getLeads);

// GET /api/lead/:id - Get a specific lead
router.get('/:id', getLeadById);

module.exports = router;
