//Selectors
const activity = document.querySelector('#activity')
const typeToggles = document.querySelectorAll('.typeToggles')
const participantsToggles = document.querySelectorAll('.participantsToggles')
const slideDifficulty = document.querySelector('#slideDifficulty')
const slidePrice = document.querySelector('#slidePrice')
const submit = document.querySelector('#submit')

//Set toggle booleans to false;
let typeToggle = false;
let participantToggle = false;

//Object with the query parameters set to zero
let params = {
    participants: 0,
    minprice: 0,
    maxprice: 0,
    minaccessibility: 0,
    maxaccessibility: 0,
    type: 0
}

//Get the activity from the API and sets its content into the HTML
const getActivity = async () => {
    config = { params };
    const resp = await axios.get('http://www.boredapi.com/api/activity/', config);
    activity.innerText = resp.data.activity
}

//Event Listener for the submit button
submit.addEventListener('click', () => {
    //if there is no type selected, will not call the API    
    if (params.type == 0) {
        activity.innerText = "Must select type and participants"
    }
    else {
        //the next several lines "clean" the parameters obtained from the user before sending them to the API

        //API doesn't offer values for all prices and accesibilities, so a buffer is required to request
        // a wider range to ensure an answer from the API
        let buffer = 0.5;
        params.minaccessibility = slideDifficulty.valueAsNumber - buffer
        params.maxaccessibility = slideDifficulty.valueAsNumber + buffer
        params.minprice = slidePrice.valueAsNumber - buffer
        params.maxprice = slidePrice.valueAsNumber + buffer
        if (params.minaccessibility < 0) { params.minaccessibility = 0 }
        if (params.maxaccessibility > 1) { params.maxaccessibility = 1 }
        if (params.minprice < 0) { params.minprice = 0 }
        if (params.maxprice > 1) { params.maxprice = 1 }

        //When selecting the button "any number" the value of the button gets parsed as a NaN
        // so this line sets it to '' so that query ignores it and it retrives "any number"
        if (params.participants != 1) {
            params.participants = ''
        }

        //calls the function that will call the API
        getActivity();
    }
})

//Event Listener for Participants Toggles
for (const button of participantsToggles) {
    button.addEventListener('click', () => {
        if (participantToggle === false) {
            participantToggle = true
            //sets selected type to params.participants (after parsing it to int)
            params.participants = parseInt(button.value)
            button.classList.add('selected')
        }
        else if (params.participants === button.value) {
            participantToggle = false;
            button.classList.remove('selected')
            params.participants = ''
        }
    });
}

//Event Listener for Activity Type Toggles
for (const button of typeToggles) {
    button.addEventListener('click', () => {
        if (typeToggle === false) {
            typeToggle = true
            //sets selected type to params.type
            params.type = button.id
            button.classList.add('selected')
        }
        else if (params.type === button.id) {
            typeToggle = false;
            button.classList.remove('selected')
            params.type = ''
        }
    });
}












