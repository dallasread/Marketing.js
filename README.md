# Marketing.js

Calls-to-Action that change the way your website interacts with others.

Calls-to-Action
===============
- [x] **Wizard** - single or multi step forms - [Example](./ctas/wizard/index.html)
- [x] **Social Shares** - social icons - [Example](./ctas/chat/index.html)
- [x] **Cookie Notice** - display a cookie notice - [Example](./ctas/cookie-notice/index.html)
- [x] **Contact Form** - display a contact form - [Example](./ctas/contact/index.html)
- [x] **Button Link** - display a button - [Example](./ctas/button/index.html)
- [x] **Call Back** - display a button for users to schedule a call with you - [Example](./ctas/call-back/index.html)
- [x] **Survey** - display a survey - [Example](./ctas/survey/index.html)
- [ ] **Click To Call** - display a button for users to call you - [Example](./ctas/call-back/index.html)
- [ ] **Live Chat** - chat with your visitors - [Example](./ctas/chat/index.html)
- [ ] Appointment Booker
- [ ] Petition
- [ ] Poll
- [ ] Shopping Cart
- [ ] Cobrowsing

Here's a chat in action:

![Introduction](./assets/intro.gif "Introduction")

To use a CTA, simply:

```
<script type="text/javascript" src="/path/to/marketing.js"></script>
<script type="text/javascript">
    new Marketing.Chat({
        data: {
            messages: {},
            user: {},
            agent: {},
            appendTo: '.chat'
        },
        api: { // required to interact with a server
            identify: function identify() {},
            track: function track(eventName, data) {}
        }
    }).ready();
</script>
```

CTAs may require other details &mdash; check the examples above.
