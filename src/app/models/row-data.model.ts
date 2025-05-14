export interface RowData {
  id: number;
  name: string;
  age: number;
  country: string;
  city: string;
  salary: number;
}

export const mockData: RowData[] = [
  { id: 1, name: 'John Smith', age: 32, country: 'United States', city: 'New York', salary: 85000 },
  { id: 2, name: 'Jane Doe', age: 28, country: 'Canada', city: 'Toronto', salary: 72000 },
  { id: 3, name: 'Michael Johnson', age: 35, country: 'United Kingdom', city: 'London', salary: 90000 },
  { id: 4, name: 'Emma Wilson', age: 27, country: 'Australia', city: 'Sydney', salary: 78000 },
  { id: 5, name: 'James Brown', age: 41, country: 'United States', city: 'Chicago', salary: 95000 },
  { id: 6, name: 'Olivia Davis', age: 29, country: 'Canada', city: 'Vancouver', salary: 76000 },
  { id: 7, name: 'Robert Miller', age: 33, country: 'United Kingdom', city: 'Manchester', salary: 82000 },
  { id: 8, name: 'Sophia Martinez', age: 31, country: 'Australia', city: 'Melbourne', salary: 80000 },
  { id: 9, name: 'William Taylor', age: 37, country: 'United States', city: 'Boston', salary: 92000 },
  { id: 10, name: 'Isabella Anderson', age: 26, country: 'Canada', city: 'Montreal', salary: 70000 }
];