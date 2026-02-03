import ReactDOM from 'react-dom'

const Portal: React.FunctionComponent = ({ children }) => {
  const body = window?.document?.body

  if (!body) {
    return null
  }

  return ReactDOM.createPortal(children, body)
}

export default Portal
