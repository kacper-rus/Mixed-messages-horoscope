
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
console.log("Welcome to your today's horoscope for "+today)

msg = ["This should be a fortunate day, including love, career, money, and health.", 'You should feel very enthusiastic and optimistic about your future.',
"Go for the gold, and don't be surprised if you actually get it!", " If you've been expecting a settlement of some kind, today it might finally come or show signs of coming soon.", 
"This is a great day to invest in a home, land, or property.", "Your mind might be a little foggy.", "Anything you have to do could require a little more concentration than usual.", 
"Some paperwork might need attention today.", "Communication should be clear, open, and honest, so you'll accomplish exactly what you need to.", 
"An intimate and loving conversation could take place between you and a close friend or lover who might follow up with a visit to your home.", 
"This is a good day to look into expanding your horizons.", "All signs point to personal and career success.", "Some surprising communications from friends or neighbors could bring fascinating information your way.", 
"You'll know just what to do with it. Follow your instincts!", "Something may be accomplished that has meant a lot to you.", "You should feel particularly satisfied with yourself and maybe even a little excited.", 
"A lot of comings and goings could take place in the home today, with visitors and family members popping in and out. Stay centered.", "You might put a lot of effort into the appearance of your house.", 
"Some people you'd like to impress could visit your home tonight.", "You should be especially intuitive now, so don't be surprised if you anticipate what they'll say before they say it.", 
"This is a period when your business and financial interests continue to fly high. You may feel disoriented at times, as everything seems to be happening at once.", 
"You're on a roll! Matters involving friendship and love also are changing rapidly, mostly for the better, though you might leave some longtime companions behind.", 
"As career and money matters continue to advance, your self-confidence is high and your mind is very positive. You should continue to attract good fortune.", 
"You'll attract new friendships based on shared spiritual values, and old friendships should solidify even more. Life is treating you well.", "The chance to travel may come up unexpectedly, and you could be in a quandary about going. Consider it carefully. If it's feasible, go for it. This isn't the time to hold back."]
rdmNumber = Math.floor(Math.random()*msg.length)
rdmMsg = msg[rdmNumber]
console.log("The stars say that:\n"+rdmMsg)