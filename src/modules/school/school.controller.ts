import { Controller } from '@nestjs/common';
import {Crud} from "@nestjsx/crud";
import {SchoolEntity} from "./school.entity";


@Crud({
    model:{
        type: SchoolEntity
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true
        }
    }
})

@Controller('school')
export class SchoolController {}
