var _a;
// Add event listener for the Generate Resume button
(_a = document.getElementById('toggleButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    // Get values from input fields
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('Education').value;
    var skills = document.getElementById('Skills').value;
    var experience = document.getElementById('experience').value;
    // Create a new window/tab for the resume
    var resumeWindow = window.open('', '_blank');
    if (resumeWindow) {
        // Apply the same style as the form to the resume
        resumeWindow.document.write("\n            <html>\n            <head>\n                <title>Generated Resume</title>\n                <style>\n                    body {\n                        background-image: url('img.jpg');\n                        background-size: cover;\n                        background-position: center;\n                        background-repeat: no-repeat;\n                        height: 100vh;\n                        font-family: Arial, sans-serif;\n                        padding: 20px;\n                    }\n                    h2 {\n                        margin-left: 170px;\n                        font-style: oblique;\n                        color: #343434;\n                    }\n                    .image-name {\n                        position: absolute;\n                        top: 0;\n                        left: 10;\n                        width: 100%;\n                        font-style: oblique;\n                        color: black;\n                        text-align: left;\n                        padding: 10px;\n                    }\n                    input[type=text], textarea {\n                        width: 100%;\n                        padding: 12px 20px;\n                        margin: 8px 0;\n                        display: inline-block;\n                        border: 1px solid #ccc;\n                        border-radius: 4px;\n                        box-sizing: border-box;\n                    }\n                    textarea {\n                        height: 100px;\n                    }\n                    .resume-container {\n                        margin: 0 auto;\n                        width: 1000px;\n                        padding: 20px;\n                        background-color: white;\n                        box-shadow: 10px 10px 30px grey;\n                        border-radius: 10px;\n                    }\n                    fieldset {\n                        border-color: oldlace;\n                        padding: 20px;\n                        margin-bottom: 20px;\n                    }\n                    legend {\n                        font-style: oblique;\n                    }\n                    label {\n                        font-size: small;\n                    }\n                    .info-block {\n                        margin-bottom: 15px;\n                    }\n                    .bold {\n                        font-weight: bold;\n                    }\n                    ul {\n                        padding-left: 20px;\n                    }\n                    ul li {\n                        margin-bottom: 8px;\n                    }\n                </style>\n            </head>\n            <body>\n                <div class=\"resume-container\">\n                    <h2>Resume</h2>\n                    <fieldset>\n                        <legend>Personal Information</legend>\n                        <div class=\"info-block\">\n                            <p><span class=\"bold\">Name:</span> ".concat(name, " ").concat(surname, "</p>\n                        </div>\n                        <div class=\"info-block\">\n                            <p><span class=\"bold\">Email:</span> ").concat(email, "</p>\n                            <p><span class=\"bold\">Contact No.:</span> ").concat(contact, "</p>\n                        </div>\n                        <div class=\"info-block\">\n                            <p><span class=\"bold\">Address:</span> ").concat(address, "</p>\n                        </div>\n                    </fieldset>\n                    \n                    <fieldset>\n                        <legend>Education</legend>\n                        <p>").concat(education, "</p>\n                    </fieldset>\n\n                    <fieldset>\n                        <legend>Skills</legend>\n                        <ul>\n                            ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n                        </ul>\n                    </fieldset>\n\n                    <fieldset>\n                        <legend>Experience</legend>\n                        <ul>\n                            ").concat(experience.split(',').map(function (exp) { return "<li>".concat(exp.trim(), "</li>"); }).join(''), "\n                        </ul>\n                    </fieldset>\n                </div>\n            </body>\n            </html>\n        "));
        // Close the document to render the content
        resumeWindow.document.close();
    }
});
