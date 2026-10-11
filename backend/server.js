const express = require("express");
const cors = require("cors");
const memberRoutes = require("./routes/memberRoutes");
const pool = require("./db/database");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/members", memberRoutes);

app.get("/", (req, res) => {
  res.send("🏋️ Urban Fitness Backend Server Running!");
});

// Test PostgreSQL Connection
pool
  .connect()
  .then((client) => {
    console.log("✅ Connected to PostgreSQL Database!");
    client.release();
  })
  .catch((err) => {
    console.error("❌ Database Connection Error:", err.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});