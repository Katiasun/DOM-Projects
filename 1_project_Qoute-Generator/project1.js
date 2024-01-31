let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let btn = document.querySelector("#new-quote");

const quotes = [
 {
        "quote":"You become what you believe.","author":"Oprah Winfrey"},
 {
        "quote":"I would rather die of passion than of boredom.","author":"Vincent van Gogh"},
 {
        "quote":"A truly rich man is one whose children run into his arms when his hands are empty.","author":"Unknown"},
 {
        "quote":"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.","author":"Ann Landers"},
 {
        "quote":"If you want your children to turn out well, spend twice as much time with them, and half as much money.","author":"Abigail Van Buren"},
 {
        "quote":"Build your own dreams, or someone else will hire you to build theirs.","author":"Farrah Gray"},
 {
        "quote":"The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.","author":"Jesse Owens"},
 {
        "quote":"Education costs money.  But then so does ignorance.","author":"Sir Claus Moser"},
 {
        "quote":"I have learned over the years that when one’s mind is made up, this diminishes fear.","author":"Rosa Parks"},
 {
        "quote":"It does not matter how slowly you go as long as you do not stop.","author":"Confucius"},
 {
        "quote":"If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.","author":"Oprah Winfrey"},
 {
        "quote":"Remember that not getting what you want is sometimes a wonderful stroke of luck.","author":"Dalai Lama"},
 {
        "quote":"You can’t use up creativity.  The more you use, the more you have.","author":"Maya Angelou"},
 {
        "quote":"Dream big and dare to fail.","author":"Norman Vaughan"},
 {
        "quote":"Our lives begin to end the day we become silent about things that matter.","author":"Martin Luther King Jr."},
 {
        "quote":"Do what you can, where you are, with what you have.","author":"Teddy Roosevelt"},
 {
        "quote":"If you do what you’ve always done, you’ll get what you’ve always gotten.","author":"Tony Robbins"},
 {
        "quote":"Dreaming, after all, is a form of planning.","author":"Gloria Steinem"},
 {
        "quote":"It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.","author":"Mae Jemison"},
 {
        "quote":"You may be disappointed if you fail, but you are doomed if you don’t try.","author":"Beverly Sills"},
 {
        "quote":"Remember no one can make you feel inferior without your consent.","author":"Eleanor Roosevelt"},
 {
        "quote":"Life is what we make it, always has been, always will be.","author":"Grandma Moses"},
 {
        "quote":"The question isn’t who is going to let me; it’s who is going to stop me.","author":"Ayn Rand"},
 {
        "quote":"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.","author":"Henry Ford"},
 {
        "quote":"It’s not the years in your life that count. It’s the life in your years.","author":"Abraham Lincoln"},

]
btn.addEventListener("click", function(){
       let random = Math.floor(Math.random() * quotes.length);

       quote.innerText = quotes[random].quote;
       person.innerText = quotes[random].author;
})