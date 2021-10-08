import { Router } from 'express';

import { CategoryRepository } from '../repositories/CategoryRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categoryRepository.findByName(name);
    
    if(categoryAlreadyExists) {
        return response.status(400).json({error: "Já existe uma categoria com esse nome."});
    };

    categoryRepository.create({
        name: name, 
        description: description, 
    });

    return response.status(201).json({message: "Categoria cadastrada com sucesso."});
});

categoriesRoutes.get("/", (request, response) => {
    const allCategories = categoryRepository.list();

    return response.json(allCategories);
})

export { categoriesRoutes };