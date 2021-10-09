import { Request, Response } from 'express';
import { listCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
    
    constructor(private listCategoryUseCase: listCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const allCategories = this.listCategoryUseCase.execute();

        return response.json(allCategories);
    };
};

export { ListCategoriesController }; 