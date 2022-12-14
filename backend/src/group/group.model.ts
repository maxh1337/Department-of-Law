import { prop, Ref } from '@typegoose/typegoose'
import { StudentModel } from '../student/student.model'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'

export interface GroupModel extends Base {}

export class GroupModel {
	@prop()
	groupName: string
}
