export default function validateForm(event, cssClass) {

  event.preventDefault();

  // subject:
  const subject = document.querySelector(cssClass + " #subject");
  const subjectValue = removeExtraWhitespace(subject.value.trim());
  const subjectError = subject.nextElementSibling;
  const subjectValidated = valueIsNotEmpty(subjectValue);

  if (subjectValidated) {
    subjectError.classList.add("hidden");
  } else {
    subjectError.classList.remove("hidden");
  };

  // message:
  const message = document.querySelector(cssClass + " #message");
  const messageValue = removeExtraWhitespace(message.value.trim());
  const messageError = message.nextElementSibling;
  // regex from https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text
  const messageValidated = valueIsNotEmpty(messageValue) && messageValue.replace(/\s/g,'').length >= 10 && messageValue.replace(/\s/g,'').length <= 1000;

  if (messageValidated) {
    messageError.classList.add("hidden");
  } else {
    messageError.classList.remove("hidden");
  };

  if (subjectValidated && messageValidated) {

    const myEmail = window.atob("dmljdG9yaWEuY2hhcmxvdHRlLnBldHRlcnNlbkBnbWFpbC5jb20=");

    window.location.href = `mailto:${myEmail}?subject=${removeExtraWhitespace(subjectValue)}&body=${removeExtraWhitespace(messageValue)}`;

    const messageOnSubmit = document.querySelector(cssClass + " .submit-message");

    messageOnSubmit.classList.remove("hidden");

    messageOnSubmit.innerHTML = `Your email app or a new tab should pop up.`;
  };
};

function valueIsNotEmpty(value) {

  if (value.length > 0) {
    return true;
  };
};

function removeExtraWhitespace(value) {

  // regex from https://stackoverflow.com/questions/10575086/regex-to-remove-all-whitescape-except-one-between-words
  return value.replace(/\s{2,}/g,' ');
};