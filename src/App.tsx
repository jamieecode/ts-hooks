import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseStateComponent from "./UseStateComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import CustomHookComponent from "./CustomHookComponent";
import EvenMoreReactComponent from "./EvenMoreReactComponent";

function App() {
  return (
    <div>
      <h1>EvenMore</h1>
      <EvenMoreReactComponent />
      <h1>UseState</h1>
      <UseStateComponent />
      <h1>UseEffect</h1>
      <UseEffectComponent />
      <h1>UseContext</h1>
      <UseContextComponent />
      <h1>UseReducer</h1>
      <UseReducerComponent />
      <h1>UseRef</h1>
      <UseRefComponent />
      <h1>CustomHook</h1>
      <CustomHookComponent />
    </div>
  );
}

export default App;
