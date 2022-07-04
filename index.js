import { registerRootComponent } from "expo";
import App from "./App";
import TaskContext from "./realm";
const { RealmProvider } = TaskContext;

function AppWrapper() {
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AppWrapper);
