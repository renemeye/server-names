import {expect} from 'chai';
import server_names from './index';

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
    it('returns a string if passed nothing', function(){
      expect(typeof server_names.get_random()).to.eq("string")
    })

    it('returns an array of strings if passed a number', function(){
      expect(server_names.get_random(3).length).to.eq(3);
    })

    it('returns an array of strings if given a number', function(){
      expect(server_names.get_random(3)).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(value){
        return Array.isArray(value) && value.every(function(item){
            return typeof item === 'string'
        })
      }
    })

    it('returns an array of strings that are included in the names list', function(){
      var counter = 0
      server_names.get_random(15).map((item) => {
        counter++
        expect(server_names.all).to.contain(item)
      });
      expect(counter).to.eq(15);
    })
  })

})
