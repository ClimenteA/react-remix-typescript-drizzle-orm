up:
	docker-compose up -d --force-recreate

dev:
	npm run dev

migrations:
	npm run db:migrations

down:
	docker-compose down 

down-volumes:
	docker-compose down -v


exec:
	docker-compose exec app bash


purge-data:
	rm -rf data
	rm -rf app/backend.server/migrations


logs:
	docker-compose logs app -ft


full-logs:
	docker-compose logs -ft
