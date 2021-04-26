import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Error from "./Error/Error.jsx";
import FeedbackForm from "./FeedbackForm/FeedbackForm.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { isEmpty } from "lodash";
import Recepies from "./Recepies/Recepies.jsx";
import DynamicRecepie from "./DynamicRecepie/DynamicRecepie.jsx";


function App() {
    const [fetchedData, setFetchedData] = useState();


    useEffect(() => {
        const fetchData = async () => {
            // performs a GET request
            const response = await fetch("http://demo0939057.mockable.io/receipes");
            const responseJson = await response.json();
            setFetchedData(responseJson);
        };

        if (isEmpty(fetchedData)) {
            fetchData();
        }
    }, [fetchedData]);

     return isEmpty(fetchedData) ? <div>You have no data!</div> : (
        <div>
            <div class="topnav">
                <a class="active" href="/">Home</a>
                <a href="/recipes">Recipes</a>
                 <a href="/aboutMe">AboutMe</a>
                 <a href="/feedbackForm">Contact</a>
            </div>

            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/aboutMe" exact component={AboutMe} />
                        <Route path="/feedbackForm" exact component={FeedbackForm} />
                        <Route exact path="/recipes">
                            <Recepies recepies={Object.values(fetchedData)} />
                         </Route>
                      
                         
                          <Route
          exact
          path={`/recipes/:slug`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            return fetchedData ? <DynamicRecepie
              recepies={fetchedData[match.params.slug]}
            /> : null
          }}
        />
                         
                          <Route component={Error} />
                     </Switch>
                      
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
