import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    if (error.digest === '2085880501') {
      // Ignore the specific error
      this.setState({ hasError: false })
    } else {
      error
      errorInfo
    }
  }
  render() {
    if (this.state.hasError) {
      // You can render a custom fallback UI here
      return <div>Oops! Something went wrong.</div>
    }

    return this.props.children
  }
}

export default ErrorBoundary
