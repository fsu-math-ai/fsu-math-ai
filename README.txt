MATHEMATICS IN THE AGE OF AI — STATIC WEBSITE
Florida State University conference website
Prepared October 11, 2026

CONTENT BASIS
Updated using the Program Summary for the Scientific Advisory Committee
and the organizers' subsequent October email discussion. Internal source
documents and emails are not bundled or published with the website.
The workshop takes place April 16–18, 2027, with Friday
activities starting at noon. The focus is practical departmental changes in
graduate education, research practice, and hiring, tenure, and promotion.
Speakers are listed on participants.html.
Funding: FSU Department of Mathematics, FSU College of Arts and Sciences, and
named professorships (listed on index.html).
The event title is "Mathematics in the Age of AI".

QUICK PREVIEW
1. Unzip the downloaded package.
2. Open the AI-Math-2027 folder.
3. Double-click index.html.
All pages, navigation, styles, and images work locally. No installation,
Node.js, server-side code, database, or ChatGPT account is required.

UPLOAD TO FSU
Upload the contents of AI-Math-2027 to the conference directory provided by
your FSU Mathematics web administrator. Preserve the images/ subdirectory.
The landing page must remain named index.html. All local links are relative,
so the site can be hosted within a personal or departmental subdirectory.
Ask the department administrator for the correct account, upload method,
web directory, and URL. This package has not been uploaded to an FSU server.

PAGES
index.html         General information and campus photo
program.html       Workshop schedule, lectures, discussion topics, and graduate-student activities
participants.html  Speakers
organizers.html    Organizing and Scientific Advisory Committees, with contact emails
registration.html  Registration form
registration.js    Sends the form to the Google Sheet (set the web app URL here)
invited.js         Same for the private invited-speaker page
local.html         Venue, travel, lodging, and accessibility information
style.css          Shared colors, fonts, spacing, and responsive layout
script.js          Mobile navigation menu only
favicon.svg        Browser-tab icon (FSU lettering on garnet)
images/            FSU logo (fsu-logo.svg) and campus photograph (fsu-westcott.jpg),
                   hosted locally with the site

EDITING
Edit the .html files in a plain-text/code editor (not a rich-text word processor).
The title, sidebar, and footer appear in each page. If changing the conference
dates or navigation, update them consistently across all six pages.
Edit style.css to change the shared design. There is no build step.
Keep filenames lowercase and preserve spelling when adding links.

REGISTRATION FORM
The form on registration.html is part of the site (same look as every page).
registration.js sends each submission to a Google Apps Script web app, which
adds a row to a Google Sheet that you own.
1. Create a Google Sheet (name it e.g. "Registrations").
2. In the Sheet: Extensions > Apps Script. Delete the sample code, paste the
   contents of registration-backend.gs, and save.
3. Optional: put an address in NOTIFY_EMAIL to be emailed on each registration.
4. Deploy > New deployment > type "Web app". Execute as: Me. Who has access:
   Anyone. Click Deploy and approve the permissions.
5. Copy the Web app URL (it ends in /exec) and paste it into registration.js
   in place of PASTE-WEB-APP-URL-HERE. Upload registration.js again.
6. Submit a test registration on the live site and check the Sheet.
If you change the script later, use Deploy > Manage deployments > Edit > New
version so the same URL keeps working.
Until the URL is set, the form shows "Registration is not open yet."
The dinner fee is $50 per person. The form records who wants the dinner; payment
is collected separately, and the thank-you message says payment details will
be sent closer to the event (you send these yourself). (registration-form-setup.gs is an older Google Forms
alternative and is not needed.)

PRIVATE FORM FOR INVITED SPEAKERS
invited-b0955a53.html is an unlisted page: no page links to it, it is not in the
menu, and it asks search engines not to index it. Share its address only with
invited participants: https://fsu-math-ai.github.io/fsu-math-ai/invited-b0955a53.html
Its answers go to a separate tab, "Invited speakers", in the same Google Sheet.
This needs the updated registration-backend.gs: paste it over the old script,
then Deploy > Manage deployments > pencil icon > Version: New version > Deploy.
The web app URL does not change. invited.js holds a copy of the same URL as
registration.js; change both if the URL ever changes.
Note: anyone with the address can open the page, and the file name is visible in
the public GitHub repository. The form asks for date of birth (for hotel
bookings). Keep the Google Sheet private (share it only with the organizers who
need it) and delete the date-of-birth column once the hotel is booked.
If the "Invited speakers" tab already holds test rows from an older version of the
form, delete that tab before redeploying so the new columns are created.

SPEAKER PHOTOS
Speaker cards on participants.html show photos from images/speakers/ (lastname.jpg).
To add or replace a photo, save it as
images/speakers/lastname.jpg (square crop, at least 300 px) and replace
<div class="photo" aria-hidden="true">XX</div> in that speaker's card with
<img class="photo" src="images/speakers/lastname.jpg" alt="First Last">.
Use photos supplied by the speakers.

BEFORE PUBLIC LAUNCH
- Add the building and room, lodging, and parking details to local.html.
- Publish speaker names only after they have agreed.
Registration stays closed until the web app URL is set in registration.js.
No analytics, external fonts, tracking code, or third-party scripts are used.

IMAGES
images/fsu-logo.svg: Florida State University horizontal lockup (gold, RGB),
from the FSU digital brand assets, used without alteration. Follow the FSU
brand guidelines for any further use.

images/fsu-westcott.jpg: Westcott Building and fountain at Florida State
University, Ernie Stephens (2018). CC0 1.0 Public Domain Dedication.
Source: https://commons.wikimedia.org/wiki/File:Westcott_Building_and_fountain_at_Florida_State_University.jpg
License: https://creativecommons.org/publicdomain/zero/1.0/
The original photograph is included without pixel edits; CSS may crop its
display. It depicts the campus.

VERIFICATION
All internal page/image/style/script links have been checked, as have page
titles, main headings, image alternative text, and active navigation states.
An automated browser layout test was not available in the build environment.
Please open index.html in your browser and check desktop and mobile widths
before the public FSU launch.
