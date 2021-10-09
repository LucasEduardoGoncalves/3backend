import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/Specification/ISpecificationRepository";

class listSpecificationsUseCase {
    constructor(private specificationRepository: ISpecificationRepository) {};

    execute(): Specification[] {
        const specificationRepository = this.specificationRepository.list();

        return specificationRepository
    };
};

export { listSpecificationsUseCase };