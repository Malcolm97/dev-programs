function Contact(firstName, lastName, phoneNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;		
}

var contacts = new Array();

contacts.push(new Contact('wally', 'smith', '1234'));
contacts.push(new Contact('ashley', 'jones', '4567'));
contacts.push(new Contact('lance', 'bloggs', '6789'));
contacts.push(new Contact('reece', 'asdf', '5342'));
contacts.push(new Contact('matthew', 'kfke', '9243'));
contacts.push(new Contact('gareth', 'keflg', '8238'));
contacts.push(new Contact('emmanual', 'jfrnju', '8953'));

$(document).bind('pageinit', function(ev){
	for(i in contacts){
		$('#phonebook').append('<li><a href="tel:' + contacts[i].phoneNumber + '">' + contacts[i].firstName + '<p>' + contacts[i].lastName + '</p><span class="ui-li-count">' + contacts[i].phoneNumber + '</span></a></li>');
	}
	
	$('#phonebook').listview('refresh');
});