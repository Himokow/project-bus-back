import { Controller } from '@nestjs/common';
import {Crud} from "@nestjsx/crud";
import {StopEntity} from "./stop.entity";

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
export class StopController {}
