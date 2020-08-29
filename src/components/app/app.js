import React, {Component, Suspense, lazy}  from "react";
import './app.css';
import Toolbar from "../toolbar";
import SideDrawer from "../toolbar/side-drawer";
import BackDrop from "../toolbar/backdrop";
import withBookstoreService from "../hoc";
import { Switch, Route} from "react-router-dom";
import HomePage from "../pages/home-page";
import HeaderPage from "../pages/header-page";


// const Login = lazy(() => import("../pages/account-page/login"));
const CardPage = lazy(() => import("../pages/cart-page"));
const SignUp = lazy(() => import("../pages/account-page/sign-up"));
const SignIN = lazy(() => import("../pages/account-page/sign-in"));
const BooksPage = lazy(() => import("../pages/book-page"));



class App extends Component {
    state = {
        sideDrawerOpen: false,
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            }
        })
    }

    backDropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    render() {
        let backDrop;

        if (this.state.sideDrawerOpen) {
            backDrop = <BackDrop click={this.backDropClickHandler}/>
        }
        return (
                    <div>
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} numItems={0} total={0}/>
                        <HeaderPage />
                        <SideDrawer show={this.state.sideDrawerOpen}/>
                        {backDrop}
                        <Switch>
                            <Route path="/" component={HomePage} exact/>
                            <Suspense fallback={<div className="lazy">Loading...</div>}>
                                <Switch>
                                    <Route path="/books/:id?" component={BooksPage}/>
                                    <Route path="/sign-in/:id?" component={SignIN}/>
                                    <Route path="/sign-up/:id?" component={SignUp}/>
                                    <Route path="/cart/" component={CardPage}/>
                                    {/*<Route path="/login/:id?" component={Login}/>*/}
                                </Switch>
                            </Suspense>
                        </Switch>
                    </div>
        );
    };
};

export default withBookstoreService()(App);

