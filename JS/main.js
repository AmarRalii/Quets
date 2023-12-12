var quotes =[
    {
        'writer': ' Oscar Wilde',
        'quote':'“Be yourself; everyone else is already taken.”'
    },
    {
        'writer': `I'm selfish, impatient and a little insecure. I make mistakes, I am worst, then you sure as hell don't deserve me at my best.”`,
        'quote':'Marilyn Monroe'
    },
    {
        'writer': `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        'quote':'Albert Einstein'
    },
    {
        'writer': `“So many books, so little time.”`,
        'quote':' Frank Zappa'
    },
    {
        'writer': `“A room without books is like a body without a soul.”`,
        'quote':'Marcus Tullius Cicero'
    },
    {
        'writer': `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
        'quote':'Bernard M. Baruch'
    },
    {
        'writer': `“You've gotta dance like there's nobody watching,
        And live like it's heaven on earth.”`,
        'quote':'William W. Purkey'
    },
    {
        'writer': `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        'quote':'Dr. Seuss'
    },
    {
        'writer': `“You only live once, but if you do it right, once is enough.”`,
        'quote':' Mae West'
    },
    {
        'writer': `“Be the change that you wish to see in the world.”`,
        'quote':' Mahatma Gandhi'
    },
    {
        'writer': `“In three words I can sum up everything I've learned about life: it
         goes on.”`,
        'quote':'Robert Frost'
    },
   
]

function randomqutes(){
    
    var random = Number.parseInt (Math.floor((Math.random()*11 )));
    if(num == random  && random < 11)
    {
        random++;
    }
    else if(num == random  && random == 11)
    {
        random--;
    }
    else(
        random
    );
    
    document.getElementById('quote').innerHTML = `\"${quotes[random].quote}\"`;
    document.getElementById('writer').innerHTML = `\"${quotes[random].writer}\"`;

    var num = random;
}
