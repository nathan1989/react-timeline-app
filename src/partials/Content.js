import React, { Component } from 'react'
import ActivityItem from './ActivityItem'

class Content extends Component {
    constructor(props){
        super(props)

        this.state = {
            activities: []
        }
    }
    componentWillMount(){
        this.setState({
            activities: [
                {
                    timestamp: new Date().getTime(),
                    text: "Ate lunch",
                    user: {
                        id: 1, name: 'Nate',
                        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                    },
                    comments: [{ from: 'Ari', text: 'Me too!' }]
                },
                {
                    timestamp: new Date().getTime(),
                    text: "Woke up early for a beautiful run",
                    user: {
                        id: 2, name: 'Ari',
                        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                    },
                    comments: [{ from: 'Nate', text: 'I am so jealous' }]
                },
            ]})
    }
    componentWillReceiveProps(nextProps){
        // check to see if the requestRefresh prop has changed
        if(nextProps.requestRefresh !== this.props.requestRefresh) this.setState({loading: true}, this.updateDate)
    }
    render(){
        const {activities} = this.state
        return (
             <div className="content">
                <div className="line"></div>

                {/* Timeline item */}
                {activities.map((activity) => {
                    return (
                        <ActivityItem
                            activity={activity} />
                    )
                })}

                {/* ... */}

            </div>
        )
    }
}

export default Content