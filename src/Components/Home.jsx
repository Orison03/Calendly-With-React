import React from 'react'

function Home() {
  return (
    <>
      <div class="continer laptop">
        <div class="col-md-6">
          <h1>Easy</h1>
          <h1>scheduling</h1>
          <span>
            <h1>ahead</h1>
          </span>
          <p>
            Calendly is your hub for scheduling meetings <br /> professionally
            and efficiently, eliminating the hassle of <br /> back-and-forth
            emails so you can get back to work.
          </p>
          <span>
            <button id="first-btn"> Sign Up</button>
          </span>
          <input type="text" name="btn" placeholder="Enter your email" />
          <p class="subtitle">
            Create your free account. No credit card required.
          </p>
        </div>
        <div class="col-md-6">
          <img src="images/laptop.jpg" alt="logo" />
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="row sponser-headers">
            <h2 class="text-center">Simplified scheduling for more than</h2>
            <h2 class="text-center">
              <span>10,000,000</span> users worldwide
            </h2>
          </div>
          <div class="row">
            <div class="col-md-12 sponsers text-center">
              <div class="col-md-3">
                <i class="fa-brands fa-windows index"></i>
              </div>
              <div class="col-md-3">
                <i class="fa-brands fa-ebay index"></i>
              </div>
              <div class="col-md-3">
                <i class="fa-brands fa-apple index"></i>
              </div>
              <div class="col-md-3">
                <i class="fa-brands fa-amazon index"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 brief ">
            <span>
              <button>1</button>
            </span>
            <h3>
              Create <br /> simple rules
            </h3>
            <br />
            <p>
              Let Calendly know your <br /> availability preferences and <br />{" "}
              it’ll do the work for you.
            </p>
          </div>
          <div class="col-md-4 brief">
            <span>
              <button>2</button>
            </span>
            <h3>
              Share your
              <br /> link
            </h3>
            <br />
            <p>
              Send guests your Calendlyr
              <br />
              link or embed it on your <br />
              website.
            </p>
          </div>
          <div class="col-md-4 brief">
            <span>
              <button>3</button>
            </span>
            <h3>Get booked</h3>
            <br />
            <p>
              They pick a time and the <br /> event is added to your <br />{" "}
              calendar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home