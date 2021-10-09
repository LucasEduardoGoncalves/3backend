import { Router } from 'express';

import { createSpacificationUseCase } from '../modules/cars/useCases/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/listSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpacificationUseCase.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
    return listSpecificationController.handle(request, response);
})

export { specificationsRoutes };