import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

import stylesheets from "app/stylesheets/index.less"; //eslint-disable-line no-unused-vars
import configureStore from "app/configureStore";
import urls from "app/urls";

const store = configureStore();


class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    {urls}
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Root;
