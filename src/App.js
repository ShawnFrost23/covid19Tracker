import React from 'react';

import { Cards, Chart, CountryPicker } from './components'

class App extends React.Component {
  render() {
    return (
      <>
        <Cards />
        <CountryPicker />
        <Chart />
      </>
    )
  }
}

export default App;