import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";
import { CategoryRepository } from '../../repositories/Category/CategoryRepository';

const categoriesRepository = CategoryRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };