import "reflect-metadata"
import {reflect, CallSite} from 'typescript-rtti'

function foo<T>(num : number, callSite? : CallSite) {
	if (!callSite) throw 'callSite is undefined'
	console.log(
		reflect(callSite)
			.typeParameters[0]
			.isClass(Boolean),
		// => true

		reflect(callSite)
			.parameters[0]
			.isClass(Number),
		// => true

		reflect(callSite)
			.parameters[0]
			.is('literal'),
		// => true

		reflect(callSite)
			.parameters[0].as('literal')
			.value
		// => 123
	)
}

foo<Boolean>(123);