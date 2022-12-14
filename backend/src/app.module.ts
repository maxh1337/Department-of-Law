import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {StudentModule} from './student/student.module';
import {GroupModule} from './group/group.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypegooseModule} from "nestjs-typegoose";
import {getMongoDbConfig} from "./config/mongo.config";


@Module({
    imports: [StudentModule, GroupModule,
        ConfigModule.forRoot(),
        TypegooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getMongoDbConfig,
        })

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
