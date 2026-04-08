---
title: "How to Help"
description: "How to Help Superphysics"
c: teal
---


We're building a new science and new systems for a better reality. The core Superphysics team won't live forever so we're focusing on the most pressing problems.

You can help by:

## 1. Doing certain actions

Actions | Notes
--- | ---
**Telling us of unexplained phenomena** so we can explain it using Superphysics | We solved the Buga Sphere and Comet 3I Atlas by being asked about them
**Telling us about broken pages**, bugs, typos, confusing articles, or factual errors | Because science is so large, everything is a rush job. AI helps clean up our clutter and bugs
**Sharing** our articles and videos |  We see which YouTube videos are shared the most
**Clicking the ads** on this website, to give us a tiny ad revenue |
**Referring** organizations, universities, or volunteers who might be interested |
**Joining** our [Facebook group](https://www.facebook.com/groups/superphysicsorg/) or subsrcibing to our [Youtube](https://www.youtube.com/@superphysicsorg/) | 
Following our **Social Media** | [Facebook](https://www.facebook.com/superphysicsorg/) [Youtube](https://www.youtube.com/@superphysicsorg/) [Linkedin](https://www.linkedin.com/company/superphysics/) [Tiktok](https://www.tiktok.com/@superphysicsorg)


<!-- - adding links to our posts or books on your website
  - [https://pantrypoints.com](https://pantrypoints.com). This is the practical aspect
  - [https://superphysics.org](https://superphysics.org). This is the theoretical aspect -->

<!-- - going to [pantrypoints.com](https://pantrypoints.com) and submitting a contact form under 'Join the Change' -->

<!-- . At the moment, we have volunteers in the following cities where we have tested our system:
  - Hanoi
  - Ho Chi Minh City
  - Metro Manila
  - Peshawar -->

<!-- - submitting articles related to Superphysics, Socartes, Descartes, Hume, Smith, Spinoza, Ibn-Khaldun, Alternative Medicine
- donating cash or in kind: -->



## 2. Signing up as a volunteer so we can coordinate actions

<div class="flex justify-center items-center min-h-[50vh] p-4">
  <div class="bg-white p-4 dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md border border-gray-200 dark:border-gray-700">
    <!-- Card header -->
    <div class="px-6 py-4">
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">All fields are required except social media</p>
    </div>
    <div id="feedbackMessage" class="hidden px-6 py-3 mb-2 rounded-lg transition-all duration-300"></div>  
    <div class="px-6 py-5">
      <form action="{{ .Site.Params.commentAction }}" method="POST" class="w-full">
        <input type="hidden" name="source" id="source" value="superphysics.org/help" />        
        <div class="mb-4">
          <label for="name" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
            Full Name *
          </label>
          <input type="text" id="name" name="name" required 
                 class="appearance-none bg-white dark:bg-gray-700 bg-opacity-50 w-full rounded-lg text-gray-700 dark:text-gray-200 text-black py-2.5 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 dark:border-gray-600"
                 placeholder="Enter your full name">
        </div>
        <div class="mb-4">
          <label for="city" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
            City *
          </label>
          <input type="text" id="city" name="subj" required 
                 class="appearance-none bg-white dark:bg-gray-700 bg-opacity-50 w-full rounded-lg text-gray-700 dark:text-gray-200 text-black py-2.5 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 dark:border-gray-600"
                 placeholder="Enter your city">
        </div>
        <div class="mb-4">
          <label for="country" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
            Country *
          </label>
          <input type="text" id="country" name="country" required 
                 class="appearance-none bg-white dark:bg-gray-700 bg-opacity-50 w-full rounded-lg text-gray-700 dark:text-gray-200 text-black py-2.5 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 dark:border-gray-600"
                 placeholder="Enter your country">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
            Email Address *
          </label>
          <input type="email" id="email" name="email[email]" required autocomplete="email"
                 class="appearance-none bg-white dark:bg-gray-700 bg-opacity-50 w-full rounded-lg text-gray-700 dark:text-gray-200 text-black py-2.5 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 dark:border-gray-600"
                 placeholder="your.email@example.com">
        </div>
        <div class="mb-6">
          <label for="social" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
            Social Media Link (Optional)
          </label>
          <input type="url" id="social" name="msg"
                 class="appearance-none bg-white dark:bg-gray-700 bg-opacity-50 w-full rounded-lg text-gray-700 dark:text-gray-200 text-black py-2.5 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 dark:border-gray-600"
                 placeholder="https://linkedin.com/in/yourprofile">
        </div>
        <div class="flex justify-end pt-2">
          <button type="submit" id="submitBtn"
                  class="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-150 ease-in-out shadow-sm hover:shadow">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<script>
  (function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const feedbackDiv = document.getElementById('feedbackMessage');
    
    // Helper function to show feedback message
    function showFeedback(message, isError = false) {
      feedbackDiv.textContent = message;
      feedbackDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'border-green-400', 'bg-red-100', 'text-red-800', 'border-red-400');
      
      if (isError) {
        feedbackDiv.classList.add('bg-red-100', 'text-red-800', 'border', 'border-red-400');
      } else {
        feedbackDiv.classList.add('bg-green-100', 'text-green-800', 'border', 'border-green-400');
      }
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        feedbackDiv.classList.add('hidden');
      }, 5000);
    }
    
    // Helper function to set button loading state
    function setButtonLoading(isLoading) {
      if (isLoading) {
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
        submitBtn.textContent = 'Submitting...';
      } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        submitBtn.textContent = 'Submit';
      }
    }
    
    // Helper function to reset form
    function resetForm() {
      form.reset();
    }
    
    // Helper function to get form data as JSON
    function getFormData(formElement) {
      const formData = new FormData(formElement);
      const data = {};
      
      for (let [key, value] of formData.entries()) {
        // Handle nested email field
        if (key === 'email[email]') {
          if (!data.email) data.email = {};
          data.email.email = value;
        } else {
          data[key] = value;
        }
      }
      
      return data;
    }
    
    // Submit form handler
    async function handleSubmit(event) {
      event.preventDefault();
      
      // Clear previous feedback
      feedbackDiv.classList.add('hidden');
      
      // Validate required fields
      const name = document.getElementById('name').value.trim();
      const city = document.getElementById('city').value.trim();
      const country = document.getElementById('country').value.trim();
      const email = document.getElementById('email').value.trim();
      
      if (!name || !city || !country || !email) {
        showFeedback('Please fill in all required fields (*)', true);
        return;
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFeedback('Please enter a valid email address', true);
        return;
      }
      
      // Validate social media URL if provided
      const socialUrl = document.getElementById('social').value.trim();
      if (socialUrl) {
        try {
          new URL(socialUrl);
        } catch (e) {
          showFeedback('Please enter a valid social media URL (e.g., https://...)', true);
          return;
        }
      }
      
      // Get form data
      const formData = getFormData(form);
      
      // Set button to loading state
      setButtonLoading(true);
      
      try {
        // Send data to API
        const response = await fetch('https://pantrypoints.com/api/external', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        // Parse response
        let result;
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          result = await response.json();
        } else {
          result = await response.text();
        }
        
        if (response.ok) {
          // Success
          showFeedback('Thank you! Your form has been submitted successfully.');
          resetForm();
        } else {
          // Error from server
          const errorMessage = typeof result === 'object' && result.message 
            ? result.message 
            : 'Submission failed. Please try again later.';
          showFeedback(errorMessage, true);
        }
      } catch (error) {
        console.error('Form submission error:', error);
        showFeedback('Network error. Please check your connection and try again.', true);
      } finally {
        // Reset button state
        setButtonLoading(false);
      }
    }
    
    // Attach event listener
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }
  })();
