import express from "express";
import cors from "cors";
import leadRoutes from "./routes/lead.route.js";

const app = express();

const corsOptions = {
    origin: "*",
    credentials: true
}

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/leads", leadRoutes);

app.get("/health", async (req, res) => {
    return res.status(200).json({ message: "Health is good! What about you?", uptime: process.uptime() })
})

export default app;