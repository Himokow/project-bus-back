import {ChildrenEntity} from "../modules/children/children.entity";
import {SchoolEntity} from "../modules/school/school.entity";
import {StopEntity} from "../modules/stop/stop.entity";

export default {
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number.parseInt(process.env.DB_PORT, 10),
    entities: [ChildrenEntity,SchoolEntity,StopEntity],
};