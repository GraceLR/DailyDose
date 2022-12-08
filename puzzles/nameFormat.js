
const nameInverter = function(name) {

    if (name === undefined) {
        throw 'Error';
    }

    name = name.trim();

    if (name === '' || 
    (name.indexOf('.') > 0 && name.indexOf('.') === name.length-1)) {
        return '';
      }
      
      if(name.indexOf(' ') > 0 && name.indexOf('.') < 0) {
          name = name.slice(name.indexOf(' ')+1) + ', ' + name.slice(0,name.indexOf(' '));
      }

      if(name.indexOf(' ') > 0 && name.indexOf('.') > 0) {
        name = name.slice(0, name.indexOf('.')+2) +
        nameInverter(name.slice(name.indexOf('.')+2));
    }

      return name;
}

module.exports = nameInverter;

// test ///////////////////////////////

const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {

    it('should return an empty string when passed an empty string', function() {
        const inputName = "";
        const expectedOutput = "";
        assert.equal(nameInverter(inputName), expectedOutput);
      });

      it('should return a single name when passed a single name', function() {
        const inputName = "name";
        const expectedOutput = "name";
        assert.equal(nameInverter(inputName), expectedOutput);
      });

      it('should return a single name when passed a single name with extra spaces', function() {
        const inputName = "  name";
        const expectedOutput = "name";
        assert.equal(nameInverter(inputName), expectedOutput);
      });

      it('should return a last-name, first-name when passed a first and last-name', function() {
        const inputName = " first last";
        const expectedOutput = "last, first";
        assert.equal(nameInverter(inputName), expectedOutput);
      });

      it('should return a last-name, first-name when passed a first and last-name', function() {
        const inputName = " first last";
        const expectedOutput = "last, first";
        assert.equal(nameInverter(inputName), expectedOutput);
      });

      it('should return an empty string when passed a single honorific', function() {
        const inputName = "Dr. ";
        const expectedOutput = "";
        assert.equal(nameInverter(inputName), expectedOutput);
      });

      it('should return honorific first-name when passed honorific first-name', function() {
        const inputName = "Dr. first";
        const expectedOutput = "Dr. first";
        assert.equal(nameInverter(inputName), expectedOutput);
      });

      it('should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function() {
        const inputName = " Dr. first-name last-name ";
        const expectedOutput = "Dr. last-name, first-name";
        assert.equal(nameInverter(inputName), expectedOutput);
      });

      it('should throw an error when name is undefined', function() {
        const inputName = undefined;
        const expectedOutput = throw 'Error';
        assert.equal(nameInverter(inputName), expectedOutput);
      });

});