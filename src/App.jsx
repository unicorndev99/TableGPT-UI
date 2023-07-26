import React from 'react';
import './App.css';
import "@fontsource/exo-2"; 
import 'antd/dist/antd.css'
import Home from './containers/home';
import { Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';



function App() {
  const history = useHistory();
  // const onRedirectCallback = (appState) => {
  //   history.replace(
  //     appState && appState.returnTo
  //       ? appState.returnTo
  //       : window.location.href
  //   );
  // };
  return (
    <Auth0Provider
      domain="dev-rkftusv7kndzd0z0.us.auth0.com"
      clientId="ZQpRDSxtwOgCE7SX4Bd3xfzgErZpxWAt"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      // onRedirectCallback={onRedirectCallback}
    >
      <div className="App">
        <Home />
      </div>
    </Auth0Provider>

  );
}

export default App;