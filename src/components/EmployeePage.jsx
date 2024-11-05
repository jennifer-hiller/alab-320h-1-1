import Header from "./Header";

export default function EmployeePage() {
  return (
    <div className="employeePage">
      <Header>Employee</Header>
      <div className="employeeHeader">
        <div className="avatar"></div>
        <div>
          <h3>Julie Taylor</h3>
          <h4>VP of Marketing</h4>
        </div>
      </div>

      <main>
        <dl>
          <dt>Call Office</dt>
          <dd>555-555-5555</dd>
          <dt>Call Mobile</dt>
          <dd>555-555-5555</dd>
          <dt>SMS</dt>
          <dd>555-555-5555</dd>
          <dt>Email</dt>
          <dd>jtaylor@hatemail.com</dd>
        </dl>
      </main>
    </div>
  );
}
