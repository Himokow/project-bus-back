import {Body, Controller, Get, Post, Put} from '@nestjs/common';
import {Crud, CrudController, Override} from "@nestjsx/crud";
import {ChildrenEntity} from "./children.entity";
import {ChildrenService} from "./children.service";
import {UpdateResult} from "typeorm";


@Crud({
    model:{
        type: ChildrenEntity
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true
        },
    },
})

@Controller('children')
export class ChildrenController implements CrudController<ChildrenEntity>{
    constructor(public service:ChildrenService) {
    }

    @Override()
    @Get()
    async getAllChildrenWithRelations():Promise<any[]>{
        return await this.service.findAll();
    }

    @Override()
    @Post()
    async addChild(@Body()c : ChildrenEntity):Promise<any[]>{
        return await this.service.addChild(c);
    }

    @Override()
    @Put()
    async updateChild(@Body()c:ChildrenEntity):Promise<any>{
        return await this.service.updateChild(c);
    }

    @Get('/uncheck')
    async uncheckallChildren():Promise<any[]>{
        return await this.service.uncheckAll();
    }
}