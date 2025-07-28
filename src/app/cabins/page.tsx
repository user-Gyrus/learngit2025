import React from "react";
import Counter from "../_components/Counter";

export default async function Page() {
  // const response = await fetch("example.com/api/cabins");
  // const data = await response.json();

  return (
    <div>
      <h1>Cabins Page</h1>
      <Counter />
    </div>
  );
}
