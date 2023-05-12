import { categories } from "../datas/categories";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="categorie-container">
      {categories.map((categories) => (
        <CategoryItem key={categories.id} category={categories} />
      ))}
    </div>
  );
};

export default Directory;
