import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.shape(
                {
                    id: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired,
                    comments: PropTypes.arrayOf(
                        PropTypes.shape(
                            {
                                id: PropTypes.string.isRequired,
                                user: PropTypes.string.isRequired,
                                text: PropTypes.string.isRequired,
                            }
                        )
                    )
                }
            )
        )
    }

    render() {
        const { isOpenElement, toggleOpen } = this.props;

        const articleElements = this.props.articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={isOpenElement}
                    toggleOpen={toggleOpen}
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList);