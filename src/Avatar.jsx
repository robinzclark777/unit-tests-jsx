// /**
//      * Implement the `Avatar` component such that
//      * it displays the name and image of a character.
//      *
//      * Read the details from the `character` variable.
//      * Display the name inside a heading HTML tag.
//      */
// test.only("avatar", () => {
//   const character = {
//     name: "John Doe",
//     image: "https://placekitten.com/200/300",
//   };

//   const Avatar = () => null;

//   render(<Avatar />);
//   expect(screen.getByRole("heading")).toHaveTextContent(character.name);
//   expect(screen.getByRole("img")).toHaveAccessibleName(character.name);
//   expect(screen.getByRole("img")).toHaveAttribute("src", character.image);
// });
// });

import React from "react";

function Avatar() {
  const character = {
    name: "John Doe",
    image: "https://placekitten.com/200/300",
  };
  return (
    <div>
      <h1>{character.name}</h1>
      <img src="https://placekitten.com/200/300" alt={character.name} />
    </div>
  );
}

export default Avatar;
