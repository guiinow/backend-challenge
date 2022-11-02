import { Controller, Get } from '@nestjs/common';

@Controller()
export class ViagensController {
    @Get()
    obterTodos(): string {
        return 'Lista todos os países';
    }
}