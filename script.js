// II.01. We'll bring in all the small cups:
const smallCups = document.querySelectorAll('.cup-small');
// II.02. Then we'll bring in the liters (the span ): (NOTE: That we'll change)
const liters = document.getElementById('liters');
// II.03. We'll need the percentage too: (NOTE: This is showing the percentage on the big cup)
const percentage = document.getElementById('percentage');
// II.04. And then remained as well:
const remained = document.getElementById('remained');

// III.03. Creating updateBigCup() function: (NOTE: The first thing we want is to get the amount of full glasses)
const updateBigCup = () => {
    // III.04. We want to select all the full cups:
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    // Testing: (NOTE: This is going to print out the length of the full cups, or the amount of full cups)
    // console.log(fullCups);
    // III.05. We'll also get the total cups: (NOTE: We're just using the length of the smallCups, which is always 8)
    const totalCups = smallCups.length;
    // Testing:
    // console.log(totalCups );
    // III.06. Adding an if statement: (NOTE: We want the percentage to hide when it's empty)
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else { // NOTE: If it isn't equals to 0, then we want to set it to visible
        percentage.style.visibility = 'visible';
        // NOTE: We'll get the height by the full cup divided by the total cups, and multiply it with the height of the large cup! 
        percentage.style.height = `${fullCups / totalCups * 330}px`; // 330px is the height of .cup class
        // III.07. We're setting the percentage's innerText:
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }
    // III.08. In case if the cup is full remain will dissapear (visibility 'hidden'), and we set the height to 0:
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        // NOTE: We're also setting the liters that remained:
        // EXTRA-NOTE: 250 the amount of milliliters, and we want to multiply that with the full cups
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}
// III.01. We'll call an updateBigCup() function, when we start the app:
updateBigCup();

// II.05. We're looping over all the small cups:
// NOTE: We'll need the index, and the cup
smallCups.forEach((cup, index) => {
    // Testing:
    // console.log(index);
    // II.06. We're adding an eventlistener to the cup:
    cup.addEventListener('click', () => {
        // II.07. Here, we're calling a function: (NOTE: We have to pass in the index of the cup, so we know which one we clicking on )
        highLightCups(index);  
    })
})

// II.08. Creating hihgLightCups() function: (NOTE: It'll take the index as a parameter )
const highLightCups = (index) => {
    // II.11. Beforehand, we want to check, if we click on the same one twice it'll toggle the full class:
    // AFTER: In the next section we're going to add the functionality for the big cup (section III.)
    if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--;
    }
    // Testing: (NOTE: Every time we click, we should get the index printed out)
    // console.log(index);
    // II.09. We're looping over the small cups here too:
    smallCups.forEach((cup, idx) => {
        // II.10. Inside we create an if statement:
        // NOTE: So, in case if the the index matches we'll add the full class for each smallcups
        if(idx <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })
    // III.02. We're also adding this function at the end of this function:
    updateBigCup(); 
}





