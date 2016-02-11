import React, {
  AppRegistry,
  Component,
} from 'react-native';
import App from './app/main';

class GithubBrowser extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
