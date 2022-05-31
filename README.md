# BlogSite
Project for web development class

# Database
MySql is required
To create database use these commands:

create database db_blogpost;
create user 'blogpost_user' identified by 'password';
grant all on db_blogpost.* to 'blogpost_user';

# Development

To run backend use gradle -> bootRun

To run frontend:
```bash
$ cd frontend
$ npm start
```

