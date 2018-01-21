import React, { Component } from 'react'

class ActivityItem extends Component {
    render(){
        const { activity } = this.props // ES6 destructuring, same as const activity = this.props.activity
        return (
            <div className="item">
                <div className="avatar">
                    <img
                        alt={activity.text}
                        src={activity.user.avatar} />
                </div>

                <span className="time">
                    {activity.timestamp}
                </span>
                <p>{activity.text}</p>
                <div className="commentCount">
                    {activity.comments.length}
                </div>
            </div>
        )
    }
}

export default ActivityItem