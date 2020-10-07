import { Controller } from '@nestjs/common';
import {Crud, CrudController} from "@nestjsx/crud";
import {ChildrenEntity} from "./children.entity";
import {ChildrenService} from "./children.service";


@Crud({
    model:{
        type: ChildrenEntity
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true
        }
    }
})

@Controller('children')
export class ChildrenController implements CrudController<ChildrenEntity>{
    constructor(public service:ChildrenService) {
    }
}