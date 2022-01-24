import { BrowserRouter as Router, Routes, Route, Navigate   } from "react-router-dom";
import Landing from "./containers/Landing";
import Layout from "./containers/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
