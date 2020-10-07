import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {StopEntity} from "./stop.entity";
import {StopService} from "./stop.service";

@Crud({
    model:{
        type: StopEntity
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true
        }
    }
})

@Controller('stop')
export class StopController implements CrudController<StopEntity>{
    constructor(public service:StopService) {
    }
}

