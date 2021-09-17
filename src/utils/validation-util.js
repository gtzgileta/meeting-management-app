// Check if value has valid email address
const isValidEmail = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

// Iterate over the list of attendees and check if has valid email
const isAttendeesValid = (attendees) => {
    for (var i = 0; i < attendees.length; ++i) {
        if(!isValidEmail(attendees[i])) {
            return false;
        }
    }
    return true;
};

// Check if date has valid foramt DD-MM-YYYY
const isValidFormat = (date) => /^\d{1,2}\-\d{1,2}\-\d{4}$/.test(date);

// Check if is valid date and date belongs to current month
const isValidDate = (date) => {
    if (!isValidFormat(date)) return false;

    const splitted = date.split('-');
    const month = splitted[1];
    const year = splitted[2];

    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getMonth() + 1;

    if(currentMonth != month && year != currentYear) return false;

    return true;
}

// Validate form data
export const validateForm = (formValues) => {
    // Validate date input
    if(!isValidDate(formValues.date)) {
        return 'An invalid date was provided, please provide a valid date.';
    }
    // Validate Name 
    if(!formValues.name) {
        return 'Please fill in the "Name" input.'
    }
    // Validate attendees have valid email format
    if(!isAttendeesValid(formValues.attendees)) {
        return 'An invalid email was provided, please provide a valid email.';
    }

    return 'valid';
}