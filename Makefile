ifeq ($(ENV),)
	ENV := development
endif
-include .env.${ENV}
-include .env
export

start:
	@npm start

clean:
	@rm -rf tmp/

up:
	@docker-compose up -d

down:
	@docker-compose down

migrate:
	@node_modules/db-migrate/bin/db-migrate up --config database/config.json -e ${ENV}

rollback:
	@node_modules/db-migrate/bin/db-migrate down --config database/config.json -e ${ENV}

sql-%:
	@node_modules/db-migrate/bin/db-migrate create --config database/config.json -e ${ENV} $* --sql-file
