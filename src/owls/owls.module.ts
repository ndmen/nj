import { Module } from "@nestjs/common";
import { OwlsController } from "./owls.controller";
import { OwlsService } from "./owls.service";

@Module({
    controllers: [OwlsController],
    providers: [OwlsService],
})

export class OwlsModule {}