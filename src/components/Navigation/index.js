import React from 'react';

function Nav (props) {
  const { tabs = [], currentTab, setCurrentTab } = props
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
          {tabs.map((tab) => (
            <li
            className={`mx-1 ${
              currentTab.name === tab.name && 'navActive'
            }`}
            key={tab.name}
            >
              <span
              onClick={() => {
                setCurrentTab(tab)
              }}
              >{tab.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav;