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

substr and substring are very similar. The syntax of both is shown below:

    substr( startingIndex, # of chars );
    substring( startingIndex, endingIndex ) //ending index is not included in return string

Note: If you are using substring, make sure that you remember the ending index is not included.

toLowerCase() returns a string that is all lower case.
toUpperCase() returns a string that is all upper case.

    var myString = new String( "There are SOME capital letterS!" );
    return myString.toLowerCase();

would return

    "there are some capital letters!"

charAt( charIndex ) returns the character at the index specified.

charCodeAt( charIndex ) returns the ASCII code for the character at the index specified.

fromCharCode( ASCIIvalue, ASCIIvalue,.... ) takes a series of ASCII values and returns a string of the characters

    return fromCharCode( 65, 66, 67 )

would return

    "ABC"

Arrays
--------

###Properites

* length

###Methods

* concat
* slice
* join
* sort
* reverse
* indexOf
* lastIndexOf
* every
* some
* filter
* forEach
* map

####Details

To create a new array

    var myArray = new Array( 1, 2, 3, 4, 5 );

To find the length of an array

    myArray.length

concat( array2 ) appends array2 to the array calling the concat method.

    var mySecondArray = new Array( 6, 7, 8 );
    return myArray.concat( mySecondArray )

would return

    [ 1,2,3,4,5,6,7,8 ]

slice( firstElementToCopy, lastElement ) copies part of an arrray to another array.

*Note: lastElement is not copied by the slice function*

    var subArray1 = myArray.slice(2,4);
    return subArray1;

would return 

    [3,4]

because 3 is myArray[2], 4 is myArray[3] and that is all that it copies since the last element is not copied.








