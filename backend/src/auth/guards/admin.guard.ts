import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AdminModel } from '../admin/admin.model'

@Injectable()
export class OnlyAdminGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest<{ admin: AdminModel }>()
		const admin = request.admin

		if (!admin.isAdmin) throw new ForbiddenException('You have no rights')

		return admin.isAdmin
	}
}
