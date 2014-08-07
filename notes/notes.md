JavaScript for Programmers
==========================

String Objects
--------------

###Properites

* length

###Methods

* indexOf
* lastIndexOf
* substr
* substring
* toLowerCase
* toUpperCase
* charAt
* charCodeAt
* fromCharCode

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

Array Objects
----------------

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

because 3 is `myArray[2]`, 4 is `myArray[3]` and that is all that it copies since the last element is not copied.

join( separationString ) takes each element of an array and adds it to a string with the separationString in between.

    return myArray.join( "--" )

would return `1--2--3--4--5`.

sort() rearranges the calling array in alphebedical order.

*Note: Alphebedical order in this case is by the characters ASCII values.

reverse() rearranges the calling array so that the elements are in the opposite order. ( First becomes last, last becomes first, etc.)

indexOf( searchTerm ) will search the calling array for an instance of the searchTerm and returns the array index. Returns -1 if searchTerm is not found.

*Note: Does not work in IE

lastIndexOf( searchTerm ) will search, starting with the last element the calling array, for an instance of the searchTerm and return the array index where the search term was found. Returns -1 if searchTerm is not found.
k

*Note: Does not work in IE

The next 5 functions will run a function defined as shown below on each element of an array.

    function name( value, index, array ) 
    {
        // Your code
    }

every( function ) will run the desired function on each element of the array. Will return true if all elements in array "pass" the function. "Pass" in this case refers to the return value of the function. Example below should clear this up.

    function isEven( value, index, array )
    {
        if ( value % 2 == 0 ) 
        {
            return true;
        }

        return false;
    }

    var numbers = new Array( 2, 4, 6, 8 );

    alert( numbers.every( isEven ) );

would alert the value `true` because every value in the array "passes" the function (or causes it to return true). Otherwise the every() function would return false.

*Note: The function passed to the every() function must be in the form of the `isEven` function above.

some( function ) is very similar to the every function, but will return true if any of the elements in the array "pass" the function.

*Note: The function passed to the some() function must be in the form of the `isEven` function above.

Using the same isEven function as above

    var numbers2 = new Array( 1, 2, 3, 4, 5 );
    alert( numbers2.some( isEven ) );

This alert statement will alert the value `true` becasue the values `2` and `4` will "pass" the function. 

filter( function ) runs each element of an array through the passes function and returns an array with the "passes" values.

*Note: The function passed to the filter() function must be in the form of the `isEven` function above.

forEach( function ) preforms a function on every element in an array. An example use case for this would be to doulbe, then alert each value in the array. The forEach() function does not return anything. 

map( function ) is very similar to the forEach() function, but if in your function, you return a value each time, these values will be returned as an array by the map function.

To double every value in an array, alert the new values, and then store those values as a new array you could write,

    function doubleAndAlert( value, index, array )
    {
        doubledValue =  2 * value;
        alert( doubledValue );
        return doubledValue;
    }

    var numbers = new Array( 1, 2, 3, 4, 5 );
    doubledNumbers = numbers.map( doubleAndAlert );

The above code would double all values in numbers, alert them, and store them in the new doubledNumbers array.

Math Objects
--------------

### Properties

* PI

### Methods

* abs
* min
* max
* ceil
* floor
* round
* random
* pow

#### Details

Math.PI is the value of pi, or 3.141592653...

Math.min( arrayValues ) accepts an array of values (can pass array object as well) and returns the smallest value.

Math.max( arrayValues ) same as min, accept returns the largest value.

Math.ceil( num ) rounds `num` **up** to the nearest whole number.

Math.floor( num ) rounds `num` **down** to the nearest whole number.

Math.round( num ) rounds `num` **down** to the nearest whole number if 








