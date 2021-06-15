const message = [
    "Life is 10% what happens to us and 90% how we react to it",
    "There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact",
    "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me",
    "Even if you’re on the right track, you’ll get run over if you just sit there",
    "When I hear somebody sigh, ‘Life is hard,’ I am always tempted to ask, ‘Compared to what?",
    "Nurture your mind with great thoughts. To believe in the heroic makes heroes.",
    "Look at the sparrows; they do not know what they will do in the next moment. Let us literally live from moment to moment"
];

const newMessage = () => {
    const randomNumber = Math.floor(Math.random() * (message.length));
  document.getElementById("messageDisplay").innerHTML = message[randomNumber];
};