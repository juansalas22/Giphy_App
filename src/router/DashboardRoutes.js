import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { GifScreen } from '../components/gif/GifScreen';
import { HistoryScreen } from '../components/history/HistoryScreen';
import { Navbar } from '../components/ui/Navbar';


export const DashboardRoutes = () => {
    return (
        <>
           <Navbar/> 

           <div>
               <Switch>
                   
                   <Route exact path="/gif" component={ GifScreen } />
                   <Route exact path="/history" component={ HistoryScreen } />

                   <Redirect to="/gif"/>
               </Switch>
           </div>
        </>
    )
}



