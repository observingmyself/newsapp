import React, { Component } from "react";
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class NewsScreen extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 4,
    category : 'general',
  }
  static propTypes ={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }
  constructor (props) {
    super(props);
    this.state= {
      articles: [],
      loading: true,
      page : 1,
      totalResults:0
    }
  }

  async componentDidMount() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09e878e519224a48a468dcb72d4b7820&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(30)
    let parseData = await data.json()
    this.props.setProgress(70)
    this.setState({articles:parseData.articles,loading:false,totalResults:parseData.totalResults})

    this.props.setProgress(100)

    console.log(parseData)
  }
  FetchMoreData = async () => {
    this.setState({page : this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09e878e519224a48a468dcb72d4b7820&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({articles:this.state.articles.concat(parseData.articles),totalResults:parseData.totalResults})
  }


  // handlePrevButton= async() =>{
  //    console.log("previous")
  //    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}in&category=${this.props.category}&apiKey=3129d558594d4e1a9b148f979f753760&page=${this.state.page-1}&pageSize=4`;
  //    this.setState({loading:true})
  //    let data = await fetch(url);
     
  //    let parseData = await data.json()
  //    this.setState({
  //     articles:parseData.articles,
  //     loading:false,
  //     page : this.state.page-1
  //   })
  //    // console.log(parseData)
 
  // }
  // handleNextButton = async() => {
  //    console.log("Next")
  //    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}in&category=${this.props.category}&apiKey=3129d558594d4e1a9b148f979f753760&page=${this.state.page+1}&pageSize=4`;
  //    this.setState({loading:true})
  //    let data = await fetch(url);
  //    let parseData = await data.json()
  //    this.setState({
  //     articles:parseData.articles,
  //     loading:false,
  //     page : this.state.page+1
  //   })
  // }

  render() {
    return (

      <>
      {this.state.loading && <Loader/>}
      <InfiniteScroll
    dataLength = {this.state.articles.length}
    pageStart={0}
    next = {this.FetchMoreData}
    hasMore={this.state.articles.length !== this.state.totalResults}
    loader={<Loader/>}
    
>

      <div className="container my-3">
        
        <div className="row">
          {this.state.articles.map((element) => {
           return  <div className="col-md-6 col-lg-3" >
            <NewsItem  title = {element.title} description = {element.description}  imageUrl = {element.urlToImage}  newsurl = {element.url} author = {element.author} time = {element.publishedAt} />
              </div>
  })}        
          </div>
         
          </div>
          </InfiniteScroll>
      </>
    );
  }
}
