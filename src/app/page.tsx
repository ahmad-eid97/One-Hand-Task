import React from "react";
//= Components
import Home from "@/components/Home";

export function generateMetadata() {
  return {
    title: `Task - Home`,
    description: 'One hand task'
  }
}

export default function HomePage() {
  return (
    <main className="container">
      <Home />
    </main>
  )
}
