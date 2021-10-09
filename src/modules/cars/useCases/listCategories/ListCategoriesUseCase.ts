import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/Category/ICategoryRepository";

class listCategoriesUseCase {
    constructor(private categoryRepository: ICategoryRepository) {};

    execute(): Category[] {
        const categoryRepository = this.categoryRepository.list();

        return categoryRepository
    };
};

export { listCategoriesUseCase };