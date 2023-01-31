import { IsString, MinLength } from 'class-validator'

export class AuthDto {
	@MinLength(6, {
		message: 'Логин должен быть больше 5 символов',
	})
	@IsString()
	login: string

	@MinLength(8, {
		message: 'Пароль должен быть больше 7 символов',
	})
	@IsString()
	password: string
}
