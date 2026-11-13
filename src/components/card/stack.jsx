// #region Modules
import React, {
    useState,
    useEffect,
    Fragment
} from 'react'
import PropTypes from 'prop-types'
// #endregion

export const CardStack = ({
    children,
    items,
    renderItem,
    width,
    height,
    margin,
    stackHeight,
    isAsync,
    isSeparate,
    duration
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
    }, [])

    const toggleStack = () => {
        if (isAsync && !isOpen) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setIsOpen(!isOpen)
            }, (items || []).length * 400)
        } else {
            setIsOpen(!isOpen)
        }
    }

    const cardHeight = `calc(${height} - 1rem)`
    const openStyle = {
        width,
        height: cardHeight,
        margin,
        opacity: 1,
        transition: `all ${duration.open}`
    }

    const closedStyle = {
        overflow: 'hidden',
        width: 0,
        height: cardHeight,
        margin: 0,
        opacity: 0,
        transition: `all ${duration.close}`
    }

    const content = <Fragment>
        <div className="flex-col card-stack" style={{ position: 'relative', cursor: 'pointer', width, height, margin }}>
            {
                isOpen
                    ? null
                    : <Fragment>
                        <div className='stack-2'
                            style={{
                                zIndex: 0,
                                marginTop: 0,
                                height: `calc(2*${stackHeight})`
                            }} />
                        <div className='stack-1'
                            style={{
                                zIndex: 1,
                                marginTop: stackHeight,
                                height: `calc(2*${stackHeight})`
                            }} />
                    </Fragment>
            }
            <div className={`${isOpen ? 'card card-3' : 'parent'}`}
                style={{
                    zIndex: 2,
                    position: 'relative',
                    width,
                    height: `calc(${height} - 1rem)`,
                    marginTop: isOpen ? 0 : `calc(2*${stackHeight})`,
                    backgroundColor: 'white',
                    border: isOpen ? '2px solid #00adee' : '2px solid transparent'
                }}
                onClick={toggleStack}
            >
                { children }
                { isLoading && <div
                    className='loader-background'
                    style={{
                        width: `calc(${width} + 4px)`,
                        height: `calc(${cardHeight} + 4px)`
                    }}>
                    <div className="loader white" />
                </div> }
            </div>
        </div>
        {
            (items || []).map((item, i) => (
                <div
                    className='card-stack-child'
                    style={isOpen && !isLoading ? openStyle : closedStyle }

                >
                    {renderItem(item, i)}
                </div>))
        }
    </Fragment>

    return (
        isSeparate
            ? <div className="flex-row flex-wrap">{content}</div>
            : content
    )
}

CardStack.propTypes = {
    stackHeight: PropTypes.string,
    duration: PropTypes.shape({
        open: PropTypes.string,
        close: PropTypes.string
    })
}

CardStack.defaultProps = {
    items: [],
    stackHeight: '0.3rem',
    duration: {
        open: '1s',
        close: '.3s'
    },
    renderItem: (item, i) => <div>{JSON.stringify(item)}</div>
}
export default CardStack
