import { CategoryRepository } from "../../repositories/Category/CategoryRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoriesRepository = CategoryRepository.getInstance();
const importcategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importcategoryController = new ImportCategoryController(importcategoryUseCase);

export { importcategoryController };