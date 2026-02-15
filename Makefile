.PHONY: dev build lint preview test storybook clean

dev:
	npm run dev

build:
	npm run build

lint:
	npm run lint

preview:
	npm run preview

test:
	npm run test

storybook:
	npm run storybook

clean:
	rm -rf dist
	rm -rf node_modules
	rm -rf .storybook/dist
