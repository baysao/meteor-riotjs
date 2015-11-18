# riotjs: A React- like, 2.5K user interface library

[Demo](http://simple-todos-riot-meteor-data.meteor.com/)

[Code](https://github.com/baysao/simple-todos-riot-meteor-data.git)

Base on package of [xaiki:riotjs](https://github.com/xaiki/meteor-riotjs.git), I rewrite this package. After install package, you will access riot library by global Riot and your .tag files will automatic compiled.

## Using

just add it like you'd add any other meteor package and start editing `.tag` or `.tag.html`
files in your client code.

```sh
    meteor add baysao:riotjs
```

## Support Riotjs Preprocessor 
##### 1.Create file riot_packages.json in top project and add file config listing all npm packages of preprocessor you need to process. For ex: jade
```json
{
	"jade":"1.11.0"
}
```
##### 2. Extension support would be ".tag.jade"
##### 3. Other proprocessor support in list below with name and extension:
* coffee: .tag.coffee
* livescript: .tag.ls
* typescript: .tag.ts
* babel		: .tag.babel
* es6		: .tag.es6
* sass		: .tag.sass
* scss		: .tag.scss
* stylus	: .tag.styl
* less		: .tag.less



## Some packages help integrate Riotjs to Meteor

[RiotLayout](https://github.com/baysao/meteor-riot-layout)

[RiotMeteorData](https://github.com/baysao/riot-meteor-data)

[RiotTemplateHelper](https://github.com/baysao/riot-template-helper)

