import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl , newsurl , author , time}= this.props;
    const NewTime = new Date (time)
    const localTime = NewTime.toLocaleString();
    return (
      <div className='my-3' >
        <div className="card">
              <img
                src= {!imageUrl ? "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D": imageUrl}
                className="card-img-top"
                alt="..." 
              />
              
              <div className="card-body">
                <h5 className="card-title">{title.slice(0,40)}...</h5>
                <p className="card-text">
                  {description}
                </p>
                <div className="card-time fst-italic d-flex align-items-center justify-content-center">Posted by {!author ? "unknown" : author} on {localTime}</div>
                <a href={newsurl} className="btn btn-primary">
                  Read More
                </a>
                
              </div>
              </div>
      </div>
    )
  }
}
