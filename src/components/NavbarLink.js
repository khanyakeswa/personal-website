import React from "react";
import Link from "next/link";

function NavbarLink({ section }) {
  const linkClass = `link ${section.text.toLowerCase()}`;

  return (
    <div className={linkClass}>
      <Link href={`#${section.hash}`}>{section.text}</Link>
    </div>
  );
}

export default NavbarLink;
