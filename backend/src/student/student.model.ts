import { prop, Ref } from '@typegoose/typegoose'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'
import { GroupModel } from '../group/group.model'

export interface StudentModel extends Base {}

export class StudentModel {
	@prop()
	fio: string

	@prop({ ref: () => GroupModel })
	group: Ref<GroupModel>

	@prop({ default: '' })
	lastPage?: string

	@prop()
	caseFolder?: caseItem[]

	//Выполненые сюжетные пути
}

export class caseItem {
	@prop()
	title: string

	@prop()
	link: string
}
