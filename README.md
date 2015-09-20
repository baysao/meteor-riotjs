# riotjs: A React- like, 2.5K user interface library

[Demo](http://simple-todos-riot-meteor-data.meteor.com/)

[Code](https://github.com/baysao/simple-todos-riot-meteor-data.git)

Custom tags • Virtual DOM • Full stack • IE8

[Riot](https://muut.com/riotjs/) brings custom tags to all browsers
starting from IE8. Think React + Polymer, but squeezed into 2.5K.

With the `riot` package installed, `.tag` files in your application
are automatically compiled to JavaScript and the results are included
in the client JavaScript bundle.

We do not include the browser compiler as we have a great way to have meteor
compile all on the server, if for some reason you feel this is a mistake,
please drop me a line and we'll chat about it.

Base on package of [xaiki:riotjs](https://github.com/xaiki/meteor-riotjs.git), I rewrite this package. After install package, you will access riot library by global Riot and your .tag files will automatic compiled.

## Using

just add it like you'd add any other meteor package and start editing `.tag`
files in your client code.

```sh
    meteor add baysao:riotjs
```

## Some packages help integrate Riotjs to Meteor

[RiotLayout](https://github.com/baysao/meteor-riot-layout)

[RiotMeteorData](https://github.com/baysao/riot-meteor-data)

[RiotTemplateHelper](https://github.com/baysao/riot-template-helper)

