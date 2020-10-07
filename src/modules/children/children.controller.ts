import { Controller } from '@nestjs/common';
import {Crud} from "@nestjsx/crud";
import {ChildrenEntity} from "./children.entity";


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
export class ChildrenController {}
