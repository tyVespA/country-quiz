api used: https://restcountries.com/
endpoint: https://restcountries.com/v3.1/all

# base app cycle (?)

- on gameStart a random api object get chosen (roll between 0 and numOfTypesIWant) and depending on which gets chosen, the questionType will pass values inside of Question
  - ex. types can be
    - x is the capital of..?
    - the capital of x is..?
    - this is the flag of..?
    - ...
- the chosen questionType has to return the question value, the correct answer value and 3 wrong (chosen randomly) answer values
- Question component takes questionType values and randomly (how?) assigns answers to buttons
- if userAnswer == correctAnswer, score +1 and new random questionType, else game over and show score
