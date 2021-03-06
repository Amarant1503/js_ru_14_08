import React, { Component } from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        console.log('---', toggleOpen)

        return (
            <div>
                <h3 onClick={() => toggleOpen(article.id)}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        return this.props.isOpen(this.props.article.id) && (
            <div>
                <p>{this.props.article.text}</p>
                <CommentList comments={this.props.article.comments} />
            </div>
        )
    }
}

export default Article