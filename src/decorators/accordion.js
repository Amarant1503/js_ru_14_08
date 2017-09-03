import React from 'react'

export default (OriginalComponent) => class AccordionComponent extends React.Component {
    state = {
        openElementId: null
    }

    isOpenElement = (openElementId) => {
        return this.state.openElementId == openElementId;
    }

   toggleOpenElement = (openElementId) => {
        this.setState({ openElementId: this.state.openElementId != openElementId ? openElementId : null });
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpenElement} isOpenElement={this.isOpenElement}/>
    }
} 