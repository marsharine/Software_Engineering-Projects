## **Project Scope: IRememberYou♥ The Gift App**

### **Project Overview**

**Name**: IRememberYou♥ The Gift App

**Objective**: To create a gift shopping app that simplifies the gift-giving process by allowing users to purchase gift certificates. Recipients receive a beautifully designed digital card with personalized messages and a link to select their gift, guided by AI-driven recommendations. The app automates the purchase process with vendors, handling transactions and order fulfillment.

Main features:

* **Real Checkout Capabilities** (Payment Gateway, Cart System).  
  * **AI-Driven Recommendations** (Product Suggestions Based on User Behavior).  
    * **Chatbot Functionalities** (User Assistance, Product Queries, and Order Tracking).

Include scalability for future features like user accounts, reviews, or dynamic pricing.

### **Key Features**

1. **Gift Certificate Purchase**:  
   * Users can purchase digital gift certificates for various occasions.  
   * The app provides an option to select a digital card design for the recipient, including customizable messages.  
   * **Gifter Form**: Gifter is presented with a form to collect details about the recipient’s preferences such as favorite color, scent, hobby, interest, etc. This information is used by AI to personalize the gift selection process.  
2. **Recipient Experience**:  
   * Recipients receive a text message notifying them of the gift and a link to open their digital envelope.  
   * The digital envelope includes a personalized message and a gift certificate link.  
   * Upon accessing the app, the recipient is presented with a landing page showcasing a selection of gifts tailored to their preferences, as provided by the gifter and guided by AI recommendations.  
3. **Vendor Integration**:  
   * Automated purchase of selected gifts on vendor websites.  
   * Vendors handle shipping and customer service for the ordered gifts.  
   * Notifications sent to both the gifter and receiver regarding order status and tracking.

   ### **User Flow**

1. **For the Gifter**:  
   * Selects a gift certificate amount and recipient details.  
   * Completes a form collecting recipient preferences (color, scent, hobby, etc.).  
   * Chooses a digital card design and writes a personalized message.  
   * Completes payment for the gift certificate.  
   * The recipient receives a text message with a link to their digital card and gift certificate.  
2. **For the Recipient**:  
   * Receives a text message notification.  
   * Opens the digital card with the gift certificate and personalized message.  
   * Clicks the link to access the app, where they are greeted with a landing page featuring a selection of gifts tailored to their preferences.  
   * Selects a gift, which is automatically purchased from the vendor.

   ### **Technology Stack**

1. **Hosting**:  
   * **Google Firebase**: Used for hosting the app, managing user authentication, and handling real-time database interactions.  
2. **Front-End Development**:  
   * **React**: Framework for building the user interface and managing user interactions.  
3. **Back-End Development**:  
   * **Node.js**: Server-side JavaScript runtime environment for handling business logic and API integrations.  
4. **Payment Integration**:  
   * **Stripe**: Payment gateway for processing transactions securely.  
5. **AI Recommendations**:  
   * **Google Cloud AI**: For integrating AI-driven gift recommendations based on recipient preferences collected from the gifter.  
6. **Vendor Integration**:  
   * **API Integration**: To connect with vendors for automated purchasing and order fulfillment.

   ### **Timeline**

1. **Week 1-2**: Project planning and design, including wireframes and mockups.  
2. **Wireframes and Mockups**  
   1. Design rough sketches or wireframes of the app layout.  
   2. Plan out pages: **Homepage**, **Product Listing Page**, **Product Details Page**, **Cart Page**, **Checkout Page**, and **Support/Chatbot Interface**.  
   3. Use Figma to create detailed mockups.  
   4. Ensure the design is mobile-responsive.

3. **Week 3-4**: Development of front-end and back-end functionalities.  
4. **Week 5-6**: Integration of payment gateway and AI recommendation system.  
5. **Week 7**: Testing and debugging.  
6. **Week 8**: Deployment and go-live.

   ### **Deliverables**

* Complete and functional gift shopping app.  
* Digital card design templates.  
* Gifter form for collecting recipient preferences.  
* Personalized gift selection landing page for recipients.  
* Automated text message and email notifications.  
* Integrated payment and vendor systems.

  ### **Assumptions and Constraints**

* The app will initially use free-tier tools and services where available.  
* Vendor APIs are accessible and compatible with the app’s integration requirements.  
* Users have internet access and compatible devices for receiving text messages and accessing the app.

  ### **Success Criteria**

* Successful completion of all features as outlined.  
* Positive user feedback on the ease of use and overall experience.  
* Efficient handling of transactions and vendor interactions.  
  