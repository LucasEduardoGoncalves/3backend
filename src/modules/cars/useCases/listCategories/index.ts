import { CategoryRepository } from '../../repositories/Category/CategoryRepository';
import { listCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./ListCategoriesController";

const categoriesRepository = CategoryRepository.getInstance();
const listCategoryUseCase = new listCategoriesUseCase(categoriesRepository);
const listCategoryController = new ListCategoriesController(listCategoryUseCase);

export { listCategoryController };