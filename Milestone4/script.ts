// Add event listener for the Generate Resume button
document.getElementById('toggleButton')?.addEventListener('click', () => {
    // Get values from input fields
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const surname = (document.getElementById('surname') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('Education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Create a new window/tab for the resume
    const resumeWindow = window.open('', '_blank');

    if (resumeWindow) {
        // Apply the same style as the form to the resume
        resumeWindow.document.write(`
            <html>
            <head>
                <title>Generated Resume</title>
                <style>
                    body {
                        background-image: url('img.jpg');
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        height: 100vh;
                        font-family: Arial, sans-serif;
                        padding: 20px;
                    }
                    h2 {
                        margin-left: 170px;
                        font-style: oblique;
                        color: #343434;
                    }
                    .image-name {
                        position: absolute;
                        top: 0;
                        left: 10;
                        width: 100%;
                        font-style: oblique;
                        color: black;
                        text-align: left;
                        padding: 10px;
                    }
                    input[type=text], textarea {
                        width: 100%;
                        padding: 12px 20px;
                        margin: 8px 0;
                        display: inline-block;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        box-sizing: border-box;
                    }
                    textarea {
                        height: 100px;
                    }
                    .resume-container {
                        margin: 0 auto;
                        width: 1000px;
                        padding: 20px;
                        background-color: white;
                        box-shadow: 10px 10px 30px grey;
                        border-radius: 10px;
                    }
                    fieldset {
                        border-color: oldlace;
                        padding: 20px;
                        margin-bottom: 20px;
                    }
                    legend {
                        font-style: oblique;
                    }
                    label {
                        font-size: small;
                    }
                    .info-block {
                        margin-bottom: 15px;
                    }
                    .bold {
                        font-weight: bold;
                    }
                    ul {
                        padding-left: 20px;
                    }
                    ul li {
                        margin-bottom: 8px;
                    }
                </style>
            </head>
            <body>
                <div class="resume-container">
                    <h2>Resume</h2>
                    <fieldset>
                        <legend>Personal Information</legend>
                        <div class="info-block">
                            <p><span class="bold">Name:</span> ${name} ${surname}</p>
                        </div>
                        <div class="info-block">
                            <p><span class="bold">Email:</span> ${email}</p>
                            <p><span class="bold">Contact No.:</span> ${contact}</p>
                        </div>
                        <div class="info-block">
                            <p><span class="bold">Address:</span> ${address}</p>
                        </div>
                    </fieldset>
                    
                    <fieldset>
                        <legend>Education</legend>
                        <p>${education}</p>
                    </fieldset>

                    <fieldset>
                        <legend>Skills</legend>
                        <ul>
                            ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                        </ul>
                    </fieldset>

                    <fieldset>
                        <legend>Experience</legend>
                        <ul>
                            ${experience.split(',').map(exp => `<li>${exp.trim()}</li>`).join('')}
                        </ul>
                    </fieldset>
                </div>
            </body>
            </html>
        `);

        // Close the document to render the content
        resumeWindow.document.close();
    }
});
