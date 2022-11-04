import React from 'react';

function Nav() {
    const categories = [
        {
          name: "My Work.",
          description:
            "Photos of grocery stores, food trucks, and other commercial projects",
        },
 
      ];
      function categorySelected() {
        console.log("hello")
      }
  return (
    <header>
         <h2>
    <a href="/">
      <span role="img" aria-label="Desktop PC">🖥️</span> Sam Rebilas
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me.
        </a>
      </li>
      <li>
        <span>Contact Me.</span>
      </li>
      {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
           <span onClick={() => categorySelected(category.name)} >
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
    </header>
  );
}

export default Nav;