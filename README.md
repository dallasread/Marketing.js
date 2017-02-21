# Marketing.js

Calls-to-Action that change the way your website interacts with others.

- [x] **Live Chat** - chat with your visitors - [Example HTML](./ctas/chat/demo.html)
- [x] **Wizard** - single or multi step forms - [Example HTML](./ctas/wizard/demo.html)
- [ ] Poll
- [ ] Action Bar
- [ ] Popup

To use a CTA, simply:

```
<script type="text/javascript">
    new Marketing.Chat({
        $: jQuery.noConflict(), // or similar event library (will not be necessary as of v2.0)
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
