docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kyrs11-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kyrs11-java/app ../../..
