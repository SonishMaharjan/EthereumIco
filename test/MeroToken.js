var MeroToken = artifacts.require("./MeroToken.sol");


//return all the accounts of Genache
contract('MeroToken',function(accounts){

	it('sets the total supply upon deployment',function(){
		return MeroToken.deployed().then(function(instance){
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply){
			assert.equal(totalSupply.toNumber(),9000000,'set the total supply to 1,000,000' )
		})
	})
})