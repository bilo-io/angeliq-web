// #region Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// #endregion

// #region Components
import {
    Input
    // Select
} from 'components'
// #endregion

// #region Misc
import {
    countries,
    categories,
    getHeadlines
} from './util'
// #endregion

export class WidgetNews extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        isEditable: PropTypes.bool,
        duration: PropTypes.number,
        onNext: PropTypes.func,
        onDataChange: PropTypes.func
    }

    static defaultProps = {
        onDataChange: (data) => console.log('define WidgetNews.onDataChange()'),
        duration: 10,
        data: {
            limit: 5,
            country: 'ZA'
        }
    }

    state = {
        news: [],
        activePost: 0
    }

    componentDidMount () {
        const { data } = this.props
        getHeadlines(data || WidgetNews.defaultProps.data).then(
            response => {
                this.setState({
                    news: response.data.articles
                }, this.beginLoop)
            }
        )
    }

    autoPlay = () => {
        const { news } = this.state
        const activePost = this.state.activePost + 1
        if (news.length > 0 && activePost >= news.length) {
            clearInterval(this.loopInterval)
            this.props.onNext()
        }
        this.setState({
            activePost: activePost < news.length
                ? activePost
                : 0
        })
    }

    beginLoop = () => {
        const { duration } = this.props
        this.loopInterval = setInterval(this.autoPlay, duration * 1000)
    }

    onChangeUrl = (e) => {
        const update = {
            ...this.props.data,
            url: e.target.value
        }
        this.props.onDataChange(update)
    }

    onChange = (field) => (e) => {
        const { data, onChange } = this.props
        const update = {
            ...data,
            [field]: e.target.value
        }
        onChange(update)
    }

    render () {
        const { isEditable, data } = this.props
        const { news, activePost } = this.state
        const { query, country, limit } = data
        const article = news.length > 0 ? news[activePost] : undefined
        return <div className='flex-col'>
            {
                isEditable && <div>
                    <Input
                        label='search...'
                        type='text'
                        value={ query }
                        onChange={this.onChange('query')}
                    />
                    <Input
                        label='limit...'
                        type='number'
                        value={ limit }
                        onChange={this.onChange('limit')}
                    />
                    {/* <Select
                        onChange={this.onChange('country')}
                        options={ categories.map(category => ({
                            label: category,
                            value: category
                        })) }
                    />
                    <Select
                        onChange={this.onChange('category')}
                        options={ countries.map(country => ({
                            label: country.name,
                            value: country.name
                        })) }
                    /> */}
                </div>
            }
            {
                article && <div key={'widget-news-article'} className='article-container'>
                    <img src={article.urlToImage} />
                    <div className='content'>
                        <div className='title'>{article.title}</div>
                        {/* <div className='description'>{article.content}</div> */}
                        <div className='author'>{article.author}</div>
                        <div className='source'>(Source: {article.source.name})</div>
                    </div>
                </div>
            }
        </div>
    }
}

WidgetNews.config = {
    name: 'News',
    type: 'widget:news',
    icon: 'image',
    props: [{
        name: 'query',
        type: 'text',
        defaultValue: ''
    }, {
        name: 'Country',
        type: 'single',
        defaultValue: 'za',
        options: countries
    }, {
        name: 'Categories',
        type: 'single',
        defaultValue: 'za',
        options: categories
    }]
}

export default WidgetNews
