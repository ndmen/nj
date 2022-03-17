import { PartialType } from '@nestjs/mapped-types';
import { CreateTigerDto } from './create-tiger.dto';

export class UpdateTigerDto extends PartialType(CreateTigerDto) {}
