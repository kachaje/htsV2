FROM mysql:5.7.21

ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE openmrs
ENV MYSQL_USER hts_user
ENV MYSQL_PASSWORD password

ADD hts_schema.sql /docker-entrypoint-initdb.d
