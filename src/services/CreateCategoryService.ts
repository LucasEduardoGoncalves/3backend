import { ICategoryRepository } from "../repositories/ICategoryRepository";

interface IRequest {
    name: string; 
    description: string;
}

class CreateCategoryService {

    constructor(private categoryRepository: ICategoryRepository) {};

    execute({name, description}: IRequest): void {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);
    
        if(categoryAlreadyExists) {
            throw new Error("Já existe uma categoria com esse nome.");
        };
    
        this.categoryRepository.create({
            name: name, 
            description: description, 
        });
    
    };
};

export { CreateCategoryService };