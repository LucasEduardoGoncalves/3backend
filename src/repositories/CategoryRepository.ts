import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private categoriesArray: Category[];

    constructor() {
        this.categoriesArray = [];
    };

    findByName(name: string): Category {
        const category = this.categoriesArray.find(category => category.name === name);
        return category;
    };

    create({name, description}: ICreateCategoryDTO): void {
        const category = new Category();  

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
    
        this.categoriesArray.push(category);
    };

    list():Category[] {
        return this.categoriesArray;
    };
};

export { CategoryRepository };