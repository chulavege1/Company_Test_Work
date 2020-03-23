// 
    import React, {Component} from 'react';
    import ReactDOM from 'react-dom';
// StyledMainWebsiteComponents
    import './HTMLBodyMain.sass'
    import App from './Root/App';

// Redux + Assync => {
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './Root/Reducers/rootReducer';

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// )
  

ReactDOM.render(
    <App />
 ,document.getElementById('React-components__container')
);

                