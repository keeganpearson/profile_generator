// import readline
const readline = require('readline');

// make function that asks questions
function askQuestions() {
  // make readline interface
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Ask for the user's name or nickname
  rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
    // Ask for the user's favorite activity
    rl.question("What's an activity you like doing? ", (activity) => {
      // Ask for the user's favorite music while doing the activity
      rl.question("What do you listen to while doing that? ", (music) => {
        // Ask for the user's favorite meal
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
          // Ask for the user's favorite food for that meal
          rl.question("What's your favourite thing to eat for that meal? ", (food) => {
            // Ask for the user's favorite sport
            rl.question("Which sport is your absolute favourite? ", (sport) => {
              // Ask for the user's superpower
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
                // Make description
                const profileDescription = `${name} loves ${activity} while listening to ${music}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`;

                // Give the profile 
                console.log(profileDescription);

                // Close readline 
                rl.close();
              });
            });
          });
        });
      });
    });
  });
}

// start the questions
askQuestions();
