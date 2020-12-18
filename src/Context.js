import React from 'react'

const defaultContextValue = {
  data: {
    language: true, // language: true === ro, language: false === ru
  },
  set : () => {},
}

const { Provider, Consumer } = React.createContext( defaultContextValue )

class ContextProviderComponent
  extends React.Component {

  setData = (newData) => {
    this.setState( state => (
      {
        data: {
          ...state.data, ...newData,
        },
      }
    ) )
  }

  state = {
    ...defaultContextValue,
    set: this.setData,
  }

  render() {
    return <Provider value={ this.state }>{ this.props.children }</Provider>
  }
}

export { Consumer as default, ContextProviderComponent }