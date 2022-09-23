import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log("Hello I am a Constuctor from news component")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9c3055d00953465a842b1662136158c7&page=1";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }

    handlePriviousClick = async ()=>{
        console.log("Privious");

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9c3055d00953465a842b1662136158c7&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState ({
            page: this.state.page - 1,  
            articles: parsedData.articles 
        })
    }
    handleNextClick = async ()=>{
        console.log("Next");

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9c3055d00953465a842b1662136158c7&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState ({
            page: this.state.page + 1,  
            articles: parsedData.articles 
        })

    }

    render() {
        console.log("rander")
        return (
            <div className='container my-3'>
                <h2>NewsCloud - Top Headlines!!!!</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                    <div className="container d-flex justify-content-between">

                        <button disable={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePriviousClick}> &larr; Privious</button>

                        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default News
