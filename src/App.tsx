import React from "react";
import {IonApp, IonRouterOutlet} from '@ionic/react'

import { HomeFeedPage } from "./app/pages";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './app/theme/variables.css';
import {IonReactRouter} from "@ionic/react-router";
import {Redirect, Route} from "react-router-dom";

const App: React.FC = () => (
  <IonApp>
      <IonReactRouter>
          <IonRouterOutlet>
              <Route path="/home-feed" component={HomeFeedPage} exact={true} />
              <Route path="/" render={() => <Redirect to="/home-feed" />} exact={true} />
          </IonRouterOutlet>
      </IonReactRouter>
    <HomeFeedPage/>
  </IonApp>
);

export default App;
