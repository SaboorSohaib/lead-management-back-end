const prisma = require("../prisma/client");

// POST /leads - Create new lead
const createLead = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  try {
    const lead = await prisma.lead.create({
      data: { name: req.body.name, email: req.body.email, status: "NEW" },
    });
    res.status(201).json(lead);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email already exists." });
    }
    res.status(500).json({ message: "Something went wrong.", error });
  }
};

// GET /leads - Get all leads
const getLeads = async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch leads." });
  }
};

module.exports = { createLead, getLeads };
