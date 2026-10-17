export function Student({ name, age }) {
  return (
    <div className="student">
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
