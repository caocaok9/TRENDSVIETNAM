import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// routes config
import routes from './defaults/Route';
const DefaultHeader = React.lazy(() => import('./defaults/Header'));

class DefaultLayout extends Component {

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render() {
        return (
            <div className="app">
                <DefaultHeader />
                <div className="app-body">
                    <main className="main">
                        <Container fluid>
                            <Suspense fallback={this.loading()}>
                                <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={props => (
                                                    <route.component {...props} />
                                                )} />
                                        ) : (null);
                                    })}
                                </Switch>
                            </Suspense>
                        </Container>
                    </main>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;
