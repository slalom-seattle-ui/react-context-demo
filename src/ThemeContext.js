import React from 'react';

export const themes = {
  dark: {
    background: '#222',
    foreground: '#fff'
  },
  light: {
    background: '#eee',
    foreground: '#000'
  }
};

export const ThemeContext = React.createContext();

export class ThemeProvider extends React.Component {
  state = {
    theme: themes['dark']
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  }

  render = () => {
    return (
      <ThemeContext.Provider value={{
        ...this.state,
        toggleTheme: this.toggleTheme
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}