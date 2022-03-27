import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateLionDto } from 'src/lions/dto/create-lion.dto';

export class UpdateLionDto extends PartialType(OmitType(CreateLionDto, ['name'] as const)) {}