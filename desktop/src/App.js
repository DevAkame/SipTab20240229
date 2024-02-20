import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import store from './redux/store';
import {MainHomeViews} from './ui-lib/home/MainHome';
Amplify.configure(awsconfig);

function App() {
  return (
    <Provider store={store}>
      <AmplifyAuthenticator>
        <Router>
          <div>
            <Route exact path="/" element={<MainHomeViews />} />
            {/* 他のルートをここに追加 */}
          </div>
        </Router>
      </AmplifyAuthenticator>
    </Provider>
  );
}

export default App;