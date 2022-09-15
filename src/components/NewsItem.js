import React from 'react'

const NewsItem=(props)=> {

   
        let {title,description,urlToImage,newsUrl,author,date}=props;
        return (
            
          <div className="my-3" >
                    <div className="card" >
                    <img src= {!urlToImage?"https://images.hindustantimes.com/img/2022/05/17/1600x900/ANI-20220314202-0_1652785671562_1652785688450.jpg":urlToImage} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date (date).toGMTString()} </small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                    </div>
                  </div>
        )
     
}

export default NewsItem
