import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
        <div className='my-3'>  
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://images.hindustantimes.com/img/2022/09/21/1600x900/WhatsApp_Image_2021-09-18_at_094218_1663718673100_1663718673298_1663718673298.jpeg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a target="_blank" rel="noopener noreferrer" href={newsUrl} className="btn btn-sm btn-dark">Get More Information????</a>
                </div>
        </div>
    </div>
    )
  }
}

export default NewsItem
