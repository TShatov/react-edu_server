import React, { Component } from 'react';

import { Catalog } from './src/Catalog';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Catalog />
    )
  }
}

export default App;