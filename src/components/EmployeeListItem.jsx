export default function EmployeeListItem(props) {
  return (
    <li>
      <div className="avatar mini"></div>
      <div>
        <h3>{props.employee.name}</h3>
        <h4>{props.employee.role}</h4>
      </div>
    </li>
  );
}
