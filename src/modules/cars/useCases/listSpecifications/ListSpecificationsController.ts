import { Request, Response } from 'express';
import { listSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
    
    constructor(private listSpecificationsUseCase: listSpecificationsUseCase) {}

    handle(request: Request, response: Response): Response {
        const allSpecifications = this.listSpecificationsUseCase.execute();

        return response.json(allSpecifications);
    };
};

export { ListSpecificationsController }; 