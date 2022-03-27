import { Injectable } from '@nestjs/common';
import { Lion } from "./interfaces/lion.interface";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LionsService {
    private readonly lions: Lion[] = [];

    // constructor (
    //     private (configService: ConfigService)
    // ) {}
    
    // // get an enviroment variable
    // const dbUser = this.configService.get<string>('DATABASE_USER');
    // // get a custom configuration value
    // const dbHost = this.configService.get<string>('database.host');
    // console.log(dbHost);

    create(lion : Lion) {
        this.lions.push(lion);
    }

    findAll(): Lion[] {
        return this.lions;
    }


}

// Example Circular Dependency. Forward reference
// @Injectable export class LionsService {
//     constructor(
//         @Inject(forwardRef(() => OwlsService))
//         private owlsService: OwlsService,
//     ) {}
// }


