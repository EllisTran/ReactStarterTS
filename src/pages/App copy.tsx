import Route from "../components/Route";
import Sidebar from "../components/Sidebar";
import AccordionPage from "./AccordionPage";
import ButtonPage from "./ButtonPage";
import DemoPage from "./DemoPage";
import DropdownPage from "./DropdownPage";
import ModalPage from "./ModalPage";
import TablePage from "./TablePage";
const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />

      <div className="col-span-5">
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <DemoPage initialCount={0} />
        </Route>
      </div>
    </div>
  );
};

export default App;
