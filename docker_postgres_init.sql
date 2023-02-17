CREATE USER test WITH PASSWORD 'nest-auth-test' CREATEDB;
CREATE DATABASE test
    WITH
    OWNER = nest-auth-test
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;