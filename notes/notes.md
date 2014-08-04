Javascript Notes
==================

Strings
-------

###Properites

* length

###Methods

* indexOf()
* lastIndexOf()
* substr
* substring
* toLowerCase()
* toUpperCase()
* charAt()
* charCodeAt()
* fromCharCode()

####Details

To create a new string

    var myName = new String( 'Ryan' );

To find the length of a string

    myName.length

IndexOf and LastIndexOf functions will search through a string and return the position of the search term

    myName.indexOf('y')
    
would return 1 (becuause 'y' is the second character in the string but strings indicies are zero based.

To demonstrate lastIndexOf I need a new string with repeating characters.

    var vehicle= new String( 'Firetruck' );
    vehicle.lastIndexOf('r');

The code above will find the last 'r' in 'Firetruck' and return the value 5.


