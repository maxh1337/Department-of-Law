import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { ConfigModule } from '@nestjs/config'
import { StudentService } from './student.service'
import { StudentModel } from './student.model'
import { StudentController } from './student.controller'

@Module({
	providers: [StudentService],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: StudentModel,
				schemaOptions: {
					collection: 'Students',
				},
			},
		]),
		ConfigModule,
	],
	controllers: [StudentController],
})
export class StudentModule {}
