# petals
Version: 0.1.1

A module that converts a data-file from one format to another.

## Converters

| Converts     | Command                   | Description           |
| ------------ | ------------------------- | --------------------- |
| JSON to YAML | ```petals.JsonToYaml()``` | Converts JSON to YAML |
| JSON to XML  | ```petals.JsonToXml()```  | Converts JSON to XML  |
| YAML to JSON | ```petals.YamlToJson()``` | Converts YAML to JSON |
| YAML to XML  | ```petals.YamlToXml()```  | Converts YAML to XML  |
| XML to JSON  | ```petals.XmlToJson()```  | Converts XML to JSON  |
| XML to YAML  | ```petals.XmlToYaml()```  | Converts XML to YAML  |

## Installation

```shell
npm install petals
```

## Initialization
const Petals = require('petals');

## Usage
```js
const petals = new Petals('{"firstName": "John", "lastName": "Doe"}');

petals.JsonToXml();
```

Alternatively you can also initialize petals and then inject the string:
```js
const petals = new Petals();

petals.JsonToXml('{"firstName": "John", "lastName": "Doe"}');
```

both should return:
```xml
<user firstName="John" lastName="Doe">
</user>
```

## Tests

```shell
npm run test
```

## Release History
- 0.1.0 - Initial Release
- 0.1.1 - Fixed repository link

## License

Copyright (c) 2019 F. Rick Reich. Licensed under the terms of the MIT license. http://frickreich.mit-license.org/