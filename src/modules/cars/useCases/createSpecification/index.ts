import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { SpecificationRepository } from '../../repositories/Specification/SpecificationRepository';

const specificationRepository = SpecificationRepository.getInstance();
const createSpacificationController = new CreateSpecificationUseCase(specificationRepository);
const createSpacificationUseCase = new CreateSpecificationController(createSpacificationController);

export { createSpacificationUseCase };