
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <NavLink to="/storage">Storage API example page</NavLink>
      <br/>
      <NavLink to="/urlparams">URLSearchParams example page</NavLink>
      <a></a>
    </div>
  );
}

export default App;
