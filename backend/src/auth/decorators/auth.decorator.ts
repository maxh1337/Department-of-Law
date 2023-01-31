import { TypeRole } from '../auth.interface'
import { applyDecorators, UseGuards } from '@nestjs/common'
import { OnlyAdminGuard } from '../guards/admin.guard'

export function Auth(role: TypeRole = 'user') {
	return applyDecorators(
		role === 'admin'
			? UseGuards(JwtAuthGuard, OnlyAdminGuard)
			: UseGuards(JwtAuthGuard)
	)
}
