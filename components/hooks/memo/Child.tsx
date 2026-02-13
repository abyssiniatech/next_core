import React from "react";

const Child = React.memo(({ name }: { name: string }) => {
  console.log("Child rendered");
  return <h2>Hello {name}</h2>;
});

export default Child;
