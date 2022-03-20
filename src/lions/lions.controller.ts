import { Controller, Get, Post, Query, Redirect, Param, Body, Put } from '@nestjs/common';
import { CreateLionDto } from './dto/create-lion.dto';
import { UpdateLionDto } from './dto/update-lion.dto';

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

    //Get lion by id(Use token param in decorator)
    @Get(':id')
    findOneT(@Param('id') id: string ) : string {
        return `Get a lion by id ${id}`;
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
    
    //Create a lion(Use Data Transfer Object(DTO))(Ask async)
    @Post()
    async createT(@Body() createLionDto : CreateLionDto) {
        return 'Create a lion';
    }

    @Put(':id')
    update(@Param(':id') id: string, @Body() updateLionDto : UpdateLionDto) {
        return `Update a lion by id ${id}`;
    }

 }