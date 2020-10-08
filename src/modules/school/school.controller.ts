import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {SchoolEntity} from "./school.entity";
import {SchoolService} from "./school.service";


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
export class SchoolController implements CrudController<SchoolEntity>{
    constructor(public service:SchoolService) {
    }
}
