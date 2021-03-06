import { Controller, Get, Post, Query, Redirect, Param, Body, Put, Delete, ParseIntPipe, UseGuards, UseInterceptors, UsePipes, ValidationPipe, ParseBoolPipe, ParseArrayPipe, Version } from '@nestjs/common';
import { CreateLionDto } from './dto/create-lion.dto';
import { UpdateLionDto } from './dto/update-lion.dto';
import { LionsService } from './lions.service';
import { Lion } from './interfaces/lion.interface';
import { RolesGuard } from 'src/_guards/roles.guard';
import { LoggingInterceptor } from 'src/_interseptors/logging.interceptor';
import { TransformInterceptor } from 'src/_interseptors/transfom.interceptor';
import { ErrorInterceptor } from 'src/_interseptors/errors.interceptor';
import { CacheInterceptor } from 'src/_interseptors/cache.interceptor';
import { TimeoutInterceptor } from 'src/_interseptors/timeout.interceptor';

@Controller('lions')
  export class LionsController {
    constructor (private lionsService: LionsService) {}

    // @Get()
    // findAll(): string {
    //     return 'Get all lions';
    // }

    @Get()
    // @UseGuards(RolesGuard)
    // @UseInterceptors(LoggingInterceptor)
    // @UseInterceptors(TransformInterceptor)
    // @UseInterceptors(ErrorInterceptor)
    @UseInterceptors(CacheInterceptor, TimeoutInterceptor)
    async findAll(): Promise<Lion[]> {
        return this.lionsService.findAll();
    }

    @Version('2') //Why do not working?
    @Get('ids')
    findByIdsV2(
        @Query('ids', new ParseArrayPipe({ items: Number, separator: ','}))
        ids: number[],
    ) {
        console.log(ids);
        return `Return usres by ids ${ids}`;
    }

    @Post()
    async create(@Body() createLionDto: CreateLionDto) {
        return this.lionsService.create(createLionDto);
    }

    //Use Validation(Pipes)
    @Version('1')
    @Get(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    @UseInterceptors(LoggingInterceptor)
    async findOne(
        @Param('id', ParseIntPipe) id: number, 
        @Query('sort', ParseBoolPipe) sort: boolean ) {
        console.log(typeof id === 'number');
        console.log(typeof sort === 'boolean');
        return `Get a lion by id ${id}. Sort ${sort}`;
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