import { SpecificationRepository } from '../../repositories/Specification/SpecificationRepository';
import { listSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { ListSpecificationsController } from "./ListSpecificationsController";

const specificationsRepository = SpecificationRepository.getInstance();
const listSpecificationUseCase = new listSpecificationsUseCase(specificationsRepository);
const listSpecificationController = new ListSpecificationsController(listSpecificationUseCase);

export { listSpecificationController };