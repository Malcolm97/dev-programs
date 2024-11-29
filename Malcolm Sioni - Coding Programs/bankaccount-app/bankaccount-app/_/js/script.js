function BankAccount(accountNumber, bsb, accountName, balance){
	this.accountNumber = accountNumber;
	this.bsb = bsb;
	this.accountName = accountName;
	this.balance = balance;
	
	this.withdraw = function(amt){
		this.balance -= amt;
	};
	
	this.deposit = function(amt){
		this.balance += amt;
	};
	
	this.getBalance = function(){
		return this.balance;
	};
	
	this.getAccountName = function(){
		return this.accountName;
	};
	
	this.transfer = function(acc, amt){
		this.balance -= amt;
		acc.deposit(amt);
	};
	
}

$(document).bind('pageinit', function(ev){
	var dylan = new BankAccount("123", "abc", "Dylan Cooke", 5000);
	var chien = new BankAccount("789", "def", "Chien Lin", 35256);
	
	console.log(dylan.getAccountName() + ' has a balance of $' + dylan.getBalance());
	console.log(chien.getAccountName() + ' has a balance of $' + chien.getBalance());
	
	dylan.transfer(chien, 4000);
	

	console.log(dylan.getAccountName() + ' has a balance of $' + dylan.getBalance());
	console.log(chien.getAccountName() + ' has a balance of $' + chien.getBalance());	//not working...
	
	//store accounts into local storage...
	var dylanJSON = JSON.stringify(dylan);
	localStorage.setItem('dylan', dylanJSON);
	
	
	//read back json into an object...
	
	var dylanOBJ = JSON.parse(localStorage.getItem('dylan'));
	console.log(dylanOBJ.balance);
	
	
	
});
