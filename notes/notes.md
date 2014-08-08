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

Math.round( num ) rounds `num` using the conventional method. (rounds **down** if fractional part is less than .5 and **up** otherwise)

Math.random() returns a floating point value between 0 and 1.

Math.pow( num, exponent ) returns the value of num to the power of exponent.

    return Math.pow( 5, 2 )

would return 25.

Number Objects
---------------
### Methods

* toFixed

#### Details

To create a number object

    var num1 = new Number( 1234.56 );

or 

    var num2 = 1234.56;

Javascript will understand that in the second statement you want this to be a number object even though you didnt specify.

toFixed( numDecimalPlace ) fixes a float to the specified number of decimal places. This function will round, similar to Math.round(), as it fixes the float.

Date Objects
-------------

### Methods

* getDate
* getDay
* getMonth
* getFullYear
* toDateString
* setDate
* setMonth
* setFullYear
* getHour
* getMinutes
* getSeconds
* getMilliseconds
* toTimeString
* setHours
* Setminutes
* setSeconds
* setMilliseconds

#### Details

There are a couple of different ways to create a date object

    var theDate = new Date() // sets the new date to the current date/time on the PC
    var theDate2 = new Date( 17800108 ) // sets the new date to that
                                        // many milliseconds since January 1, 1970 0:00 GMT
    var theDate3 = new Date( '31 January 2010' ) // sets the date to the passed value
    var theDate4 = new Date( year, month, day, hour, minute, seconds, milliseconds ) // sets date accordingly

*Note: when specifying the month, January is the 0 month

getDate() gets the day of the month

getDay() gets the day of the week (Sunday = 0, Monday = 1, etc.)

getMonth() gets the current month (Jan = 0, Feb = 1, etc.)

getFullYear() gets the current 4 digit year

toDateString() returns the date as a string. Example return shown below:

    "Wed 31 Dec 2014"

setDate( num ) set the day of the month

*Note: If you give setDate() a number larger than 31, it will add that many days to the current date.

setDay( num ) set the day of the week 

setMonth( num ) set the month of the year

*Note: If you give setMonth() a number larger than 12, it will add that many months to the current date.

setFullYear( YYYY ) sets the current year 

getHours() gets the current hour (in 24 hour format)

getMinutes() gets the current minutes

getSeconds() gets the current seconds

getMilliseconds() gets the current milliseconds

toTimeString() returns the time as a string. Examle return shown below:

    "13:03:51 UTC"

setHours( num ) sets the current hour (in 24 hour fomat)
 
setMinutes() sets the current minutes

setSeconds() sets the current seconds

setMilliseconds() sets the current milliseconds

Creating **New** Types of Objects
----------------------------------

Reference types act as a template for objects. Reference types have 3 main parts:

* Constructor
    * Called when objects are created
* Method Definitions
    * Set
    * Get
    * Function the object can do
* Properties

The constructor is set up as shown below:

    function ObjectName( Arguements )
    {
        // Your code
    }

When you create an object, it is called making an **object instance**.

When writing contructors you will usually see code like below:

    function Vehicle( numWheels, color, driveSystem )
    {
        this.numWheels = numWheels;
        this.color = color;
        this.driveSystem = driveSystem;
    }

*this* in the example above refers to the object instance that is being created. The *this* keyword will come up a lot and we will go further into it when I fully understand it.

Now it is time to make the get and set functions. These are functions that retrieve properties of your object.

An example of a get function is shown below:

    Vehicle.prototype.getNumWheels = function()
    {
        return this.numWheels;
    }

As you can see in this example, the getNumWheels method is just returning the numWheels property.

This format must be strickly followed. The format should be obvious, but I will show you explicitly.

    ObjectName.prototype.methodName = function( arguements ) 
    {
        // Your code
    }

Just as an example, below is a set function

    Vehicle.prototype.setNumWheels = function( numWheels )
    {
        this.numWheels = numWheels;
    }

As you can see the same format is used, but now we are passing in an arguement. The arguement is then set as the associated property of the object.

The final step in the process is to actually go an create an object instance of your new type. To do this

    var truck = new Vehicle( 4, 'red', 'all-wheel drive' );

This will create a object with type Vehicle that has 4 wheels, is red, and has all-wheel drive.

Browswer Object Model
---------------------

The **Browser Object Model** is a tree model of any and all objects.

At the top of the Browser Object Model is the Window Object. The Window Object includes:
* Scrollbars
* Navigation Bar

###Window Object

The window object is a Global Object, which just means that to access the properties and methods of the window object, you dont need to write *window.* in front. An example is the alert method of the window object.

    window.alert( "Hello, World!" );

and 

    alert( "Hello, World!" ); 

are both work and are both valid.

The window object contains 

* Document Object, which contains the page
* History Object, which contains the history of the user
* Navigator Object, which contains information about the browser
* Screen Object, which contains information about the display capabilities of the user
* Location Object, which contains the pages current location

### History Object

The History object is an array of history locations. There are a couple of methods worth noting.

Forward() brings the user forward in their history

Back() brings the user back in their history

go( num ) brings the user forward num (if positive) or back num (if negative) 

### Location Object

The location object is used to modify the current page location.

replace( url ) brings user to url and removes the previous page from the history stack

href( url ) brings uer to url, but keeps the previous page in the history stack

### Screen Object

The screen property has three main properties that are useful. These are:

height, which returns the height of users screen

width, which returns the width of users screen

colorDepth, which returns the color depth of the users screen

### Document Object

Inside the Document Object, there are a couple of *collections*. 

#### Image Collection

With the images collection, you can refer to images on your page using number or name.

`document.images[0]` references the first image on the page. If you change the arguement, you get other images.

`document.image['myImage']` references the image named 'myImage'.

The `src` property is used to set the src attribute of the image.

    document.images[1].src = "../images/laughingPanda.gif";

#### Links Collection

The links collection is almost identical to the images collection but it contains the links on the page.

`document.links[0]` references the first link on the page.

`document.links['myLink']` references the link named 'myLink'.

Events
--------





