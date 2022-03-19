import { Controller, Get, Post } from '@nestjs/common';

@Controller('lions')
  export class lionsController {
    @Get()
    findAll(): string {
        return 'Get all lions';
    }

    @Post()
    create(): string {
        return 'Create a lion';
    }
 }