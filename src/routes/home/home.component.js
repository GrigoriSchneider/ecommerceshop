import Directory from "../../components/directory/directory.component";
import { categories } from "../../components/datas/categories";

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
