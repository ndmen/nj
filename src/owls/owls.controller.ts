import { Controller, Get, Post, Query, Redirect, Param, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { OwlsService } from 'src/owls/owls.service';
import { CreateOwlDto } from './dto/create-owl.dto';
import { UpdateOwlDto } from './dto/update-owl.dto';
import { Owl } from './interfaces/owl.interface';

@Controller('owls')
  export class OwlsController {
    constructor (private owlsService: OwlsService) {}

    // @Get()
    // findAll(): string {
    //     return 'Get all owls';
    // }

    @Get()
    async findAll(): Promise<Owl[]> {
        return this.owlsService.findAll();
    }

    @Post()
    async create(@Body() createOwlDto: CreateOwlDto ) {
        return this.owlsService.create(createOwlDto);
    }

    //Use Validation(Pipes)
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return `Get a owl by id ${id}`;
    }

    // @Get(':id')
    // findOne(@Param() params) : string {
    //     console.log(params.id);
    //     return `Get a owl by id ${params.id}`;
    // }

    //Get owl by id(Use token param in decorator)
    // @Get(':id')
    // findOneT(@Param('id') id : string ) : string {
    //     return `Get a owl by id ${id}`;
    // }

    //Redirect responce on address (Ask)
    @Get('blog')
    @Redirect('http://blog.localhost:3000', 302)
    getBlog(@Query('version') version) {
        if (version && version === 5) {
            return { url: 'http://blog.localhost:3000/v5' };
        }
    }

    // @Post()
    // create(): string {
    //     return 'Create a owl';
    // }
    
    //Create a owl(Use Data Transfer Object(DTO))(Ask async)
    // @Post()
    // async createT(@Body() createOwlDto : CreateOwlDto ) {
    //     return 'Create a owl';
    // }

    @Put(':id')
    update(@Param(':id') id : string, @Body() updateOwlDto : UpdateOwlDto ) {
        return `Update a owl by id ${id}`;
    }

    @Delete(':id')
    remove(@Param(':id') id: string) {
        return `Delete a owl by id ${id}`;
    }

}