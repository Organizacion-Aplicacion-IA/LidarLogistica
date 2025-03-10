import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Switch, Redirect } from "react-router-dom";  
import Login from "./pages/login/Login";
import Register from "./pages/signin/signin";
import ForgotPassword from "./pages/forgot/forgot";
import Auth from "./pages/forgot/auth";
import NewPassword from "./pages/forgot/password";
import Tabs from "./pages/TabBar/Tabs";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch> 
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/Tabs" component={Tabs} />
            <Route path="/login" component={Login} />  
            <Route path="/sign-in" component={Register} />  
            <Route path="/forgot-password" component={ForgotPassword} /> 
            <Route path="/auth" component={Auth}/> 
            <Route path="/new-password" component={NewPassword}/> 
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
