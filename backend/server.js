const express = require("express");
const cors = require("cors");
const memberRoutes = require("./routes/memberRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/members", memberRoutes);

app.get("/", (req, res) => {
  res.send("🏋️ Urban Fitness Backend Server Running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});