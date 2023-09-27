// create an array that stores 0s and 1s depending on which choice was selected.
const $choice = document.querySelectorAll('.choice');
let choiceArray = [];
let choicesMade = 0;

$choice.forEach(function (item) {
    item.addEventListener('click', function () {
        const clickedID = this.id;
        const valueToAdd = clickedID === 'choice1' ? 0 : 1;
        choiceArray.push(valueToAdd);
        console.log(choiceArray);


        choicesMade++;
    
        if (choicesMade === 4) {
            // Convert the choiceArray to a JSON string
            const choiceArrayString = choiceArray.join('');
            console.log(choiceArrayString);
            
            // Redirect to a new page with the choiceArray as a query parameter
            window.location.href = 'https://www.stitchesontherun.com/choices=' + encodeURIComponent(choiceArrayString);
 } })
});

// show the next choice
const $choices = document.querySelectorAll('.choice');

$choices.forEach(function (item, index) {

    const arrayOfChoiceImages0 = ['images/moyo.webp', 'images/beginner.webp', 'images/modern.webp', 'images/fast.webp'];
    const arrayOfChoiceImages1 = ['images/hitome.webp', 'images/expert.webp', 'images/traditional.webp', 'images/slow.webp'];
    const textArray0 = ['Moyō', 'Are you a beginner?', 'You prefer modern design?', 'Wanna be done quickly?'];
    const textArray1 = ['Hitome', 'Sashiko doesn\'t scare you anymore!', 'You prefer traditional design?', 'Wanna take your time for the project?'];
    let current = 0;

    function changeImage(num) {
        if (current + num >= 0 && current + num < arrayOfChoiceImages0.length) {
            current += num;
            document.getElementById('choice-img1').src = arrayOfChoiceImages0[current];
            document.getElementById('choice-img2').src = arrayOfChoiceImages1[current];
            document.getElementById("description1").innerHTML = textArray0[current];
            document.getElementById("description2").innerHTML = textArray1[current];
        }
    }

    document.getElementById('choice1').onclick = function () {
        changeImage(+1);
    }
    document.getElementById('choice2').onclick = function () {
        changeImage(+1);
    }
}
);



