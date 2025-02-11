import React from 'react';
import './Employee.css';
import { IEmployee } from '../../types/types';

interface EmployeeProps {
  employee: IEmployee;
}

export function Employee({ employee }: EmployeeProps) {
  return (
    <div className='container'>
      <div className='employee'>
        <span>{employee.firstName}</span>
        <span>{employee.middleName}</span>
        <span>{employee.lastName}</span>
        <span>{employee.photo}</span>
        <span>{employee.birthDate}</span>
        <span>{employee.department}</span>
        <span>{employee.post}</span>
      </div>
    </div>
  );
}
