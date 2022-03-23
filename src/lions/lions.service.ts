import { Injectable } from '@nestjs/common';
import { Lion } from "./interfaces/lion.interface";

@Injectable()
export class LionsService {
    private readonly lions: Lion[] = [];

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


