document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero_video video');
    const playButton = document.getElementById('buttonPlay');

    playButton.addEventListener('click', function() {
        if (video.paused || video.ended) {
            video.play();
            playButton.innerHTML = '<svg class="icon_pause_bxs" height="84.521" width="84.521"><use href="./images/icons.svg#icon-pause-bxs"></use></svg>';
        } else {
            video.pause();
            playButton.innerHTML = '<svg class="icon_play_bxs" height="84.521" width="84.521"><use href="./images/icons.svg#icon-bxs"></use></svg>';
        }
    });

    video.addEventListener('ended', function() {
        playButton.innerHTML = '<svg class="icon_play_bxs" height="84.521" width="84.521"><use href="./images/icons.svg#icon-bxs"></use></svg>';
    });

    video.addEventListener('play', function() {
        playButton.style.opacity = 0;
    });

    video.addEventListener('pause', function() {
        playButton.style.opacity = 1;
    });
});

$(document).ready(function () {
    $('#formMessage').on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight + 2) + 'px';
    });
});

var form = document.getElementById("myForm");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form_status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xayrwrdo");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;

 /* paste this line in verbatim */
 window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
 /* customize formbutton below*/     
 formbutton("create", {
   action: "https://formspree.io/f/xayrwrdo",
   title: "How can we help?",
   fields: [
     { 
       type: "email", 
       label: "Email:", 
       name: "email",
       required: true,
       placeholder: "plantych88@gmail.com"
     },
     {
       type: "textarea",
       label: "Message:",
       name: "message",
       placeholder: "What's on your mind?",
     },
     { type: "submit" }      
   ],
   styles: {
     title: {
       backgroundColor: "gray"
     },
     button: {
       backgroundColor: "gray"
     }
   }
 });