import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {StudentModule} from './student/student.module';
import {GroupModule} from './group/group.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypegooseModule} from "nestjs-typegoose";
import {getMongoDbConfig} from "./config/mongo.config";
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [StudentModule, GroupModule,
        ConfigModule.forRoot(),
        TypegooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getMongoDbConfig,
        }),
        AdminModule,
        AuthModule

    ],
    controllers: [AppController, AdminController, AuthController],
    providers: [AppService, AdminService, AuthService],
})
export class AppModule {
}
