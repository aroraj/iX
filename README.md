# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jaytiben Arora**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/dashing-changeable-sparrow

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/f501e974-89f3-4ae2-bee4-a953a0b9305c%2Fezgif.com-gif-maker.gif?v=1617339048444)
![](https://cdn.glitch.com/f501e974-89f3-4ae2-bee4-a953a0b9305c%2Fezgif.com-gif-maker%20(1).gif?v=1617339029124)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

NA

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I think the biggest obstacle when coding this came up when working on the guess function. On my first implementation, the game kept marking 
the guess as wrong and hence saying the user lost even when it wasn't so it took a bit of debugging to find where that error was. At first 
it was a bit of guessing and checking to find the error. This meant using print statements and seeing where the error was being caused and 
then I checked the console and found an error with the button being clicked. I originally thought that the error was in the Javascript 
function so I kept editing the function until I realized that it was actually in the HTML file for the button. So, I went to review the 
buttons section in the HTML file to find the error which helped fix the error. Other than that, I think the program was pretty easy to 
follow along with and I did not face too many obstacles along the way. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I think that I still have a lot to learn about web development. I think something that I would be interested in knowing is how the connection 
between the three Javascript, HTML, and CSS works. As in, how are the three languages able to communicate with one another to create 
a working page? I would also like to hear from professionals more on approaches to debug. Moreso, how to approach finding a bug in 
long chucks of code and then also identifying which file it is under. Another question I would like to learn about has to do more with full stack 
development but how does frontend connect to the backend languages to work all together? 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time to work on this program, I would definitely love to add additional features to make the game more difficult for the user, 
in terms of the game of course not the interface. I would love to try some of the provided additional features given at the end of the 
pre-work instructions such as adding a time limit to I think a feature I would love to work on given the time is switching the positions 
of the buttons on the screen. Code wise this means switching the color and tone of each button and making sure the guesses with the 
new positions match the sequence of the original colors and tones.  


## License

    Copyright [Jaytiben Arora]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
