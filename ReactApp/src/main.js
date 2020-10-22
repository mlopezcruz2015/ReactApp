import { Component } from "react";
import React from "react"
import { useEffect, useState } from "react";
import PropTypes from "react"


export default function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cars, setCars] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    //{ http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=30b317c25db0463c99fd191178074008}
    useEffect(() => {
        
       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ order: "Timestamp" })
        };
        fetch('https://my-python-project.azurewebsites.net/image/show', requestOptions)
            .then(response => response.json())
            
            .then(
                (result) => {
                    var data_Array = [];
                    for (var image in result) {
                        data_Array.push(result [image])
                    }

                    
                console.log(data_Array);  
                setCars(data_Array)
                   
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                },
                //--console.log(news)
            )
    },[])




    
    return (
        <div >
            
            {
              cars.map((item, i) => {
                   return (
                          <React.Fragment>
                           <div className="car_title">
                               <div><a style={{color:"black"}}   key={i}>{item.plate} </a></div>
                           <div><img src={`data:image/png;base64,${item.image}`}/></div>
                           
                           </div>
                        
                           </React.Fragment>
                    );
                    
                })
            }
        </div>
    )
}



