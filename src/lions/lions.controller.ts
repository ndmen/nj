import { Controller, Get, Post, Query, Redirect, Param } from '@nestjs/common';

@Controller('lions')
  export class lionsController {
    @Get()
    findAll(): string {
        return 'Get all lions';
    }

    @Get(':id') 
        findOne(@Param() params) : string {
            console.log(params.id);
            return `Get a lion by id ${params.id}`;
    }
    
    //Redirect response on address (Ask)
    @Get('blog')
    @Redirect('http://blog.localhost:3000', 302)
    getBlog(@Query('version') version ) {
        if (version && version === 5) {
            return { url: 'http://blog.localhost:3000/v5' }; 
        }
    }

    @Post()
    create(): string {
        return 'Create a lion';
    }
 }