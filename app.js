// object which stores the segment value to display the numbers
const digitSegments = {
    "0": ["a", "b", "c", "e", "f", "g"],
    "1": ["c", "f"],
    "2": ["a", "c", "d", "e", "g"],
    "3": ["a", "c", "d", "f", "g"],
    "4": ["b", "c", "d", "f"],
    "5": ["a", "b", "d", "f", "g"],
    "6": ["a", "b", "d", "e", "f", "g"],
    "7": ["a", "c", "f"],
    "8": ["a", "b", "c", "d", "e", "f", "g"],
    "9": ["a", "b", "c", "d", "f", "g"]
};

// display segments
function displayDigit(digit, elementId) {
    const segments = digitSegments[digit];
    const parts = document.querySelectorAll(`#${elementId} .segments`);
    parts.forEach(part => {
        part.style.backgroundColor = segments.includes(part.id) ? "#c8b20a" : "rgba(0, 0, 0, 0)";
    });
}


function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours > 12) hours %= 12;
    if (hours === 0) hours = 12;

    const hourString = String(hours).padStart(2, "0");
    const minuteString = String(minutes).padStart(2, "0");
    const secondString = String(seconds).padStart(2, "0");

    displayDigit(hourString[0], "hh1");
    displayDigit(hourString[1], "hh2");
    displayDigit(minuteString[0], "mm1");
    displayDigit(minuteString[1], "mm2");
    displayDigit(secondString[0], "ss1");
    displayDigit(secondString[1], "ss2");
}

setInterval(updateClock, 1000);

updateClock();


let thoughts = ["Time is a precious resource—once lost, it can never be regained. Use every moment wisely.","Procrastination steals your future. Start now, even if it’s small steps, and watch your dreams grow.", "Every day has 1,440 minutes. Invest them in what truly matters to you.","Don’t let today slip away; it’s your opportunity to build a better tomorrow." , "Time doesn’t slow down, and neither should your efforts to chase your goals." , "The greatest gift you can give yourself is to live fully in every moment." , "You can’t control the passage of time, but you can decide how to spend it meaningfully." , "Each tick of the clock is a chance to start fresh. Don’t wait for the perfect time—it doesn’t exist." , "Your future self is shaped by how you use your time today. Make it count." , "Time is a mirror reflecting your priorities. Focus on what truly brings value to your life." , "Don’t let the fear of failure rob you of precious time. Take the leap, learn, and grow." , "The hours you spend wisely today will become the foundation of your success tomorrow." , "Regret comes from wasted time. Take action now to live a life without 'what ifs' and 'if onlys'." , "Each day is a blank page. Use your time to write a story worth remembering." , "What you do in your free time determines your future freedom. Use it wisely." , "Time is a gift. Don’t squander it on things that don’t align with your purpose." , "Opportunities are like sunrises; if you wait too long, you’ll miss them. Act while there’s time." , "Success is built on the compound interest of time invested daily in small, meaningful efforts.", "The best way to honor time is to transform it into moments of growth, kindness, and achievement." , "Life is a collection of moments. Make sure the time you spend today adds up to a life you’re proud of."]

let motivation = document.getElementById('Motivation');

function delay(waitTime){
    return new Promise(resolve => setTimeout(resolve,waitTime))
}

async function showThoughts(){
    for(let i = 0; i<20; i++){
        motivation.textContent = thoughts[i];
        console.log(motivation.textContent);
        await delay(60000);
        if(i==19){
            i = -1;
        }
    }
    console.log("all done");
}

showThoughts();