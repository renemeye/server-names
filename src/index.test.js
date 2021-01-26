const {expect} = require('chai');
const server_names = require('./index');

describe('server-names', function(){
  describe('all API', function(){
    it('returns an array', function(){
      expect(Array.isArray(server_names.all)).to.be.true;
    })

    it('returns an array of strings', function(){
      expect(server_names.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(value){
        return Array.isArray(value) && value.every(function(item){
            return typeof item === 'string'
        })
      }
    })

    it('should always contain "Samantha Carter"', function(){
      expect(server_names.all).to.contain("Samantha Carter")
    })
  })

  describe('random API', function(){
    it('returns a string', function(){
      expect(typeof server_names.random()).to.eq("string")
    })
  })

})
