import { IsArray, IsObject, IsString } from 'class-validator'
import { GroupModel } from '../../group/group.model'
import { caseItem } from '../student.model'

export class CreateStudentDto {
	@IsString()
	fio: string

	@IsArray()
	group: string
}
