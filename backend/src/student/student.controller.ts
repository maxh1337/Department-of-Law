import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { StudentService } from './student.service'
import { CreateStudentDto } from './dto/create-student.dto'
import { IdValidationPipe } from '../pipes/id.validation.pipe'

@Controller('students')
export class StudentController {
	constructor(private readonly StudentService: StudentService) {}

	@Get()
	async getAll() {
		return this.StudentService.getAll()
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	async create(@Body() dto: CreateStudentDto) {
		return this.StudentService.create(dto)
	}

	@Delete(':id')
	@HttpCode(200)
	//@Auth('admin')
	async delete(@Param('id', IdValidationPipe) id: string) {
		return this.StudentService.delete(id)
	}

	@Get('/by-group/:id')
	async getAllByGroup(@Param('id', IdValidationPipe) id: string) {
		return this.StudentService.getAllByGroup(id)
	}
}
