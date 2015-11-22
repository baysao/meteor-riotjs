# riotjs: A React- like, 2.5K user interface library

[Demo](http://simple-todos-riot-meteor-data.meteor.com/)

[Code](https://github.com/baysao/simple-todos-riot-meteor-data.git)

Base on package of [xaiki:riotjs](https://github.com/xaiki/meteor-riotjs.git), I rewrite this package. After install package, you will access riot library by global `Riot` variable.

## Using

just add it like you'd add any other meteor package and start editing `.tag` or `.tag.html`
files in your client code.

```sh
    meteor add baysao:riotjs
```


## Support Riotjs Preprocessor 

This package using method like [meteorhacks:npm](https://github.com/meteorhacks/npm) to create new package `baysao:riotjs-preprocessor-init` and add to file `.meteor/packages` (you need to restart for first time) for monitoring package config file `riot_packages.json` at root project.

In this package config, you need to add npm all packages that using for preprocessor. For ex, `jade` preprocessor need npm package `{"jade":"1.11.0"}`.

If file has extension with '.jade.tag', compiler will automatic add option `{template:'jade'}`
For preprocessor for style, you need to add `type` in `style` definition in `tag` file
For ex. 
```
<style type="stylus">
	#mytag2
		color: yellow;
</style>
```
tag file in jade

```
test1
  style(type='stylus').
    #mytag1
     color: blue;
  span#mytag1 Test
  script(type='coffee').
    square = (x) => x*x
    console.log "run from coffee"
    console.log square(2)
  script.
    console.log("run from normal")
```
Please check the list of preprocessor supported in [here](http://riotjs.com/guide/compiler/#pre-processors)


## Some packages help integrate Riotjs to Meteor

[RiotLayout](https://github.com/baysao/meteor-riot-layout)

[RiotMeteorData](https://github.com/baysao/riot-meteor-data)

[RiotTemplateHelper](https://github.com/baysao/riot-template-helper)

