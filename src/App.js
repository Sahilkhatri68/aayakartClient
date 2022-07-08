import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, NotFound } from "./Components/default";
import Header from "./Components/Header/Header";
import DetailView from "./Components/ItemDetails/DetailView";
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import Cart from "./Components/Cart/Cart";
import { Box } from "@material-ui/core";
import Footer from "./Components/Footer/Footer";
import Seller from "./Components/Cart/BecomeSeller";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/product/:slug" component={DetailView} />
              <Route exact path="/seller" component={Seller}></Route>
              <Route component={NotFound} />
            </Switch>
          </Box>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
