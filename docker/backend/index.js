const express = require('express');
const cors = require('cors'); // <--- Add this

const app = express();

// ✅ Enable CORS for all origins
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: "Hello from secure internal backend!" });
});

app.listen(3000, () => {
  console.log("Backend server running on port 3000");
});
