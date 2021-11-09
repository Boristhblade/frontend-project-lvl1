install: # установить зависимости
	npm ci
brain-games: # запуск brain-games.js
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
