import { Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';

@Controller('owls')
  export class OwlsController {
    @Get()
    findAll(): string {
        return 'Get all owls';
    }

    @Post()
    create(): string {
        return 'Create a owl';
    }
}