import React from 'react';
import { Component } from "react";
import { useEffect, useState } from "react";
import PropTypes from "react"
import { getUser, removeUserSession } from './Utils/Common';
 
function Dashboard(props) {
  const user = getUser();
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
 
 
      //Welcome {user.name}!<br /><br />//
	  
  return (
    <div>
	  Welcome User!<br /><br />
	  
	  <div class="row">
				{
				  cars.map((item, i) => {
					  
					//Create date objects to be used with output
					  var createdAtDate = new Date(item.createdAt);
					  var updatedAtDate = new Date(item.updatedAt);
					  
					  //Date Options
					  var options = {
									  hour: 'numeric',
									  minute: 'numeric',
									  hour12: true
									};
					  
					   return (
						  <React.Fragment>

						    <div class="col-lg-4 col-md-6 col-sm-6" key={i}>
								<a style={{color:"black"}} href="#">
									<div class="services-item">
										<img src={`data:image/png;base64,${item.image}`}/>
										<div>Plate: {item.plate}</div>
										<div>Make: {item.make}</div>
										<div>Created: {createdAtDate.getMonth()}/{createdAtDate.getDate()}/{createdAtDate.getFullYear()} {createdAtDate.toLocaleString('en-US', options)}</div>
										<div>Updated: {updatedAtDate.getMonth()}/{updatedAtDate.getDate()}/{updatedAtDate.getFullYear()} {updatedAtDate.toLocaleString('en-US', options)}</div>
									</div>
								</a>
							</div>
							
						   </React.Fragment>
						);
						
					})
				}
				
			</div>
    </div>
  );
}
 
export default Dashboard;