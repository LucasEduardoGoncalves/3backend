import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specificationArray: Specification[];

    private static INSTANCE: SpecificationRepository;

    private constructor() {
        this.specificationArray = [];
    };

    public static getInstance(): SpecificationRepository {
        if(!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        };

        return SpecificationRepository.INSTANCE;
    };

    findByName(name: string): Specification {
        const specification = this.specificationArray.find(specification => specification.name === name);
        return specification;
    };

    create({name, description}: ICreateSpecificationDTO): void {
        const specification = new Specification();  

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
    
        this.specificationArray.push(specification);
    };

    list():Specification[] {
        return this.specificationArray;
    };
};

export { SpecificationRepository };