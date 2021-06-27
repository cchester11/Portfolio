import React from 'react';

function Nav () {
  const categories = [
    {
      name: "Projects",
      description: "A list of projects I've completed for academic purposes as well as personal adventures"
    },
    {
      name: "LinkedIn",
      description: "LinkedIn profile"
    }
  ]
  return (
    <header>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About Me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map(cateogry => (
            <li className="mx-1" key={cateogry.name}>
              <span>{cateogry.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav;