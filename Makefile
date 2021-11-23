install: # установить зависимости
	npm ci
brain-games: # запуск brain-games.js
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
brain-even:
	node bin/brain-even
brain-calc:
	node bin/brain-calc
brain-progression:
	node bin/brain-progression
brain-prime:
	node bin/brain-prime
