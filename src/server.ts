import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from './data';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/employees', (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const employees = getEmployees(page, limit);
  res.json(employees);
});

app.get('/employees/:id', (req: Request, res: Response) => {
  const employee = getEmployeeById(parseInt(req.params.id));
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send('Employee not found');
  }
});

app.post('/employees', (req: Request, res: Response) => {
  const newEmployee = addEmployee(req.body);
  res.status(201).json(newEmployee);
});

app.put('/employees/:id', (req: Request, res: Response) => {
  const updatedEmployee = updateEmployee(parseInt(req.params.id), req.body);
  if (updatedEmployee) {
    res.json(updatedEmployee);
  } else {
    res.status(404).send('Employee not found');
  }
});

app.delete('/employees/:id', (req: Request, res: Response) => {
  deleteEmployee(parseInt(req.params.id));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
