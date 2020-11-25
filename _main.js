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
        _message:   messages[randomGenerator(messages.length)],
        _adverb:    adverbs[randomGenerator(adverbs.length)],
        _noun:      nouns[randomGenerator(nouns.length)]
    }
    return message;
}

//Function that returns the randomly selected message...
function getMessage() {
    //Declare the message object 
    let message = messageFactory(messages, adverbs, nouns);
    //Declare the message string
    let messageStr;
    //Concat the message components to the string
    messageStr = `${message._message} ${message._adverb} ${message._noun}`;
    //Return the message...
    return messageStr;
}

//Print the message to the console
console.log(getMessage());