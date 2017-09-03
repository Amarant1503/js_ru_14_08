import React from 'react'
import PropTypes from 'prop-types'

function Comment({ comment }) {
    return (
        <div>
            {comment.text} <b>by {comment.user}</b>
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        user: PropTypes.string,
        text: PropTypes.string
    }))
}

export default Comment