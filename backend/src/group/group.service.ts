import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { GroupModel } from './group.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { CreateGroupDto } from './dto/create-group.dto'

@Injectable()
export class GroupService {
	constructor(
		@InjectModel(GroupModel) private readonly GroupModel: ModelType<GroupModel>
	) {}

	async getAll() {
		return this.GroupModel.find({}).exec()
	}

	async create(dto: CreateGroupDto) {
		const groupName = await this.GroupModel.findOne({
			groupName: dto.groupName,
		})

		if (groupName) {
			throw new BadRequestException('Эта группа уже существует')
		}

		const newGroup = new this.GroupModel({
			groupName: dto.groupName,
		})
		const group = await newGroup.save()

		return group
	}

	async delete(_id: string) {
		const group = this.GroupModel.findByIdAndDelete(_id).exec()

		if (!group)
			throw new NotFoundException('Группа с таким названием не найдена!')

		return group
	}
}
