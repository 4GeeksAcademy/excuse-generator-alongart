/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "A talking monkey",
  "My mischievous neighbor",
  "A time-traveling robot",
  "A swarm of bees",
  "An extraterrestrial",
  "A group of clowns",
  "The ghost in my attic",
  "A troupe of marching penguins",
  "A pack of wild squirrels",
  "The magical talking plant"
];

let action = [
  "stole",
  "vaporized",
  "accidentally launched",
  "reprogrammed",
  "ate",
  "swallowed",
  "juggled",
  "knocked over",
  "teleported",
  "hid"
];

let what = [
  "my homework",
  "the car keys",
  "the alarm clock",
  "my favorite shoes",
  "the remote control",
  "my passport",
  "the birthday cake",
  "the time machine",
  "my lucky socks",
  "the concert tickets"
];

let when = [
  "during a meteor shower",
  "while I was sleepwalking",
  "on the way to the moon",
  "during a salsa dancing competition",
  "in the middle of a magic show",
  "during a thunderstorm",
  "while I was skydiving",
  "at the exact moment of a solar eclipse",
  "in the middle of a rock concert",
  "when I was chasing a rainbow"
];

window.onload = function() {
  //write your code here
  excuseGenerator();
};

function excuseGenerator() {
  let whoItem = who[Math.floor(Math.random() * who.length)];
  let actionItem = action[Math.floor(Math.random() * action.length)];
  let whatItem = what[Math.floor(Math.random() * what.length)];
  let whenItem = when[Math.floor(Math.random() * when.length)];
  let sentence = (document.querySelector("#randomizer").innerHTML = [
    whoItem,
    actionItem,
    whatItem,
    whenItem
  ].join(" "));
  return sentence;
}

// htmlexcuse.innerHTML = excuseGenerator();

// let htmlexcuse = document.getElementById("randomizer").innerHTML;

// document.querySelector("#randomizer");
