// describe("HTML to JSX", () => {
//   /**
//    * Implement the `LearnReactSection` component
//    * such that it returns the given HTML
//    */
//   test.only("learn react section", () => {
//     const html = `
//         <div>
//             <h1>Learn React</h1>
//             <ul>
//                 <li>Describing the UI
//                 <li>Adding interactivity
//                 <li>Managing state
//             </ul>
//         </div>
// `;

//     const LearnReactSection = () => null;

//     render(<LearnReactSection />);
//     expect(screen.getByRole("heading")).toHaveTextContent(/Learn React/);
//     expect(screen.getByRole("list")).toHaveTextContent(
//       "Describing the UIAdding interactivityManaging state"
//     );
//   });

import React from "react";

const tasks = ["Describing the UI", "Adding interactivity", "Managing state"];
const listItems = tasks.map((task) => <li key={task}>{task}</li>);

function LearnReactSection() {
  return (
    <div>
      <h1>Learn React</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

export default LearnReactSection;
