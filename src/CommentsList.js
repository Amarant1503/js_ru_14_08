import React, { Component } from 'react'
import Comment from './Comment'

class CommentsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        return (<div>
            <h4>Комментарии {this.getToggleVisibleCommentsButton()}</h4>
            {this.state.isOpen ? this.getAllComments() : null}
        </div>);

    }

    getAllComments() {
        if (this.props.comments) {
            const commentElements = this.props.comments.map(comment => <Comment id={comment.id} user={comment.user} text={comment.text} />);

            return <ul>{commentElements}</ul>;
        }
        else return null;
    }

    setVisibility = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    getToggleVisibleCommentsButton = () => {
    return (this.props.comments ? <button onClick={this.setVisibility}>{this.state.isOpen ? 'hide' : 'open'}</button> : null);
    }


}

export default CommentsList;