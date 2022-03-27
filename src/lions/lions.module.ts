import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { LionsController } from "./lions.controller";
import { LionsService } from "./lions.service";

@Module({
    controllers: [LionsController],
    providers: [LionsService],
    exports: [LionsService],
    imports: [ConfigModule],
})

export class LionsModule {}