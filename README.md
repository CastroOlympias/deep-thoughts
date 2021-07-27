

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
* npm i apollo-server-express graphql, fun this from the server directroy, from the root of your project
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
* To start the server in your CLI enter `npm run watch`
* In your URL, go to `localhost:3001/grapchql` to acess your Playground interface

* `query {
  # get all users
  users {
    username
    email
  }

  # get a single user by username (use a username from your database)
  user(username: "Cordell51") {
    username
    email
    friendCount
    thoughts {
      thoughtText
    }
    friends {
      username
    }
  }

  # query all thoughts
  thoughts {
    _id
    username
    thoughtText
    reactions {
      _id
      createdAt
      username
      reactionBody
    }
  }

  # query a single thought (use an _id from a thought in your database)
  thought(_id: "60ff3ef98077b52cb8e0d59f") {
    _id
    username
    thoughtText
    createdAt
    reactions {
      username
      reactionBody
    }
  }
}`


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

