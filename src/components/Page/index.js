import React from 'react';

import './page.css'

class Page extends React.Component {
  render() {
    return(
      <main>
        {this.props.children}
      </main>
    )
  }
}

export default Page;