let btn = document.querySelector('.button')
let text = document.querySelector('.text')
let person = document.querySelector('.person')

console.log(btn);

const quotes = [
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "In three words I can sum up everything I've learned about life: it goes on.",
        "author": "Robert Frost"
    },
    {
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
    }

]


btn.addEventListener('click',function(){
    const random=Math.floor(Math.random()*quotes.length);

    text.innerText=quotes[random].quote;
    person.innerText=quotes[random].author;

})
