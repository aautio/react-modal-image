import React, { Component } from 'react'

const modalStyles = {
  position: 'fixed',
  zIndex: 1000,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
}

const modalContentStyles = {
  textAlign: 'center',
  position: 'relative',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
}

const imageStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxWidth: '98%',
  maxHeight: '98%',
  cursor: 'move',
}

const iconStyles = {
  fontSize: '35px',
  textDecoration: 'none',
  cursor: 'pointer',
  float: 'right',
  width: '40px',
  lineHeight: '40px',
  boxSizing: 'border-box',
  border: 'none',
  padding: 0,
  margin: 0,
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0)',
}

const captionStyles = {
  color: 'white',
  fontSize: '120%',
  padding: '10px',
  margin: '0',
}

const headerStyles = {
  position: 'absolute',
  top: 0,
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
}

export default class extends Component {
  state = {
    move: { x: 0, y: 0 },
    moveStart: undefined,
    zoom: 1,
  }

  handleKeyDown = event => {
    // ESC or ENTER?
    if (event.keyCode === 27 || event.keyCode === 13) {
      this.props.onClose()
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false)
  }

  getClickCoordinates = event => {
    const e = event.target
    const dim = this.contentEl.getBoundingClientRect()
    const x = event.clientX - dim.left
    const y = event.clientY - dim.top

    return { x, y }
  }

  handleMouseDown = event => {
    event.preventDefault()

    const coords = this.getClickCoordinates(event)

    this.setState(prevState => {
      return {
        moveStart: {
          x: coords.x - prevState.move.x,
          y: coords.y - prevState.move.y,
        },
      }
    })
  }

  handleMouseMove = event => {
    event.preventDefault()

    const moveEnd = this.getClickCoordinates(event)

    this.setState(prevState => {
      if (!prevState.moveStart) {
        return
      }

      return {
        move: {
          x: moveEnd.x - prevState.moveStart.x,
          y: moveEnd.y - prevState.moveStart.y,
        },
      }
    })
  }

  handleMouseUp = event => {
    this.setState({
      moveStart: undefined,
    })
  }

  handleZoomIn = () => {
    const { zoom } = this.state
    this.setState({ zoom: zoom * 1.5 })
  }

  handleZoomOut = () => {
    const { zoom } = this.state
    const newZoom = zoom / 1.5 < 1 ? 1 : zoom / 1.5
    this.setState({ zoom: newZoom })
  }

  render() {
    const { src, alt, onClose } = this.props

    const { zoom, move } = this.state

    const imgTransform = {
      transform: `translate(calc(-50% + ${move.x}px), calc(-50% + ${
        move.y
      }px)) scale(${zoom})`,
    }

    return (
      <div style={modalStyles}>
        <div
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseUp}
          ref={el => {
            this.contentEl = el
          }}
          style={modalContentStyles}
        >
          <img style={Object.assign({}, imageStyles, imgTransform)} src={src} />
        </div>
        <div style={headerStyles}>
          <button style={iconStyles} onClick={onClose}>
            &times;
          </button>
          <span
            style={{
              float: 'right',
              width: '20px',
            }}
          >
            &nbsp;
          </span>
          <button style={iconStyles} onClick={this.handleZoomOut}>
            &minus;
          </button>
          <button style={iconStyles} onClick={this.handleZoomIn}>
            &#43;
          </button>
          <p style={captionStyles}>{alt}</p>
        </div>
      </div>
    )
  }
}
