import React from 'react';
import { ThemeContext } from './ThemeContext';

class ThemeChanger extends React.Component {
  render = () => {
    return (
      <ThemeContext.Consumer>
        {(themeCtx) => {
          return (<button onClick={themeCtx.toggleTheme}>Toggle theme</button>)
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeChanger;