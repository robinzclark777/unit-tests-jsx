import React from "react";

// /**
//      * Implement the `ProfileImage` component
//      * such that it renders the given HTML
//      */
// test("profile image 2", () => {
//   const html = `<img src="https://placekitten.com/200/300" style="border: 1px solid blue;" />`;

//   const ProfileImage = () => null;

//   render(<ProfileImage />);
//   expect(screen.getByRole("img")).toHaveAttribute(
//     "style",
//     "border: 1px solid blue;"
//   );
// });

function ProfileImage() {
  return (
    <div>
      <img
        src="https://placekitten.com/200/300"
        alt="an image"
        style={{ border: "1px solid blue" }}
      ></img>
    </div>
  );
}
export default ProfileImage;
