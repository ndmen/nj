import { Controller, Get, Post, Query, Redirect, Param } from '@nestjs/common';

@Controller('owls')
  export class OwlsController {
    @Get()
    findAll(): string {
        return 'Get all owls';
    }

    @Get(':id')
    findOne(@Param() params) : string {
        console.log(params.id);
        return `Get a owl by id ${params.id}`;
    }

    //Redirect responce on address (Ask)
    @Get('blog')
    @Redirect('http://blog.localhost:3000', 302)
    getBlog(@Query('version') version) {
        if (version && version === 5) {
            return { url: 'http://blog.localhost:3000/v5' };
        }
    }

    @Post()
    create(): string {
        return 'Create a owl';
    }
}