import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Loader } from "../components/Loader/Loader";
import { IEmployee } from "../types/types";
import { Employee } from "../components/Employee/Employee";

export function EmployeesPage() {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [load, setLoad] = useState(false);

  async function fetchEmployees() {
    try {
      setLoad(true);
      const response = await axios.get<IEmployee[]>(
        "http://localhost:3001/employees?page=1&limit=10"
      );
      setEmployees(response.data);
    } catch (e: unknown) {
      console.log(e as AxiosError);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      {load && <Loader />}
      <h1>Список сотрудников</h1>
      <div>
        {load && <Loader />}
        {employees.map((employee) => (
          <Employee employee={employee} key={employee.id} />
        ))}
      </div>
    </div>
  );
}
