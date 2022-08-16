import React from 'react'

function Individuals() {
  return (
    <div>

    <div class="container">
        <div class="row better">
            <div class="col-md-6 man">
                <h1>The genius way</h1>
                <h1>to work <span>better</span></h1>
                <p>Calendly makes it easy to work smarter when you’re working solo. Meetings, sessions, and appointments become more efficient ways to achieve success and accomplish goals.</p>
                <button>Sign up for free</button>
            </div>
            <div class="col-md-6 mobile-img">
                <img src="images/man.png" alt="image"/>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-6 laptop2">
                <img src="images/laptop2.png" alt="image of phone"/>
            </div>
            <div class="col-md-6 book-up">
                <p>A CURATED CALENDAR</p>
                <h2>Book up efficiently</h2>
                <p class="subtitle">When invitees select a meeting slot from your schedule, they only see the times you’re available, and only the length and type of meeting you want to have. Your schedule fills up efficiently, and everyone avoids excess email exchanges.</p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row notification">
            <div class="col-md-6 book-up">
                <p>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</p>
                <h2>Work like you have a personal assistant</h2>
                <p class="subtitle">Because Calendly automates administrative tasks like sending reminder emails and follow-ups, you can focus on the work that builds your business and brings customers back for more.</p>
            </div>
            
            <div class="col-md-6 phone">
                <img src="images/phone.jpg" alt="image of phone"/>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="jumbotron">
                <h1>Find just-right plans for individuals and small teams</h1>
                <p>We actually design you frame and origin well</p>
                <p><a class="btn btn-primary btn-lg submit" href="#" role="button">See our plans</a></p>
              </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row footer-individual">
            <div class="col-md-4 footer">
               <h1>Easy</h1>
               <span><h1>ahead</h1></span>
               <p>We take the work out of connecting with others so you can accomplish more.</p>
               <select name="cars" id="cars">
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
            <div class="col-md-8">
                <div class="col-md-4 footer2">
                    <h2>About</h2>
                    <p>About Calendly</p>
                    <p>Contact Sales</p>
                    <p>Newsroom</p>
                    <p>Careers</p>
                    <p>Security</p>
                </div>
                <div class="col-md-4">
                    <div class="col-md-4 footer2 countries">
                        <h2>Contact</h2>
                        <p>Berlin</p>
                        <p>Mardrid</p>
                        <p>Kenya</p>
                        <p>Tokyo</p>
                        <p>Nairobi</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="col-md-4 footer2 popular">
                        <h2>Features</h2>
                        <p>Availability</p>
                        <p>Performance</p>
                        <p>Gender</p>
                        <p>Careers</p>
                        <p>Location</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Individuals