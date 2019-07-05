const should = require('chai').should();
const Petals = require('../index');

// JsonToYaml
describe('- JsonToYaml', function ()
{
    it('should convert a string from JSON to YAML', function ()
    {
        const petals = new Petals('{"firstName": "John"}');
        petals.JsonToYaml().should.equal('firstName: John\n');
    });
});

// JsonToXml
describe('- JsonToXml', function ()
{
    it('should convert a string from JSON to XML', function ()
    {
        const petals = new Petals('{"user":{"name": "John","age": 25,"gender": "male","location": {"city": "Seattle"},"pets": [{"type": "dog","name": "Foo"},{"type": "cat","name": "Bar"}]}}');        
        
        const newString = petals.JsonToXml();
        newString.should.equal('<user name="John" age="25" gender="male"><location city="Seattle"></location><pets type="dog" name="Foo"></pets><pets type="cat" name="Bar"></pets></user>');
    });
});

// YamlToJson
describe('- YamlToJson', function ()
{
    it('should convert a string from YAML to JSON', function ()
    {
        const petals = new Petals('firstName: John');
        petals.YamlToJson().should.equal('{\n    "firstName": "John"\n}');
    });
});

// YamlToXml
describe('- YamlToXml', function ()
{
    it('should convert a string from YAML to XML', function ()
    {
        const petals = new Petals('firstName: John');
        petals.YamlToXml().should.equal(' firstName="John"');
    });
});

// XmlToJsonl
describe('- XmlToJson', function ()
{
    // 
    it('should convert a string from XML to JSON', function ()
    {
        const petals = new Petals("<foo attr=\"value\">bar</foo>");
        petals.XmlToJson().should.equal('{"foo":{"attr":"value","$t":"bar"}}');
    });
});

// XmlToYaml
describe('- XmlToYaml', function ()
{
    it('should convert a string from XML to YAML', function ()
    {
        const petals = new Petals("<foo attr=\"value\">bar</foo>");
        petals.XmlToYaml().should.equal("foo:\n    attr: value\n    $t: bar\n");
    });
});