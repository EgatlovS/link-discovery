# Angular-Example

This project provides some Examples on how to use LIND.
Just clone it. Run it. And make your mind.

## Content
- [Overview](https://github.com/EgatlovS/lind/tree/master/angular-example#overview)
- [Projects](https://github.com/EgatlovS/lind/tree/master/angular-example#projects)
	- [Getting Started Application](https://github.com/EgatlovS/lind/tree/master/angular-example#getting-started-application)
	- [Tutorial Application](https://github.com/EgatlovS/lind/tree/master/angular-example#tutorial-application)
	- [About Application](https://github.com/EgatlovS/lind/tree/master/angular-example#about-application)
- [Getting Started](https://github.com/EgatlovS/lind/tree/master/angular-example#getting-started)
    - [Run LIND](https://github.com/EgatlovS/lind/tree/master/angular-example#run-lind)
    - [Send Requests](https://github.com/EgatlovS/lind/tree/master/angular-example#send-requests)
    - [Run Getting Started](https://github.com/EgatlovS/lind/tree/master/angular-example#run-getting-started)
    - [Run Tutorial](https://github.com/EgatlovS/lind/tree/master/angular-example#run-tutorial)
    - [Run About](https://github.com/EgatlovS/lind/tree/master/angular-example#run-about)

## Overview

TBA

## Projects

TBA

### Getting Started Application

TBA

### Tutorial Application

TBA

### About Application

TBA

## Getting Started

This is a short guide to run the project.

### Run LIND

Visit [LIND Getting Started](https://github.com/EgatlovS/lind/tree/master/lind-rs#getting-started) for more information.

LIND Getting Started Content:
- [Clone](https://github.com/EgatlovS/lind/tree/master/lind-rs#clone)
- [Move to directory](https://github.com/EgatlovS/lind/tree/master/lind-rs#move-to-directory)
- [Run mvn clean install](https://github.com/EgatlovS/lind/tree/master/lind-rs#run-mvn-clean-install)
- [Move to target](https://github.com/EgatlovS/lind/tree/master/lind-rs#move-to-target)
- [Start WildflySwarmJar](https://github.com/EgatlovS/lind/tree/master/lind-rs#start-wildflyswarmjar)

### Send Requests

>At first we [create a structure](https://github.com/EgatlovS/lind/blob/master/lind-rs/v1_resources/structures-api.md#post-structuresstructure) for the navbar-plugin:


_NavBar Structure_

```json
{
	"name": "navbar",
	"description": "navbar for angular-example project",
	"fieldDefinitions": [{
		"name": "TabName",
		"type": "TEXT",
		"validationConstraint": "[A-Za-z ]*"
	},
	{
		"name": "ApplicationLink",
		"type": "TEXT",
		"validationConstraint": "^(https?:\/\/)([a-z\\d\\.-]{2,})(\\.([a-z]{2,}))?(:\\d{2,4})?\/?"
	}]
}
```

> After that we [create three linkpoints](https://github.com/EgatlovS/lind/blob/master/lind-rs/v1_resources/linkpoints-api.md#post-linkpointslinkpoint) for the applications:


_Getting Started Application_

```json
{
	"name": "GettingStarted",
	"structureId": 1,
	"fields": [{
		"name": "TabName",
		"value": "Getting Started"
	},
	{
		"name": "ApplicationLink",
		"value": "http://localhost:4200/"
	}]
}
```


_Tutorial Application_

```json
{
	"name": "Tutorial",
	"structureId": 1,
	"fields": [{
		"name": "TabName",
		"value": "Tutorial"
	},
	{
		"name": "ApplicationLink",
		"value": "http://localhost:4201/"
	}]
}
```


_About Application_

```json
{
	"name": "About",
	"structureId": 1,
	"fields": [{
		"name": "TabName",
		"value": "About"
	},
	{
		"name": "ApplicationLink",
		"value": "http://localhost:4202/"
	}]
}
```

> The About Application uses a structrues to show different Cards with Links
> to Social Networks and Github.
> Let's [create a structure](https://github.com/EgatlovS/lind/blob/master/lind-rs/v1_resources/structures-api.md#post-structuresstructure) for that:


_Card Structure_

```json
{
	"name": "AboutCardLayout",
	"description": "card layout for about project",
	"fieldDefinitions": [{
		"name": "CardName",
		"type": "TEXT",
		"validationConstraint": "[A-Za-z ]*"
	},
	{
		"name": "RedirectLink",
		"type": "TEXT",
		"validationConstraint": "/^(https?:\/\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$/"
	},
	{
		"name": "Image",
		"type": "IMAGE",
		"validationConstraint": ".*"
	}]
}
```

> Just like in Step one we [create some linkpoints](https://github.com/EgatlovS/lind/blob/master/lind-rs/v1_resources/linkpoints-api.md#post-linkpointslinkpoint) again:


_Twitter Card_

```json
{
	"name": "TwitterCard",
	"structureId": 1,
	"fields": [{
		"name": "CardName",
		"value": "Twitter"
	},
	{
		"name": "RedirectLink",
		"value": "https://twitter.com/EgatlovS"
	},
	{
		"name": "IMAGE",
		"value": "http://www.windsorcastleinn.co.uk/wp-content/uploads/2015/05/twitter-big.png"
	}]
}
```


_GitHub EgatlovS Card_

```json
{
	"name": "GitHub",
	"structureId": 1,
	"fields": [{
		"name": "CardName",
		"value": "GitHub"
	},
	{
		"name": "RedirectLink",
		"value": "https://github.com/EgatlovS"
	},
	{
		"name": "IMAGE",
		"value": "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
	}]
}
```


_GitHub LinusSee Card_

```json
{
	"name": "GitHub",
	"structureId": 1,
	"fields": [{
		"name": "CardName",
		"value": "GitHub"
	},
	{
		"name": "RedirectLink",
		"value": "https://github.com/LinusSee"
	},
	{
		"name": "IMAGE",
		"value": "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
	}]
}
```

### Run Getting Started

TBA

### Run Tutorial

TBA

### Run About

TBA
