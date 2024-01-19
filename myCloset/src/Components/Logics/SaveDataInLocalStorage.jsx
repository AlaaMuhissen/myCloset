import { basicCategories } from '../../../public/data/basicCategories';

const LOCAL_STORAGE_KEY = 'categories';

export function getAllCategories() {
  const categoriesJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
  return JSON.parse(categoriesJSON) || basicCategories;
}

export function updateCategories(categories) {
  const categoriesJSON = JSON.stringify(categories);
  localStorage.setItem(LOCAL_STORAGE_KEY, categoriesJSON);
}

export function updateSubCategory(mainCategory, subCategory, newData) {
  const categories = getAllCategories();
  const mainCategoryIndex = categories.findIndex((category) => category.label === mainCategory.label);

  if (mainCategoryIndex !== -1) {
    const subCategoryIndex = categories[mainCategoryIndex].subOptions.findIndex(
      (subOption) => subOption.label === subCategory.label
    );
    if (subCategoryIndex !== -1) {
      categories[mainCategoryIndex].subOptions[subCategoryIndex].data.push(newData);
      updateCategories(categories);
    }
  }
}

export default function SaveDataInLocalStorage() {
  getAllCategories();
}
