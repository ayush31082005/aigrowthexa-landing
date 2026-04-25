import { Lead } from "../models/lead.model.js";

// CREATE LEAD
export const createLead = async (req, res) => {
  try {
    const { name, specialization, clinicName, city, mobile, budget } =
      req.body;

    // Basic validation
    if (
      !name ||
      !specialization ||
      !clinicName ||
      !city ||
      !mobile ||
      !budget
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const lead = await Lead.create({
      name,
      specialization,
      clinicName,
      city,
      mobile,
      budget,
    });

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: lead,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET ALL LEADS (Admin use)
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
