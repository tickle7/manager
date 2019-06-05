import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import NoMatch from './pages/nomatch';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Tabs from './pages/ui/tabs';
import Messages from './pages/ui/messages';
import FormLogin from './pages/form/login';
import Register from './pages/form/register';
import Basic from './pages/table/basic';
import High from './pages/table/high';
export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/admin" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    <Route path="/admin/ui/modals" component={Modals}></Route>
                                    <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                    <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                    <Route path="/admin/ui/messages" component={Messages}></Route>
                                    <Route path="/admin/form/login" component={FormLogin}></Route>
                                    <Route path="/admin/form/register" component={Register}></Route>
                                    <Route path="/admin/table/basic" component={Basic}></Route>
                                    <Route path="/admin/table/high" component={High}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}