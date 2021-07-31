

# deepest-thoughts

## Description
first MERN application

## Table of Contents
- [Story](#Story)
- [Installation](#Installation)
- [Usage](#Usage)
- [Authors](#Authors)
- [Resources](#Resources)


## Story



## Installation
Install in your terminal:
  <br>
* Server side install: `npm i apollo-server-express graphql`
  <br>
* Server side install: `npm install jsonwebtoken`
  <br>
* Server side install: `npx create-react-app client`
  <br>
* Client side install: `npm i @apollo/client graphql`
  <br>
* Root: `npm init`, #install concurrently library as a dependency for development environment only `npm install -D concurrently`. We can use the concurrently package to run multiple processes, or servers, from a single command line interface. Notice the -D flag in the command. That instructs that the dependency listed should be only installed in a development environment and not used in production. This will keep the overall node_modules folder size a bit smaller for production, which makes the application take up less space!
  <br>
* 
  <br>
* 
  <br>
* 
  <br>
* 
  <br>
* 
  <br>

Software download
* <a href="https://nodejs.org/en/docs/">Node.js</a>
  <br>

## Usage
* The snapshot 21.3 and 21.4 (tested) required at the root, `npm i --force` to install the node modules and pass the errors. server now running and once again thoughts are displaying. Things broker after install concurently, thoughts would no longer display.

* To start the server in your CLI enter `npm run watch`
* To start the cilent in your CLI enter `npm run start`
* In your URL, go to `localhost:3001/grapchql` to acess your Playground interface
* For deployment, don't forget to setup the proxy in the package.json file for the client, with `"proxy": "http://localhost:3001",` at the top
* Usare for concurrently: we need to add some scripts to this root-level package.json file to put these tools to use. Let's open that file and use the following scripts: "scripts": {
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed"
}
* We'll use the npm run develop script as we continue to build this application. We use concurrently to run two separate commands, each one wrapped in its own quotation marks. Note the escape characters around the scripts' quotes \". JSON requires double quotes, and to use double quotes within a string, we need to use the backslash \ escape character before it.

The script will run the npm run watch script in the server directory and the npm start script in the client directory, allowing us to use both servers at the same time from a single command-line window.

The install script is interesting, as it's already a built-in script that works well. But with this one, we can use npm i or npm install to first install all of the dependencies at this root level. Then it navigates to the server directory and installs those dependencies. Lastly, it navigates to the client directory to install those dependencies as well.

Last, we have the seed script, which will navigate to the server directory and seed the database using the npm run seed command. This will be useful if we ever want to seed the database in a production environment, which we'll touch on later.

Your application will work regardless, but it's good practice to update the root package.json file's main field to be your main server file, so set it to be server/server.js! To start the your client and server, from the the root and in your CLI use `npm run develop`


## Authors

* David Crockett / <a href="https://github.com/CastroOlympias">CastroOlympias @ GitHub</a>

## Resources
Documentation:
  <br>
* <a href="https://www.npmjs.com/package/dotenv">DotEnv</a> Secure your password to your database.
  <br>
* <a href="https://expressjs.com/">Express.js</a> A back end web application framework for Node.js
  <br>
* <a href="https://nodejs.org/en/docs/">Node.js</a> Back-end JavaScript runtime environment
  <br>
* <a href="http://sequelize.org/">Sequelize/ORM</a> Object Realational Mapping
  <br>
* <a href="https://www.npmjs.com/package/mysql2">MySQL</a> MySQL client for Node.js with focus on performance. Supports prepared statements.
  <br>
* <a href="https://www.npmjs.com/package/connect-session-sequelize">connect-session-sequelize</a> connect-session-sequelize is a SQL session store using Sequelize.js.
  <br>
* <a href="https://handlebarsjs.com/">handlebars.js</a> Minimal templating on steroids
  <br>
* <a href="https://www.npmjs.com/package/express-session">express-session.js</a> This is a Node.js module available through the npm registry that lets you create a session middleware.
* <a href="https://www.npmjs.com/package/bcrypt">node.bcrypt.js</a> A library to help you hash passwords.
* <a href="https://www.npmjs.com/package/uuid">uuid</a> Universally unique identifier (uuid) used to create unique browser sessions in our webpage.<br>
* <a href="https://jqueryui.com/datepicker/">Date Picker</a> Calendar pop up for choosing a show date.

## Testing

