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
import { GroupService } from './group.service'
import { CreateGroupDto } from './dto/create-group.dto'
import { IdValidationPipe } from '../pipes/id.validation.pipe'

@Controller('groups')
export class GroupController {
	constructor(private readonly GroupService: GroupService) {}

	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	async createGroup(@Body() dto: CreateGroupDto) {
		return this.GroupService.create(dto)
	}

	@Get()
	async getAll() {
		return this.GroupService.getAll()
	}

	@Delete(':id')
	@HttpCode(200)
	//Auth('admin')
	async delete(@Param('id', IdValidationPipe) id: string) {
		return this.GroupService.delete(id)
	}
}
