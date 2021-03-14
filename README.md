# Express Project: Stack Underflow

Things to note:
* JS files can be added in `public/javascripts` and should be appended to the Pug templates as needed
* CSS files can go in `public/stylesheets` and also will need to be added to Pug templates
* When editing wiki files, be sure your working directory is under `./stack-underflow/wiki/` and do all your `git` commands in there
* Make sure to run `npm install` to install dependencies
* Create a `stack_underflow_app` user with the following credentials under the `.env.example` file, as well as giving it the `CREATEDB` privileges
* Run `npx dotenv sequelize db:create` then `npx sequelize db:migrate`, and finally `npx sequelize db:seed:all` (if there are any seed files)
* If there are any database issues, drop the database with `npx dotenv sequelize db:drop`, edit any line of code that needs to be edited, then run the previous commands again
* Session secret key is provided in the group's slack channel
![altext](https://raw.githubusercontent.com/grau-maus/stack-underflow/main/public/images/underflowStack.png)
