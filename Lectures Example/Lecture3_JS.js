var schools = { 
 IT: { 
 address: "North Ave NW, Atlanta, GA 30332", 
 phoneNumber: "(404) 894-2000", 
 dateEstablished: "October 13, 1885" 
 } 
}; 
var gtObject = schools.IT; 

gtObject.address; // returns "North Ave NW, Atlanta, GA 30332" 
gtObject.phoneNumber; // returns "(404) 894-2000"
gtObject.dateEstablished; //returns "October 13, 1885"
// We can directly use schools 
schools.IT.address; 
schools.IT.phoneNumber; 
schools.IT.dateEstablished; 

var instructorData = { 
    name: "Tim", 
    favoriteHobbies: ["Sailing", "Hiking", "Coding"] 
   };

   instructorData.favoriteHobbies[0]; // returns "Sailing" 

var instructorData = {
    name: "Elie",
    additionalData: {
     instructor: true,
     favoriteHobbies: ["Playing Chess", "Tennis", "Coding"],
     moreDetails: {
      basketballTeam: "NYJ",
      numberOfSiblings: 3,
      isYoungest: true,
      hometown: {
       city: "West Orange",
       state: "NJ",
      },
    citiesLivedIn: ["Seattle", "Providence", "New York"]
     }
    }
   };
instructorData.name; // "Elie"
instructorData.additionalData.instructor; // true
instructorData.additionalData.favoriteHobbies[2]; // "Coding"
instructorData.additionalData.moreDetails.fbasketballTeam; // "NYJ"
instructorData.additionalData.moreDetails.hometown.state; // "NJ"
instructorData.additionalData.moreDetails.citiesLivedIn[1]; //"Providence"


var programmingLanguages = {
    java: {
     yearCreated: 1995,
     creator: "James Gosling"
    },
    javaScript: {
     yearCreated: 1995,
     creator: "Brendan Eich"
    }
}

function addProgrammingLanguage(nameOfLanguage, yearLanguageCreated, creatorOfLanguage){
    programmingLanguages[nameOfLanguage] = {
     yearCreated: yearLanguageCreated,
     creator: creatorOfLanguage
    }
}
    addProgrammingLanguage("ruby", 1995, "Yukihiro Matsumoto");


    function sendMessage(message, fn){
        return fn(message);
        }
    sendMessage("FREE PALESTINE", console.log); // Hello World
    sendMessage("FREE PALESTINE", alert); // Hello World is alerted
    sendMessage("We Stand with Ghaza!", prompt); //value from prompt is returned
    sendMessage("Do you know Abu Obaida?", confirm);//true or false is returned  

    sendMessage("Hello World", function(message){
        // message refers to the string "Hello World"
        console.log(message + " from a callback function!");
    }); // Hello World from a callback function!
    var myFunction = function(message){
        // message refers to the string "Hello World"
        console.log(message + " from a callback function!");
        };
    
    sendMessage("Hello World", myFunction);
        

    function sendMessageWithConsoleLog(message){
        return console.log(message);
    }
    
    function sendMessageWithAlert(message){
        return alert(message);
    }
    
    function promptWithMessage(message){
        return prompt(message);
    }
        
    function confirmWithMessage(message){
        return confirm(message);
    }
    
    function sendMessageWithFromCallback(message){
        return console.log(message + " from a callback function!");
    }

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}
        
function math(a,b,callback){
    return callback(a,b);
}

math(1,4,add); // returns 5
math(5,5,subtract); // returns 0

function each(){
    // your code HERE !
}

each([1,2,3,4], function(val){
console.log(val);
});
    