import "./categories.styles.scss";
import Directory from "./components/directory/directory.component";
import { categories } from "./components/datas/categories";

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
