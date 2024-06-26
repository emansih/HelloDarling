import express from 'express';
import userRoutes from './routes/userRoutes';
import seedData from './seed'

const app = express();
const port = 3000;

var cors = require('cors');
app.use(cors());
app.use(express.json());


app.use('/api/v1', userRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

seedData();

