import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t p-8 text-center text-gray-500">
      &copy; {currentYear} All rights reserved
    </footer>
  );
}

export default Footer;
