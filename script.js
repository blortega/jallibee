var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;
var voiceRecognition = new SpeechRecognition();

// Set language to English (United States)
voiceRecognition.lang = 'en-US';

// Disable interim results
voiceRecognition.interimResults = false;

// Set the maximum number of alternative transcripts to 5
voiceRecognition.maxAlternatives = 5;

// Function to send email
function sendEmail(message) {
    //Visit emailjs.com: check services,templates, and profile
    var serviceID = 'service_xogngdj';
    var templateID = 'template_01jzw8d';
    var userID = '3tdPCfaKN0LSh7lgi';

    // Prepare email parameters
    var templateParams = {
        to_email: 'blortega3@gmail.com',
        message: message
    };

    // Send the email
    emailjs.send(serviceID, templateID, templateParams, userID)
        .then(function(response) {
            console.log('Email sent successfully', response);
        }, function(error) {
            console.error('Email sending failed', error);
        });
}

voiceRecognition.onresult = function(event) {
    var recordedVoice = event.results[0][0].transcript;

    // Send email with recorded voice message
    sendEmail(recordedVoice);
};

// Start voice recognition when the page loads
voiceRecognition.start();
