import { IEmployee } from './types/types';

let employees: IEmployee[] = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    middleName: 'Иванович',
    birthDate: '1992-11-13T08:41:04.172Z',
    department: 'Бухгалтерия',
    post: 'Бухгалтер',
    salary: 65000,
  },
  {
    id: 2,
    firstName: 'Андрей',
    lastName: 'Смирнов',
    middleName: 'Андреевич',
    birthDate: '1995-07-13T08:41:04.172Z',
    department: 'Разработка',
    post: 'Разработчик',
    salary: 44000,
  },
  {
    id: 3,
    firstName: 'Сергей',
    lastName: 'Сергеев',
    middleName: 'Сергеевич',
    birthDate: '1991-10-18T14:41:04.172Z',
    department: 'Разработка',
    post: 'Разработчик',
    salary: 55000,
  },
];

export const getEmployees = (page: number, limit: number) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return employees.slice(startIndex, endIndex);
};

export const getEmployeeById = (id: number) => {
  return employees.find((emp) => emp.id === id);
};

export const addEmployee = (employee: Omit<IEmployee, 'id'>) => {
  const newEmployee = { id: employees.length + 1, ...employee };
  employees.push(newEmployee);
  return newEmployee;
};

export const updateEmployee = (
  id: number,
  employeeData: Partial<Omit<IEmployee, 'id'>>
) => {
  const employeeIndex = employees.findIndex((emp) => emp.id === id);
  if (employeeIndex > -1) {
    employees[employeeIndex] = { ...employees[employeeIndex], ...employeeData };
    return employees[employeeIndex];
  }
  return null;
};

export const deleteEmployee = (id: number) => {
  employees = employees.filter((emp) => emp.id !== id);
};
