# nodejs-jwt-auth

### This simple Nodejs app to see how jwt tokens works and how to expire them

### clone this repo


### Make sure yarn is installed in ur system by running
```sh
yarn --version
```

### install dependencies by running

```sh
yarn install
```


### goto project folder and run app
```sh
yarn run devStart
```

### open postman / Advanced Rest Client
```sh
POST http://localhost:300/login

Add request body 
{
 "username": "FooBar"
}

Hit Submit you will get accessToken will be valid for 1 hour
```


```sh
POST http://localhost:300/posts

Add request header
Authorisation :  Bearer <TOKEN>

Hit Submit you will get posts
```




