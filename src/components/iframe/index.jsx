import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { AsyncLoader, Loader } from 'components'

export class Iframe extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        onLoad: PropTypes.func,
        width: PropTypes.number,
        height: PropTypes.number,
        allowFullScreen: PropTypes.bool
    }
    static defaultProps = {
        allowFullScreen: true,
        width: 960,
        height: 800
    }
    state = {
        isLoading: true
    }
    constructor(props) {
        super(props)
        this.ref = React.createRef()
    }

    onLoad = () => {
        console.log('loaded src')
        this.setState({
            isLoading: false
        }, () => this.props.onLoad())
    }
    componentDidMount() {
        this.ref.current.addEventListener('load', this.onLoad)
    }
    componentWillUnmount() {
        this.ref.current?.removeEventListener('load', this.onLoad)
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        const { src } = this.props
        if(src !== nextProps.src) {
            console.log('src updated:', {old: src, new: nextProps.src})
            this.setState({
                isLoading: true
            })
        }
    }

    render() {
        const { width, height, allowFullScreen } = this.props
        const { isLoading } = this.state
        return <div className='iframe-container'>
                <iframe
                    {...this.props}
                    ref={this.ref}
                    frameBorder='0'
                    scrolling='no'
                    width={width}
                    height={height}
                    allowFullScreen={ allowFullScreen }
                    mozallowfullscreen={ allowFullScreen.toString() }
                    webkitallowfullscreen={ allowFullScreen.toString() }
                />
            </div>
    }
}

export default Iframe
