// import { useState } from "react";

// function Petrol() {
//   const [cost, setCost] = useState("");
//   const [costFilled, setCostFilled] = useState(0);
//   const [litersFilled, setLitersFilled] = useState(0);

//   const oneLiterPetrol = 100;

//   function fillPetrol() {
//     const enteredCost = Number(cost);
//     const liters = enteredCost / oneLiterPetrol;

//     setCostFilled(enteredCost);
//     setLitersFilled(liters);
//   }

//   function reset() {
//     setCost("");
//     setCostFilled(0);
//     setLitersFilled(0);
//   }

//   return (
//     <div>
//       <h2>Welcome to Petrol Bank</h2>

//       <input
//         type="number"
//         min="0"
//         placeholder="Enter Cost"
//         value={cost}
//         onChange={(e) => setCost(e.target.value)}
//       />

//       <button type="button" onClick={fillPetrol}>
//         Fill Petrol
//       </button>

//       <button type="button" onClick={reset}>
//         Reset
//       </button>

//       <p>Petrol cost: ₹{costFilled}</p>
//       <p>Petrol litres: {litersFilled.toFixed(2)} L</p>
//     </div>
//   );
// }

// export default Petrol;

// import { useState } from "react";

// function Petrol() {
//   const [cost, setCost] = useState("");
//   const [costFilled, setCostFilled] = useState(0);
//   const [litersFilled, setLitersFilled] = useState(0);

//   const oneLiterPetrol = 100;

//   function fillPetrol() {
//     let i = 0;

//     while (i < Number(cost)) {
//       i++;
//     }

//     setCostFilled(i);

//     const liters = i / oneLiterPetrol;
//     setLitersFilled(liters);
//   }

//   function reset() {
//     setCost("");
//     setCostFilled(0);
//     setLitersFilled(0);
//   }

//   return (
//     <div>
//       <h2>Welcome to Petrol Bank</h2>

//       <input
//         type="number"
//         min="0"
//         placeholder="Enter Cost"
//         value={cost}
//         onChange={(e) => setCost(e.target.value)}
//       />

//       <button type="button" onClick={fillPetrol}>
//         Fill Petrol
//       </button>

//       <button type="button" onClick={reset}>
//         Reset
//       </button>

//       <p>Petrol cost: ₹{costFilled}</p>
//       <p>Petrol litres: {litersFilled.toFixed(2)} L</p>
//     </div>
//   );
// }

// export default Petrol;

import { useState } from "react";

function Petrol() {
  const [cost, setCost] = useState("");
  const [costFilled, setCostFilled] = useState(0);
  const [litersFilled, setLitersFilled] = useState(0);

  const oneLiterPetrol = 100;

  function fillPetrol() {
    const target = Number(cost);

    if (target < 0 || cost === "") return;

    let i = 0;
    setCostFilled(0);
    setLitersFilled(0);

    function count() {
      while (i < target) {
        i++;

        setTimeout(() => {
          setCostFilled(i);
          setLitersFilled(i / oneLiterPetrol);
        }, i * 20);

        // Schedule updates with a visible delay
        break;
      }

      if (i < target) {
        setTimeout(count, 20);
      }
    }

    count();
  }

  function reset() {
    setCost("");
    setCostFilled(0);
    setLitersFilled(0);
  }

  return (
    <div>
      <h2>Welcome to Petrol Bank</h2>

      <input
        type="number"
        min="0"
        placeholder="Enter Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />

      <button onClick={fillPetrol}>Fill Petrol</button>
      <button onClick={reset}>Reset</button>

      <h3>Petrol Cost: ₹{costFilled}</h3>
      <h3>Petrol Litres: {litersFilled.toFixed(2)} L</h3>
    </div>
  );
}

export default Petrol;


// No.	Topic	Example
// 1	useState Hook	Creating state variables like cost, costFilled, and litersFilled
// 2	Updating State	Using setCostFilled() to update the petrol counter
// 3	Handling Input	Getting the amount entered by the user
// 4	onChange Event	Updating the amount when the user types
// 5	onClick Event	Starting the petrol-filling counter when a button is clicked
// 6	Controlled Input	Connecting an input field to React state using value and onChange
// 7	JavaScript Functions	Creating a function such as fillPetrol()
// 8	if Condition	Checking whether the counter has reached the target amount
// 9	while Loop	Understanding how to repeat code while a condition is true
// 10	setTimeout()	Adding a delay between counter updates
// 11	Recursive Functions	Calling a function again after a delay to animate the counter
// 12	useRef Hook	Storing a timer ID so an existing timer can be cancelled
// 13	clearTimeout()	Stopping an existing counter animation before starting another
// 14	Mathematical Operations	Calculating petrol litres from the amount and price
// 15	Type Conversion	Converting input text into a number using Number()
// 16	Math.floor()	Converting a number into a whole number for the counter