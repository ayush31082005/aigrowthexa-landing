import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import leadRoutes from "./routes/lead.route.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.resolve(__dirname, "../../client/dist");

const corsOptions = {
    origin: "*",
    credentials: true
}

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/leads", leadRoutes);

app.get("/", (req, res) => {
    return res.send("Aigrowthexa API is running...");
});

app.get("/health", async (req, res) => {
    return res.status(200).json({ message: "Health is good! What about you?", uptime: process.uptime() })
})

app.use(express.static(clientDistPath));

// Keep API routes above this so the SPA handles only frontend URLs.
app.get(/^\/(?!api|health).*/, (req, res) => {
    return res.sendFile(path.join(clientDistPath, "index.html"));
});

export default app;
