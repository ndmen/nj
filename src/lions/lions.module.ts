import { Module } from "@nestjs/common";
import { LionsController } from "./lions.controller";
import { LionsService } from "./lions.service";

@Module({
    controllers: [LionsController],
    providers: [LionsService],
    exports: [LionsService],
})

export class LionsModule {}