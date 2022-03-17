import { Injectable } from '@nestjs/common';
import { CreateTigerDto } from './dto/create-tiger.dto';
import { UpdateTigerDto } from './dto/update-tiger.dto';

@Injectable()
export class TigersService {
  create(createTigerDto: CreateTigerDto) {
    return 'This action adds a new tiger';
  }

  findAll() {
    return `This action returns all tigers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiger`;
  }

  update(id: number, updateTigerDto: UpdateTigerDto) {
    return `This action updates a #${id} tiger`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiger`;
  }
}
