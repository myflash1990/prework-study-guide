
// var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

// for (var x = 0; x < topics.length; x++) {
//  console.log(topics[x]);
// }

var list = ['HTML', 'CSS', 'Git', 'JavaScript'];
   
//createing random selction of topic

var randomTopic = list[Math.floor(Math.random() * list.length)];


function listTopics() {

    for (var x = 0; x < list.length; x++) {

        console.log(list[x]);
    }
}

function selectTopic() {

    if (randomTopic === 'HTML') {
        console.log("let's study HTML");
    }

    else if (randomTopic === 'CSS') {
        console.log("let's study CSS");

    }

    else if (randomTopic === 'git') {
        console.log("Let's study git");

    }

    else if (randomTopic === 'JavaScript') {
        console.log("Let's study JS");
    }

    else {
        console.log("nada !!");
    }

}

console.log("Here are the topics we learned!!")
listTopics();

console.log("Which topic should we study first?")
selectTopic();


/*
if (topic === 'HTML') {
 console.log("Let's study HTML!");
} else if (topic === 'CSS') {
 console.log("Let's study CSS!");
} else if (topic === 'Git') {
 console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
*/