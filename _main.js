//The arrays of words will be constructed in the form of [Message][Adverb][Noun]
//i.e.  Your day will be very interesting
//      [    Message   ] [adv] [  noun  ]

//Starter Message Array...
let messages = ["Your day will be", "Your future will be", "Your grades will be"];
//Adverb Word Array...
let adverbs = ["very", "amazingly", "seriously", "too", "terribly", "unlikely"];
//Noun Word Array...
let nouns = ["good", "bad", "amazing", "lucky"];

//Basic random number generator for the arrays...
const randomGenerator = (maxLength) => {
    return Math.floor(Math.random() * maxLength);
}

//Message factory function...
const messageFactory = (messages, adverbs, nouns) => {
    //Create the message object
    let message = {
        //Assign the varaibles to the result of a random number generator function...
        _message:   messages[randomGenerator(messages.length - 1)],
        _adverb:    adverbs[randomGenerator(adverbs.length - 1)],
        _noun:      nouns[randomGenerator(nouns.length - 1)]
    }
    return message;
}

//Function that returns the randomly selected message...
function getMessage() {
    //Declare the message object 
    let message = messageFactory(messages, adverbs, nouns);
    //Add the variables from the object to an array...
    let messageArray = [];
    messageArray.push(message._message, message._adverb, message._noun);
    //Debugging 
    console.log(messageArray);
    //Declare the message string (for later use)
    let messageStr;
}

getMessage();