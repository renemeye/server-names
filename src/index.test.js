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
    it('returns a string if passed nothing', function(){
      expect(typeof server_names.random()).to.eq("string")
    })

    it('returns an array of strings if passed a number', function(){
      it('returns an array in the length of the parameter', function(){
        expect(server_names.random(3).length).to.eq(3);
      })

      it('returns an array of strings if given a number', function(){
        expect(server_names.random(3)).to.satisfy(isArrayOfStrings);

        function isArrayOfStrings(value){
          return Array.isArray(value) && value.every(function(item){
              return typeof item === 'string'
          })
        }
      })

      it('returns an array of strings that are included in the names list', function(){
        server_names.random(15).forEach((item, i) => {
          expect(server_names.all).to.contain(item)
        });
      })
    })
  })

})
