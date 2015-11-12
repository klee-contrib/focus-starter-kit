# Focus demo application

## Purpose

This application sets to music FOCUS libraries and components.

## How to install it ?

Clone or download project code sources.

Install package dependencies :

```shell
npm i
```

How to launch it ?

You don't have your API, you can use demo mock API by launching this command:
```shell
node api
```

The mock API serve fake datas at this URL : `http://localhost:9999/`
The section below explain how to plug your own API.

To launch webapp server :
```shell
npm start
```

Open you browser and access to this URL : `http://localhost:3000/`

## How to plug my backend API ?

Edit `config.webpack.js` file.

Replace `API_ROOT` var by root your root API URL in this section :

```javascript
plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        API_ROOT: '"http://localhost:9999"'
    })
],
```
