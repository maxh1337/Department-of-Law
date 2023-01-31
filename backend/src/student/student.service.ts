import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { StudentModel } from './student.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { CreateStudentDto } from './dto/create-student.dto'

@Injectable()
export class StudentService {
	constructor(
		@InjectModel(StudentModel)
		private readonly StudentModel: ModelType<StudentModel>
	) {}

	async getAll() {
		return this.StudentModel.find({}).exec()
	}

	async create(dto: CreateStudentDto) {
		const checkFio = await this.StudentModel.findOne({
			fio: dto.fio,
		})

		if (checkFio) {
			throw new BadRequestException(
				'Пользователь с таким ФИО уже зарегистрирован'
			)
		}

		const newUser = new this.StudentModel(dto)
		const user = await newUser.save()

		return user
	}

	async delete(_id: string) {
		const user = this.StudentModel.findByIdAndDelete(_id).exec()

		if (!user) throw new NotFoundException('Не работает')

		return user
	}

	async getAllByGroup(_id: string) {
		const users = this.StudentModel.find({ group: _id }).exec()

		if (!users)
			throw new NotFoundException('Пользователи из этой группы не найдены')

		return users
	}

	async getUserById(_id: string) {
		const currentUser = this.StudentModel.findById(_id).exec()

		if (!currentUser) throw new NotFoundException('Пользователь не найден')

		return currentUser
	}
}
