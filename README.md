**You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/faustbrian).**

---

# @faustbrian/node-climate

[![npm version](https://badgen.net/npm/v/@faustbrian/node-climate)](https://npm.im/@faustbrian/node-climate)

## Installation

```
pnpm install @faustbrian/node-climate
```

## Usage

```ts
import { plugin } from "@faustbrian/node-climate";
import Joi from "joi";

await server.register({
	plugin,
	options: {
		methods: [...],
		processor: {
			schema: Joi.object().keys({
				id: Joi.alternatives().try(Joi.number(), Joi.string()).required(),
				jsonrpc: Joi.string().allow("2.0").required(),
				method: Joi.string().required(),
				params: Joi.object(),
			}),
			validate(data: object, schema: object) {
				return Joi.validate(data, schema);
			},
		},
	},
});
```

## License

This is an open-sourced software licensed under the [AGPL-3.0-or-later](LICENSE).
