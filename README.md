# Clearbit package for Meteor

This package uses [clearbit](https://www.npmjs.com/package/clearbit) from npm, and exposes it on the server.

## Install

From Atmosphere ([atmosphere.com/lookback/clearbit](https://atmospherejs.com/lookback/clearbit)):

```
meteor add lookback:clearbit
```

Exports `clearbit` global on the server. Do stuff like:

```js
const Person = clearbit('YOUR-API-KEY').Person;
Person.find({email: 'some@email.com'}).then(person => console.log(person));
```

## Docs

See [npm docs](https://www.npmjs.com/package/clearbit)
