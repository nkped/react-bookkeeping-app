import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import Invoice from "./routes/Invoice";

const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>,
  rootElement
);
