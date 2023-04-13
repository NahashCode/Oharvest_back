# Projet O'Harvest

## Install

### NPM

Install, in a first time, all packages mandatory with :

```shell
npm install
```

### Database

This projet came with a script, named `sqitch_script.sh`, which work with [sqitch](https://sqitch.org/docs/).

In order to install sqitch, follow the [official documentation](https://sqitch.org/download/).

When it is done, you need to build the database. Execute the following command.

```shell
bash sqitch_script.sh 
```

Select the init option. It will ask you which postgres administrator, you want to use for create the new database with his owner. When the process end, you need to deploy all versions with this command :

```shell
bash sqitch_script.sh -d
```

Select 1 for deploying all versions.


For the development environment, it is recommended to copy the script, uncomment the following variables (line 43, 45 and 47) and assign them a value:
```shell
# Design the user of the sql server who own the database of the project
#db_user=
# Represent the database of the project
#database=
# The password of the sql user
#db_password=
```

## Starting the server

You need to configure the .env file.

First, duplicate the file `.env.example` with a new name `.env`. Give all variables the correct values.

Then :

```shell
npm run start
```