import { Injectable } from '@nestjs/common';
import { Owl } from './interfaces/owl.interface';

@Injectable()
export class OwlsService {
    private readonly owls: Owl[] = [];

    create(owl : Owl) {
        this.owls.push(owl);
    }

    findAll(): Owl[] {
        return this.owls;
    }

}

// Expample Circular Dependency. Forward reference
// @Injectable()
// export class OwlsService {
//     constructor(
//         @Inject(forwardRef(() => LionsService))
//         private lionsService: LionsService,
//     ) {}
// }