</script>



<div class="flex justify-center items-center min-h-[50vh] p-4">
  <div class="bg-white p-4 dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md border border-gray-200 dark:border-gray-700">
    <!-- Card header -->
    <div class="px-6 py-4">
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">All fields are required except social media</p>
    </div>
    <div class="px-6 py-5">
      <form action="{{ .Site.Params.commentAction }}" method="POST" class="w-full">
      <!-- <form class="w-full" id="contact" action="https://usebasin.com/f/fe409f5e1e78" method="post" target="_blank"> -->
        <!-- Hidden field for page URL -->
        <input type="hidden" name="source" id="source" value="superphysics.org/help" />        
        <div class="mb-4">
          <label for="name" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
            Full Name *
          </label>
          <input type="text" id="name" name="name" required 
                 class="appearance-none bg-white dark:bg-gray-700 bg-opacity-50 w-full rounded-lg text-gray-700 dark:text-gray-200 text-black py-2.5 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 dark:border-gray-600"
                 placeholder="Enter your full name">
        </div>
        <div class="mb-4">
          <label for="city" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
            City *
          </label>
          <input type="text" id="city" name="subj" required 
                 class="appearance-none bg-white dark:bg-gray-700 bg-opacity-50 w-full rounded-lg text-gray-700 dark:text-gray-200 text-black py-2.5 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 dark:border-gray-600"
                 placeholder="Enter your city">
        </div>
        <div class="mb-4">
          <label for="country" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
            Country *
          </label>
          <input type="text" id="country" name="country" required 
                 class="appearance-none bg-white dark:bg-gray-700 bg-opacity-50 w-full rounded-lg text-gray-700 dark:text-gray-200 text-black py-2.5 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 dark:border-gray-600"
                 placeholder="Enter your country">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
            Email Address *
          </label>
          <input type="email" id="email" name="email[email]" required autocomplete="email"
                 class="appearance-none bg-white dark:bg-gray-700 bg-opacity-50 w-full rounded-lg text-gray-700 dark:text-gray-200 text-black py-2.5 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 dark:border-gray-600"
                 placeholder="your.email@example.com">
        </div>
        <div class="mb-6">
          <label for="social" class="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
            Social Media Link (Optional)
          </label>
          <input type="url" id="social" name="msg"
                 class="appearance-none bg-white dark:bg-gray-700 bg-opacity-50 w-full rounded-lg text-gray-700 dark:text-gray-200 text-black py-2.5 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-300 dark:border-gray-600"
                 placeholder="https://linkedin.com/in/yourprofile">
        </div>
        <div class="flex justify-end pt-2">
          <button type="submit" 
                  class="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-150 ease-in-out shadow-sm hover:shadow">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>



## 3. Contact Us

Domain | Email
--- | ---
Superphysics | superphyiscsorg@gmail.com
Pantrypoints | pantrypoints@gmail.com



## 4. Donate

If you're feeling generous, you can donate via:


<!-- #### Paypal

[PayPal.me/pantrypoints](https://PayPal.me/pantrypoints) -->


### GCash

{{< img src="/graphics/wallet/gcash.png" alt="Gcash" cap="For people in the Philippines" >}}


### Momo

{{< img src="/graphics/wallet/momo.jpg" alt="Momo" cap="For people in Vietnam" >}}


