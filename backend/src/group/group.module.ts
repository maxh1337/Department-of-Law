import { Module } from '@nestjs/common'
import { GroupService } from './group.service'
import { TypegooseModule } from 'nestjs-typegoose'
import { GroupModel } from './group.model'
import { ConfigModule } from '@nestjs/config'
import { GroupController } from './group.controller'

@Module({
	providers: [GroupService],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: GroupModel,
				schemaOptions: {
					collection: 'Groups',
				},
			},
		]),
		ConfigModule,
	],
	controllers: [GroupController],
})
export class GroupModule {}
