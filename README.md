# BlogSite
Project for web development class

# Database
MySql is required
To create database use these commands:

create database db_blogpost;
SET GLOBAL validate_password.policy = 0;
create user 'blogpost_user' identified by 'password';
grant all on db_blogpost.* to 'blogpost_user';

To configure tables:
```bash
$ cd blog
$ mysql --user="blogpost_user" --database="db_blogpost" --password="password" < "db_conf.sql"
```

TO fill blogs:
```bash
$ cd blog
$ mysql --user="blogpost_user" --database="db_blogpost" --password="password" < "fill_blogs.sql"
```

# Development

To run backend and connect to database:
```bash
$ cd blog
$ ./gradlew bootRun -Pargs=--spring.datasource.password=password
```
To run frontend:
```bash
$ cd frontend
$ npm start
```

