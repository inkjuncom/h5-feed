import { Router, Route, Redirect } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import HotQuery from "./HotQuery";
import Result from "./Result";

export default function App() {
  return (
    <>
      <Router hook={useHashLocation}>
        <Route path="/" component={() => <Redirect to="/hot-query" />} />
        <Route path="/hot-query" component={HotQuery} />
        <Route path="/result" component={Result} />
      </Router>
    </>
  );
}
