const express = require("express");
const cors = require("cors");
const leadRoutes = require("./routes/leadRoutes");

const app = express();
const PORT = 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", leadRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
