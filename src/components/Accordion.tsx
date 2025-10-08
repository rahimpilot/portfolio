import React, { useState } from "react";

export default function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <button className="accordion-title" onClick={() => setOpen(!open)}>
        {title} {open ? "▲" : "▼"}
      </button>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
}
