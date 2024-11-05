import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList() {
  const employees = [
    { name: "Alice Johnson", role: "Software Engineer" },
    { name: "Bob Smith", role: "Product Manager" },
    { name: "Charlie Brown", role: "Designer" },
    { name: "Diana Prince", role: "HR Specialist" },
    { name: "Evan Wright", role: "Marketing Coordinator" },
    { name: "Fiona Green", role: "Sales Executive" },
  ];
  return (
    <ul>
      {employees.map((employee, index) => (
        <EmployeeListItem employee={employee} key={index} />
      ))}
    </ul>
  );
}
