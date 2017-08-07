<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-plugin-firebase/master/docs/images/features/invites.png" height="85px" alt="Invites"/>

## Enabling Dynamic Links
Since plugin version ???? you can use Firebase _Dynamic Links_ features.

_Dynamic Links_ lets you create and receive dynamic links.


### iOS
* No IOS support at this moment

## Functions

### 

```js
firebase.createDynamicLink({
  link: "http://example.com", // Should start with http:// or https://	
  dynamicLinkDomain: "example.app.goo.gl",
  androidParameters{
	packagename: "com.example.appname",
  }
}).then(
    function (result) {
	  console.log("Dynamic link created: "+ result);
    },
    function (error) {
      console.log("create DynamicLink error: " + error);
    }
);
```

The options you can pass to `sendInvitation` are:

|param|optional|description
|---|---|---
|`link`|no|The full link (starting with http:// or https://).
|`dynamicLinkDomain`|no|The dynamic link domain (found in the firebase console).
|`androidParameters`|yes|Object with android parameters (See table below).


### Listening to dynamiclink state changes
To receive dynamic link information, you can register a listener during `init`:

```js
  firebase.init({
    onDynamicLinkCallback: function(data) {
      console.log("App started with dynamic link: "+ data.uriString);
    }
  });
```