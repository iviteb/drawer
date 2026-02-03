import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Portal: React.FunctionComponent = ({ children }) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setMountNode(document.body)
  }, [])

  // During SSR and first client render (before useEffect), render inline
  if (!mountNode) {
    return <>{children}</>
  }

  // After mount, use portal
  return ReactDOM.createPortal(children, mountNode)
}

export default Portal
