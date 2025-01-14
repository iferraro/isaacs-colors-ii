import { Route, Router } from "@solidjs/router";
import Index from "./pages/Index";

export default function App() {
  return (  
    <Router>
      <Route path="/" component={Index} />
    </Router>
  );
}
