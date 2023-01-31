import { prop } from '@typegoose/typegoose'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'

export interface AdminModel extends Base {}

export class AdminModel {
	@prop({ unique: true })
	login: string

	@prop()
	password: string

	@prop({ default: true })
	isAdmin: boolean
}
