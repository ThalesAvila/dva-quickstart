import dva from "dva";
import { Component } from "react";
import "./index.css";

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model({
  namespace: "count",
  state: 0,
  reducers: {
    add(count) {
      return count + 1;
    },
    minus(count) {
      return count - 1;
    }
  }
});

class TestError extends Component {
  componentDidCatch(e) {
    alert(e.message);
  }
  componentDidMount() {
    // throw new Error('a');
  }
  render() {
    return <div>TestError</div>;
  }
}
// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
