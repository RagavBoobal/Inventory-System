const express = require('express');
const cors = require('cors'); // Import cors
const inventoryRoutes = require('./routes/inventoryRoutes');
const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/api/inventory', inventoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
