import { Controller, Get, Post, Query, Redirect, Param, Body, Put, Delete, ParseIntPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateLionDto } from './dto/create-lion.dto';
import { UpdateLionDto } from './dto/update-lion.dto';
import { LionsService } from './lions.service';
import { Lion } from './interfaces/lion.interface';
import { RolesGuard } from 'src/_guards/roles.guard';
import { LoggingInterceptor } from 'src/_interseptors/logging.interceptor';

@Controller('lions')
  export class LionsController {
    constructor (private lionsService: LionsService) {}

    // @Get()
    // findAll(): string {
    //     return 'Get all lions';
    // }

    @Get()
    @UseGuards(RolesGuard)
    @UseInterceptors(LoggingInterceptor)
    async findAll(): Promise<Lion[]> {
        return this.lionsService.findAll();
    }

    @Post()
    async create(@Body() createLionDto: CreateLionDto) {
        return this.lionsService.create(createLionDto);
    }

    //Use Validation(Pipes)
    @Get(':id')
    @UseInterceptors(LoggingInterceptor)
    async findOne(@Param('id', ParseIntPipe) id: number ) {
        return `Get a lion by id ${id}`;
    }

    // @Get(':id') 
    // findOne(@Param() params) : string {
    //     console.log(params.id);
    //     return `Get a lion by id ${params.id}`;
    // }

    //Get lion by id(Use token param in decorator)
    // @Get(':id')
    // findOneT(@Param('id') id: string ) : string {
    //     return `Get a lion by id ${id}`;
    // }
    
    //Redirect response on address (Ask)
    @Get('blog')
    @Redirect('http://blog.localhost:3000', 302)
    getBlog(@Query('version') version ) {
        if (version && version === 5) {
            return { url: 'http://blog.localhost:3000/v5' }; 
        }
    }

    // @Post()
    // create(): string {
    //     return 'Create a lion';
    // }
    
    //Create a lion(Use Data Transfer Object(DTO))(Ask async)
    // @Post()
    // async createT(@Body() createLionDto : CreateLionDto) {
    //     return 'Create a lion';
    // }

    @Put(':id')
    update(@Param(':id') id: string, @Body() updateLionDto : UpdateLionDto) {
        return `Update a lion by id ${id}`;
    }

    @Delete(':id')
    remove(@Param(':id') id: string) {
        return `Delete a lion by id ${id}`;
    }

 }