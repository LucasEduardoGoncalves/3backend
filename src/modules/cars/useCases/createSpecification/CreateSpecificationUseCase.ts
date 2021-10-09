import { ISpecificationRepository } from "../../repositories/Specification/ISpecificationRepository";

interface IRequest {
    name: string; 
    description: string;
}

class CreateSpecificationUseCase {

    constructor(private specificationRepository: ISpecificationRepository) {};

    execute({name, description}: IRequest): void {
        const specificationAlreadyExists = this.specificationRepository.findByName(name);
    
        if(specificationAlreadyExists) {
            throw new Error("Já existe uma especificação com esse nome.");
        };
    
        this.specificationRepository.create({
            name, 
            description, 
        });
    };
};

export { CreateSpecificationUseCase };