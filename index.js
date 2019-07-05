'use strict';

const YAMLConverter = require('yamljs');
const XMLConverter = require('xml2json');

class Petals
{
    constructor(input)
    {
        this.input = input;
    }

    // JSON
    JsonToYaml(input = this.input)
    {
        let tempString = "";

        try
        {
            tempString = YAMLConverter.dump(JSON.parse(input));
        }
        catch (error)
        {
            console.log(error);
        }

        return tempString;
    }
    
    JsonToXml(input = this.input)
    {
        let tempString = "";

        const options = {
            sanitize: false
        };

        try
        {
            tempString = XMLConverter.toXml(input, options);
        }
        catch (error)
        {
            console.log(error);
        }

        return tempString;
    }

    // YAML
    YamlToJson(input = this.input)
    {
        let tempString = "";

        try
        {
            tempString = JSON.stringify(YAMLConverter.parse(input), null, 4);
        }
        catch (error)
        {
            console.log(error);
        }

        return tempString;
    }
    
    YamlToXml(input = this.input)
    {
        let tempString = "";

        try
        {
            const convert = this.YamlToJson(input);

            tempString = this.JsonToXml(convert);
        }
        catch (error)
        {
            console.log(error);
        }

        return tempString;
    }

    // XML
    XmlToJson(input = this.input)
    {
        let tempString = "";

        try
        {
            tempString = XMLConverter.toJson(input);
        }
        catch (error)
        {
            console.log(error);
        }

        return tempString;
    }
    
    XmlToYaml(input = this.input)
    {
        let tempString = "";

        try
        {
            const convert = XMLConverter.toJson(input);

            tempString = this.JsonToYaml(convert);
        }
        catch (error)
        {
            console.log(error);
        }

        return tempString;
    }
}

module.exports = Petals;
