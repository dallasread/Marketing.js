/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var CTAs = __webpack_require__(2),
	    Marketing = new CTAs();

	if (typeof window !== 'undefined') {
	    window.Marketing = Marketing;
	}

	module.exports = Marketing;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(3);

	var CTAs = Generator.generate(function CTAs() {});

	CTAs.definePrototype({
	    Chat: __webpack_require__(4),
	    Wizard: __webpack_require__(12)
	});

	module.exports = CTAs;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @name generate.js
	 * @author Michaelangelo Jong
	 */

	(function GeneratorScope() {
	    /**
	     * Assert Error function.
	     * @param  {Boolean} condition Whether or not to throw error.
	     * @param  {String} message    Error message.
	     */
	    function assertError(condition, message) {
	        if (!condition) {
	            throw new Error(message);
	        }
	    }

	    /**
	     * Assert TypeError function.
	     * @param  {Boolean} condition Whether or not to throw error.
	     * @param  {String} message    Error message.
	     */
	    function assertTypeError(test, type) {
	        if (typeof test !== type) {
	            throw new TypeError('Expected \'' + type +
	                '\' but instead found \'' +
	                typeof test + '\'');
	        }
	    }

	    /**
	     * Returns the name of function 'func'.
	     * @param  {Function} func Any function.
	     * @return {String}        Name of 'func'.
	     */
	    function getFunctionName(func) {
	        if (func.name !== void(0)) {
	            return func.name;
	        }
	        // Else use IE Shim
	        var funcNameMatch = func.toString()
	            .match(/function\s*([^\s]*)\s*\(/);
	        func.name = (funcNameMatch && funcNameMatch[1]) || '';
	        return func.name;
	    }

	    /**
	     * Returns true if 'obj' is an object containing only get and set functions, false otherwise.
	     * @param  {Any} obj Value to be tested.
	     * @return {Boolean} true or false.
	     */
	    function isGetSet(obj) {
	        var keys, length;
	        if (obj && typeof obj === 'object') {
	            keys = Object.getOwnPropertyNames(obj)
	                .sort();
	            length = keys.length;

	            if ((length === 1 && (keys[0] === 'get' && typeof obj.get ===
	                    'function' ||
	                    keys[0] === 'set' && typeof obj.set === 'function'
	                )) ||
	                (length === 2 && (keys[0] === 'get' && typeof obj.get ===
	                    'function' &&
	                    keys[1] === 'set' && typeof obj.set === 'function'
	                ))) {
	                return true;
	            }
	        }
	        return false;
	    }

	    /**
	     * Defines properties on 'obj'.
	     * @param  {Object} obj        An object that 'properties' will be attached to.
	     * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties on 'properties'.
	     * @param  {Object} properties An object who's properties will be attached to 'obj'.
	     * @return {Generator}         'obj'.
	     */
	    function defineObjectProperties(obj, descriptor, properties) {
	        var setProperties = {},
	            i,
	            keys,
	            length,

	            p = properties || descriptor,
	            d = properties && descriptor;

	        properties = (p && typeof p === 'object') ? p : {};
	        descriptor = (d && typeof d === 'object') ? d : {};

	        keys = Object.getOwnPropertyNames(properties);
	        length = keys.length;

	        for (i = 0; i < length; i++) {
	            if (isGetSet(properties[keys[i]])) {
	                setProperties[keys[i]] = {
	                    configurable: !!descriptor.configurable,
	                    enumerable: !!descriptor.enumerable,
	                    get: properties[keys[i]].get,
	                    set: properties[keys[i]].set
	                };
	            } else {
	                setProperties[keys[i]] = {
	                    configurable: !!descriptor.configurable,
	                    enumerable: !!descriptor.enumerable,
	                    writable: !!descriptor.writable,
	                    value: properties[keys[i]]
	                };
	            }
	        }
	        Object.defineProperties(obj, setProperties);
	        return obj;
	    }



	    var Creation = {
	        /**
	         * Defines properties on this object.
	         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
	         * @param  {Object} properties An object who's properties will be attached to this object.
	         * @return {Object}            This object.
	         */
	        defineProperties: function defineProperties(descriptor,
	            properties) {
	            defineObjectProperties(this, descriptor,
	                properties);
	            return this;
	        },

	        /**
	         * returns the prototype of `this` Creation.
	         * @return {Object} Prototype of `this` Creation.
	         */
	        getProto: function getProto() {
	            return Object.getPrototypeOf(this);
	        },

	        /**
	         * returns the prototype of `this` super Creation.
	         * @return {Object} Prototype of `this` super Creation.
	         */
	        getSuper: function getSuper() {
	            return Object.getPrototypeOf(this.constructor.prototype);
	        }
	    };

	    var Generation = {
	        /**
	         * Returns true if 'generator' was generated by this Generator.
	         * @param  {Generator} generator A Generator.
	         * @return {Boolean}             true or false.
	         */
	        isGeneration: function isGeneration(generator) {
	            assertTypeError(generator, 'function');

	            var _ = this;

	            return _.prototype.isPrototypeOf(generator.prototype);
	        },

	        /**
	         * Returns true if 'object' was created by this Generator.
	         * @param  {Object} object An Object.
	         * @return {Boolean}       true or false.
	         */
	        isCreation: function isCreation(object) {
	            var _ = this;
	            return object instanceof _;
	        },
	        /**
	         * Generates a new generator that inherits from `this` generator.
	         * @param {Generator} ParentGenerator Generator to inherit from.
	         * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	         * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	         */
	        generate: function generate(construct) {
	            assertTypeError(construct, 'function');

	            var _ = this;

	            defineObjectProperties(
	                construct, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                }, {
	                    prototype: Object.create(_.prototype)
	                }
	            );

	            defineObjectProperties(
	                construct, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                },
	                Generation
	            );

	            defineObjectProperties(
	                construct.prototype, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                }, {
	                    constructor: construct,
	                    generator: construct,
	                }
	            );

	            return construct;
	        },

	        /**
	         * Defines shared properties for all objects created by this generator.
	         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
	         * @param  {Object} properties An object who's properties will be attached to this generator's prototype.
	         * @return {Generator}         This generator.
	         */
	        definePrototype: function definePrototype(descriptor,
	            properties) {
	            defineObjectProperties(this.prototype,
	                descriptor,
	                properties);
	            return this;
	        }
	    };

	    function Generator() {}

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        }, {
	            prototype: Generator.prototype
	        }
	    );

	    defineObjectProperties(
	        Generator.prototype, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        },
	        Creation
	    );

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        },
	        Generation
	    );

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        }, {
	            /**
	             * Returns true if 'generator' was generated by this Generator.
	             * @param  {Generator} generator A Generator.
	             * @return {Boolean}             true or false.
	             */
	            isGenerator: function isGenerator(generator) {
	                return this.isGeneration(generator);
	            },

	            /**
	             * Generates a new generator that inherits from `this` generator.
	             * @param {Generator} extendFrom      Constructor to inherit from.
	             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	             */
	            toGenerator: function toGenerator(extendFrom, create) {
	                console.warn(
	                    'Generator.toGenerator is depreciated please use Generator.generateFrom'
	                );
	                return this.generateFrom(extendFrom, create);
	            },

	            /**
	             * Generates a new generator that inherits from `this` generator.
	             * @param {Constructor} extendFrom    Constructor to inherit from.
	             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	             */
	            generateFrom: function generateFrom(extendFrom, create) {
	                assertTypeError(extendFrom, 'function');
	                assertTypeError(create, 'function');

	                defineObjectProperties(
	                    create, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    }, {
	                        prototype: Object.create(extendFrom.prototype),
	                    }
	                );

	                defineObjectProperties(
	                    create, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    },
	                    Generation
	                );

	                defineObjectProperties(
	                    create.prototype, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    }, {
	                        constructor: create,
	                        generator: create,
	                    }
	                );

	                defineObjectProperties(
	                    create.prototype, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    },
	                    Creation
	                );

	                return create;
	            }
	        }
	    );

	    Object.freeze(Generator);
	    Object.freeze(Generator.prototype);

	    // Exports
	    if (true) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return Generator;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && typeof exports === 'object') {
	        // Node/CommonJS
	        module.exports = Generator;
	    } else {
	        // Browser global
	        window.Generator = Generator;
	    }

	}());


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);

	var CTA = __webpack_require__(7),
	    howler = __webpack_require__(118),
	    CONFIG = {
	        template: '{{>?currentPath}}',
	        partials: {
	            '/prompter': __webpack_require__(8),
	            '/interactions': __webpack_require__(9)
	        },
	        transforms: __webpack_require__(10)
	    };

	var Chat = CTA.createCTA(CONFIG, function Chat(options) {
	    var _ = this;

	    options.data.currentPath = '/prompter';
	    options.bell = new howler.Howl({
	        autoplay: false,
	        src: [
	            '/audio/pling.ogg',
	            '/audio/pling.mp3',
	            '/audio/pling.wav'
	        ]
	    });

	    CTA.call(_, options);
	});

	Chat.definePrototype({
	    ready: function ready() {
	        var _ = this;

	        CTA.prototype.ready.call(_);

	        if (!_.get('events.length')) {
	            _.emit('noMessages');
	        }

	        return _;
	    },

	    addMessage: function addMessage(msg) {
	        var _ = this;

	        _.push('events', msg);

	        if (msg.data.from === 'agent') {
	            _.bell.stop();
	            _.bell.play();
	        }

	        _.scrollMessages();
	    },

	    scrollMessages: function scrollMessages() {
	        var _ = this,
	            $messages = _.$el.find('.interactions .messages');

	        if ($messages.length) {
	            $messages.scrollTop( $messages[0].scrollHeight );
	        }
	    }
	});

	Chat.definePrototype(__webpack_require__(11));

	module.exports = Chat;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Trigger = __webpack_require__(6);

	Trigger.registerEvent('noMessages', function bindNoMessageEvent() {
	    var _ = this;

	    _.cta.on(_.event, function noMessageEvent() {
	        _.trigger(function() {
	            var msg = {
	                data: {
	                    action: 'message',
	                    from: 'agent',
	                    agent: _.cta.get('agent'),
	                    message: _.message
	                }
	            };

	            _.cta.addMessage(msg);
	        });
	    });
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(3);

	var Trigger = Generator.generate(function Trigger(options) {
	    var _ = this;

	    if (typeof options.cta !== 'object') throw new Error('`options.cta` is required.');

	    options.event           = options.event      || 'ready';
	    options.action          = options.action     || 'show';

	    options.visibility      = options.visibility || {};
	    options.data            = options.data       || {};

	    options.wait            = parseInt(options.wait)   || 0;
	    options.scroll          = options.scroll || 0;
	    options.offset          = parseInt(options.offset || options.cta.offset) || new Date().getTimezoneOffset();

	    if (typeof options.onceler === 'undefined') options.onceler = ['ready', 'exit', 'scroll'].indexOf(options.event) !== -1;

	    _.defineProperties(options);

	    if (_.cta.isVisibleForURL(_.visibility.show, _.visibility.hide)) {
	        _.bind();
	    }
	});

	Trigger.definePrototype({
	    bind: function bind() {
	        var _ = this,
	            func = Trigger.EVENTS[_.event];

	        if (typeof func === 'function') {
	            func.apply(_);
	        } else if (_.target) {
	            _.bindBasicEvent();
	        } else {
	            _.bindCTAEvent();
	        }
	    },

	    bindCTAEvent: function bindCTAEvent() {
	        var _ = this;

	        _.cta.on(_.event, function basicEvent() {
	            _.trigger();
	        });
	    },

	    bindBasicEvent: function bindBasicEvent() {
	        var _ = this;

	        _.$(document).on(_.event, _.target, function bindBasicEvent() {
	            _.trigger();
	            return false;
	        });
	    },

	    trigger: function trigger(func) {
	        var _ = this;

	        if (_.onceler && _.triggered) return;

	        function defaultFunc() {
	            if (typeof _.action === 'function') {
	                _.action(_.data);
	            } else {
	                _.cta[_.action](_.data);
	            }
	        }

	        _.defineProperties({ triggered: true });

	        setTimeout(func || defaultFunc, _.wait);
	    }
	});

	Trigger.EVENTS = {};

	Trigger.registerEvent = function registerEvent(name, func) {
	    this.EVENTS[name] = func;
	};

	module.exports = Trigger;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);

	var Store = __webpack_require__(16),
	    Trigger = __webpack_require__(6),
	    createCTA = __webpack_require__(19),
	    showBySchedule = __webpack_require__(116);

	function objectValues(obj) {
	    return Object.keys(obj).map(function(i) {
	        return obj[i];
	    });
	}

	var CTA = Store.generate(function CTA(options) {
	    var _ = this;

	    if (typeof options !== 'object')      return console.warn('`CTA.options` must be an object.');
	    if (typeof options.$ === 'undefined') return console.warn('`CTA.$` is required.');

	    Store.call(_, options.data);

	    _.defineProperties({
	        dom: _.bars.build(_.bars.preCompile(options.template || _.template, 'index', null, {
	            minify: true
	        }), _._data)
	    });

	    delete options.data;

	    options.$el = options.$(_.dom.rootNode);

	    _.defineProperties(options);

	    _.registerEvents(_.$el);

	    _.on('update', function() {
	        _.dom.update(_._data);
	    });
	});

	CTA.createCTA = createCTA;
	CTA.definePrototype(__webpack_require__(117));

	CTA.definePrototype({
	    ready: function ready() {
	        var _ = this,
	            triggers = _.get('cta.data.triggers'),
	            id = 'cta-' + (_.get('cta.id') || Date.now());

	        if (!_.isVisibleForURL(_.get('cta.visibility.show'), _.get('cta.visibility.hide'))) return console.warn('CTA outside of URL.');

	        _.$el.attr('id', id);
	        _.$el.addClass('cta cta-' + _.constructor.name.toLowerCase());
	        _.$el.addClass('cta cta-position-' + _.get('cta.data.position'));

	        if (_.get('cta.data.colours.primary')) {
	            _.$('<style type="text/css">\
	                #' + id + ' .primary-bg {\
	                    background: ' + _.get('cta.data.colours.primary') + '\
	                }\
	            </style>').appendTo('body');
	        }

	        for (var key in (triggers || {})) {
	            _.registerTrigger( triggers[key] );
	        }

	        _.dom.update(_._data);
	        _.append();
	        _.emit('ready');

	        return _;
	    },

	    registerTrigger: function registerTrigger(trigger) {
	        trigger.$ = this.$;
	        trigger.cta = this;
	        return new Trigger( trigger );
	    },

	    registerEvents: function registerEvents($el) {
	        var _ = this;

	        $el.on('click', '[data-go]', function() {
	            _.set('currentPath', this.dataset.go);
	            return false;
	        });
	    },

	    showBySchedule: showBySchedule,

	    append: function append() {
	        var _ = this,
	            $target = _.$(typeof _.target === 'object' ? _.target.element : _.target || 'body'),
	            method = typeof _.target === 'object' && _.target.method;

	        _.$el.hide();

	        if (method === 'replaceWith') {
	            $target.replaceWith(_.$el);
	        } else if (method === 'append') {
	            $target.replaceWith(_.$el);
	        } else if (method === 'html') {
	            $target.html(_.$el);
	        } else {
	            _.$el.appendTo($target);
	        }
	    },

	    isVisibleForURL: function isVisibleForURL(show, hide) {
	        var url = window.location.href,
	            path;

	        if (!(show instanceof Array)) show = objectValues(show || { 0: '*' });
	        if (!(hide instanceof Array)) hide = objectValues(hide || {});

	        if (typeof show === 'string') show = show.replace(/\s+/, '').split(',');
	        if (typeof hide === 'string') hide = hide.replace(/\s+/, '').split(',');

	        for (var i = hide.length - 1; i >= 0; i--) {
	            path = hide[i];

	            if (typeof path === 'string') path = new RegExp('^' + path.replace(/\*/g, '(.*?)') + '$');

	            if (path.test(url)) {
	                return false;
	            }
	        }

	        for (i = show.length - 1; i >= 0; i--) {
	            path = show[i];

	            if (typeof path === 'string') path = new RegExp('^' + path.replace(/\*/g, '(.*?)') + '$');

	            if (path.test(url)) {
	                return true;
	            }
	        }

	        return false;
	    }
	});

	module.exports = CTA;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<a href=\"#\" data-go=\"/interactions\" class=\"prompter animated bounceIn\">\n    {{#with @lastReceivedMessage(events)}}\n        <p class=\"bubble from-agent primary-bg animated bounceIn\">\n            {{@truncate(data.message.body, 105)}}\n        </p>\n    {{/with}}\n    <img src=\"{{@avatar(convo/data/agent)}}\" class=\"primary-bg\">\n</a>\n";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"interactions animated fadeInUp\">\n     <a href=\"#\" data-go=\"/prompter\" class=\"head primary-bg\">\n         <h2>\n            {{cta.name}}\n            <span>-</span>\n         </h2>\n     </a>\n\n     <div class=\"meta\">\n         <a>\n             <img src=\"{{@avatar(agent)}}\" class=\"primary-bg\">\n         </a>\n         <p>You're chatting with<br><strong>{{agent.name}}</strong></p>\n     </div>\n\n     <div class=\"messages-wrapper\">\n         <ul class=\"messages\">\n             {{#each events}}\n                 <li class=\"bubble animated {{#if data.from === 'agent'}}primary-bg from-agent slideInRight{{else}}{{#if data.from === 'system'}}from-system slideInUp{{else}}slideInUp{{/if}}{{/if}}\">\n                    {{data.message.body}}\n                </li>\n             {{/each}}\n         </ul>\n\n         <div class=\"bubble new-message-wrapper\">\n             <form>\n                 <textarea placeholder=\"Your message here...\"></textarea>\n             </form>\n         </div>\n     </div>\n </div>\n";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	    truncate: function truncate(str, length, ellipsis) {
	        if (!str) return '';
	        if (str.length < length) return str;
	        return str.slice(0, length) + (ellipsis || '...');
	    },
	    lastReceivedMessage: function lastReceivedMessage(events) {
	        events = (events || []).filter(function(e) {
	            return e.data && e.data.action === 'message' && e.data.from !== 'visitor';
	        });

	        if (!events.length) return;

	        return events[events.length - 1];
	    },
	    avatar: function avatar(agent) {
	        if (!agent) return;
	        var avatarsURL = window.Marketing.assetsUrl + '/avatars/';
	        if (!agent.avatar) return avatarsURL + Math.floor((agent.email + '').length / 7) + '.jpg';
	        return agent.avatar;
	    }
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var CTA = __webpack_require__(7);

	module.exports = {
	    registerEvents: function registerEvents($el) {
	        var _ = this;

	        CTA.prototype.registerEvents.call(_, $el);

	        _.on('update', function(key, value) {
	            if (key === 'currentPath' && value === '/interactions') {
	                setTimeout(function() {
	                    $el.find('textarea').trigger('focus');
	                }, 0);
	            }
	        });

	        $el.on('keypress', 'textarea', function(e) {
	            if ((e.keyCode ? e.keyCode : e.which) !== 13) return;
	            $el.find('form').trigger('submit');
	            return false;
	        });

	        $el.on('submit', 'form', function() {
	            var _publish = { pusher: true };

	            if (/*!this.get('convo.data.agent.online') &&*/ _.showBySchedule(_.get('convo.data.agent.schedules'), _.get('convo.data.agent.offset'))) {
	                _publish.twilio = true;
	            }

	            var $textarea = $el.find('textarea'),
	                body = $textarea.val().trim(),
	                thing = {
	                    model: 'event',
	                    data: {
	                        action: 'message',
	                        message: {
	                            body: body
	                        },
	                        convo: _.get('convo.id'),
	                        user: _.get('convo.data.user.id'),
	                        cta: _.get('cta.id'),
	                        from: 'visitor'
	                    },
	                    _publish: _publish
	                };

	            if (!body.length) return false;

	            $textarea.val('');

	            // _.api.post('/things', { thing: thing }, function() { });
	            _.addMessage(thing);

	            return false;
	        });
	    }
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var CTA = __webpack_require__(7),
	    CONFIG = {
	        template: __webpack_require__(13),
	        partials: {
	            form: __webpack_require__(14)
	        }
	    };

	var Wizard = CTA.createCTA(CONFIG, function Wizard(options) {
	    var _ = this;
	    CTA.call(_, options);
	    _.changeForm(_.initialForm);
	});

	Wizard.definePrototype({
	    registerEvents: function registerEvents($el) {
	        var _ = this,
	            forms = _.get('cta.forms');

	        CTA.prototype.registerEvents.call(_, $el);

	        $el.on('submit', 'form', function() {
	            var useNext;

	            for (var key in forms) {
	                if (useNext) {
	                    _.changeForm( forms[key] );
	                    break;
	                } else if (forms[key] === _.get('currentForm')) {
	                    useNext = true;
	                }
	            }

	            console.log(_, _.$(this), _.$(this).html());

	            return false;
	        });
	    }
	});

	Wizard.definePrototype({
	    changeForm: function changeForm(form) {
	        var _ = this,
	            forms = _.get('cta.forms');

	        if (typeof forms === 'object') {
	            if (typeof form === 'string') {
	                form = forms[form];
	            }

	            form = form || forms[Object.keys(forms)[0]];
	        }

	        _.set('currentForm', form);
	    },
	});

	module.exports = Wizard;


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "{{>form form=currentForm}}\n";

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "{{#with form}}\n    <form>\n        {{#each fields}}\n            <div class=\"field\">\n                <label for=\"_{{@key}}\">{{label}}</label>\n\n                {{#if type}}\n                    <input type=\"{{type}}\" id=\"_{{@key}}\" name=\"{{@key}}\">\n                {{/if}}\n            </div>\n        {{/each}}\n    </form>\n{{/with}}\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var Trigger = __webpack_require__(6);

	Trigger.registerEvent('scroll', function bindScrollEvent() {
	    var _              = this,
	        $window        = _.$(window),
	        windowHeight   = _.$(window).height(),
	        documentHeight = _.$(document).height(),
	        isTag          = typeof _.scroll === 'string' && !/%|px/.test(_.scroll),
	        isPercent      = typeof _.scroll === 'string' &&     /%/.test(_.scroll);

	    function onScroll() {
	        var scrollTop = $window.scrollTop();

	        if (isTag) {
	            var tagOffset = _.$(_.scroll).offset().top;

	            if (scrollTop + windowHeight >= tagOffset) {
	                $window.off('scroll', onScroll);
	                _.trigger();
	            }
	        } else if (isPercent) {
	            var percent = (scrollTop + windowHeight) / documentHeight * 100;

	            if (percent >= parseInt(_.scroll)) {
	                $window.off('scroll', onScroll);
	                _.trigger();
	            }
	        } else {
	            var scrolled = scrollTop + windowHeight;

	            if (scrolled >= parseInt(_.scroll)) {
	                $window.off('scroll', onScroll);
	                _.trigger();
	            }
	        }
	    }

	    $window.on('scroll', onScroll);
	});

	Trigger.registerEvent('exit', function bindExitEvent() {
	    var _ = this,
	        $document = _.$(document);

	    function mouseLeave() {
	        $document.off('mouseleave', mouseLeave);
	        _.trigger();
	    }

	    $document.on('mouseleave', mouseLeave);
	});


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(17),
	    events = __webpack_require__(18);

	var Store = Generator.generateFrom(events.EventEmitter, function Store(data) {
	    var _ = this;

	    _.defineProperties({
	        _data: data || {}
	    });
	});

	Store.definePrototype({
	    set: function set(key, value) {
	        this._data = typeof this._data === 'object' ? this._data : {};

	        var _ = this,
	            splat = key.split(/\/|\./),
	            lastKey = splat.pop(),
	            obj = _._data;

	        for (var i = 0; i < splat.length; i++) {
	            if (typeof obj[splat[i]] !== 'object') {
	                obj[splat[i]] = {};
	            }

	            obj = obj[splat[i]];
	        }

	        obj[lastKey] = value;

	        _.emit('update', key, value);

	        return value;
	    },

	    unset: function unset(key) {
	        this._data = typeof this._data === 'object' ? this._data : {};

	        var _ = this,
	            splat = key.split(/\/|\./),
	            lastKey = splat.pop(),
	            obj = _._data;

	        for (var i = 0; i < splat.length; i++) {
	            if (typeof obj[splat[i]] !== 'object') {
	                obj[splat[i]] = {};
	            }

	            obj = obj[splat[i]];
	        }

	        delete obj[lastKey];

	        obj = _._data;

	        for (i = 0; i < splat.length; i++) {
	            if (typeof obj[splat[i]] === 'object' && !Object.keys(obj[splat[i]]).length) {
	                delete obj[splat[i]];
	                break;
	            }

	            obj = obj[splat[i]];
	        }

	        _.emit('update', key);
	    },

	    get: function get(key) {
	        var _ = this,
	            splat = key.split(/\/|\./),
	            lastKey = splat.pop(),
	            obj = _._data;

	        for (var i = 0; i < splat.length; i++) {
	            obj = obj[splat[i]];
	            if (!obj) return;
	        }

	        return obj[lastKey];
	    },

	    push: function push(key, value) {
	        var _ = this,
	            arr = _.get(key);

	        if (arr instanceof Array) {
	            arr.push(value);
	            _.set(key, arr);
	        } else {
	            _.set(key, [value]);
	        }
	    }
	});

	module.exports = Store;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @name generate.js
	 * @author Michaelangelo Jong
	 */

	(function GeneratorScope() {
	    /**
	     * Assert Error function.
	     * @param  {Boolean} condition Whether or not to throw error.
	     * @param  {String} message    Error message.
	     */
	    function assertError(condition, message) {
	        if (!condition) {
	            throw new Error(message);
	        }
	    }

	    /**
	     * Assert TypeError function.
	     * @param  {Boolean} condition Whether or not to throw error.
	     * @param  {String} message    Error message.
	     */
	    function assertTypeError(test, type) {
	        if (typeof test !== type) {
	            throw new TypeError('Expected \'' + type +
	                '\' but instead found \'' +
	                typeof test + '\'');
	        }
	    }

	    /**
	     * Returns the name of function 'func'.
	     * @param  {Function} func Any function.
	     * @return {String}        Name of 'func'.
	     */
	    function getFunctionName(func) {
	        if (func.name !== void(0)) {
	            return func.name;
	        }
	        // Else use IE Shim
	        var funcNameMatch = func.toString()
	            .match(/function\s*([^\s]*)\s*\(/);
	        func.name = (funcNameMatch && funcNameMatch[1]) || '';
	        return func.name;
	    }

	    /**
	     * Returns true if 'obj' is an object containing only get and set functions, false otherwise.
	     * @param  {Any} obj Value to be tested.
	     * @return {Boolean} true or false.
	     */
	    function isGetSet(obj) {
	        var keys, length;
	        if (obj && typeof obj === 'object') {
	            keys = Object.getOwnPropertyNames(obj)
	                .sort();
	            length = keys.length;

	            if ((length === 1 && (keys[0] === 'get' && typeof obj.get ===
	                    'function' ||
	                    keys[0] === 'set' && typeof obj.set === 'function'
	                )) ||
	                (length === 2 && (keys[0] === 'get' && typeof obj.get ===
	                    'function' &&
	                    keys[1] === 'set' && typeof obj.set === 'function'
	                ))) {
	                return true;
	            }
	        }
	        return false;
	    }

	    /**
	     * Defines properties on 'obj'.
	     * @param  {Object} obj        An object that 'properties' will be attached to.
	     * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties on 'properties'.
	     * @param  {Object} properties An object who's properties will be attached to 'obj'.
	     * @return {Generator}         'obj'.
	     */
	    function defineObjectProperties(obj, descriptor, properties) {
	        var setProperties = {},
	            i,
	            keys,
	            length,

	            p = properties || descriptor,
	            d = properties && descriptor;

	        properties = (p && typeof p === 'object') ? p : {};
	        descriptor = (d && typeof d === 'object') ? d : {};

	        keys = Object.getOwnPropertyNames(properties);
	        length = keys.length;

	        for (i = 0; i < length; i++) {
	            if (isGetSet(properties[keys[i]])) {
	                setProperties[keys[i]] = {
	                    configurable: !!descriptor.configurable,
	                    enumerable: !!descriptor.enumerable,
	                    get: properties[keys[i]].get,
	                    set: properties[keys[i]].set
	                };
	            } else {
	                setProperties[keys[i]] = {
	                    configurable: !!descriptor.configurable,
	                    enumerable: !!descriptor.enumerable,
	                    writable: !!descriptor.writable,
	                    value: properties[keys[i]]
	                };
	            }
	        }
	        Object.defineProperties(obj, setProperties);
	        return obj;
	    }



	    var Creation = {
	        /**
	         * Defines properties on this object.
	         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
	         * @param  {Object} properties An object who's properties will be attached to this object.
	         * @return {Object}            This object.
	         */
	        defineProperties: function defineProperties(descriptor,
	            properties) {
	            defineObjectProperties(this, descriptor,
	                properties);
	            return this;
	        },

	        /**
	         * returns the prototype of `this` Creation.
	         * @return {Object} Prototype of `this` Creation.
	         */
	        getProto: function getProto() {
	            return Object.getPrototypeOf(this);
	        },

	        /**
	         * returns the prototype of `this` super Creation.
	         * @return {Object} Prototype of `this` super Creation.
	         */
	        getSuper: function getSuper() {
	            return Object.getPrototypeOf(this.constructor.prototype);
	        }
	    };

	    var Generation = {
	        /**
	         * Returns true if 'generator' was generated by this Generator.
	         * @param  {Generator} generator A Generator.
	         * @return {Boolean}             true or false.
	         */
	        isGeneration: function isGeneration(generator) {
	            assertTypeError(generator, 'function');

	            var _ = this;

	            return _.prototype.isPrototypeOf(generator.prototype);
	        },

	        /**
	         * Returns true if 'object' was created by this Generator.
	         * @param  {Object} object An Object.
	         * @return {Boolean}       true or false.
	         */
	        isCreation: function isCreation(object) {
	            var _ = this;
	            return object instanceof _;
	        },
	        /**
	         * Generates a new generator that inherits from `this` generator.
	         * @param {Generator} ParentGenerator Generator to inherit from.
	         * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	         * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	         */
	        generate: function generate(construct) {
	            assertTypeError(construct, 'function');

	            var _ = this;

	            defineObjectProperties(
	                construct, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                }, {
	                    prototype: Object.create(_.prototype)
	                }
	            );

	            defineObjectProperties(
	                construct, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                },
	                Generation
	            );

	            defineObjectProperties(
	                construct.prototype, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                }, {
	                    constructor: construct,
	                    generator: construct,
	                }
	            );

	            return construct;
	        },

	        /**
	         * Defines shared properties for all objects created by this generator.
	         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
	         * @param  {Object} properties An object who's properties will be attached to this generator's prototype.
	         * @return {Generator}         This generator.
	         */
	        definePrototype: function definePrototype(descriptor,
	            properties) {
	            defineObjectProperties(this.prototype,
	                descriptor,
	                properties);
	            return this;
	        }
	    };

	    function Generator() {}

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        }, {
	            prototype: Generator.prototype
	        }
	    );

	    defineObjectProperties(
	        Generator.prototype, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        },
	        Creation
	    );

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        },
	        Generation
	    );

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        }, {
	            /**
	             * Returns true if 'generator' was generated by this Generator.
	             * @param  {Generator} generator A Generator.
	             * @return {Boolean}             true or false.
	             */
	            isGenerator: function isGenerator(generator) {
	                return this.isGeneration(generator);
	            },

	            /**
	             * Generates a new generator that inherits from `this` generator.
	             * @param {Generator} extendFrom      Constructor to inherit from.
	             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	             */
	            toGenerator: function toGenerator(extendFrom, create) {
	                console.warn(
	                    'Generator.toGenerator is depreciated please use Generator.generateFrom'
	                );
	                return this.generateFrom(extendFrom, create);
	            },

	            /**
	             * Generates a new generator that inherits from `this` generator.
	             * @param {Constructor} extendFrom    Constructor to inherit from.
	             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	             */
	            generateFrom: function generateFrom(extendFrom, create) {
	                assertTypeError(extendFrom, 'function');
	                assertTypeError(create, 'function');

	                defineObjectProperties(
	                    create, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    }, {
	                        prototype: Object.create(extendFrom.prototype),
	                    }
	                );

	                defineObjectProperties(
	                    create, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    },
	                    Generation
	                );

	                defineObjectProperties(
	                    create.prototype, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    }, {
	                        constructor: create,
	                        generator: create,
	                    }
	                );

	                defineObjectProperties(
	                    create.prototype, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    },
	                    Creation
	                );

	                return create;
	            }
	        }
	    );

	    Object.freeze(Generator);
	    Object.freeze(Generator.prototype);

	    // Exports
	    if (true) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return Generator;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && typeof exports === 'object') {
	        // Node/CommonJS
	        module.exports = Generator;
	    } else {
	        // Browser global
	        window.Generator = Generator;
	    }

	}());


/***/ },
/* 18 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var Bars = __webpack_require__(20),
	    registerBars = __webpack_require__(115);

	module.exports = function createCTA(config, constructor) {
	    var _ = this,
	        bars = new Bars(),
	        el = _.generate(constructor);

	    el.createCTA = createCTA;
	    el.registerBars = registerBars(bars);
	    el.registerBars(config);

	    return el;
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Bars = __webpack_require__(23),
	    compile = __webpack_require__(90);

	Bars.definePrototype({
	    compile: function compile(template, filename, mode, flags) {
	        var _ = this;
	        return _.build(_.preCompile(template, filename, mode,
	            flags));
	    },

	    preCompile: function preCompile(template, filename, mode, flags) {
	        return compile(template, filename, mode, flags);
	    }
	});

	module.exports = Bars;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(24),
	    Renderer = __webpack_require__(25),
	    Token = __webpack_require__(66),
	    Blocks = __webpack_require__(88),
	    Transform = __webpack_require__(89),
	    packageJSON = __webpack_require__(74);

	var Bars = Generator.generate(function Bars() {
	    var _ = this;

	    _.defineProperties({
	        blocks: new Blocks(),
	        partials: {},
	        transforms: new Transform()
	    });
	});

	Bars.definePrototype({
	    version: packageJSON.version,
	    build: function build(parsedTemplate, state) {
	        var _ = this,
	            program = parsedTemplate;

	        if (Array.isArray(parsedTemplate)) {
	            program = new Token.tokens.program();

	            program.fromArray(parsedTemplate);
	        }

	        return new Renderer(_, program, state);
	    },

	    registerBlock: function registerBlock(name, block) {
	        var _ = this;

	        _.blocks[name] = block;
	    },

	    registerPartial: function registerPartial(name, compiledTemplate) {
	        var _ = this;

	        if (typeof compiledTemplate === 'string') {
	            if (!_.preCompile) {
	                throw 'partials must be pre-compiled using bars.preCompile(template)';
	            }
	            compiledTemplate = _.preCompile(compiledTemplate, name, null, {
	                minify: true
	            });
	        }

	        var program = compiledTemplate;

	        if (Array.isArray(compiledTemplate)) {
	            program = new Token.tokens.program();

	            program.fromArray(compiledTemplate);
	        }

	        _.partials[name] = program;
	    },

	    registerTransform: function registerTransform(name, func) {
	        var _ = this;

	        _.transforms[name] = func;
	    },
	});

	module.exports = Bars;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @name generate.js
	 * @author Michaelangelo Jong
	 */

	(function GeneratorScope() {
	    /**
	     * Assert Error function.
	     * @param  {Boolean} condition Whether or not to throw error.
	     * @param  {String} message    Error message.
	     */
	    function assertError(condition, message) {
	        if (!condition) {
	            throw new Error(message);
	        }
	    }

	    /**
	     * Assert TypeError function.
	     * @param  {Boolean} condition Whether or not to throw error.
	     * @param  {String} message    Error message.
	     */
	    function assertTypeError(test, type) {
	        if (typeof test !== type) {
	            throw new TypeError('Expected \'' + type +
	                '\' but instead found \'' +
	                typeof test + '\'');
	        }
	    }

	    /**
	     * Returns the name of function 'func'.
	     * @param  {Function} func Any function.
	     * @return {String}        Name of 'func'.
	     */
	    function getFunctionName(func) {
	        if (func.name !== void(0)) {
	            return func.name;
	        }
	        // Else use IE Shim
	        var funcNameMatch = func.toString()
	            .match(/function\s*([^\s]*)\s*\(/);
	        func.name = (funcNameMatch && funcNameMatch[1]) || '';
	        return func.name;
	    }

	    /**
	     * Returns true if 'obj' is an object containing only get and set functions, false otherwise.
	     * @param  {Any} obj Value to be tested.
	     * @return {Boolean} true or false.
	     */
	    function isGetSet(obj) {
	        var keys, length;
	        if (obj && typeof obj === 'object') {
	            keys = Object.getOwnPropertyNames(obj)
	                .sort();
	            length = keys.length;

	            if ((length === 1 && (keys[0] === 'get' && typeof obj.get ===
	                    'function' ||
	                    keys[0] === 'set' && typeof obj.set === 'function'
	                )) ||
	                (length === 2 && (keys[0] === 'get' && typeof obj.get ===
	                    'function' &&
	                    keys[1] === 'set' && typeof obj.set === 'function'
	                ))) {
	                return true;
	            }
	        }
	        return false;
	    }

	    /**
	     * Defines properties on 'obj'.
	     * @param  {Object} obj        An object that 'properties' will be attached to.
	     * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties on 'properties'.
	     * @param  {Object} properties An object who's properties will be attached to 'obj'.
	     * @return {Generator}         'obj'.
	     */
	    function defineObjectProperties(obj, descriptor, properties) {
	        var setProperties = {},
	            i,
	            keys,
	            length,

	            p = properties || descriptor,
	            d = properties && descriptor;

	        properties = (p && typeof p === 'object') ? p : {};
	        descriptor = (d && typeof d === 'object') ? d : {};

	        keys = Object.getOwnPropertyNames(properties);
	        length = keys.length;

	        for (i = 0; i < length; i++) {
	            if (isGetSet(properties[keys[i]])) {
	                setProperties[keys[i]] = {
	                    configurable: !!descriptor.configurable,
	                    enumerable: !!descriptor.enumerable,
	                    get: properties[keys[i]].get,
	                    set: properties[keys[i]].set
	                };
	            } else {
	                setProperties[keys[i]] = {
	                    configurable: !!descriptor.configurable,
	                    enumerable: !!descriptor.enumerable,
	                    writable: !!descriptor.writable,
	                    value: properties[keys[i]]
	                };
	            }
	        }
	        Object.defineProperties(obj, setProperties);
	        return obj;
	    }



	    var Creation = {
	        /**
	         * Defines properties on this object.
	         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
	         * @param  {Object} properties An object who's properties will be attached to this object.
	         * @return {Object}            This object.
	         */
	        defineProperties: function defineProperties(descriptor,
	            properties) {
	            defineObjectProperties(this, descriptor,
	                properties);
	            return this;
	        },

	        /**
	         * returns the prototype of `this` Creation.
	         * @return {Object} Prototype of `this` Creation.
	         */
	        getProto: function getProto() {
	            return Object.getPrototypeOf(this);
	        },

	        /**
	         * returns the prototype of `this` super Creation.
	         * @return {Object} Prototype of `this` super Creation.
	         */
	        getSuper: function getSuper() {
	            return Object.getPrototypeOf(this.constructor.prototype);
	        }
	    };

	    var Generation = {
	        /**
	         * Returns true if 'generator' was generated by this Generator.
	         * @param  {Generator} generator A Generator.
	         * @return {Boolean}             true or false.
	         */
	        isGeneration: function isGeneration(generator) {
	            assertTypeError(generator, 'function');

	            var _ = this;

	            return _.prototype.isPrototypeOf(generator.prototype);
	        },

	        /**
	         * Returns true if 'object' was created by this Generator.
	         * @param  {Object} object An Object.
	         * @return {Boolean}       true or false.
	         */
	        isCreation: function isCreation(object) {
	            var _ = this;
	            return object instanceof _;
	        },
	        /**
	         * Generates a new generator that inherits from `this` generator.
	         * @param {Generator} ParentGenerator Generator to inherit from.
	         * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	         * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	         */
	        generate: function generate(construct) {
	            assertTypeError(construct, 'function');

	            var _ = this;

	            defineObjectProperties(
	                construct, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                }, {
	                    prototype: Object.create(_.prototype)
	                }
	            );

	            defineObjectProperties(
	                construct, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                },
	                Generation
	            );

	            defineObjectProperties(
	                construct.prototype, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                }, {
	                    constructor: construct,
	                    generator: construct,
	                }
	            );

	            return construct;
	        },

	        /**
	         * Defines shared properties for all objects created by this generator.
	         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
	         * @param  {Object} properties An object who's properties will be attached to this generator's prototype.
	         * @return {Generator}         This generator.
	         */
	        definePrototype: function definePrototype(descriptor,
	            properties) {
	            defineObjectProperties(this.prototype,
	                descriptor,
	                properties);
	            return this;
	        }
	    };

	    function Generator() {}

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        }, {
	            prototype: Generator.prototype
	        }
	    );

	    defineObjectProperties(
	        Generator.prototype, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        },
	        Creation
	    );

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        },
	        Generation
	    );

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        }, {
	            /**
	             * Returns true if 'generator' was generated by this Generator.
	             * @param  {Generator} generator A Generator.
	             * @return {Boolean}             true or false.
	             */
	            isGenerator: function isGenerator(generator) {
	                return this.isGeneration(generator);
	            },

	            /**
	             * Generates a new generator that inherits from `this` generator.
	             * @param {Generator} extendFrom      Constructor to inherit from.
	             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	             */
	            toGenerator: function toGenerator(extendFrom, create) {
	                console.warn(
	                    'Generator.toGenerator is depreciated please use Generator.generateFrom'
	                );
	                return this.generateFrom(extendFrom, create);
	            },

	            /**
	             * Generates a new generator that inherits from `this` generator.
	             * @param {Constructor} extendFrom    Constructor to inherit from.
	             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	             */
	            generateFrom: function generateFrom(extendFrom, create) {
	                assertTypeError(extendFrom, 'function');
	                assertTypeError(create, 'function');

	                defineObjectProperties(
	                    create, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    }, {
	                        prototype: Object.create(extendFrom.prototype),
	                    }
	                );

	                defineObjectProperties(
	                    create, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    },
	                    Generation
	                );

	                defineObjectProperties(
	                    create.prototype, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    }, {
	                        constructor: create,
	                        generator: create,
	                    }
	                );

	                defineObjectProperties(
	                    create.prototype, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    },
	                    Creation
	                );

	                return create;
	            }
	        }
	    );

	    Object.freeze(Generator);
	    Object.freeze(Generator.prototype);

	    // Exports
	    if (true) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return Generator;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && typeof exports === 'object') {
	        // Node/CommonJS
	        module.exports = Generator;
	    } else {
	        // Browser global
	        window.Generator = Generator;
	    }

	}());


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(24);
	var ContextN = __webpack_require__(26);
	var renderV = __webpack_require__(28);
	var renderT = __webpack_require__(49);

	var diff = __webpack_require__(50);
	var patch = __webpack_require__(56);
	var createElement = __webpack_require__(65);

	function repeat(a, n) {
	    n = n || 0;
	    var r = '';
	    for (var i = 0; i < n; i++) {
	        r += a;
	    }
	    return r;
	}

	var Renderer = Generator.generate(function Renderer(bars, struct, state) {
	    var _ = this;

	    _.bars = bars;
	    _.struct = struct;

	    _.tree = renderV(_.bars, _.struct, new ContextN(state || {}), true);
	    _.rootNode = createElement(_.tree);

	});

	Renderer.definePrototype({
	    update: function update(state) {
	        var _ = this;

	        var newTree = renderV(_.bars, _.struct, new ContextN(state));
	        var patches = diff(_.tree, newTree);
	        patch(_.rootNode, patches);
	        _.tree = newTree;
	    },
	    text: function text(state, options) {
	        var _ = this;

	        options = options || {};

	        var indent = repeat(options.tabs ? '\t' : ' ', options.tabs ? 1 : options.indent);

	        return renderT(_.struct.fragment, indent, _.bars, new ContextN(state));
	    },
	    appendTo: function appendTo(el) {
	        var _ = this;

	        el.appendChild(_.rootNode);
	    }
	});

	module.exports = Renderer;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(24);
	var utils = __webpack_require__(27);

	var Context = Generator.generate(function Context(data, props, context, cleanVars) {
	    var _ = this;
	  
	    _.data = data;
	    _.props = props;
	    _.context = context;

	    if (cleanVars || !context) {
	        _.vars = Object.create(null);
	    } else {
	        _.vars = Object.create(context.vars);
	    }

	});

	Context.definePrototype({
	    lookup: function lookup(path) {
	        var _ = this,
	            i = 0;

	        if (path[0] === '@') {
	            if (_.props) {
	                return _.props[path[1]];
	            } else {
	                return void(0);
	            }
	        }

	        if (
	            path[0] === 'this'
	        ) {
	            return _.data;
	        }

	        if (_.vars && path[0] in _.vars) {
	            return _.vars[path[0]];
	        }

	        if (_.data === null || _.data === void(0)) {
	            console.warn('Bars Error: Cannot read property ' + path[0] + ' of ' + _.data);
	        }
	      
	        return _.data ? _.data[path[0]] : void(0);
	    },
	    newContext: function newContext(data, props, cleanVars) {
	        return new Context(data, props, this, cleanVars);
	    },
	    contextWithVars: function contextWithVars(vars) {
	        var _ = this;

	        var context = new Context(_.data, _.props, _);

	        context.setVars(vars);

	        return context;
	    },
	    setVars: function setVars(vars) {
	        var _ = this;

	        for (var v in vars) {
	            if (vars.hasOwnProperty(v)) {
	                _.vars[v] = vars[v];
	            }
	        }
	    }
	});

	module.exports = Context;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * Assert Error function.
	 * @param  {Boolean} condition Whether or not to throw error.
	 * @param  {String} message    Error message.
	 */
	function assertError(condition, message) {
	    if (!condition) {
	        throw new Error(message);
	    }
	}
	exports.assertError = assertError;

	/**
	 * Assert TypeError function.
	 * @param  {Boolean} condition Whether or not to throw error.
	 * @param  {String} message    Error message.
	 */
	function assertTypeError(test, type) {
	    if (typeof test !== type) {
	        throw new TypeError('Expected \'' + type +
	            '\' but instead found \'' +
	            typeof test + '\'');
	    }
	}
	exports.assertTypeError = assertTypeError;

	/**
	 * Repeats a string `n` time.
	 * @param  {String} str String to be repeated.
	 * @param  {Number} n   Number of times to repeat.
	 */
	function repeat(str, n) {
	    var result = '';

	    for (var i = 0; i < n; i++) {
	        result += str;
	    }

	    return result;
	}
	exports.repeat = repeat;

	/**
	 * Returns whatever you pass it.
	 * @param  {Any} a CodeBuffer to slice.
	 */
	function varThrough(a) {
	    return a;
	}
	exports.varThrough = varThrough;

	/**
	 * Stringified CodeBuffer slice.
	 * @param  {CodeBuffer} code CodeBuffer to slice.
	 * @param  {Number} range    Range to slice before and after `code.index`.
	 */
	function bufferSlice(code, range, format) {
	    format = format || varThrough;
	    return JSON.stringify(
	            code.slice(Math.max(0, code.index - range), code.index)
	        )
	        .slice(1, -1) +
	        format(
	            JSON.stringify(code.charAt(code.index) || 'EOF')
	            .slice(1, -1)
	        ) +
	        JSON.stringify(
	            code.slice(
	                code.index + 1,
	                Math.min(code.length, code.index + 1 + range)
	            )
	        )
	        .slice(1, -1);
	}
	exports.bufferSlice = bufferSlice;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var h = __webpack_require__(29);
	var execute = __webpack_require__(47);

	function makeVars(context, map, bars) {
	    var vars = {};
	    for (var i = 0; i < map.length; i++) {
	        vars[map[i].name] = execute(map[i].expression, bars.transforms, context);
	    }
	    // console.log(vars);
	    return vars;
	}

	function renderTextNode(bars, struct, context) {
	    return struct.value;
	}

	var PROP_MAP = {
	    'class': 'className'
	};

	function renderAttrsAndProps(bars, struct, context) {
	    var i,
	        _data = {},
	        props = {},
	        attrs = {};

	    function get(name) {
	        return _data[name];
	    }

	    props.data = get;

	    for (i = 0; i < struct.attrs.length; i++) {
	        var attr = struct.attrs[i];
	        attrs[attr.name] = renderChildrenTexts(bars, attr, context);
	    }


	    for (i = 0; i < struct.props.length; i++) {
	        _data[struct.props[i].name] = execute(struct.props[i].expression, bars.transforms, context);
	    }

	    props.attributes = attrs;
	    // var key = context.lookup(['@', 'key']);
	    // props.key = /[^0-9]/.test(key) ? key : context.lookup(['id']); What is this supposed to do?

	    return props;
	}

	function renderInsert(bars, struct, context) {
	    return execute(struct.expression, bars.transforms, context);
	}

	function renderChildrenTexts(bars, struct, context) {
	    var children = [];
	    if (!struct || !struct.nodes) return children.join('');
	    for (var i = 0; i < struct.nodes.length; i++) {
	        var child = struct.nodes[i];

	        if (child.type === 'text') {
	            children.push(child.value);
	        } else if (child.type === 'insert') {
	            children.push(renderInsert(bars, child, context));
	        } else if (child.type === 'block') {
	            children.push(renderBlockAsTexts(bars, child, context));
	        }
	    }

	    return children.join('');
	}

	function renderBlockAsTexts(bars, struct, context) {
	    var nodes = [];

	    function consequent(new_context) {
	        new_context = new_context || context;
	        new_context = new_context.contextWithVars(makeVars(new_context, struct.map, bars));
	        nodes.push(renderTypeAsTexts(bars, struct.consequent, new_context));
	    }

	    function alternate(new_context) {
	        if (new_context) {
	            new_context = new_context.contextWithVars(makeVars(new_context, struct.map, bars));
	        }
	        nodes.push(renderTypeAsTexts(bars, struct.alternate, new_context || context));
	    }

	    var blockFunc = bars.blocks[struct.name];

	    if (typeof blockFunc !== 'function') {
	        throw 'Bars Error: Missing Block helper: ' + struct.name;
	    }

	    blockFunc(
	        struct.arguments.map(function (expression) {
	            return execute(expression, bars.transforms, context);
	        }),
	        consequent,
	        alternate,
	        context
	    );

	    return nodes.join('');
	}

	function renderBlockAsNodes(bars, struct, context) {
	    var nodes = [];

	    function consequent(new_context) {
	        new_context = new_context || context;
	        new_context = new_context.contextWithVars(makeVars(new_context, struct.map, bars));
	        nodes = nodes.concat(renderTypeAsNodes(bars, struct.consequent, new_context));
	    }

	    function alternate(new_context) {
	        if (new_context) {
	            new_context = new_context.contextWithVars(makeVars(new_context, struct.map, bars));
	        }
	        nodes = nodes.concat(renderTypeAsNodes(bars, struct.alternate, new_context || context));
	    }

	    var blockFunc = bars.blocks[struct.name];

	    if (typeof blockFunc !== 'function') {
	        throw 'Bars Error: Missing Block helper: ' + struct.name;
	    }

	    blockFunc(
	        struct.arguments.map(function (expression) {
	            return execute(expression, bars.transforms, context);
	        }),
	        consequent,
	        alternate,
	        context
	    );

	    return nodes;
	}

	function renderPartial(bars, struct, context) {
	    var name = struct.name;
	    if (typeof struct.name === 'object') {
	        name = execute(struct.name, bars.transforms, context);
	    }

	    var partial = bars.partials[name];

	    if (!partial) {
	        throw 'Bars Error: Missing Partial: ' + name;
	    }

	    if (struct.expression) {
	        context = context.newContext(
	            execute(struct.expression, bars.transforms, context),
	            null,
	            true
	        );
	    }

	    context = context.contextWithVars(makeVars(context, struct.map, bars));

	    return renderChildrenNodes(bars, partial.fragment, context);
	}

	function renderChildrenNodes(bars, struct, context) {
	    var children = [];
	    if (!struct || !struct.nodes) return children;
	    for (var i = 0; i < struct.nodes.length; i++) {
	        var child = struct.nodes[i];

	        if (child.type === 'tag') {
	            children.push(renderTagNode(bars, child, context));
	        } else if (child.type === 'text') {
	            children.push(renderTextNode(bars, child, context));
	        } else if (child.type === 'insert') {
	            children.push(renderInsert(bars, child, context));
	        } else if (child.type === 'block') {
	            children = children.concat(renderBlockAsNodes(bars, child, context));
	        } else if (child.type === 'partial') {
	            children = children.concat(renderPartial(bars, child, context));
	        }
	    }

	    return children;
	}

	function renderTagNode(bars, struct, context) {
	    return h(
	        struct.name,
	        renderAttrsAndProps(bars, struct, context),
	        renderChildrenNodes(bars, struct, context)
	    );
	}

	function renderTypeAsNodes(bars, struct, context) {
	    if (!struct) return [];
	    if (struct.type === 'tag') {
	        return [renderTagNode(bars, struct, context)];
	    } else if (struct.type === 'text') {
	        return [renderTextNode(bars, struct, context)];
	    } else if (struct.type === 'insert') {
	        return [renderInsert(bars, struct, context)];
	    } else if (struct.type === 'block') {
	        return renderBlockAsNodes(bars, struct, context);
	    } else if (struct.type === 'fragment') {
	        return renderChildrenNodes(bars, struct, context);
	    } else if (struct.type === 'partial') {
	        return renderPartial(bars, struct, context);
	    }

	    throw 'Bars Error: unknown type: ' + struct.type;
	}

	function renderTypeAsTexts(bars, struct, context) {
	    if (!struct) return [];
	    if (struct.type === 'text') {
	        return struct.value;
	    } else if (struct.type === 'insert') {
	        return renderInsert(bars, struct, context);
	    } else if (struct.type === 'block') {
	        return renderBlockAsTexts(bars, struct, context);
	    } else if (struct.type === 'fragment') {
	        return renderChildrenTexts(bars, struct, context);
	    }
	    throw 'Bars Error: unknown type: ' + struct.type;
	}

	function render(bars, struct, context, noRender) {
	    return h(
	        'div',
	        noRender ? [] : renderChildrenNodes(bars, struct.fragment, context)
	    );
	}

	module.exports = render;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var h = __webpack_require__(30)

	module.exports = h


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(31);

	var VNode = __webpack_require__(32);
	var VText = __webpack_require__(38);
	var isVNode = __webpack_require__(34);
	var isVText = __webpack_require__(39);
	var isWidget = __webpack_require__(35);
	var isHook = __webpack_require__(37);
	var isVThunk = __webpack_require__(36);

	var parseTag = __webpack_require__(40);
	var softSetHook = __webpack_require__(42);
	var evHook = __webpack_require__(43);

	module.exports = h;

	function h(tagName, properties, children) {
	    var childNodes = [];
	    var tag, props, key, namespace;

	    if (!children && isChildren(properties)) {
	        children = properties;
	        props = {};
	    }

	    props = props || properties || {};
	    tag = parseTag(tagName, props);

	    // support keys
	    if (props.hasOwnProperty('key')) {
	        key = props.key;
	        props.key = undefined;
	    }

	    // support namespace
	    if (props.hasOwnProperty('namespace')) {
	        namespace = props.namespace;
	        props.namespace = undefined;
	    }

	    // fix cursor bug
	    if (tag === 'INPUT' &&
	        !namespace &&
	        props.hasOwnProperty('value') &&
	        props.value !== undefined &&
	        !isHook(props.value)
	    ) {
	        props.value = softSetHook(props.value);
	    }

	    transformProperties(props);

	    if (children !== undefined && children !== null) {
	        addChild(children, childNodes, tag, props);
	    }


	    return new VNode(tag, props, childNodes, key, namespace);
	}

	function addChild(c, childNodes, tag, props) {
	    if (typeof c === 'string') {
	        childNodes.push(new VText(c));
	    } else if (typeof c === 'number') {
	        childNodes.push(new VText(String(c)));
	    } else if (isChild(c)) {
	        childNodes.push(c);
	    } else if (isArray(c)) {
	        for (var i = 0; i < c.length; i++) {
	            addChild(c[i], childNodes, tag, props);
	        }
	    } else if (c === null || c === undefined) {
	        return;
	    } else {
	        throw UnexpectedVirtualElement({
	            foreignObject: c,
	            parentVnode: {
	                tagName: tag,
	                properties: props
	            }
	        });
	    }
	}

	function transformProperties(props) {
	    for (var propName in props) {
	        if (props.hasOwnProperty(propName)) {
	            var value = props[propName];

	            if (isHook(value)) {
	                continue;
	            }

	            if (propName.substr(0, 3) === 'ev-') {
	                // add ev-foo support
	                props[propName] = evHook(value);
	            }
	        }
	    }
	}

	function isChild(x) {
	    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
	}

	function isChildren(x) {
	    return typeof x === 'string' || isArray(x) || isChild(x);
	}

	function UnexpectedVirtualElement(data) {
	    var err = new Error();

	    err.type = 'virtual-hyperscript.unexpected.virtual-element';
	    err.message = 'Unexpected virtual child passed to h().\n' +
	        'Expected a VNode / Vthunk / VWidget / string but:\n' +
	        'got:\n' +
	        errorString(data.foreignObject) +
	        '.\n' +
	        'The parent vnode is:\n' +
	        errorString(data.parentVnode)
	        '\n' +
	        'Suggested fix: change your `h(..., [ ... ])` callsite.';
	    err.foreignObject = data.foreignObject;
	    err.parentVnode = data.parentVnode;

	    return err;
	}

	function errorString(obj) {
	    try {
	        return JSON.stringify(obj, null, '    ');
	    } catch (e) {
	        return String(obj);
	    }
	}


/***/ },
/* 31 */
/***/ function(module, exports) {

	var nativeIsArray = Array.isArray
	var toString = Object.prototype.toString

	module.exports = nativeIsArray || isArray

	function isArray(obj) {
	    return toString.call(obj) === "[object Array]"
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(33)
	var isVNode = __webpack_require__(34)
	var isWidget = __webpack_require__(35)
	var isThunk = __webpack_require__(36)
	var isVHook = __webpack_require__(37)

	module.exports = VirtualNode

	var noProperties = {}
	var noChildren = []

	function VirtualNode(tagName, properties, children, key, namespace) {
	    this.tagName = tagName
	    this.properties = properties || noProperties
	    this.children = children || noChildren
	    this.key = key != null ? String(key) : undefined
	    this.namespace = (typeof namespace === "string") ? namespace : null

	    var count = (children && children.length) || 0
	    var descendants = 0
	    var hasWidgets = false
	    var hasThunks = false
	    var descendantHooks = false
	    var hooks

	    for (var propName in properties) {
	        if (properties.hasOwnProperty(propName)) {
	            var property = properties[propName]
	            if (isVHook(property) && property.unhook) {
	                if (!hooks) {
	                    hooks = {}
	                }

	                hooks[propName] = property
	            }
	        }
	    }

	    for (var i = 0; i < count; i++) {
	        var child = children[i]
	        if (isVNode(child)) {
	            descendants += child.count || 0

	            if (!hasWidgets && child.hasWidgets) {
	                hasWidgets = true
	            }

	            if (!hasThunks && child.hasThunks) {
	                hasThunks = true
	            }

	            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
	                descendantHooks = true
	            }
	        } else if (!hasWidgets && isWidget(child)) {
	            if (typeof child.destroy === "function") {
	                hasWidgets = true
	            }
	        } else if (!hasThunks && isThunk(child)) {
	            hasThunks = true;
	        }
	    }

	    this.count = count + descendants
	    this.hasWidgets = hasWidgets
	    this.hasThunks = hasThunks
	    this.hooks = hooks
	    this.descendantHooks = descendantHooks
	}

	VirtualNode.prototype.version = version
	VirtualNode.prototype.type = "VirtualNode"


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "2"


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(33)

	module.exports = isVirtualNode

	function isVirtualNode(x) {
	    return x && x.type === "VirtualNode" && x.version === version
	}


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = isWidget

	function isWidget(w) {
	    return w && w.type === "Widget"
	}


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = isThunk

	function isThunk(t) {
	    return t && t.type === "Thunk"
	}


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = isHook

	function isHook(hook) {
	    return hook &&
	      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
	       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(33)

	module.exports = VirtualText

	function VirtualText(text) {
	    this.text = String(text)
	}

	VirtualText.prototype.version = version
	VirtualText.prototype.type = "VirtualText"


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(33)

	module.exports = isVirtualText

	function isVirtualText(x) {
	    return x && x.type === "VirtualText" && x.version === version
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var split = __webpack_require__(41);

	var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
	var notClassId = /^\.|#/;

	module.exports = parseTag;

	function parseTag(tag, props) {
	    if (!tag) {
	        return 'DIV';
	    }

	    var noId = !(props.hasOwnProperty('id'));

	    var tagParts = split(tag, classIdSplit);
	    var tagName = null;

	    if (notClassId.test(tagParts[1])) {
	        tagName = 'DIV';
	    }

	    var classes, part, type, i;

	    for (i = 0; i < tagParts.length; i++) {
	        part = tagParts[i];

	        if (!part) {
	            continue;
	        }

	        type = part.charAt(0);

	        if (!tagName) {
	            tagName = part;
	        } else if (type === '.') {
	            classes = classes || [];
	            classes.push(part.substring(1, part.length));
	        } else if (type === '#' && noId) {
	            props.id = part.substring(1, part.length);
	        }
	    }

	    if (classes) {
	        if (props.className) {
	            classes.push(props.className);
	        }

	        props.className = classes.join(' ');
	    }

	    return props.namespace ? tagName : tagName.toUpperCase();
	}


/***/ },
/* 41 */
/***/ function(module, exports) {

	/*!
	 * Cross-Browser Split 1.1.1
	 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
	 * Available under the MIT License
	 * ECMAScript compliant, uniform cross-browser split method
	 */

	/**
	 * Splits a string into an array of strings using a regex or string separator. Matches of the
	 * separator are not included in the result array. However, if `separator` is a regex that contains
	 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
	 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
	 * cross-browser.
	 * @param {String} str String to split.
	 * @param {RegExp|String} separator Regex or string to use for separating the string.
	 * @param {Number} [limit] Maximum number of items to include in the result array.
	 * @returns {Array} Array of substrings.
	 * @example
	 *
	 * // Basic use
	 * split('a b c d', ' ');
	 * // -> ['a', 'b', 'c', 'd']
	 *
	 * // With limit
	 * split('a b c d', ' ', 2);
	 * // -> ['a', 'b']
	 *
	 * // Backreferences in result array
	 * split('..word1 word2..', /([a-z]+)(\d+)/i);
	 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
	 */
	module.exports = (function split(undef) {

	  var nativeSplit = String.prototype.split,
	    compliantExecNpcg = /()??/.exec("")[1] === undef,
	    // NPCG: nonparticipating capturing group
	    self;

	  self = function(str, separator, limit) {
	    // If `separator` is not a regex, use `nativeSplit`
	    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
	      return nativeSplit.call(str, separator, limit);
	    }
	    var output = [],
	      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
	      (separator.sticky ? "y" : ""),
	      // Firefox 3+
	      lastLastIndex = 0,
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      separator = new RegExp(separator.source, flags + "g"),
	      separator2, match, lastIndex, lastLength;
	    str += ""; // Type-convert
	    if (!compliantExecNpcg) {
	      // Doesn't need flags gy, but they don't hurt
	      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
	    }
	    /* Values for `limit`, per the spec:
	     * If undefined: 4294967295 // Math.pow(2, 32) - 1
	     * If 0, Infinity, or NaN: 0
	     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	     * If other: Type-convert, then use the above rules
	     */
	    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
	    limit >>> 0; // ToUint32(limit)
	    while (match = separator.exec(str)) {
	      // `separator.lastIndex` is not reliable cross-browser
	      lastIndex = match.index + match[0].length;
	      if (lastIndex > lastLastIndex) {
	        output.push(str.slice(lastLastIndex, match.index));
	        // Fix browsers whose `exec` methods don't consistently return `undefined` for
	        // nonparticipating capturing groups
	        if (!compliantExecNpcg && match.length > 1) {
	          match[0].replace(separator2, function() {
	            for (var i = 1; i < arguments.length - 2; i++) {
	              if (arguments[i] === undef) {
	                match[i] = undef;
	              }
	            }
	          });
	        }
	        if (match.length > 1 && match.index < str.length) {
	          Array.prototype.push.apply(output, match.slice(1));
	        }
	        lastLength = match[0].length;
	        lastLastIndex = lastIndex;
	        if (output.length >= limit) {
	          break;
	        }
	      }
	      if (separator.lastIndex === match.index) {
	        separator.lastIndex++; // Avoid an infinite loop
	      }
	    }
	    if (lastLastIndex === str.length) {
	      if (lastLength || !separator.test("")) {
	        output.push("");
	      }
	    } else {
	      output.push(str.slice(lastLastIndex));
	    }
	    return output.length > limit ? output.slice(0, limit) : output;
	  };

	  return self;
	})();


/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	module.exports = SoftSetHook;

	function SoftSetHook(value) {
	    if (!(this instanceof SoftSetHook)) {
	        return new SoftSetHook(value);
	    }

	    this.value = value;
	}

	SoftSetHook.prototype.hook = function (node, propertyName) {
	    if (node[propertyName] !== this.value) {
	        node[propertyName] = this.value;
	    }
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EvStore = __webpack_require__(44);

	module.exports = EvHook;

	function EvHook(value) {
	    if (!(this instanceof EvHook)) {
	        return new EvHook(value);
	    }

	    this.value = value;
	}

	EvHook.prototype.hook = function (node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);

	    es[propName] = this.value;
	};

	EvHook.prototype.unhook = function(node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);

	    es[propName] = undefined;
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var OneVersionConstraint = __webpack_require__(45);

	var MY_VERSION = '7';
	OneVersionConstraint('ev-store', MY_VERSION);

	var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

	module.exports = EvStore;

	function EvStore(elem) {
	    var hash = elem[hashKey];

	    if (!hash) {
	        hash = elem[hashKey] = {};
	    }

	    return hash;
	}


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Individual = __webpack_require__(46);

	module.exports = OneVersion;

	function OneVersion(moduleName, version, defaultValue) {
	    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
	    var enforceKey = key + '_ENFORCE_SINGLETON';

	    var versionValue = Individual(enforceKey, version);

	    if (versionValue !== version) {
	        throw new Error('Can only have one copy of ' +
	            moduleName + '.\n' +
	            'You already have version ' + versionValue +
	            ' installed.\n' +
	            'This means you cannot install version ' + version);
	    }

	    return Individual(key, defaultValue);
	}


/***/ },
/* 46 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/*global window, global*/

	var root = typeof window !== 'undefined' ?
	    window : typeof global !== 'undefined' ?
	    global : {};

	module.exports = Individual;

	function Individual(key, value) {
	    if (key in root) {
	        return root[key];
	    }

	    root[key] = value;

	    return value;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var logic = __webpack_require__(48);

	function execute(syntaxTree, transforms, context) {
	    function run(token) {
	        var result,
	            args = [];
	        // token.type === 'operator' ? console.log('>>>>', token) : void(0);
	        if (
	            token.type === 'literal'
	        ) {
	            result = token.value;
	        } else if (
	            token.type === 'value'
	        ) {
	            result = context.lookup(token.path);
	        } else if (
	            token.type === 'operator' &&
	            token.operands.length === 1
	        ) {
	            result = logic[token.operator](
	                run(token.operands[0])
	            );
	        } else if (
	            token.type === 'operator' &&
	            token.operator === '?:'
	        ) {
	            result = run(token.operands[0]) ?
	                run(token.operands[1]) :
	                run(token.operands[2]);
	        } else if (
	            token.type === 'operator' &&
	            token.operands.length === 2
	        ) {
	            if (token.operator === '||') {
	                result = run(token.operands[0]) || run(token.operands[1]);
	            } else if (token.operator === '&&') {
	                result = run(token.operands[0]) && run(token.operands[1]);
	            } else {
	                result = logic[token.operator](
	                    run(token.operands[0]),
	                    run(token.operands[1])
	                );
	            }
	        } else if (
	            token.type === 'transform'
	        ) {
	            for (var i = 0; i < token.arguments.length; i++) {
	                args.push(run(token.arguments[i]));
	            }
	            if (transforms[token.name] instanceof Function) {
	                result = transforms[token.name].apply(null, args);
	            } else {
	                throw 'Bars Error: Missing Transfrom: "' + token.name + '".';
	            }
	        }
	        // console.log('<<<<', result)
	        return result;
	    }

	    if (syntaxTree) {
	        return run(syntaxTree);
	    } else {
	        return context.lookup('this');
	    }
	}

	module.exports = execute;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/*Look up*/
	exports.lookup = function add(a, b) {

	    if (a === null || a === void(0)) {
	        console.warn('Bars Error: Cannot read property ' + b + ' of ' + a);
	    }
	    return a ? a[b] : void(0); // soft
	    // return a[b]; // hard
	};
	exports['.'] = exports.lookup;

	/* Arithmetic */
	exports.add = function add(a, b) {
	    return a + b;
	};
	exports.subtract = function subtract(a, b) {
	    return a - b;
	};
	exports.multiply = function multiply(a, b) {
	    return a * b;
	};
	exports.devide = function devide(a, b) {
	    return a / b;
	};
	exports.mod = function mod(a, b) {
	    return a % b;
	};

	exports['+'] = exports.add;
	exports['-'] = exports.subtract;
	exports['*'] = exports.multiply;
	exports['/'] = exports.devide;
	exports['%'] = exports.mod;

	/* Logic */

	exports.not = function not(a) {
	    return !a;
	};

	exports['!'] = exports.not;

	exports.or = function or(a, b) {
	    return a || b;
	};
	exports.and = function and(a, b) {
	    return a && b;
	};

	exports['||'] = exports.or;
	exports['&&'] = exports.and;

	/* Comparison */

	exports.strictequals = function strictequals(a, b) {
	    return a === b;
	};
	exports.strictnotequals = function strictnotequals(a, b) {
	    return a !== b;
	};

	exports['==='] = exports.strictequals;
	exports['!=='] = exports.strictnotequals;

	exports.equals = function equals(a, b) {
	    return a == b;
	};
	exports.notequals = function notequals(a, b) {
	    return a != b;
	};
	exports.ltequals = function ltequals(a, b) {
	    return a <= b;
	};
	exports.gtequals = function gtequals(a, b) {
	    return a >= b;
	};

	exports['=='] = exports.equals;
	exports['!='] = exports.notequals;
	exports['<='] = exports.ltequals;
	exports['>='] = exports.gtequals;

	exports.lt = function lt(a, b) {
	    return a < b;
	};
	exports.gt = function gt(a, b) {
	    return a > b;
	};

	exports['<'] = exports.lt;
	exports['>'] = exports.gt;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var execute = __webpack_require__(47);

	function makeVars(context, map, bars) {
	    var vars = {};
	    for (var i = 0; i < map.length; i++) {
	        vars[map[i].name] = execute(map[i].expression, bars.transforms, context);
	    }
	    // console.log(vars);
	    return vars;
	}

	function repeat(a, n) {
	    n = n || 0;
	    var r = '';
	    for (var i = 0; i < n; i++) {
	        r += a;
	    }
	    return r;
	}

	function abb(token, indentWith, bars, context) {
	    var r = '';

	    function consequent(new_context) {
	        new_context = new_context || context;
	        new_context = new_context.contextWithVars(makeVars(new_context, token.map, bars));
	        r += ac(token.consequent.nodes, indentWith, bars, new_context);
	    }

	    function alternate(new_context) {
	        if (new_context) {
	            new_context = new_context.contextWithVars(makeVars(new_context, token.map, bars));
	        }
	        r += ac(token.alternate.nodes, indentWith, bars, new_context || context);
	    }

	    var blockFunc = bars.blocks[token.name];

	    if (typeof blockFunc !== 'function') {
	        throw 'Bars Error: Missing Block helper: ' + token.name;
	    }

	    blockFunc(
	        token.arguments.map(function (expression) {
	            return execute(expression, bars.transforms, context);
	        }),
	        consequent,
	        alternate,
	        context
	    );

	    return r;
	}

	function ac(tokens, indentWith, bars, context) {
	    if (tokens.length === 0) {
	        return '';
	    }

	    var r = '="';

	    for (var i = 0; i < tokens.length; i++) {
	        var token = tokens[i];
	        if (token.type === 'text') {
	            r += token.value;
	        } else if (token.type === 'insert') {
	            var val = execute(token.expression, bars.transforms, context);
	            r += val !== void(0) ? val : '';
	        } else if (token.type === 'block') {
	            r += abb(token, indentWith, bars, context);
	        }
	    }

	    r += '"';

	    return r;
	}

	function a(token, indentWith, bars, context) {
	    var r = ' ';
	    r += token.name;
	    r += ac(token.nodes, indentWith, bars, context);

	    return r;
	}

	function hbb(token, indentWith, indent, bars, context) {
	    var r = '';

	    function consequent(new_context) {
	        new_context = new_context || context;
	        new_context = new_context.contextWithVars(makeVars(new_context, token.map, bars));
	        r += hc(token.consequent.nodes, indentWith, indent, bars, new_context);
	    }

	    function alternate(new_context) {
	        if (new_context) {
	            new_context = new_context.contextWithVars(makeVars(new_context, token.map, bars));
	        }
	        r += hc(token.alternate.nodes, indentWith, indent, bars, new_context || context);
	    }

	    var blockFunc = bars.blocks[token.name];

	    if (typeof blockFunc !== 'function') {
	        throw 'Bars Error: Missing Block helper: ' + token.name;
	    }

	    blockFunc(
	        token.arguments.map(function (expression) {
	            return execute(expression, bars.transforms, context);
	        }),
	        consequent,
	        alternate,
	        context
	    );

	    return r;
	}

	function hbp(token, indentWith, indent, bars, context) {
	    var name = token.name;
	    if (typeof token.name === 'object') {
	        name = execute(token.name, bars.transforms, context);
	    }

	    var partial = bars.partials[name];

	    if (!partial) {
	        throw 'Bars Error: Missing Partial: ' + name;
	    }

	    if (token.expression) {
	        context = context.newContext(
	            execute(token.expression, bars.transforms, context),
	            null,
	            true
	        );
	    }

	    context = context.contextWithVars(makeVars(context, token.map, bars));

	    return hc(partial.fragment.nodes, indentWith, indent, bars, context);
	}

	function hc(tokens, indentWith, indent, bars, context) {
	    if (tokens.length === 0) {
	        return '';
	    }
	    var val;
	    if (tokens.length === 1) {
	        if (tokens[0].type === 'text') {
	            return tokens[0].value;
	        } else if (tokens[0].type === 'insert') {
	            val = execute(tokens[0].expression, bars.transforms, context);
	            return val !== void(0) ? val : '';
	        }
	    }

	    var r = '\n';

	    for (var i = 0; i < tokens.length; i++) {
	        var token = tokens[i];
	        r += repeat(indentWith, indent + 1);
	        if (token.type === 'tag') {
	            r += h(token, indentWith, indent + 1, bars, context);
	        } else if (token.type === 'text') {
	            r += token.value;
	        } else if (token.type === 'insert') {
	            val = execute(token.expression, bars.transforms, context);
	            r += val !== void(0) ? val : '';
	        } else if (token.type === 'block') {
	            r += hbb(token, indentWith, indent, bars, context);
	        } else if (token.type === 'partial') {
	            r += hbp(token, indentWith, indent, bars, context);
	        }
	    }

	    r += repeat(indentWith, indent);

	    return r;
	}

	function h(token, indentWith, indent, bars, context) {
	    var r = '';

	    r += '<' + token.name;

	    for (var i = 0; i < token.attrs.length; i++) {
	        r += a(token.attrs[i], indentWith, bars, context);
	    }

	    if (token.isSelfClosing || token.selfClosed) {
	        r += ' />';
	    } else {
	        r += '>';

	        r += hc(token.nodes, indentWith, indent, bars, context);

	        r += '</' + token.name + '>';
	    }

	    r += '\n';

	    return r;
	}

	function render(fragment, indentWith, bars, context) {
	    return hc(fragment.nodes, indentWith, -1, bars, context);
	}

	module.exports = render;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var diff = __webpack_require__(51)

	module.exports = diff


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(31)

	var VPatch = __webpack_require__(52)
	var isVNode = __webpack_require__(34)
	var isVText = __webpack_require__(39)
	var isWidget = __webpack_require__(35)
	var isThunk = __webpack_require__(36)
	var handleThunk = __webpack_require__(53)

	var diffProps = __webpack_require__(54)

	module.exports = diff

	function diff(a, b) {
	    var patch = { a: a }
	    walk(a, b, patch, 0)
	    return patch
	}

	function walk(a, b, patch, index) {
	    if (a === b) {
	        return
	    }

	    var apply = patch[index]
	    var applyClear = false

	    if (isThunk(a) || isThunk(b)) {
	        thunks(a, b, patch, index)
	    } else if (b == null) {

	        // If a is a widget we will add a remove patch for it
	        // Otherwise any child widgets/hooks must be destroyed.
	        // This prevents adding two remove patches for a widget.
	        if (!isWidget(a)) {
	            clearState(a, patch, index)
	            apply = patch[index]
	        }

	        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
	    } else if (isVNode(b)) {
	        if (isVNode(a)) {
	            if (a.tagName === b.tagName &&
	                a.namespace === b.namespace &&
	                a.key === b.key) {
	                var propsPatch = diffProps(a.properties, b.properties)
	                if (propsPatch) {
	                    apply = appendPatch(apply,
	                        new VPatch(VPatch.PROPS, a, propsPatch))
	                }
	                apply = diffChildren(a, b, patch, apply, index)
	            } else {
	                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	                applyClear = true
	            }
	        } else {
	            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	            applyClear = true
	        }
	    } else if (isVText(b)) {
	        if (!isVText(a)) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	            applyClear = true
	        } else if (a.text !== b.text) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	        }
	    } else if (isWidget(b)) {
	        if (!isWidget(a)) {
	            applyClear = true
	        }

	        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
	    }

	    if (apply) {
	        patch[index] = apply
	    }

	    if (applyClear) {
	        clearState(a, patch, index)
	    }
	}

	function diffChildren(a, b, patch, apply, index) {
	    var aChildren = a.children
	    var orderedSet = reorder(aChildren, b.children)
	    var bChildren = orderedSet.children

	    var aLen = aChildren.length
	    var bLen = bChildren.length
	    var len = aLen > bLen ? aLen : bLen

	    for (var i = 0; i < len; i++) {
	        var leftNode = aChildren[i]
	        var rightNode = bChildren[i]
	        index += 1

	        if (!leftNode) {
	            if (rightNode) {
	                // Excess nodes in b need to be added
	                apply = appendPatch(apply,
	                    new VPatch(VPatch.INSERT, null, rightNode))
	            }
	        } else {
	            walk(leftNode, rightNode, patch, index)
	        }

	        if (isVNode(leftNode) && leftNode.count) {
	            index += leftNode.count
	        }
	    }

	    if (orderedSet.moves) {
	        // Reorder nodes last
	        apply = appendPatch(apply, new VPatch(
	            VPatch.ORDER,
	            a,
	            orderedSet.moves
	        ))
	    }

	    return apply
	}

	function clearState(vNode, patch, index) {
	    // TODO: Make this a single walk, not two
	    unhook(vNode, patch, index)
	    destroyWidgets(vNode, patch, index)
	}

	// Patch records for all destroyed widgets must be added because we need
	// a DOM node reference for the destroy function
	function destroyWidgets(vNode, patch, index) {
	    if (isWidget(vNode)) {
	        if (typeof vNode.destroy === "function") {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(VPatch.REMOVE, vNode, null)
	            )
	        }
	    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
	        var children = vNode.children
	        var len = children.length
	        for (var i = 0; i < len; i++) {
	            var child = children[i]
	            index += 1

	            destroyWidgets(child, patch, index)

	            if (isVNode(child) && child.count) {
	                index += child.count
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}

	// Create a sub-patch for thunks
	function thunks(a, b, patch, index) {
	    var nodes = handleThunk(a, b)
	    var thunkPatch = diff(nodes.a, nodes.b)
	    if (hasPatches(thunkPatch)) {
	        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
	    }
	}

	function hasPatches(patch) {
	    for (var index in patch) {
	        if (index !== "a") {
	            return true
	        }
	    }

	    return false
	}

	// Execute hooks when two nodes are identical
	function unhook(vNode, patch, index) {
	    if (isVNode(vNode)) {
	        if (vNode.hooks) {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(
	                    VPatch.PROPS,
	                    vNode,
	                    undefinedKeys(vNode.hooks)
	                )
	            )
	        }

	        if (vNode.descendantHooks || vNode.hasThunks) {
	            var children = vNode.children
	            var len = children.length
	            for (var i = 0; i < len; i++) {
	                var child = children[i]
	                index += 1

	                unhook(child, patch, index)

	                if (isVNode(child) && child.count) {
	                    index += child.count
	                }
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}

	function undefinedKeys(obj) {
	    var result = {}

	    for (var key in obj) {
	        result[key] = undefined
	    }

	    return result
	}

	// List diff, naive left to right reordering
	function reorder(aChildren, bChildren) {
	    // O(M) time, O(M) memory
	    var bChildIndex = keyIndex(bChildren)
	    var bKeys = bChildIndex.keys
	    var bFree = bChildIndex.free

	    if (bFree.length === bChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }

	    // O(N) time, O(N) memory
	    var aChildIndex = keyIndex(aChildren)
	    var aKeys = aChildIndex.keys
	    var aFree = aChildIndex.free

	    if (aFree.length === aChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }

	    // O(MAX(N, M)) memory
	    var newChildren = []

	    var freeIndex = 0
	    var freeCount = bFree.length
	    var deletedItems = 0

	    // Iterate through a and match a node in b
	    // O(N) time,
	    for (var i = 0 ; i < aChildren.length; i++) {
	        var aItem = aChildren[i]
	        var itemIndex

	        if (aItem.key) {
	            if (bKeys.hasOwnProperty(aItem.key)) {
	                // Match up the old keys
	                itemIndex = bKeys[aItem.key]
	                newChildren.push(bChildren[itemIndex])

	            } else {
	                // Remove old keyed items
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        } else {
	            // Match the item in a with the next free item in b
	            if (freeIndex < freeCount) {
	                itemIndex = bFree[freeIndex++]
	                newChildren.push(bChildren[itemIndex])
	            } else {
	                // There are no free items in b to match with
	                // the free items in a, so the extra free nodes
	                // are deleted.
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        }
	    }

	    var lastFreeIndex = freeIndex >= bFree.length ?
	        bChildren.length :
	        bFree[freeIndex]

	    // Iterate through b and append any new keys
	    // O(M) time
	    for (var j = 0; j < bChildren.length; j++) {
	        var newItem = bChildren[j]

	        if (newItem.key) {
	            if (!aKeys.hasOwnProperty(newItem.key)) {
	                // Add any new keyed items
	                // We are adding new items to the end and then sorting them
	                // in place. In future we should insert new items in place.
	                newChildren.push(newItem)
	            }
	        } else if (j >= lastFreeIndex) {
	            // Add any leftover non-keyed items
	            newChildren.push(newItem)
	        }
	    }

	    var simulate = newChildren.slice()
	    var simulateIndex = 0
	    var removes = []
	    var inserts = []
	    var simulateItem

	    for (var k = 0; k < bChildren.length;) {
	        var wantedItem = bChildren[k]
	        simulateItem = simulate[simulateIndex]

	        // remove items
	        while (simulateItem === null && simulate.length) {
	            removes.push(remove(simulate, simulateIndex, null))
	            simulateItem = simulate[simulateIndex]
	        }

	        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	            // if we need a key in this position...
	            if (wantedItem.key) {
	                if (simulateItem && simulateItem.key) {
	                    // if an insert doesn't put this key in place, it needs to move
	                    if (bKeys[simulateItem.key] !== k + 1) {
	                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
	                        simulateItem = simulate[simulateIndex]
	                        // if the remove didn't put the wanted item in place, we need to insert it
	                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	                            inserts.push({key: wantedItem.key, to: k})
	                        }
	                        // items are matching, so skip ahead
	                        else {
	                            simulateIndex++
	                        }
	                    }
	                    else {
	                        inserts.push({key: wantedItem.key, to: k})
	                    }
	                }
	                else {
	                    inserts.push({key: wantedItem.key, to: k})
	                }
	                k++
	            }
	            // a key in simulate has no matching wanted key, remove it
	            else if (simulateItem && simulateItem.key) {
	                removes.push(remove(simulate, simulateIndex, simulateItem.key))
	            }
	        }
	        else {
	            simulateIndex++
	            k++
	        }
	    }

	    // remove all the remaining nodes from simulate
	    while(simulateIndex < simulate.length) {
	        simulateItem = simulate[simulateIndex]
	        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
	    }

	    // If the only moves we have are deletes then we can just
	    // let the delete patch remove these items.
	    if (removes.length === deletedItems && !inserts.length) {
	        return {
	            children: newChildren,
	            moves: null
	        }
	    }

	    return {
	        children: newChildren,
	        moves: {
	            removes: removes,
	            inserts: inserts
	        }
	    }
	}

	function remove(arr, index, key) {
	    arr.splice(index, 1)

	    return {
	        from: index,
	        key: key
	    }
	}

	function keyIndex(children) {
	    var keys = {}
	    var free = []
	    var length = children.length

	    for (var i = 0; i < length; i++) {
	        var child = children[i]

	        if (child.key) {
	            keys[child.key] = i
	        } else {
	            free.push(i)
	        }
	    }

	    return {
	        keys: keys,     // A hash of key name to index
	        free: free      // An array of unkeyed item indices
	    }
	}

	function appendPatch(apply, patch) {
	    if (apply) {
	        if (isArray(apply)) {
	            apply.push(patch)
	        } else {
	            apply = [apply, patch]
	        }

	        return apply
	    } else {
	        return patch
	    }
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(33)

	VirtualPatch.NONE = 0
	VirtualPatch.VTEXT = 1
	VirtualPatch.VNODE = 2
	VirtualPatch.WIDGET = 3
	VirtualPatch.PROPS = 4
	VirtualPatch.ORDER = 5
	VirtualPatch.INSERT = 6
	VirtualPatch.REMOVE = 7
	VirtualPatch.THUNK = 8

	module.exports = VirtualPatch

	function VirtualPatch(type, vNode, patch) {
	    this.type = Number(type)
	    this.vNode = vNode
	    this.patch = patch
	}

	VirtualPatch.prototype.version = version
	VirtualPatch.prototype.type = "VirtualPatch"


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var isVNode = __webpack_require__(34)
	var isVText = __webpack_require__(39)
	var isWidget = __webpack_require__(35)
	var isThunk = __webpack_require__(36)

	module.exports = handleThunk

	function handleThunk(a, b) {
	    var renderedA = a
	    var renderedB = b

	    if (isThunk(b)) {
	        renderedB = renderThunk(b, a)
	    }

	    if (isThunk(a)) {
	        renderedA = renderThunk(a, null)
	    }

	    return {
	        a: renderedA,
	        b: renderedB
	    }
	}

	function renderThunk(thunk, previous) {
	    var renderedThunk = thunk.vnode

	    if (!renderedThunk) {
	        renderedThunk = thunk.vnode = thunk.render(previous)
	    }

	    if (!(isVNode(renderedThunk) ||
	            isVText(renderedThunk) ||
	            isWidget(renderedThunk))) {
	        throw new Error("thunk did not return a valid node");
	    }

	    return renderedThunk
	}


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(55)
	var isHook = __webpack_require__(37)

	module.exports = diffProps

	function diffProps(a, b) {
	    var diff

	    for (var aKey in a) {
	        if (!(aKey in b)) {
	            diff = diff || {}
	            diff[aKey] = undefined
	        }

	        var aValue = a[aKey]
	        var bValue = b[aKey]

	        if (aValue === bValue) {
	            continue
	        } else if (isObject(aValue) && isObject(bValue)) {
	            if (getPrototype(bValue) !== getPrototype(aValue)) {
	                diff = diff || {}
	                diff[aKey] = bValue
	            } else if (isHook(bValue)) {
	                 diff = diff || {}
	                 diff[aKey] = bValue
	            } else {
	                var objectDiff = diffProps(aValue, bValue)
	                if (objectDiff) {
	                    diff = diff || {}
	                    diff[aKey] = objectDiff
	                }
	            }
	        } else {
	            diff = diff || {}
	            diff[aKey] = bValue
	        }
	    }

	    for (var bKey in b) {
	        if (!(bKey in a)) {
	            diff = diff || {}
	            diff[bKey] = b[bKey]
	        }
	    }

	    return diff
	}

	function getPrototype(value) {
	  if (Object.getPrototypeOf) {
	    return Object.getPrototypeOf(value)
	  } else if (value.__proto__) {
	    return value.__proto__
	  } else if (value.constructor) {
	    return value.constructor.prototype
	  }
	}


/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function isObject(x) {
		return typeof x === "object" && x !== null;
	};


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var patch = __webpack_require__(57)

	module.exports = patch


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(58)
	var isArray = __webpack_require__(31)

	var render = __webpack_require__(60)
	var domIndex = __webpack_require__(62)
	var patchOp = __webpack_require__(63)
	module.exports = patch

	function patch(rootNode, patches, renderOptions) {
	    renderOptions = renderOptions || {}
	    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
	        ? renderOptions.patch
	        : patchRecursive
	    renderOptions.render = renderOptions.render || render

	    return renderOptions.patch(rootNode, patches, renderOptions)
	}

	function patchRecursive(rootNode, patches, renderOptions) {
	    var indices = patchIndices(patches)

	    if (indices.length === 0) {
	        return rootNode
	    }

	    var index = domIndex(rootNode, patches.a, indices)
	    var ownerDocument = rootNode.ownerDocument

	    if (!renderOptions.document && ownerDocument !== document) {
	        renderOptions.document = ownerDocument
	    }

	    for (var i = 0; i < indices.length; i++) {
	        var nodeIndex = indices[i]
	        rootNode = applyPatch(rootNode,
	            index[nodeIndex],
	            patches[nodeIndex],
	            renderOptions)
	    }

	    return rootNode
	}

	function applyPatch(rootNode, domNode, patchList, renderOptions) {
	    if (!domNode) {
	        return rootNode
	    }

	    var newNode

	    if (isArray(patchList)) {
	        for (var i = 0; i < patchList.length; i++) {
	            newNode = patchOp(patchList[i], domNode, renderOptions)

	            if (domNode === rootNode) {
	                rootNode = newNode
	            }
	        }
	    } else {
	        newNode = patchOp(patchList, domNode, renderOptions)

	        if (domNode === rootNode) {
	            rootNode = newNode
	        }
	    }

	    return rootNode
	}

	function patchIndices(patches) {
	    var indices = []

	    for (var key in patches) {
	        if (key !== "a") {
	            indices.push(Number(key))
	        }
	    }

	    return indices
	}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
	    typeof window !== 'undefined' ? window : {}
	var minDoc = __webpack_require__(59);

	if (typeof document !== 'undefined') {
	    module.exports = document;
	} else {
	    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }

	    module.exports = doccy;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 59 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(58)

	var applyProperties = __webpack_require__(61)

	var isVNode = __webpack_require__(34)
	var isVText = __webpack_require__(39)
	var isWidget = __webpack_require__(35)
	var handleThunk = __webpack_require__(53)

	module.exports = createElement

	function createElement(vnode, opts) {
	    var doc = opts ? opts.document || document : document
	    var warn = opts ? opts.warn : null

	    vnode = handleThunk(vnode).a

	    if (isWidget(vnode)) {
	        return vnode.init()
	    } else if (isVText(vnode)) {
	        return doc.createTextNode(vnode.text)
	    } else if (!isVNode(vnode)) {
	        if (warn) {
	            warn("Item is not a valid virtual dom node", vnode)
	        }
	        return null
	    }

	    var node = (vnode.namespace === null) ?
	        doc.createElement(vnode.tagName) :
	        doc.createElementNS(vnode.namespace, vnode.tagName)

	    var props = vnode.properties
	    applyProperties(node, props)

	    var children = vnode.children

	    for (var i = 0; i < children.length; i++) {
	        var childNode = createElement(children[i], opts)
	        if (childNode) {
	            node.appendChild(childNode)
	        }
	    }

	    return node
	}


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(55)
	var isHook = __webpack_require__(37)

	module.exports = applyProperties

	function applyProperties(node, props, previous) {
	    for (var propName in props) {
	        var propValue = props[propName]

	        if (propValue === undefined) {
	            removeProperty(node, propName, propValue, previous);
	        } else if (isHook(propValue)) {
	            removeProperty(node, propName, propValue, previous)
	            if (propValue.hook) {
	                propValue.hook(node,
	                    propName,
	                    previous ? previous[propName] : undefined)
	            }
	        } else {
	            if (isObject(propValue)) {
	                patchObject(node, props, previous, propName, propValue);
	            } else {
	                node[propName] = propValue
	            }
	        }
	    }
	}

	function removeProperty(node, propName, propValue, previous) {
	    if (previous) {
	        var previousValue = previous[propName]

	        if (!isHook(previousValue)) {
	            if (propName === "attributes") {
	                for (var attrName in previousValue) {
	                    node.removeAttribute(attrName)
	                }
	            } else if (propName === "style") {
	                for (var i in previousValue) {
	                    node.style[i] = ""
	                }
	            } else if (typeof previousValue === "string") {
	                node[propName] = ""
	            } else {
	                node[propName] = null
	            }
	        } else if (previousValue.unhook) {
	            previousValue.unhook(node, propName, propValue)
	        }
	    }
	}

	function patchObject(node, props, previous, propName, propValue) {
	    var previousValue = previous ? previous[propName] : undefined

	    // Set attributes
	    if (propName === "attributes") {
	        for (var attrName in propValue) {
	            var attrValue = propValue[attrName]

	            if (attrValue === undefined) {
	                node.removeAttribute(attrName)
	            } else {
	                node.setAttribute(attrName, attrValue)
	            }
	        }

	        return
	    }

	    if(previousValue && isObject(previousValue) &&
	        getPrototype(previousValue) !== getPrototype(propValue)) {
	        node[propName] = propValue
	        return
	    }

	    if (!isObject(node[propName])) {
	        node[propName] = {}
	    }

	    var replacer = propName === "style" ? "" : undefined

	    for (var k in propValue) {
	        var value = propValue[k]
	        node[propName][k] = (value === undefined) ? replacer : value
	    }
	}

	function getPrototype(value) {
	    if (Object.getPrototypeOf) {
	        return Object.getPrototypeOf(value)
	    } else if (value.__proto__) {
	        return value.__proto__
	    } else if (value.constructor) {
	        return value.constructor.prototype
	    }
	}


/***/ },
/* 62 */
/***/ function(module, exports) {

	// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
	// We don't want to read all of the DOM nodes in the tree so we use
	// the in-order tree indexing to eliminate recursion down certain branches.
	// We only recurse into a DOM node if we know that it contains a child of
	// interest.

	var noChild = {}

	module.exports = domIndex

	function domIndex(rootNode, tree, indices, nodes) {
	    if (!indices || indices.length === 0) {
	        return {}
	    } else {
	        indices.sort(ascending)
	        return recurse(rootNode, tree, indices, nodes, 0)
	    }
	}

	function recurse(rootNode, tree, indices, nodes, rootIndex) {
	    nodes = nodes || {}


	    if (rootNode) {
	        if (indexInRange(indices, rootIndex, rootIndex)) {
	            nodes[rootIndex] = rootNode
	        }

	        var vChildren = tree.children

	        if (vChildren) {

	            var childNodes = rootNode.childNodes

	            for (var i = 0; i < tree.children.length; i++) {
	                rootIndex += 1

	                var vChild = vChildren[i] || noChild
	                var nextIndex = rootIndex + (vChild.count || 0)

	                // skip recursion down the tree if there are no nodes down here
	                if (indexInRange(indices, rootIndex, nextIndex)) {
	                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
	                }

	                rootIndex = nextIndex
	            }
	        }
	    }

	    return nodes
	}

	// Binary search for an index in the interval [left, right]
	function indexInRange(indices, left, right) {
	    if (indices.length === 0) {
	        return false
	    }

	    var minIndex = 0
	    var maxIndex = indices.length - 1
	    var currentIndex
	    var currentItem

	    while (minIndex <= maxIndex) {
	        currentIndex = ((maxIndex + minIndex) / 2) >> 0
	        currentItem = indices[currentIndex]

	        if (minIndex === maxIndex) {
	            return currentItem >= left && currentItem <= right
	        } else if (currentItem < left) {
	            minIndex = currentIndex + 1
	        } else  if (currentItem > right) {
	            maxIndex = currentIndex - 1
	        } else {
	            return true
	        }
	    }

	    return false;
	}

	function ascending(a, b) {
	    return a > b ? 1 : -1
	}


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var applyProperties = __webpack_require__(61)

	var isWidget = __webpack_require__(35)
	var VPatch = __webpack_require__(52)

	var updateWidget = __webpack_require__(64)

	module.exports = applyPatch

	function applyPatch(vpatch, domNode, renderOptions) {
	    var type = vpatch.type
	    var vNode = vpatch.vNode
	    var patch = vpatch.patch

	    switch (type) {
	        case VPatch.REMOVE:
	            return removeNode(domNode, vNode)
	        case VPatch.INSERT:
	            return insertNode(domNode, patch, renderOptions)
	        case VPatch.VTEXT:
	            return stringPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.WIDGET:
	            return widgetPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.VNODE:
	            return vNodePatch(domNode, vNode, patch, renderOptions)
	        case VPatch.ORDER:
	            reorderChildren(domNode, patch)
	            return domNode
	        case VPatch.PROPS:
	            applyProperties(domNode, patch, vNode.properties)
	            return domNode
	        case VPatch.THUNK:
	            return replaceRoot(domNode,
	                renderOptions.patch(domNode, patch, renderOptions))
	        default:
	            return domNode
	    }
	}

	function removeNode(domNode, vNode) {
	    var parentNode = domNode.parentNode

	    if (parentNode) {
	        parentNode.removeChild(domNode)
	    }

	    destroyWidget(domNode, vNode);

	    return null
	}

	function insertNode(parentNode, vNode, renderOptions) {
	    var newNode = renderOptions.render(vNode, renderOptions)

	    if (parentNode) {
	        parentNode.appendChild(newNode)
	    }

	    return parentNode
	}

	function stringPatch(domNode, leftVNode, vText, renderOptions) {
	    var newNode

	    if (domNode.nodeType === 3) {
	        domNode.replaceData(0, domNode.length, vText.text)
	        newNode = domNode
	    } else {
	        var parentNode = domNode.parentNode
	        newNode = renderOptions.render(vText, renderOptions)

	        if (parentNode && newNode !== domNode) {
	            parentNode.replaceChild(newNode, domNode)
	        }
	    }

	    return newNode
	}

	function widgetPatch(domNode, leftVNode, widget, renderOptions) {
	    var updating = updateWidget(leftVNode, widget)
	    var newNode

	    if (updating) {
	        newNode = widget.update(leftVNode, domNode) || domNode
	    } else {
	        newNode = renderOptions.render(widget, renderOptions)
	    }

	    var parentNode = domNode.parentNode

	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }

	    if (!updating) {
	        destroyWidget(domNode, leftVNode)
	    }

	    return newNode
	}

	function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
	    var parentNode = domNode.parentNode
	    var newNode = renderOptions.render(vNode, renderOptions)

	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }

	    return newNode
	}

	function destroyWidget(domNode, w) {
	    if (typeof w.destroy === "function" && isWidget(w)) {
	        w.destroy(domNode)
	    }
	}

	function reorderChildren(domNode, moves) {
	    var childNodes = domNode.childNodes
	    var keyMap = {}
	    var node
	    var remove
	    var insert

	    for (var i = 0; i < moves.removes.length; i++) {
	        remove = moves.removes[i]
	        node = childNodes[remove.from]
	        if (remove.key) {
	            keyMap[remove.key] = node
	        }
	        domNode.removeChild(node)
	    }

	    var length = childNodes.length
	    for (var j = 0; j < moves.inserts.length; j++) {
	        insert = moves.inserts[j]
	        node = keyMap[insert.key]
	        // this is the weirdest bug i've ever seen in webkit
	        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
	    }
	}

	function replaceRoot(oldRoot, newRoot) {
	    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
	        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
	    }

	    return newRoot;
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isWidget = __webpack_require__(35)

	module.exports = updateWidget

	function updateWidget(a, b) {
	    if (isWidget(a) && isWidget(b)) {
	        if ("name" in a && "name" in b) {
	            return a.id === b.id
	        } else {
	            return a.init === b.init
	        }
	    }

	    return false
	}


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var createElement = __webpack_require__(60)

	module.exports = createElement


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	// program
	__webpack_require__(73);
	__webpack_require__(75);

	// html markup
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);

	// bars markup
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);

	// bars expression
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(86);

	// context-maps
	__webpack_require__(87);

	module.exports = Token;
	// module.exports = window.Token = Token;




	// test

	// var prog = new Token.tokens.program();
	//
	// prog.fragment = new Token.tokens.fragment();
	//
	// for (var i = 0; i < 5; i++) {
	//     prog.fragment.nodes.push(new Token.tokens.tag());
	// }

	// window.prog = prog;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(68)
	    .Token;

	var BarsToken = Token.generate(
	    function BarsToken(code, type) {
	        Token.call(this, code, type);
	    }
	);

	BarsToken.tokens = [];

	BarsToken.definePrototype({
	    writable: true
	}, {
	    indentLevel: '',
	    JSONuseObject: true
	});

	BarsToken.definePrototype({
	    TYPE_ID: -1,

	    toJSON: function toJSON(arr) {
	        if (this.JSONuseObject)
	            return this.toObject();
	        return this.toArray();
	    },

	    toArray: function toArray() {
	        var _ = this;

	        console.warn('toArray not impleneted.');
	        return [-1];
	    },

	    toObject: function toObject() {
	        var _ = this;

	        console.warn('toObject not impleneted.');
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID
	        };
	    },
	    fromArray: function fromArray(arr) {
	        var _ = this;
	        if (arr[0] !== _.TYPE_ID) {
	            throw 'TypeMismatch: ' + arr[0] + ' is not ' + _.TYPE_ID;
	        }

	        _._fromArray(arr);
	    },
	    updates: function updates() {
	        var _ = this;
	        console.warn('updates not impleneted.');
	    }
	});

	module.exports = BarsToken;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports.Compiler = __webpack_require__(69);
	exports.Token = __webpack_require__(71);


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(24),
	    Scope = __webpack_require__(70),
	    Token = __webpack_require__(71),
	    CodeBuffer = __webpack_require__(72),
	    utils = __webpack_require__(27);

	var Compiler = Generator.generate(
	    function Compiler(parseModes, formaters) {
	        var _ = this;

	        _.modeFormater = formaters.modeFormater || utils.varThrough;
	        _.charFormater = formaters.charFormater || utils.varThrough;
	        _.funcFormater = formaters.funcFormater || utils.varThrough;
	        _.typeFormater = formaters.typeFormater || utils.varThrough;
	        _.sourceFormater = formaters.sourceFormater || utils.varThrough;

	        _.parseModes = parseModes;
	        _.scope = new Scope();
	    }
	);

	Compiler.definePrototype({
	    compile: function compile(codeStr, file, mode, flags) {
	        var _ = this,
	            tokens = [];

	        _.codeBuffer = new CodeBuffer(codeStr, file);

	        _.scope.verbose = flags.verbose;

	        if (flags.verbose) {
	            _.scope.printScope();
	        }

	        _.parseMode(mode, tokens, flags);

	        if (flags.verbose) {
	            _.scope.printScope();
	        }

	        if (_.scope.length) {
	            throw _.codeBuffer.makeError(
	                'Unexpected End Of Input.'
	            );
	        }

	        return tokens;
	    },

	    parseMode: function parseMode(mode, tokens, flags) {
	        var _ = this,
	            scope = _.scope,
	            code = _.codeBuffer,
	            token,
	            parseFuncs = _.parseModes[mode],
	            index = code.index;

	        if (!parseFuncs) {
	            throw new Error('Mode not found: ' + JSON.stringify(
	                mode) + '.');
	        }

	        function newParseMode(mode, tokens, flags) {
	            _.parseMode(mode, tokens, flags);
	        }

	        newParseMode.close = function () {
	            this.closed = true;
	        };

	        loop: while (code.left) {

	            for (var i = 0; i < parseFuncs.length; i++) {
	                var parseFunc = parseFuncs[i];

	                if (flags.verbose) {
	                    console.log(
	                        utils.repeat('  ', scope.length +
	                            1) +
	                        _.modeFormater(mode) + ' ' +
	                        _.funcFormater(parseFunc.name) +
	                        '\n' +
	                        utils.repeat('  ', scope.length +
	                            1) +
	                        utils.bufferSlice(code, 5, _.charFormater)
	                    );
	                }

	                token = parseFunc(
	                    mode,
	                    code,
	                    tokens,
	                    flags,
	                    scope,
	                    newParseMode
	                );

	                if (token) {
	                    if (token instanceof Token) {
	                        tokens.push(token);

	                        if (flags.verbose) {
	                            console.log(
	                                utils.repeat('  ', scope.length +
	                                    1) +
	                                _.typeFormater(token.constructor
	                                    .name || token.type) +
	                                ': ' +
	                                _.sourceFormater(token.source())
	                            );
	                        }
	                    }

	                    if (newParseMode.closed) {
	                        delete newParseMode.closed;
	                        break loop;
	                    }

	                    break;
	                }
	            }

	            if (newParseMode.closed) {
	                delete newParseMode.closed;
	                break loop;
	            }

	            if (index === code.index) {
	                token = new Token(code);
	                token.close(code);
	                token.value = token.source(code);

	                if (flags.noErrorOnILLEGAL) {
	                    tokens.push(token);
	                } else {
	                    throw code.makeError(
	                        token.range[0],
	                        token.range[1],
	                        'ILLEGAL Token: ' +
	                        JSON.stringify(
	                            token.source(code)
	                        )
	                        .slice(1, -1)
	                    );
	                }
	            }

	            index = code.index;
	        }
	    }
	});

	module.exports = Compiler;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(24),
	    Token = __webpack_require__(71),
	    utils = __webpack_require__(27);

	var Scope = Generator.generate(
	    function Scope() {
	        var _ = this;

	        _.defineProperties({
	            _scope: []
	        });
	    }
	);

	Scope.definePrototype({
	    push: function push(token) {
	        var _ = this;

	        utils.assertError(Token.isCreation(token), 'Invalid Type.');

	        _._scope.push(token);

	        if (_.verbose) {
	            _.printScope();
	        }

	        return _._scope.length;
	    },
	    pop: function pop() {
	        var _ = this;

	        var token = _._scope.pop();

	        if (_.verbose) {
	            _.printScope();
	        }

	        return token;
	    },
	    close: function close() {
	        var _ = this;

	        var token = _._scope.pop();

	        token.close();

	        if (_.verbose) {
	            _.printScope();
	        }

	        return token;
	    },
	    printScope: function printScope() {
	        var _ = this;

	        console.log(
	            ['Main'].concat(
	                _._scope
	                .map(function (item) {
	                    return item.constructor.name ||
	                        item.type;
	                })
	            )
	            .join(' => ')
	        );
	    },
	    token: {
	        get: function getToken() {
	            var _ = this;

	            return _._scope[_._scope.length - 1];
	        }
	    },
	    length: {
	        get: function getLength() {
	            var _ = this;

	            return _._scope.length;
	        }
	    }
	});

	module.exports = Scope;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(24),
	    utils = __webpack_require__(27);

	var Token = Generator.generate(
	    function Token(code, type) {
	        var _ = this;

	        _.defineProperties({
	            code: code
	        });

	        _.type = type;
	        _.range = [code.index, code.index + 1];
	        _.loc = {
	            start: {
	                line: code.line,
	                column: code.column
	            },
	            end: {
	                line: code.line,
	                column: code.column + 1
	            }
	        };
	    }
	);

	Token.definePrototype({
	    writable: true,
	    enumerable: true
	}, {
	    type: 'ILLEGAL'
	});

	Token.definePrototype({
	    length: {
	        get: function getLength() {
	            return this.range[1] - this.range[0];
	        }
	    },
	    source: function source() {
	        var _ = this;
	        return _.code.slice(_.range[0], _.range[1]);
	    },
	    close: function close() {
	        var _ = this;

	        if (_.closed) {
	            throw new Error('Cannot call close on a closed token.');
	        }

	        _.closed = true;

	        if (_.code.index > _.range[1]) {
	            _.range[1] = _.code.index;
	            _.loc.end = {
	                line: _.code.line,
	                column: _.code.column
	            };
	        }
	    }
	});

	module.exports = Token;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(24),
	    utils = __webpack_require__(27);

	var CodeBuffer = Generator.generate(
	    function CodeBuffer(str, file) {
	        var _ = this;

	        _.reset();
	        _._buffer = str;
	        _._file = file;
	    }
	);

	CodeBuffer.definePrototype({
	    reset: function reset() {
	        var _ = this;

	        _.line = 1;
	        _.column = 1;
	        _._index = 0;
	        _._currentLine = 0;
	    },
	    currentLine: {
	        get: function currentLine() {
	            var _ = this,
	                lineText = '',
	                i = _._currentLine;

	            while (i < _.length) {
	                lineText += _._buffer[i];
	                if (_._buffer.codePointAt(i) === 10) {
	                    break;
	                }
	                i++;
	            }

	            return lineText;
	        }
	    },

	    buffer: {
	        get: function getBuffer() {
	            var _ = this;

	            return _._buffer;
	        }
	    },


	    index: {
	        get: function getIndex() {
	            var _ = this;

	            return _._index;
	        },

	        set: function setIndex(val) {
	            var _ = this,
	                i = _._index,
	                update = false;

	            val = Math.min(_.length, val);
	            val = Math.max(0, val);

	            if (i == val) return;

	            if (i > val) {
	                // throw new Error('========' + val + ' < ' +i+'=======');
	                _.reset();
	                i = _._index;
	            }

	            if (_.buffer.codePointAt(i) === 10) {
	                update = true;
	                i++;
	            }

	            for (; i <= val; i++) {
	                if (update) {
	                    _._currentLine = i;
	                    _.line++;
	                    update = false;
	                } else {
	                    _.column++;
	                }

	                if (_.buffer.codePointAt(i) === 10) {
	                    update = true;
	                }
	            }
	            _.column = val - _._currentLine + 1;
	            _._index = val;
	        }
	    },

	    length: {
	        get: function getLength() {
	            var _ = this;

	            return _._buffer.length;
	        }
	    },

	    next: function next() {
	        var _ = this;

	        _.index++;
	        return _.charAt(_.index);
	    },

	    left: {
	        get: function getLeft() {
	            var _ = this;

	            return _._index < _.length;
	        }
	    },

	    charAt: function charAt(i) {
	        var _ = this;

	        return _._buffer[i] || 'EOF';
	    },

	    codePointAt: function codePointAt(i) {
	        var _ = this;

	        return _._buffer.codePointAt(i);
	    },

	    slice: function slice(startIndex, endIndex) {
	        var _ = this;

	        return _._buffer.slice(startIndex, endIndex);
	    },

	    makeError: function makeError(start, end, message) {
	        var _ = this;

	        utils.assertTypeError(start, 'number');
	        utils.assertTypeError(end, 'number');
	        utils.assertTypeError(message, 'string');

	        _.index = start;

	        var currentLine = _.currentLine,
	            tokenLength = end - start,
	            tokenIdentifier =
	            currentLine[currentLine.length - 1] === '\n' ? '' :
	            '\n',
	            i;

	        for (i = 1; i < _.column; i++) {
	            tokenIdentifier += ' ';
	        }

	        tokenLength = Math.min(
	            tokenLength,
	            currentLine.length - tokenIdentifier.length
	        ) || 1;

	        for (i = 0; i < tokenLength; i++) {
	            tokenIdentifier += '^';
	        }

	        return 'Syntax Error: ' +
	            message +
	            ' at ' +
	            (_._file ? _._file + ':' : '') +
	            _.line +
	            ':' +
	            _.column +
	            '\n\n' +
	            currentLine +
	            tokenIdentifier +
	            '\n';
	    }
	});

	module.exports = CodeBuffer;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);
	var PACKAGE_JSON = __webpack_require__(74);

	var ProgramToken = Token.generate(
	    function ProgramToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.version = PACKAGE_JSON.version;
	        _.mode = '';

	        _.fragment = null;
	    }
	);

	ProgramToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'program'
	});

	ProgramToken.definePrototype({
	    writable: true
	}, {
	    indentLevel: '\n'
	});

	ProgramToken.definePrototype({
	    TYPE_ID: Token.tokens.push(ProgramToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.version,
	            _.mode,
	            _.fragment
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            version: _.version,
	            mode: _.mode,
	            fragment: _.fragment
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.version = arr[1];
	        _.mode = arr[2];

	        var fragment = new Token.tokens.fragment();

	        fragment.fromArray(arr[3]);

	        _.fragment = fragment;
	    },
	    toString: function toString() {
	        var _ = this;

	        _.fragment.indentLevel = _.indentLevel;

	        return _.fragment.toString()
	            .trim() + '\n';
	    }
	});

	Token.tokens.program = ProgramToken;


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = {
		"name": "bars",
		"version": "1.6.0",
		"description": "Bars is a lightweight high performance HTML aware templating engine.",
		"main": "index.js",
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"repository": {
			"type": "git",
			"url": "git+https://github.com/Mike96Angelo/Bars.git"
		},
		"keywords": [
			"bars",
			"render",
			"renderer",
			"rendering",
			"template",
			"templating",
			"html"
		],
		"author": "Michaelangelo Jong",
		"license": "MIT",
		"bugs": {
			"url": "https://github.com/Mike96Angelo/Bars/issues"
		},
		"homepage": "https://github.com/Mike96Angelo/Bars#readme",
		"dependencies": {
			"compileit": "^1.0.1",
			"generate-js": "^3.1.2",
			"jquery": "^3.1.1",
			"source-map": "^0.5.6",
			"virtual-dom": "^2.1.1"
		},
		"devDependencies": {
			"browserify": "^13.1.1",
			"colors": "^1.1.2",
			"gulp": "^3.9.1",
			"gulp-minify": "0.0.14",
			"stringify": "^5.1.0",
			"vinyl-buffer": "^1.0.0",
			"vinyl-source-stream": "^1.1.0"
		}
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var FragmentToken = Token.generate(
	    function FragmentToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.nodes = [];

	        _.nodesUpdate = 0;
	    }
	);


	FragmentToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'fragment'
	});

	FragmentToken.definePrototype({
	    TYPE_ID: Token.tokens.push(FragmentToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.nodes,
	            _.nodesUpdate
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            nodes: _.nodes,
	            nodesUpdate: _.nodesUpdate
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.nodes = arr[1].map(function (item) {
	            var node = new Token.tokens[item[0]]();

	            node.fromArray(item);

	            return node;
	        });

	        _.nodesUpdate = arr[2];
	    },

	    toString: function toString() {
	        var _ = this,
	            str = '';

	        for (var i = 0; i < _.nodes.length; i++) {
	            _.nodes[i].indentLevel = _.indentLevel;
	            str += _.nodes[i].toString();
	        }

	        return str;
	    },
	    updates: function updates() {
	        var _ = this;

	        _.nodesUpdate = 1;
	    }
	});

	Token.tokens.fragment = FragmentToken;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var TextToken = Token.generate(
	    function TextToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.value = '';
	    }
	);


	TextToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'text'
	});

	TextToken.definePrototype({
	    TYPE_ID: Token.tokens.push(TextToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.value
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            value: _.value
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.value = arr[1];
	    },

	    toString: function toString() {
	        var _ = this,
	            str = '';

	        str += _.indentLevel + _.value;

	        return str;
	    }
	});

	Token.tokens.text = TextToken;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var TagToken = Token.generate(
	    function TagToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.name = '';

	        _.attrs = [];
	        _.props = [];
	        _.nodes = [];

	        _.attrsUpdate = 0;
	        _.nodesUpdate = 0;
	    }
	);


	TagToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'tag'
	});

	TagToken.definePrototype({
	    TYPE_ID: Token.tokens.push(TagToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.name,
	            _.attrs,
	            _.attrsUpdate,
	            _.nodes,
	            _.nodesUpdate,
	            _.props
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            name: _.name,
	            attrs: _.attrs,
	            attrsUpdate: _.attrsUpdate,
	            nodes: _.nodes,
	            nodesUpdate: _.nodesUpdate,
	            props: _.props
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.name = arr[1];

	        _.attrs = arr[2].map(function (item) {
	            var attr = new Token.tokens[item[0]]();

	            attr.fromArray(item);

	            return attr;
	        });

	        _.attrsUpdate = arr[3];

	        _.nodes = arr[4].map(function (item) {
	            var node = new Token.tokens[item[0]]();

	            node.fromArray(item);

	            return node;
	        });

	        _.nodesUpdate = arr[5];

	        _.props = arr[6].map(function (item) {
	            var prop = new Token.tokens[item[0]]();

	            prop.fromArray(item);

	            return prop;
	        });
	    },

	    toString: function toString() {
	        var _ = this,
	            str = _.indentLevel + '<' + _.name;

	        for (var i = 0; i < _.attrs.length; i++) {
	            str += _.attrs[i].toString();
	        }

	        if (_.selfClosed) {
	            str += (_.attrs.length ? ' ' : '') + '/>'; 
	            return str;
	        }

	        str += '>'; 
	        if (_.selfClosing) {
	            return str;
	        }
	        var nodes = '';
	        for (i = 0; i < _.nodes.length; i++) {
	            _.nodes[i].indentLevel = (_.indentLevel ? _.indentLevel +
	                '  ' : '');
	            nodes += _.nodes[i].toString();
	        }

	        str += nodes.trim();

	        str += _.indentLevel + '</' + _.name + '>';

	        return str;
	    },

	    updates: function updates(type) {
	        var _ = this;

	        if (type === 'attr') {
	            _.attrsUpdate = 1;
	        } else {
	            _.nodesUpdate = 1;
	        }
	    }
	});

	Token.tokens.tag = TagToken;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var AttrToken = Token.generate(
	    function AttrToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.name = '';

	        _.nodes = [];

	        _.nodesUpdate = 0;
	    }
	);


	AttrToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'attr'
	});

	AttrToken.definePrototype({
	    TYPE_ID: Token.tokens.push(AttrToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.name,
	            _.nodes,
	            _.nodesUpdate
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            name: _.name,
	            nodes: _.nodes,
	            nodesUpdate: _.nodesUpdate
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.name = arr[1];

	        _.nodes = arr[2].map(function (item) {
	            var node = new Token.tokens[item[0]]();

	            node.fromArray(item);

	            return node;
	        });

	        _.nodesUpdate = arr[3];
	    },

	    toString: function toString() {
	        var _ = this,
	            str = ' ';

	        str += _.name + (_.nodes.length ? '="' : '');

	        for (var i = 0; i < _.nodes.length; i++) {

	            _.nodes[i].indentLevel = '';

	            str += _.nodes[i].toString();
	        }

	        str += (_.nodes.length ? '"' : '');

	        return str;
	    },
	    updates: function updates() {
	        var _ = this;

	        _.nodesUpdate = 1;
	    }
	});

	Token.tokens.attr = AttrToken;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var PropToken = Token.generate(
	    function PropToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.name = '';
	        _.expression = null;
	    }
	);


	PropToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'prop'
	});

	PropToken.definePrototype({
	    TYPE_ID: Token.tokens.push(PropToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.name,
	            _.expression
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            name: _.name,
	            expression: _.expression
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.name = arr[1];

	        var expression = new Token.tokens[arr[2][0]]();

	        expression.fromArray(arr[2]);

	        _.expression = expression;
	    },

	    toString: function toString() {
	        var _ = this,
	            str = _.name + ':{{ ';
	        str += _.expression.toString();
	        str += ' }}';
	        return str;
	    }
	});

	Token.tokens.prop = PropToken;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var BlockToken = Token.generate(
	    function BlockToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.name = '';

	        _.arguments = null;
	        _.map = null;

	        _.consequent = null;
	        _.alternate = null;
	    }
	);


	BlockToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'block'
	});

	BlockToken.definePrototype({
	    TYPE_ID: Token.tokens.push(BlockToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.name,
	            _.arguments,
	            _.map,
	            _.consequent,
	            _.alternate
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            name: _.name,
	            arguments: _.arguments,
	            map: _.map,
	            consequent: _.consequent,
	            alternate: _.alternate
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.name = arr[1];

	        _.arguments = arr[2].map(function (item) {
	            var arg = new Token.tokens[item[0]]();

	            arg.fromArray(item);

	            return arg;
	        });

	        _.map = arr[3].map(function (item) {
	            var arg = new Token.tokens[item[0]]();

	            arg.fromArray(item);

	            return arg;
	        });

	        var consequent = new Token.tokens.fragment();

	        consequent.fromArray(arr[4]);

	        _.consequent = consequent;

	        if (arr[5]) {
	            var alternate = new Token.tokens[arr[5][0]]();

	            alternate.fromArray(arr[5]);

	            _.alternate = alternate;
	        }
	    },

	    toString: function toString() {
	        var _ = this,
	            str = '';

	        if (!_.fromElse) {
	            str += _.indentLevel + '{{#';
	        }

	        str += _.name + ' ';

	        str += _.expression.toString();
	        str += (_.map ? _.map.toString() : '');

	        str += '}}';

	        _.consequent.indentLevel = (_.indentLevel ? _.indentLevel +
	            '  ' : '');
	        str += _.consequent.toString();

	        if (_.alternate) {
	            _.alternate.indentLevel = _.indentLevel;
	            if (_.alternate.type === 'block') {
	                _.alternate.fromElse = true;
	                str += _.indentLevel + '{{else ' + _.alternate.toString();
	                return str;
	            }
	            _.alternate.indentLevel += (_.indentLevel ? _.indentLevel +
	                '  ' : '');

	            str += _.indentLevel + '{{else}}';
	            str += _.alternate.toString();
	        }

	        str += _.indentLevel + '{{/' + _.name + '}}';

	        return str;
	    },
	    updates: function updates() {
	        var _ = this;

	        if (_.elsed && _.alternate) {
	            _.alternate.nodesUpdate = 1;
	        } else if (_.consequent) {
	            _.consequent.nodesUpdate = 1;
	        }
	    }
	});

	Token.tokens.block = BlockToken;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var InsertToken = Token.generate(
	    function InsertToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.expression = null;
	    }
	);


	InsertToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'insert'
	});

	InsertToken.definePrototype({
	    TYPE_ID: Token.tokens.push(InsertToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.expression
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            expression: _.expression
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        var expression = new Token.tokens[arr[1][0]]();

	        expression.fromArray(arr[1]);

	        _.expression = expression;
	    },

	    toString: function toString() {
	        var _ = this,
	            str = '{{ ';
	        str += _.expression.toString();
	        str += ' }}';
	        return str;
	    }
	});

	Token.tokens.insert = InsertToken;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var PartialToken = Token.generate(
	    function PartialToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.name = '';

	        _.expression = null;
	        _.map = null;
	    }
	);


	PartialToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'partial'
	});

	PartialToken.definePrototype({
	    TYPE_ID: Token.tokens.push(PartialToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.name,
	            _.expression,
	            _.map
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            name: _.name,
	            expression: _.expression,
	            map: _.map
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.name = arr[1];

	        if (arr[2]) {
	            var expression = new Token.tokens[arr[2][0]]();

	            expression.fromArray(arr[2]);

	            _.expression = expression;
	        }

	        _.map = arr[3].map(function (item) {
	            var arg = new Token.tokens[item[0]]();

	            arg.fromArray(item);

	            return arg;
	        });
	    },
	    toString: function toString() {
	        var _ = this,
	            str = _.indentLevel + '{{>' + _.name;
	        str += (_.expression ? ' ' + _.expression.toString() : '');
	        str += '}}';
	        return str;
	    }
	});

	Token.tokens.partial = PartialToken;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var LiteralToken = Token.generate(
	    function LiteralToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.value = '';
	    }
	);


	LiteralToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'literal'
	});

	LiteralToken.definePrototype({
	    TYPE_ID: Token.tokens.push(LiteralToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.value
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            value: _.value
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.value = arr[1];
	    },
	    toString: function toString() {
	        var _ = this,
	            str = '';

	        str += _.value;

	        return str;
	    }
	});

	Token.tokens.literal = LiteralToken;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var ValueToken = Token.generate(
	    function ValueToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.path = '';
	    }
	);


	ValueToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'value'
	});

	ValueToken.definePrototype({
	    TYPE_ID: Token.tokens.push(ValueToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.path
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            path: _.path
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.path = arr[1];
	    },

	    toString: function toString() {
	        var _ = this,
	            str = '';

	        if (
	            _.path[0] === '~' ||
	            _.path[0] === '..' ||
	            _.path[0] === '.' ||
	            _.path[0] === '@'
	        ) {
	            str += _.path.join('/');
	        } else {
	            str += _.path.join('.');
	        }

	        return str;
	    }
	});

	Token.tokens.value = ValueToken;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var TransformToken = Token.generate(
	    function TransformToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.name = '';

	        _.arguments = [];
	    }
	);


	TransformToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'transform'
	});

	TransformToken.definePrototype({
	    TYPE_ID: Token.tokens.push(TransformToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.name,
	            _.arguments
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            name: _.name,
	            arguments: _.arguments
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.name = arr[1];

	        _.arguments = arr[2].map(function (item) {
	            var arg = new Token.tokens[item[0]]();

	            arg.fromArray(item);

	            return arg;
	        });
	    },

	    toString: function toString() {
	        var _ = this,
	            str = '@';

	        str += _.name + '(';

	        for (var i = 0; i < _.arguments.length; i++) {

	            str += _.arguments[i].toString() + (i + 1 < _.arguments
	                .length ?
	                ', ' : '');
	        }

	        str += ')';

	        return str;
	    }
	});

	Token.tokens.transform = TransformToken;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var OperatorToken = Token.generate(
	    function OperatorToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.operator = '';

	        _.operands = [];
	    }
	);


	OperatorToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'operator'
	});

	OperatorToken.definePrototype({
	    TYPE_ID: Token.tokens.push(OperatorToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.operator,
	            _.operands
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            operator: _.operator,
	            operands: _.operands
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.operator = arr[1];

	        _.operands = arr[2].map(function (item) {
	            var arg = new Token.tokens[item[0]]();

	            arg.fromArray(item);

	            return arg;
	        });
	    },

	    toString: function toString() {
	        var _ = this,
	            str = '';

	        if (_.operands.length === 1) {
	            str += _.operator + _.operands[0].toString();
	        } else if (_.operands.length === 2) {
	            str += _.operands[0].toString();
	            str += ' ' + _.operator + ' ';
	            str += _.operands[1].toString();
	        }

	        return str;
	    }
	});

	Token.tokens.operator = OperatorToken;
	Token;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(67);

	var AssignmentToken = Token.generate(
	    function AssignmentToken(code) {
	        var _ = this;

	        if (code) {
	            Token.call(_, code);
	        }

	        _.name = '';

	        _.expression = null;
	    }
	);


	AssignmentToken.definePrototype({
	    enumerable: true
	}, {
	    type: 'assignment'
	});

	AssignmentToken.definePrototype({
	    TYPE_ID: Token.tokens.push(AssignmentToken) - 1,
	    toArray: function () {
	        var _ = this;
	        return [
	            _.TYPE_ID,
	            _.name,
	            _.expression
	        ];
	    },

	    toObject: function () {
	        var _ = this;
	        return {
	            type: _.type,
	            TYPE_ID: _.TYPE_ID,
	            name: _.name,
	            expression: _.expression
	        };
	    },

	    _fromArray: function _fromArray(arr) {
	        var _ = this;

	        _.name = arr[1];

	        _.expression = new Token.tokens[arr[2][0]]();

	        _.expression.fromArray(arr[2]);
	    },

	    toString: function toString() {
	        // var _ = this,
	        //     str = '';
	        //
	        // if (_.operands.length === 1) {
	        //     str += _.assignment + _.operands[0].toString();
	        // } else if (_.operands.length === 2) {
	        //     str += _.operands[0].toString();
	        //     str += ' ' + _.assignment + ' ';
	        //     str += _.operands[1].toString();
	        // }
	        //
	        // return str;
	    }
	});

	Token.tokens.assignment = AssignmentToken;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(24);

	var Blocks = Generator.generate(function Blocks() {});

	Blocks.definePrototype({
	    if: function ifBlock(args, consequent, alternate, context) {
	        if (args[0]) {
	            consequent();
	        } else {
	            alternate();
	        }
	    },

	    with: function withBlock(args, consequent, alternate, context) {
	        var _ = this,
	            data = args[0];

	        if (!args.length) {
	            consequent();
	        } else if (data && typeof data === 'object') {
	            consequent(context.newContext(data));
	        } else {
	            alternate();
	        }
	    },

	    each: function eachBlock(args, consequent, alternate, context) {
	        var _ = this,
	            data = args[0];

	        if (data && typeof data === 'object') {
	            var keys = Object.keys(data);

	            if (keys.length) {
	                for (var i = 0; i < keys.length; i++) {
	                    consequent(
	                        context.newContext(
	                            data[keys[i]], {
	                                key: keys[i],
	                                index: i,
	                                length: keys.length
	                            }
	                        )
	                    );
	                }
	            } else {
	                alternate();
	            }
	        } else {
	            alternate();
	        }
	    }
	});

	module.exports = Blocks;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var Generator = __webpack_require__(24);

	var Transform = Generator.generate(function Transform() {});

	Transform.definePrototype({
	    log: function log() {
	        var args = Array.prototype.slice.call(arguments);
	        args.unshift('Bars:');
	        console.log.apply(console, args);
	    },
	    upperCase: function upperCase(a) {
	        return String(a)
	            .toUpperCase();
	    },
	    lowerCase: function lowerCase(a) {
	        return String(a)
	            .toLowerCase();
	    },
	    number: function number(a) {
	        return Number(a);
	    },
	    string: function string(a) {
	        return String(a);
	    },
	    reverse: function reverse(arr) {
	        return arr.slice()
	            .reverse();
	    },
	    slice: function (arr, start, end) {
	        return arr.slice(start, end);
	    },
	    map: function map(arr, prop) {
	        return arr.map(function (item) {
	            return arr[prop];
	        });
	    },
	    sort: function sort(arr, key) {
	        return arr.slice()
	            .sort(function (a, b) {
	                if (key) {
	                    if (a[key] < b[key]) return -1;
	                    if (a[key] > b[key]) return 1;
	                    return 0;
	                }

	                if (a < b) return -1;
	                if (a > b) return 1;
	                return 0;
	            });
	    },
	    sum: function sum(arr, key) {
	        var sum = 0,
	            i;
	        if (key) {
	            for (i = 0; i < arr.length; i++) {
	                sum += arr[i][key];
	            }
	        } else {
	            for (i = 0; i < arr.length; i++) {
	                sum += arr[i];
	            }
	        }

	        return sum;
	    },
	    ave: function ave(arr, key) {
	        var sum = 0,
	            i;
	        if (key) {
	            for (i = 0; i < arr.length; i++) {
	                sum += arr[i][key];
	            }
	        } else {
	            for (i = 0; i < arr.length; i++) {
	                sum += arr[i];
	            }
	        }

	        return sum / arr.length;
	    }
	});

	module.exports = Transform;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(91);


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var compileit = __webpack_require__(68);
	var parsers = __webpack_require__(92);

	var Token = __webpack_require__(66);

	/* Parse Modes */

	var parseModes = {
	    'TEXT': [
	        parsers.parseText,
	        parsers.parseBarsMarkup
	    ],
	    'BARS': [
	        parsers.parseBarsComment,
	        parsers.parseBarsBlock,
	        parsers.parseBarsPartial,
	        parsers.parseBarsInsert
	    ],
	    'DOM': [
	        parsers.parseText,
	        parsers.parseHTMLComment,
	        parsers.parseHTMLTag,
	        parsers.parseBarsMarkup
	    ],
	    'ATTR': [
	        parsers.parseHTMLTagEnd,
	        parsers.parseWhitspace,
	        parsers.parseHTMLAttr,
	        // parsers.parseBarsMarkup
	    ],
	    'VALUE': [
	        parsers.parseHTMLAttrEnd,
	        parsers.parseText,
	        parsers.parseBarsMarkup
	    ],
	    'LOGIC': [
	        parsers.parseBarsMarkupEnd,
	        parsers.parseExpressionLiteral,
	        parsers.parseExpressionTransform,
	        parsers.parseExpressionValue,
	        parsers.parseExpressionOperator,
	        parsers.parseExpressionAssignment,
	        parsers.parseWhitspace
	    ],
	    'LOGIC-EXP': [
	        parsers.parseBarsMarkupEnd,
	        parsers.parseExpressionLiteral,
	        parsers.parseExpressionTransform,
	        parsers.parseExpressionValue,
	        parsers.parseExpressionOperator,
	        parsers.parseWhitspace
	    ],
	    'LOGIC-ARGS': [
	        parsers.parseExpressionTransformEnd,
	        parsers.parseExpressionLiteral,
	        parsers.parseExpressionTransform,
	        parsers.parseExpressionValue,
	        parsers.parseExpressionOperator,
	        parsers.parseWhitspace
	    ]
	};

	var compiler = new compileit.Compiler(parseModes, {
	    modeFormater: function (a) {
	        return a.green;
	    },
	    charFormater: function (a) {
	        return a.green.underline;
	    },
	    funcFormater: function (a) {
	        return a.red;
	    },
	    typeFormater: function (a) {
	        return a.red;
	    },
	    sourceFormater: function (a) {
	        return ('`' + a + '`')
	            .green.underline;
	    }
	});

	function compile(str, file, mode, flags) {
	    mode = mode || 'DOM';
	    flags = flags || {};

	    var program = new Token.tokens.program(),
	        frag = new Token.tokens.fragment();

	    frag.nodesUpdate = 1;

	    program.mode = mode;
	    program.fragment = frag;

	    frag.nodes = compiler.compile(str, file, mode, flags);

	    return program;
	}

	module.exports = compile;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// text
	exports.parseText = __webpack_require__(93);
	exports.parseWhitspace = __webpack_require__(97);

	// HTML markup
	exports.parseHTMLComment = __webpack_require__(98);
	exports.parseHTMLTag = __webpack_require__(99);
	exports.parseHTMLTagEnd = __webpack_require__(100);
	exports.parseHTMLAttr = __webpack_require__(101);
	exports.parseHTMLAttrEnd = __webpack_require__(102);

	// Bars markup
	exports.parseBarsMarkup = __webpack_require__(103);
	exports.parseBarsComment = __webpack_require__(104);
	exports.parseBarsInsert = __webpack_require__(105);
	exports.parseBarsPartial = __webpack_require__(106);
	exports.parseBarsBlock = __webpack_require__(107);
	exports.parseBarsMarkupEnd = __webpack_require__(108);

	// Expression
	exports.parseExpressionValue = __webpack_require__(109);
	exports.parseExpressionLiteral = __webpack_require__(110);
	exports.parseExpressionOperator = __webpack_require__(111);
	exports.parseExpressionAssignment = __webpack_require__(112);
	exports.parseExpressionTransform = __webpack_require__(113);
	exports.parseExpressionTransformEnd = __webpack_require__(114);


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var TextToken = __webpack_require__(66)
	    .tokens.text,
	    utils = __webpack_require__(94);

	function parseText(mode, code, tokens, flags, scope,
	    parseMode) {
	    var index = code.index,
	        isEntity = false,
	        entityStr = '',
	        value = '',
	        textExitTag;

	    if (mode === 'DOM') {
	        for (; index < code.length; index++) {
	            ch = code.codePointAt(index);

	            if (
	                ch === 0x003c /* < */ ||
	                ch === 0x007b /* { */ &&
	                code.codePointAt(index + 1) === 0x007b /* { */
	            ) {
	                value += entityStr;
	                break;
	            }

	            if (ch === 0x0026 /* & */ ) {
	                isEntity = true;
	                entityStr = code.charAt(index);

	                continue;
	            } else if (isEntity && ch === 0x003b /* ; */ ) {
	                entityStr += code.charAt(index);

	                value += utils.getHTMLUnEscape(entityStr);

	                isEntity = false;
	                entityStr = '';

	                continue;
	            }

	            if (isEntity && utils.isHTMLEntity(ch)) {
	                entityStr += code.charAt(index);
	            } else {
	                value += entityStr;
	                isEntity = false;
	                entityStr = '';

	                value += code.charAt(index);
	            }
	        }
	    } else if (flags.whitepaceString) {
	        for (; index < code.length; index++) {
	            ch = code.codePointAt(index);

	            /* \n */
	            if (ch === 0x000a) {
	                code.index = index;
	                return null;
	            }

	            if ( /* " but not \" */
	                ch === 0x0022 &&
	                code.codePointAt(index - 1) !== 0x005c
	            ) {
	                break;
	            }

	            if ( /* {{ */
	                ch === 0x007b &&
	                code.codePointAt(index + 1) === 0x007b
	            ) {
	                break;
	            }
	        }
	    } else {
	        for (; index < code.length; index++) {
	            if (
	                code.codePointAt(index) === 0x007b /* { */ &&
	                code.codePointAt(index + 1) === 0x007b /* { */
	            ) {
	                break;
	            } else if (
	                flags.textExitTag === 'script' &&
	                /* </script> */
	                code.codePointAt(index) === 0x003c &&
	                code.codePointAt(index + 1) === 0x002f &&

	                code.codePointAt(index + 2) === 0x0073 &&
	                code.codePointAt(index + 3) === 0x0063 &&
	                code.codePointAt(index + 4) === 0x0072 &&
	                code.codePointAt(index + 5) === 0x0069 &&
	                code.codePointAt(index + 6) === 0x0070 &&
	                code.codePointAt(index + 7) === 0x0074 &&

	                code.codePointAt(index + 8) === 0x003e
	            ) {
	                textExitTag = 9;
	                break;
	            } else if (
	                flags.textExitTag === 'style' &&
	                /* </style> */
	                code.codePointAt(index) === 0x003c &&
	                code.codePointAt(index + 1) === 0x002f &&

	                code.codePointAt(index + 2) === 0x0073 &&
	                code.codePointAt(index + 3) === 0x0074 &&
	                code.codePointAt(index + 4) === 0x0079 &&
	                code.codePointAt(index + 5) === 0x006c &&
	                code.codePointAt(index + 6) === 0x0065 &&

	                code.codePointAt(index + 7) === 0x003e
	            ) {
	                textExitTag = 8;
	                break;
	            }
	        }
	    }

	    if (code.index < index) {
	        var text = new TextToken(code);

	        code.index = index;

	        text.close();

	        if (flags.minify) {
	            text.value = utils.minifyHTMLText(value || text.source(code));
	            if (/^\s*$/.test(text.value))
	                return true;
	        } else {
	            text.value = value || text.source(code);
	        }

	        if (flags.textExitTag && textExitTag) {
	            code.index += textExitTag;
	            scope.close();
	            parseMode.close();
	        }

	        return text;
	    } else if (flags.textExitTag && textExitTag) {
	        code.index += textExitTag;
	        scope.close();
	        parseMode.close();
	    }

	    return null;
	}

	module.exports = parseText;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var SELF_CLOSEING_TAGS = __webpack_require__(95);
	var ENTITIES = __webpack_require__(96);

	var Token = __webpack_require__(66),
	    AssignmentToken = Token.tokens.assignment,
	    LiteralToken = Token.tokens.literal,
	    ValueToken = Token.tokens.value,
	    OperatorToken = Token.tokens.operator;

	function pathSpliter(path) {
	    var splitPath;

	    if (path instanceof Array) {
	        splitPath = path;
	    } else if (typeof path === 'string') {
	        if (path.match(/[/]|[.][.]/)) {
	            splitPath = path.split('/');
	        } else {
	            splitPath = path.split('.');
	        }

	        if (!splitPath[0] && !splitPath[1]) {
	            splitPath = ['.'];
	        }

	        var barsProp = splitPath.pop()
	            .split('@');
	        if (barsProp[0]) {
	            splitPath.push(barsProp[0]);
	        }
	        if (barsProp[1]) {
	            splitPath.push('@' + barsProp[1]);
	        }
	    } else {
	        throw 'bad arrgument: expected String | Array<String>.';
	    }

	    return splitPath;
	}
	exports.pathSpliter = pathSpliter;

	function isSelfClosing(name) {
	    return SELF_CLOSEING_TAGS.indexOf(name) !== -1;
	}
	exports.isSelfClosing = isSelfClosing;

	function isHTMLIdentifierStart(ch) {
	    return (0x0041 <= ch && ch <= 0x005a) ||
	        (0x0061 <= ch && ch <= 0x007a);
	}
	exports.isHTMLIdentifierStart = isHTMLIdentifierStart;

	function isHTMLEntity(ch) {
	    /* ^[0-9A-Za-z]$ */
	    return (0x0030 <= ch && ch <= 0x0039) ||
	        (0x0041 <= ch && ch <= 0x005a) ||
	        (0x0061 <= ch && ch <= 0x007a);
	}
	exports.isHTMLEntity = isHTMLEntity;

	function isHTMLIdentifier(ch) {
	    /* ^[0-9A-Z_a-z-]$ */
	    return ch === 0x002d ||
	        (0x0030 <= ch && ch <= 0x0039) ||
	        (0x0041 <= ch && ch <= 0x005a) ||
	        ch === 0x005f ||
	        (0x0061 <= ch && ch <= 0x007a);
	}
	exports.isHTMLIdentifier = isHTMLIdentifier;


	function isWhitespace(ch) {
	    /* ^\s$ */
	    return (0x0009 <= ch && ch <= 0x000d) ||
	        ch === 0x0020 ||
	        ch === 0x00a0 || /* nbsp */
	        ch === 0x1680 ||
	        ch === 0x180e ||
	        (0x2000 <= ch && ch <= 0x200a) ||
	        (0x2028 <= ch && ch <= 0x2029) ||
	        ch === 0x202f ||
	        ch === 0x205f ||
	        ch === 0x3000 ||
	        ch === 0xfeff;
	}
	exports.isWhitespace = isWhitespace;

	function minifyHTMLText(text) {
	    return text.replace(/(\s*)/g, function ($1) {
	        return $1.split('')
	            .sort(function (a, b) {
	                a = a.codePointAt(0);
	                b = b.codePointAt(0);
	                if (a !== 0x00a0 && b === 0x00a0) return 1;
	                if (a === 0x00a0 && b !== 0x00a0) return -1;
	                return 0;
	            })
	            .join('')
	            .replace(/[^\u00a0]+/, ' ');
	    });
	}
	exports.minifyHTMLText = minifyHTMLText;

	function getHTMLUnEscape(str) {
	    var code;

	    code = ENTITIES[str.slice(1, -1)];

	    if (typeof code !== 'number' && str[1] === '#') {
	        code = parseInt(str.slice(2, -1), 0x000a);
	    }

	    if (typeof code === 'number' && !isNaN(code)) {
	        return String.fromCharCode(code);
	    }

	    return str;
	}

	exports.getHTMLUnEscape = getHTMLUnEscape;

	var OpPresidence = {
	    dm: ['/', '%', '*'],
	    as: ['+', '-'],
	    c: ['===', '==', '!==', '!=', '<=', '>=', '>', '<'],
	    ao: ['||', '&&'],
	    co: ['?:']
	};

	function lookupExpression(tokens, code) {
	    for (var i = 0; i < tokens.length; i++) {
	        prevToken = tokens[i - 1];
	        token = tokens[i];
	        nextToken = tokens[i + 1];
	        var dels = 3;

	        if (
	            OperatorToken.isCreation(token) &&
	            token.operator === '.' &&
	            !token.saturated
	        ) {
	            if (!OperatorToken.isCreation(prevToken) ||
	                prevToken.saturated
	            ) {
	                token.operands.unshift(prevToken);

	                if (token.operands.length === 1) {
	                    if (isName(nextToken)) {
	                        var lit = new LiteralToken(code);
	                        lit.range = nextToken.range;
	                        lit.loc = nextToken.loc;
	                        lit.value = nextToken.path[0];
	                        lit.closed = true;
	                        token.operands.push(lit);
	                    } else {
	                        throw code.makeError(
	                            token.range[0],
	                            token.range[2],
	                            'Unexpected token: ' +
	                            JSON.stringify(token.source())
	                            .slice(1, -1)
	                        );
	                    }
	                } else {
	                    dels = 2;
	                }
	            } else {
	                throw code.makeError(
	                    token.range[0],
	                    token.range[2],
	                    'Unexpected token: ' +
	                    JSON.stringify(token.source())
	                    .slice(1, -1)
	                );
	            }

	            token.saturated = true;
	            tokens.splice(Math.max(0, i - 1), dels, token);

	            i--;
	        }
	    }
	}

	function unaryExpression(tokens, code) {
	    for (var i = tokens.length - 1; i >= 0; i--) {
	        token = tokens[i];
	        nextToken = tokens[i + 1];

	        if (
	            OperatorToken.isCreation(token) &&
	            token.operator === '!'
	        ) {
	            if (!OperatorToken.isCreation(nextToken) ||
	                nextToken.saturated
	            ) {
	                token.operands.push(nextToken);
	            } else {
	                console.log(token);
	                throw code.makeError(
	                    token.range[0],
	                    token.range[2],
	                    'Unexpected token: ' +
	                    JSON.stringify(token.source())
	                    .slice(1, -1)
	                );
	            }

	            token.saturated = true;
	            tokens.splice(i, 2, token);
	        }
	    }
	}

	function binaryExpression(tokens, key, code) {
	    for (var i = 0; i < tokens.length; i++) {
	        prevToken = tokens[i - 1];
	        token = tokens[i];
	        nextToken = tokens[i + 1];
	        // console.log(
	        //     i, '\n',
	        //     prevToken && prevToken.constructor.name,
	        //     token && token.constructor.name,
	        //     nextToken && nextToken.constructor.name
	        // );

	        if (
	            OperatorToken.isCreation(token) &&
	            !token.saturated &&
	            OpPresidence[key].indexOf(token.operator) !== -1

	        ) {
	            if (!OperatorToken.isCreation(prevToken) ||
	                prevToken.saturated
	            ) {
	                token.operands.unshift(prevToken);

	                if (!OperatorToken.isCreation(nextToken) ||
	                    nextToken.saturated
	                ) {
	                    token.operands.push(nextToken);
	                } else {
	                    throw code.makeError(
	                        token.range[0],
	                        token.range[2],
	                        'Unexpected token: ' +
	                        JSON.stringify(token.source())
	                        .slice(1, -1)
	                    );
	                }
	            } else {
	                throw code.makeError(
	                    token.range[0],
	                    token.range[2],
	                    'Unexpected token: ' +
	                    JSON.stringify(token.source())
	                    .slice(1, -1)
	                );
	            }
	            token.saturated = true;
	            tokens.splice(i - 1, 3, token);
	            i--;
	        }
	    }
	}

	function makeExpressionTree(tokens, code) {
	    lookupExpression(tokens, code);
	    unaryExpression(tokens, code);

	    for (var key in OpPresidence) {
	        if (OpPresidence.hasOwnProperty(key)) {
	            binaryExpression(tokens, key, code);
	        }
	    }

	    // console.log(tokens[0], expressionTree(tokens[0]));

	    return tokens;
	}

	exports.makeExpressionTree = makeExpressionTree;

	function isName(token) {
	    return ValueToken.isCreation(token) &&
	        token.path.length === 1 &&
	        token.path[0] !== 'this' &&
	        token.path[0] !== '~' &&
	        token.path[0] !== '..' &&
	        token.path[0] !== '.' &&
	        token.path[0] !== '@';
	}

	function sortArgsAndContextMap(tokens, code) {
	    var i,
	        temp = [],
	        prevToken,
	        token,
	        nextToken;

	    for (i = 0; i < tokens.length; i++) {

	        prevToken = tokens[i - 1];
	        token = tokens[i];
	        nextToken = tokens[i + 1];

	        if (
	            AssignmentToken.isCreation(token)
	        ) {
	            if (isName(prevToken)) {
	                token.name = prevToken.path[0];

	                if (!AssignmentToken.isCreation(nextToken)) {
	                    token.expression = nextToken;
	                } else {
	                    throw code.makeError(
	                        token.range[0],
	                        token.range[2],
	                        'Unexpected token: ' +
	                        JSON.stringify(token.source())
	                        .slice(1, -1)
	                    );
	                }
	            } else {
	                throw code.makeError(
	                    token.range[0],
	                    token.range[2],
	                    'Unexpected token: ' +
	                    JSON.stringify(token.source())
	                    .slice(1, -1)
	                );
	            }

	            tokens.splice(i - 1, 3, token);
	        }
	    }

	    var map = [];
	    var args = [];

	    for (i = 0; i < tokens.length; i++) {
	        if (AssignmentToken.isCreation(tokens[i])) {
	            map.push(tokens[i]);
	        } else {
	            args.push(tokens[i]);
	        }
	    }

	    return {
	        args: args,
	        map: map
	    };
	}
	exports.sortArgsAndContextMap = sortArgsAndContextMap;


	function expressionTree(op, d) {
	    d = d || 0;

	    if (!op) return '';

	    var s = '';

	    s += (op.operator || op.value || op.name || op.path.join()) + '\n';

	    if (op.operator) {
	        d += 2;
	        var sp = (new Array(d + 1))
	            .join(' ');
	        s += sp;
	        s += expressionTree(op.operands[0], d);

	        if (op.operands[1]) {
	            s += sp;
	            s += expressionTree(op.operands[1], d);
	        }

	        if (op.operands[2]) {
	            s += sp;
	            s += expressionTree(op.operands[2], d);
	        }
	    }

	    return s;

	}


/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = [
		"area",
		"base",
		"br",
		"col",
		"command",
		"embed",
		"hr",
		"img",
		"input",
		"keygen",
		"link",
		"meta",
		"param",
		"source",
		"track",
		"wbr"
	];

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = {
		"quot": 34,
		"amp": 38,
		"lt": 60,
		"gt": 62,
		"nbsp": 160,
		"iexcl": 161,
		"cent": 162,
		"pound": 163,
		"curren": 164,
		"yen": 165,
		"brvbar": 166,
		"sect": 167,
		"uml": 168,
		"copy": 169,
		"ordf": 170,
		"laquo": 171,
		"not": 172,
		"shy": 173,
		"reg": 174,
		"macr": 175,
		"deg": 176,
		"plusmn": 177,
		"sup2": 178,
		"sup3": 179,
		"acute": 180,
		"micro": 181,
		"para": 182,
		"middot": 183,
		"cedil": 184,
		"sup1": 185,
		"ordm": 186,
		"raquo": 187,
		"frac14": 188,
		"frac12": 189,
		"frac34": 190,
		"iquest": 191,
		"Agrave": 192,
		"Aacute": 193,
		"Acirc": 194,
		"Atilde": 195,
		"Auml": 196,
		"Aring": 197,
		"AElig": 198,
		"Ccedil": 199,
		"Egrave": 200,
		"Eacute": 201,
		"Ecirc": 202,
		"Euml": 203,
		"Igrave": 204,
		"Iacute": 205,
		"Icirc": 206,
		"Iuml": 207,
		"ETH": 208,
		"Ntilde": 209,
		"Ograve": 210,
		"Oacute": 211,
		"Ocirc": 212,
		"Otilde": 213,
		"Ouml": 214,
		"times": 215,
		"Oslash": 216,
		"Ugrave": 217,
		"Uacute": 218,
		"Ucirc": 219,
		"Uuml": 220,
		"Yacute": 221,
		"THORN": 222,
		"szlig": 223,
		"agrave": 224,
		"aacute": 225,
		"acirc": 226,
		"atilde": 227,
		"auml": 228,
		"aring": 229,
		"aelig": 230,
		"ccedil": 231,
		"egrave": 232,
		"eacute": 233,
		"ecirc": 234,
		"euml": 235,
		"igrave": 236,
		"iacute": 237,
		"icirc": 238,
		"iuml": 239,
		"eth": 240,
		"ntilde": 241,
		"ograve": 242,
		"oacute": 243,
		"ocirc": 244,
		"otilde": 245,
		"ouml": 246,
		"divide": 247,
		"oslash": 248,
		"ugrave": 249,
		"uacute": 250,
		"ucirc": 251,
		"uuml": 252,
		"yacute": 253,
		"thorn": 254,
		"euro": 8364
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// parseWhitspace

	var utils = __webpack_require__(94);

	function parseWhitspace(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length,
	        whitespace = 0;

	    for (; index < length; index++) {
	        if (!utils.isWhitespace(code.codePointAt(index))) {
	            break;
	        }
	        if (
	            flags.whitepaceString &&
	            code.codePointAt(index) === 0x000a /* \n */
	        ) {
	            break;
	        }
	        whitespace++;
	    }

	    if (whitespace) {
	        code.index = index;
	        return true;
	    }

	    return null;
	}

	module.exports = parseWhitspace;


/***/ },
/* 98 */
/***/ function(module, exports) {

	//parseHTMLComment

	function parseHTMLComment(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length;

	    if ( /* <!-- */
	        code.codePointAt(index) === 0x003c &&
	        code.codePointAt(++index) === 0x0021 &&
	        code.codePointAt(++index) === 0x002d &&
	        code.codePointAt(++index) === 0x002d
	    ) {
	        index++;

	        for (; index < length; index++) {
	            if ( /* --> */
	                code.codePointAt(index) === 0x002d &&
	                code.codePointAt(index + 1) === 0x002d &&
	                code.codePointAt(index + 2) === 0x003e
	            ) {
	                index += 3;
	                code.index = index;

	                return true;
	            }
	        }

	        throw code.makeError(
	            code.index, code.index + 4,
	            'Unclosed Comment: Expected "-->" to fallow "<!--".'
	        );
	    }

	    return null;
	}

	module.exports = parseHTMLComment;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(66),
	    TagToken = Token.tokens.tag,
	    AttrToken = Token.tokens.attr,
	    PropToken = Token.tokens.prop,
	    utils = __webpack_require__(94);


	function parseHTMLTag(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length,
	        tag,
	        isClosing;
	    if ( /* < */
	        code.codePointAt(index) === 0x003c
	    ) {
	        if ( /* / */
	            code.codePointAt(index + 1) === 0x002f
	        ) {
	            isClosing = true;
	            index++;
	        }

	        tag = new TagToken(code);

	        index++;

	        if (!utils.isHTMLIdentifierStart(code.codePointAt(index))) {
	            throw code.makeError(
	                index, index + 1,
	                'Unexpected Token: Expected <[A-Za-z]> but found ' +
	                JSON.stringify(code.charAt(index)) +
	                '.'
	            );
	        }

	        for (; index < length; index++) {
	            ch = code.codePointAt(index);

	            if (utils.isHTMLIdentifier(ch)) {
	                tag.name += code.charAt(index);
	            } else {
	                break;
	            }
	        }

	        code.index = index;

	        if (isClosing) {
	            if (ch !== 0x003e) { /* > */
	                throw code.makeError(
	                    index, index + 1,
	                    'Unexpected Token: Expected ' +
	                    JSON.stringify('>') +
	                    ' but found ' +
	                    JSON.stringify(code.charAt(index)) +
	                    '.'
	                );
	            }

	            index++;

	            code.index = index;
	            tag.close();

	            if (!TagToken.isCreation(scope.token)) {
	                throw code.makeError(
	                    tag.range[0], tag.range[1],
	                    'Unexpected Closing Tag: ' +
	                    JSON.stringify(tag.source(code)) +
	                    '.'
	                );
	            }

	            if (scope.token.name !== tag.name) {
	                throw code.makeError(
	                    tag.range[0], tag.range[1],
	                    'Mismatch Closing Tag: Expected ' +
	                    JSON.stringify('</' + scope.token.name + '>') +
	                    ' but found ' +
	                    JSON.stringify(tag.source(code)) +
	                    '.'
	                );
	            }

	            scope.close();
	            parseMode.close();

	            return true;
	        }

	        var attrsAndProps = [];

	        scope.push(tag);
	        parseMode('ATTR', attrsAndProps, flags);

	        tag.attrs = attrsAndProps.filter(function (token) {
	            return AttrToken.isCreation(token);
	        });

	        tag.props = attrsAndProps.filter(function (token) {
	            return PropToken.isCreation(token);
	        });

	        attrsAndProps = null;

	        if (!tag.closed) {
	            throw code.makeError(
	                index, index + 1,
	                'Unclosed Tag: Expected ' +
	                JSON.stringify('>') +
	                ' but found ' +
	                JSON.stringify(code.charAt(code.index)) +
	                '.'
	            );
	        }

	        if (utils.isSelfClosing(tag.name)) {
	            tag.selfClosing = true;
	        }

	        if (tag.selfClosing || tag.selfClosed) {
	            return tag;
	        }

	        delete tag.closed;

	        if (tag.name === 'pre' || tag.name === 'style' || tag.name ===
	            'script') {
	            flags.minify = false;
	        }

	        scope.push(tag);

	        if (tag.name === 'style' || tag.name === 'script') {
	            flags.textExitTag = tag.name;
	            parseMode('TEXT', tag.nodes, flags);
	            delete flags.textExitTag;
	        } else {
	            parseMode(mode, tag.nodes, flags);
	        }

	        if (!tag.closed) {
	            throw code.makeError(
	                tag.range[0], tag.range[1],
	                'Unclosed Tag: Expected ' +
	                JSON.stringify('</' + tag.name + '>') +
	                ' to fallow ' +
	                JSON.stringify(tag.source(code)) +
	                '.'
	            );
	        }

	        if (scope.token && (tag.attrsUpdate || tag.nodesUpdate)) {
	            scope.token.updates();
	        }

	        return tag;
	    }

	    return null;
	}


	module.exports = parseHTMLTag;


/***/ },
/* 100 */
/***/ function(module, exports) {

	// parseHTMLTagEnd

	function parseHTMLTagEnd(mode, code, tokens, flags, scope, parseMode) {
	    var ch = code.codePointAt(code.index);
	    /* > */
	    if (ch === 0x003e) {
	        code.index++;
	        scope.close();

	        parseMode.close();
	        return true;
	    } else if ( /* /> */
	        ch === 0x002f &&
	        code.codePointAt(code.index + 1) === 0x003e
	    ) {
	        code.index += 2;
	        var tag = scope.close();
	        tag.selfClosed = true;

	        parseMode.close();
	        return true;
	    }

	    return null;
	}

	module.exports = parseHTMLTagEnd;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// parseHTMLAttr
	var Token = __webpack_require__(66),
	    AttrToken = Token.tokens.attr,
	    PropToken = Token.tokens.prop,
	    utils = __webpack_require__(94);

	function parseHTMLAttr(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length,
	        attr;

	    if (!utils.isHTMLIdentifierStart(code.codePointAt(index))) {
	        return null;
	    }

	    attr = new AttrToken(code);
	    prop = new PropToken(code);

	    for (; index < length; index++) {

	        if (!utils.isHTMLIdentifier(code.codePointAt(index))) {
	            break;
	        }

	        attr.name += code.charAt(index);
	    }

	    prop.name = attr.name;

	    if (attr.name) {
	        /* = */
	        if (code.codePointAt(index) === 0x003d) {
	            index++;
	            /* " */
	            if (code.codePointAt(index) === 0x0022) {
	                index++;
	                code.index = index;

	                scope.push(attr);
	                flags.whitepaceString = true;
	                parseMode('VALUE', attr.nodes, flags);
	                delete flags.whitepaceString;
	            } else {
	                throw code.makeError(
	                    index, index + 1,
	                    'Unexpected Token: Expected "\"" but found ' +
	                    JSON.stringify(code.charAt(index))
	                );
	            }
	        } else if (code.codePointAt(index) === 0x003a) { /* : */
	            index++;
	            if ( /* {{ */
	                code.codePointAt(index) === 0x007b &&
	                code.codePointAt(index + 1) === 0x007b
	            ) {
	                var args = [];
	                code.index = index + 2;
	                scope.push(prop);
	                parseMode('LOGIC-EXP', args, flags);

	                args = utils.makeExpressionTree(args, code);

	                if (args.length > 1) {
	                    code.index = args[1].range[0];
	                    throw code.makeError(
	                        args[1].range[0], args[1].range[1],
	                        'Unexpected Token: ' +
	                        JSON.stringify(args[1].source(code)) + '.'
	                    );
	                }

	                prop.expression = args[0];

	                args = null;

	                if (!prop.closed) {
	                    throw code.makeError(
	                        code.index, code.index + 1,
	                        'Unclosed Block: Expected ' +
	                        JSON.stringify('}}') +
	                        ' but found ' +
	                        JSON.stringify(code.charAt(code.index)) +
	                        '.'
	                    );
	                }

	                if (!prop.expression) {
	                    throw code.makeError(
	                        code.index - 2, code.index - 1,
	                        'Missing <expression>.'
	                    );
	                }

	                return prop;

	            } else {
	                throw code.makeError(
	                    index - 1, index,
	                    'Unexpected Token: :'
	                );
	            }
	        } else {
	            code.index = index;
	            attr.close();
	        }

	        if (!attr.closed) {
	            throw code.makeError(
	                attr.range[0] + attr.name.length + 1,
	                attr.range[0] + attr.name.length + 2,
	                'Unclosed String: Expected "\"" to fallow "\""'
	            );
	        }

	        if (scope.token && attr.nodesUpdate) {
	            scope.token.updates('attr');
	        }

	        return attr;
	    }

	    return null;
	}

	module.exports = parseHTMLAttr;


/***/ },
/* 102 */
/***/ function(module, exports) {

	//parseHTMLAttrEnd

	function parseHTMLAttrEnd(mode, code, tokens, flags, scope, parseMode) {
	    if (code.codePointAt(code.index) === 0x0022 /* " */ ) {
	        code.index++;

	        scope.close();
	        parseMode.close();

	        return true;
	    }

	    return null;
	}

	module.exports = parseHTMLAttrEnd;


/***/ },
/* 103 */
/***/ function(module, exports) {

	//parseBarsMarkup

	function parseBarsMarkup(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length;

	    if ( /* {{ */
	        code.codePointAt(index) === 0x007b &&
	        code.codePointAt(++index) === 0x007b
	    ) {
	        flags.markup = {};
	        flags.markup.mode = mode;
	        parseMode('BARS', tokens, flags);

	        if (code.index > index) {
	            if (flags.markup && flags.markup.closeParseScope) {
	                parseMode.close();
	            }
	            delete flags.markup;
	            if (scope.token) {
	                scope.token.updates();
	            }
	            return true;
	        }

	        delete flags.markup;
	    }

	    return null;
	}

	module.exports = parseBarsMarkup;


/***/ },
/* 104 */
/***/ function(module, exports) {

	//parseBarsComment

	function parseBarsComment(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index + 2,
	        length = code.length;

	    if ( /* ! */
	        code.codePointAt(index) === 0x0021
	    ) {
	        if (
	            code.codePointAt(++index) === 0x002d &&
	            code.codePointAt(++index) === 0x002d
	        ) {
	            index++;

	            for (; index < length; index++) {
	                if ( /* --}} */
	                    code.codePointAt(index) === 0x002d &&
	                    code.codePointAt(index + 1) === 0x002d &&
	                    code.codePointAt(index + 2) === 0x007d &&
	                    code.codePointAt(index + 3) === 0x007d
	                ) {
	                    index += 4; /* for --}} */
	                    code.index = index;

	                    parseMode.close();

	                    if (flags.keepComments) {
	                        // make a CommentToken and return that.
	                    }

	                    return true;
	                }
	            }

	            throw code.makeError(
	                'Unclosed Comment: Expected "--}}" to fallow "{{!--".',
	                5
	            );
	        }

	        index++;

	        for (; index < length; index++) {

	            if ( /* }} */
	                code.codePointAt(index) === 0x007d &&
	                code.codePointAt(index + 1) === 0x007d
	            ) {
	                index += 2; /* for }} */
	                code.index = index;

	                parseMode.close();

	                if (flags.keepComments) {
	                    // make a CommentToken and return that.
	                }

	                return true;
	            }
	        }

	        throw code.makeError(
	            code.index, code.index + 3,
	            'Unclosed Comment: Expected "}}" to fallow "{{!".'
	        );
	    }

	    return null;
	}

	module.exports = parseBarsComment;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var InsertToken = __webpack_require__(66)
	    .tokens.insert,
	    utils = __webpack_require__(94);

	function parseBarsInsert(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index + 2,
	        length = code.length,
	        insert = new InsertToken(code),
	        args = [];

	    scope.push(insert);
	    code.index = index;

	    parseMode('LOGIC-EXP', args, flags);

	    args = utils.makeExpressionTree(args, code);

	    if (args.length > 1) {
	        code.index = args[1].range[0];
	        throw code.makeError(
	            args[1].range[0], args[1].range[1],
	            'Unexpected Token: ' +
	            JSON.stringify(args[1].source(code)) + '.'
	        );
	    }

	    insert.expression = args[0];

	    args = null;

	    if (!insert.closed) {
	        throw code.makeError(
	            code.index, code.index + 1,
	            'Unclosed Block: Expected ' +
	            JSON.stringify('}}') +
	            ' but found ' +
	            JSON.stringify(code.charAt(code.index)) +
	            '.'
	        );
	    }

	    if (!insert.expression) {
	        throw code.makeError(
	            code.index - 2, code.index - 1,
	            'Missing <expression>.'
	        );
	    }

	    parseMode.close();
	    return insert;
	}


	module.exports = parseBarsInsert;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var PartialToken = __webpack_require__(66)
	    .tokens.partial,
	    utils = __webpack_require__(94);

	function parseBarsPartial(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index + 2,
	        length = code.length,
	        partial,
	        router = false;

	    if ( /* > */
	        code.codePointAt(index) === 0x003e
	    ) {
	        partial = new PartialToken(code);

	        index++;

	        if (code.codePointAt(index) === 0x003f) {
	            router = true;
	            index++;
	        } else if (utils.isHTMLIdentifierStart(code.codePointAt(index))) {
	            for (; index < length; index++) {
	                ch = code.codePointAt(index);

	                if (utils.isHTMLIdentifier(ch)) {
	                    partial.name += code.charAt(index);
	                } else {
	                    break;
	                }
	            }
	        } else {
	            throw code.makeError(
	                index, index + 1,
	                'Unexpected Token: Expected <[A-Za-z]> but found ' +
	                JSON.stringify(code.charAt(index)) +
	                '.'
	            );
	        }

	        code.index = index;

	        var args = [];

	        scope.push(partial);
	        parseMode('LOGIC', args, flags);

	        args = utils.makeExpressionTree(args, code);

	        var am = utils.sortArgsAndContextMap(args, code);
	        args = am.args;
	        partial.map = am.map;

	        am = null;

	        if (args.length > (router ? 2 : 1)) {
	            throw code.makeError(
	                args[1].range[0], args[1].range[1],
	                'Unexpected Token: ' +
	                JSON.stringify(args[1].source(code)) + '.'
	            );
	        }

	        if (router) {
	            partial.name = args[0] || null;
	            partial.expression = args[1] || null;
	        } else {
	            partial.expression = args[0] || null;
	        }

	        args = null;

	        if (!partial.closed) {
	            throw code.makeError(
	                index, index + 1,
	                'Unclosed Block: Expected ' +
	                JSON.stringify('}}') +
	                ' but found ' +
	                JSON.stringify(code.charAt(code.index)) +
	                '.'
	            );
	        }

	        parseMode.close();
	        return partial;
	    }

	    return null;
	}

	module.exports = parseBarsPartial;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(66),
	    BlockToken = Token.tokens.block,
	    FragmentToken = Token.tokens.fragment,
	    utils = __webpack_require__(94);

	function parseBarsBlock(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index + 2,
	        length = code.length,
	        block,
	        isOpening,
	        isClosing,
	        isElse,
	        alternateIsBlock,
	        blockMode = flags.markup.mode;

	    if ( /* / */
	        code.codePointAt(index) === 0x002f
	    ) {
	        isClosing = true;
	        flags.markup.closeParseScope = true;
	    } else if ( /* # */
	        code.codePointAt(index) === 0x0023 ||
	        (scope.token && scope.token.alternateIsBlock)
	    ) {
	        isOpening = true;
	    } else if ( /* else */
	        code.codePointAt(index) === 0x0065 &&
	        code.codePointAt(++index) === 0x006c &&
	        code.codePointAt(++index) === 0x0073 &&
	        code.codePointAt(++index) === 0x0065
	    ) {
	        isElse = true;
	        if (utils.isWhitespace(code.codePointAt(index + 1))) {
	            index += 2;

	            alternateIsBlock = true;
	        } else if (
	            code.codePointAt(++index) === 0x007d &&
	            code.codePointAt(++index) === 0x007d
	        ) {
	            index++;
	        }

	        block = new BlockToken(code);
	        code.index = index;
	        block.close();

	        if (!BlockToken.isCreation(scope.token) || scope.token.elsed) {
	            throw code.makeError(
	                block.range[0], block.range[1],
	                'Unexpected Token: ' +
	                JSON.stringify(block.source(code)) +
	                '.'
	            );
	        }

	        scope.token.elsed = true;

	        scope.token.alternateIsBlock = alternateIsBlock;
	        flags.markup.closeParseScope = true;

	        scope.close();
	        parseMode.close();

	        return true;
	    } else {
	        return null;
	    }

	    if (scope.token && scope.token.alternateIsBlock) {
	        index -= 2;
	    } else
	        index++;
	    block = new BlockToken(code);

	    if (!utils.isHTMLIdentifierStart(code.codePointAt(index))) {
	        throw code.makeError(
	            index, index + 1,
	            'Unexpected Token: Expected <[A-Za-z]> but found ' +
	            JSON.stringify(code.charAt(index)) +
	            '.'
	        );
	    }

	    for (; index < length; index++) {
	        ch = code.codePointAt(index);

	        if (utils.isHTMLIdentifier(ch)) {
	            block.name += code.charAt(index);
	        } else {
	            break;
	        }
	    }

	    if (isClosing) {
	        if (
	            code.codePointAt(index) === 0x007d &&
	            code.codePointAt(++index) === 0x007d
	        ) {
	            index++;
	        } else {
	            throw code.makeError(
	                index, index + 1,
	                'Unexpected Token: Expected ' +
	                JSON.stringify('}}') +
	                ' but found ' +
	                JSON.stringify(code.charAt(index)) +
	                '.'
	            );
	        }

	        code.index = index;
	        block.close();

	        if (!BlockToken.isCreation(scope.token)) {
	            throw code.makeError(
	                block.range[0], block.range[1],
	                'Unexpected Closing Block: ' +
	                JSON.stringify(block.source(code)) +
	                '.'
	            );
	        }

	        if (scope.token.name !== block.name) {
	            throw code.makeError(
	                block.range[0], block.range[1],
	                'Mismatch Closing Block: Expected ' +
	                JSON.stringify('{{/' + scope.token.name + '}}') +
	                ' but found ' +
	                JSON.stringify(block.source(code)) +
	                '.'
	            );
	        }

	        scope.close();

	        parseMode.close();

	        return true;
	    }

	    if (utils.isWhitespace(code.codePointAt(index)))
	        index++;

	    code.index = index;

	    var args = [];

	    scope.push(block);

	    parseMode('LOGIC', args, flags);

	    args = utils.makeExpressionTree(args, code);

	    var am = utils.sortArgsAndContextMap(args, code);

	    block.map = am.map;
	    block.arguments = am.args;

	    args = null;
	    am = null;

	    if (!block.closed) {
	        throw code.makeError(
	            code.index, code.index + 1,
	            'Unclosed Block: Expected ' +
	            JSON.stringify('}}') +
	            ' but found ' +
	            JSON.stringify(code.charAt(code.index)) +
	            '.'
	        );
	    }

	    block.consequent = new FragmentToken(code);

	    delete block.closed;
	    scope.push(block);

	    parseMode(blockMode, block.consequent.nodes, flags);

	    index = code.index;

	    block.consequent.close();

	    code.index = index;

	    if (block.elsed) {
	        if (block.alternateIsBlock) {
	            delete block.closed;
	            scope.push(block);

	            flags.markup = {
	                mode: blockMode
	            };
	            block.alternate = parseBarsBlock(mode, code, [], flags, scope,
	                parseMode);

	            delete flags.markup;

	            scope.close();

	            return block;
	        }

	        block.alternate = new FragmentToken(code);

	        delete block.closed;
	        scope.push(block);

	        parseMode(blockMode, block.alternate.nodes, flags);

	        index = code.index;

	        block.alternate.close();
	    }

	    if (!block.closed) {
	        throw code.makeError(
	            block.range[0], block.range[0] + block.name.length + 6 +
	            block.expression.length,
	            'Unclosed Block: Expected ' +
	            JSON.stringify('{{/' + block.name + '}}') +
	            ' to fallow ' +
	            JSON.stringify('{{#' + block.name + ' <expression>}}') +
	            '.'
	        );
	    }

	    parseMode.close();

	    return block;
	}

	module.exports = parseBarsBlock;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// parseBarsMarkupEnd
	var Token = __webpack_require__(66);

	function parseBarsMarkupEnd(mode, code, tokens, flags, scope, parseMode) {
	    if ( /* }} */
	        code.codePointAt(code.index) === 0x007d &&
	        code.codePointAt(code.index + 1) === 0x007d
	    ) {
	        // console.log(JSON.stringify(scope.token.toObject(), null, 2))
	        if (
	            Token.tokens.insert.isCreation(scope.token) ||
	            Token.tokens.block.isCreation(scope.token) ||
	            Token.tokens.partial.isCreation(scope.token) ||
	            Token.tokens.prop.isCreation(scope.token)
	        ) {
	            code.index += 2;
	            scope.close();
	            parseMode.close();
	            return true;
	        }
	    }

	    return null;
	}

	module.exports = parseBarsMarkupEnd;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(66),
	    ValueToken = Token.tokens.value,
	    OperatorToken = Token.tokens.operator,
	    utils = __webpack_require__(94);

	function parseExpressionValue(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length,
	        ch = code.codePointAt(index),
	        prop = ch === 0x0040;

	    if (!utils.isHTMLIdentifierStart(ch) &&
	        !prop
	    ) {
	        return null;
	    }

	    value = new ValueToken(code);

	    value.path = [];

	    if (prop) {
	        value.path.push('@');
	        index++;
	    }

	    var name = '';

	    for (; index < length; index++) {
	        ch = code.codePointAt(index);

	        if (utils.isHTMLIdentifier(ch)) {
	            name += code.charAt(index);
	        } else {
	            break;
	        }
	    }

	    if (!name) {
	        throw code.makeError(
	            value.range[0], value.range[1],
	            'Unexpected Token: ' +
	            JSON.stringify(value.source())
	            .slice(1, -1)
	        );
	    }

	    value.path.push(name);
	    code.index = index;
	    value.close();

	    return value;
	}

	module.exports = parseExpressionValue;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(66),
	    LiteralToken = Token.tokens.literal,
	    OperatorToken = Token.tokens.operator;

	function STRING(mode, code, tokens, flags, scope, parseMode) {
	    var ch,
	        index = code.index,
	        length = code.length,
	        text;

	    /* ' */
	    if (code.codePointAt(index) !== 0x0027) {
	        return null;
	    }

	    index++;

	    text = new LiteralToken(code);
	    text.value = '';

	    for (; index < length; index++) {
	        ch = code.codePointAt(index);

	        if (ch === 0x000a) {
	            code.index = index;
	            return null;
	        }

	        if ( /* ' but not \' */
	            ch === 0x0027 &&
	            code.codePointAt(index - 1) !== 0x005c
	        ) {
	            index++;
	            break;
	        }

	        text.value += code.charAt(index);
	    }

	    if (index > code.index) {
	        code.index = index;
	        text.close();

	        return text;
	    }

	    return null;
	}

	function NUMBER(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length,
	        ch = code.codePointAt(index),
	        nextCh = code.codePointAt(index + 1),
	        dot,
	        Ee;

	    if (
	        (ch === 0x002d && 0x0030 <= nextCh && nextCh <= 0x0039) || /* -[0-9] */
	        (0x0030 <= ch && ch <= 0x0039) /* [0-9] */
	    ) {
	        index++;

	        number = new LiteralToken(code);

	        for (; index < length; index++) {
	            ch = code.codePointAt(index);

	            if (0x0030 <= ch && ch <= 0x0039) {
	                continue;
	            } else if (ch === 0x0045 || ch === 0x0065) { /* [Ee] */
	                index++;

	                ch = code.codePointAt(index);
	                nextCh = code.codePointAt(index + 1);

	                if ( /* [+-]?[0-9] */
	                    Ee ||
	                    !(
	                        (
	                            (ch === 0x002b || ch === 0x002d) &&
	                            (0x0030 <= nextCh && nextCh <= 0x0039)
	                        ) ||
	                        (0x0030 <= ch && ch <= 0x0039)
	                    )
	                ) {
	                    code.index = index - 1;
	                    throw code.makeError(
	                        'Unexpected Token: ' +
	                        JSON.stringify(code.charAt(index - 1)) +
	                        '.'
	                    );
	                }

	                Ee = true;
	            } else if (ch === 0x002e) { /* . */
	                index++;
	                ch = code.codePointAt(index);
	                if ( /* [+-]?[0-9] */
	                    Ee ||
	                    dot ||
	                    !(0x0030 <= ch && ch <= 0x0039)
	                ) {
	                    code.index = index - 1;
	                    throw code.makeError(
	                        'Unexpected Token: ".".'
	                    );
	                }

	                dot = true;
	            } else {
	                break;
	            }
	        }
	        code.index = index;
	        number.close();
	        number.value = Number(number.source(code));

	        return number;
	    }

	    return null;
	}

	function BOOLEAN(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        bool;

	    if ( /* true */
	        code.codePointAt(index) === 0x0074 &&
	        code.codePointAt(++index) === 0x0072 &&
	        code.codePointAt(++index) === 0x0075 &&
	        code.codePointAt(++index) === 0x0065
	    ) {
	        bool = true;
	    } else if ( /* false */
	        code.codePointAt(index) === 0x0066 &&
	        code.codePointAt(++index) === 0x0061 &&
	        code.codePointAt(++index) === 0x006c &&
	        code.codePointAt(++index) === 0x0073 &&
	        code.codePointAt(++index) === 0x0065
	    ) {
	        bool = false;
	    } else {
	        return null;
	    }

	    var boolean = new LiteralToken(code);

	    index++;
	    code.index = index;
	    boolean.close();

	    boolean.value = bool;

	    return boolean;
	}

	function NULL(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        nul;

	    if ( /* true */
	        code.codePointAt(index) === 0x006e &&
	        code.codePointAt(++index) === 0x0075 &&
	        code.codePointAt(++index) === 0x006c &&
	        code.codePointAt(++index) === 0x006c
	    ) {
	        index++;

	        nul = new LiteralToken(code);
	        code.index = index;
	        nul.close();
	        nul.value = null;
	    } else {
	        return null;
	    }

	    return nul;
	}


	function parseExpressionLiteral(mode, code, tokens, flags, scope, parseMode) {
	    return (
	        STRING(mode, code, tokens, flags, scope, parseMode) ||
	        NUMBER(mode, code, tokens, flags, scope, parseMode) ||
	        BOOLEAN(mode, code, tokens, flags, scope, parseMode) ||
	        NULL(mode, code, tokens, flags, scope, parseMode)
	    );
	}

	module.exports = parseExpressionLiteral;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var compileit = __webpack_require__(68),
	    Token = __webpack_require__(66),
	    OperatorToken = Token.tokens.operator,
	    AssignmentToken = Token.tokens.assignment,
	    utils = __webpack_require__(94);

	function opS(ch) {
	    return ch === 0x0021 ||
	        (0x0025 <= ch && ch <= 0x0026) ||
	        (0x002a <= ch && ch <= 0x002b) ||
	        (0x002d <= ch && ch <= 0x002f) ||
	        (0x003c <= ch && ch <= 0x003e) ||
	        ch === 0x007c;
	}

	function opEQ(ch) {
	    return ch === 0x0021 ||
	        (0x003c <= ch && ch <= 0x003e);
	}

	function opEQEQ(ch) {
	    return ch === 0x0021 ||
	        ch === 0x003d;
	}

	function isEQ(ch) {
	    return ch === 0x003d;
	}

	function isOR(ch) {
	    return ch === 0x007c;
	}

	function isAND(ch) {
	    return ch === 0x0026;
	}

	function parseConditional(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length,
	        operator,
	        args;

	    if (
	        code.codePointAt(index) === 0x003f // ^[?]$
	    ) {
	        operator = new OperatorToken(code);
	        code.index++;

	        operator.operator = '?:';

	        args = [];
	        scope.push(operator);

	        parseMode('LOGIC-EXP', args, flags);
	        // do more here

	        args = utils.makeExpressionTree(args, code);

	        if (args.length > 1) throw 'OPERATOR OPERAND MISMATCH';

	        operator.operands.push(args[0]);

	        return operator;
	    } else if (
	        code.codePointAt(index) === 0x003a // ^[:]$
	    ) {
	        if (
	            OperatorToken.isCreation(scope.token) &&
	            scope.token.operator === '?:'
	        ) {
	            code.index++;
	            scope.close();
	            parseMode.close();
	            return true;
	        } else {
	            throw code.makeError(
	                index,
	                index + 1,
	                'Unexpected token: ' + code.charAt(index)
	            );
	        }
	    }

	    return null;
	}

	function parseParentheses(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length,
	        operator,
	        args,
	        p, b;

	    if (
	        (p = code.codePointAt(index) === 0x0028) || // ^[(]$
	        (b = code.codePointAt(index) === 0x005b) // ^[\[]$
	    ) {
	        operator = new OperatorToken(code);
	        code.index++;

	        if (p) {
	            operator.parentheses = true;
	        } else if (b) {
	            operator.brackets = true;
	        }

	        operator.operator = '.';

	        args = [];
	        scope.push(operator);

	        parseMode('LOGIC-EXP', args, flags);
	        // do more here

	        args = utils.makeExpressionTree(args, code);

	        if (args.length > 1) throw 'OPERATOR OPERAND MISMATCH';

	        operator.operands.push(args[0]);

	        if (p) {
	            return args[0];
	        } else if (b) {
	            return operator;
	        }
	    } else if (
	        (p = code.codePointAt(index) === 0x0029) || // ^[)]$
	        (b = code.codePointAt(index) === 0x005d) // ^[\]]$
	    ) {
	        if (
	            OperatorToken.isCreation(scope.token) &&
	            (
	                (p && scope.token.parentheses) ||
	                (b && scope.token.brackets)
	            )
	        ) {
	            code.index++;
	            scope.close();
	            parseMode.close();
	            return true;
	        } else {
	            throw code.makeError(
	                index,
	                index + 1,
	                'Unexpected token: ' + code.charAt(index)
	            );
	        }
	    }

	    return null;
	}

	function parseOperator(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length,
	        ch = code.codePointAt(index);

	    if (!opS(ch)) {
	        return null;
	    }

	    var operator = new OperatorToken(code);

	    if (opEQ(ch) && isEQ(code.codePointAt(index + 1))) {
	        index++;
	    } else if (isEQ(ch)) {
	        return null;
	    }

	    if (
	        (isOR(ch) && isOR(code.codePointAt(index + 1))) ||
	        (isAND(ch) && isAND(code.codePointAt(index + 1)))
	    ) {
	        index++;
	    } else if (isOR(ch) || isAND(ch)) {
	        throw code.makeError(
	            operator.range[0],
	            operator.range[1],
	            'Unexpected token: ' +
	            JSON.stringify(
	                operator.source()
	            )
	            .slice(1, -1)
	        );
	    }

	    if (opEQEQ(ch) && isEQ(code.codePointAt(index + 1))) {
	        index++;
	    }
	    index++;

	    code.index = index;

	    operator.close();
	    operator.operator = operator.source();
	    var preToken = tokens[tokens.length - 1];
	    var pre2Token = tokens[tokens.length - 2];
	    if (
	        AssignmentToken.isCreation(preToken) ||
	        (
	            operator.operator !== '!' &&
	            (!preToken ||
	                (!preToken.saturated &&
	                    !preToken.brackets &&
	                    OperatorToken.isCreation(preToken)
	                )
	            )
	        ) ||
	        (
	            OperatorToken.isCreation(preToken) &&
	            preToken.operator === '!' &&
	            OperatorToken.isCreation(pre2Token) &&
	            pre2Token.operator === '!'
	        )
	    ) {
	        throw code.makeError(
	            operator.range[0],
	            operator.range[1],
	            'Unexpected token: ' +
	            JSON.stringify(
	                operator.source()
	            )
	            .slice(1, -1)
	        );
	    }

	    return operator;
	}

	function parseExpressionOperator(mode, code, tokens, flags, scope, parseMode) {
	    return (
	        parseOperator(mode, code, tokens, flags, scope, parseMode) ||
	        parseParentheses(mode, code, tokens, flags, scope, parseMode) ||
	        parseConditional(mode, code, tokens, flags, scope, parseMode)
	    );
	}

	module.exports = parseExpressionOperator;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(66),
	    ValueToken = Token.tokens.value,
	    AssignmentToken = Token.tokens.assignment;

	function isEQ(ch) {
	    return ch === 0x003d;
	}

	function parseAssignment(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length;

	    if (!isEQ(code.codePointAt(index))) {
	        return null;
	    }

	    var assignment = new AssignmentToken(code);

	    code.index++;

	    assignment.close();

	    var preToken = tokens[tokens.length - 1];

	    if (!ValueToken.isCreation(preToken)) {
	        throw code.makeError(
	            assignment.range[0],
	            assignment.range[1],
	            'Unexpected Token: ' +
	            JSON.stringify(
	                assignment.source()
	            )
	            .slice(1, -1)
	        );

	    }

	    return assignment;
	}

	module.exports = parseAssignment;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var Token = __webpack_require__(66),
	    TransformToken = Token.tokens.transform,
	    OperatorToken = Token.tokens.operator,
	    utils = __webpack_require__(94);

	function parseExpressionTransform(mode, code, tokens, flags, scope, parseMode) {
	    var index = code.index,
	        length = code.length,
	        transform,
	        ch = code.codePointAt(index);

	    if (ch !== 0x0040) { /* @ */
	        return null;
	    }

	    index++;

	    if (!utils.isHTMLIdentifierStart(code.codePointAt(index))) {
	        return null;
	    }

	    transform = new TransformToken(code);

	    for (; index < length; index++) {
	        ch = code.codePointAt(index);

	        if (utils.isHTMLIdentifier(ch)) {
	            transform.name += code.charAt(index);
	        } else {
	            break;
	        }
	    }

	    ch = code.codePointAt(index);
	    if (ch === 0x0028) { /* ( */
	        index++;
	        code.index = index;

	        scope.push(transform);

	        while (code.left) {
	            var args = [];


	            parseMode('LOGIC-ARGS', args, flags);

	            args = utils.makeExpressionTree(args, code);

	            if (args.length > 1) {
	                code.index = args[1].range[0];
	                throw code.makeError(
	                    args[1].range[0], args[1].range[1],
	                    'Unexpected Token: ' +
	                    JSON.stringify(args[1].source(code)) + '.'
	                );
	            }

	            transform.arguments.push(args[0]);

	            if (transform.nextArg) {
	                delete transform.nextArg;
	                delete transform.closed;
	            }

	            if (transform.closed) {
	                break;
	            }
	        }
	    } else {
	        return null;
	    }

	    return transform;
	}

	module.exports = parseExpressionTransform;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// parseExpressionTransformEnd
	var Token = __webpack_require__(66);

	function parseExpressionTransformEnd(mode, code, tokens, flags, scope,
	    parseMode) {
	    if ( /* ) */
	        code.codePointAt(code.index) === 0x0029 &&
	        Token.tokens.transform.isCreation(scope.token)
	    ) {
	        code.index++;
	        scope.close();
	        parseMode.close();
	        return true;
	    }

	    if ( /* , */
	        code.codePointAt(code.index) === 0x002c &&
	        Token.tokens.transform.isCreation(scope.token)
	    ) {
	        code.index++;
	        scope.token.nextArg = true;
	        parseMode.close();
	        return true;
	    }

	    return null;
	}

	module.exports = parseExpressionTransformEnd;


/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = function registerBarsWrapper(bars) {
	    return function registerBars(config) {
	        var _ = this,
	            key;

	        if (typeof config.transforms === 'object') {
	            for (key in config.transforms) {
	                if (config.transforms.hasOwnProperty(key)) {
	                    bars.registerTransform(key, config.transforms[key]);
	                }
	            }
	        }

	        if (typeof config.blocks === 'object') {
	            for (key in config.blocks) {
	                if (config.blocks.hasOwnProperty(key)) {
	                    bars.registerBlock(key, config.blocks[key]);
	                }
	            }
	        }

	        if (typeof config.partials === 'object') {
	            for (key in config.partials) {
	                if (config.partials.hasOwnProperty(key)) {
	                    bars.registerPartial(key, config.partials[key]);
	                }
	            }
	        }

	        _.definePrototype({
	            writable: true
	        }, {
	            template: config.template,
	            bars: bars
	        });
	    };
	};


/***/ },
/* 116 */
/***/ function(module, exports) {

	function pad(n) {
	    return ('00' + n).slice(-2);
	}

	function objValues(obj) {
	    return Object.keys(obj).map(function(i) {
	        return obj[i];
	    });
	}

	function timeInZone(date, offset) {
	    var d = new Date(date || new Date()),
	        utc = d.getTime() + (d.getTimezoneOffset() * 60000),
	        nd = new Date(utc + (3600000 * offset));

	    return nd.toLocaleString();
	}

	function timeInt(localeDateString) {
	    var splat = localeDateString.match(/(\d+):(\d+)/),
	        hours = parseInt(splat[1]);

	    if (localeDateString.indexOf('PM') !== -1) {
	        hours += 12;
	    }

	    return parseInt(pad(hours) + pad(splat[2]));
	}

	function showBySchedule(schedules, offset, now) {
	    if (!schedules) return false;
	    if (!(schedules instanceof Array) && typeof schedules !== 'undefined') schedules = objValues(schedules);

	    now = new Date(now || new Date());
	    offset = parseInt(offset) || 0;

	    var localeDateString = timeInZone(now, offset),
	        time = timeInt(localeDateString),
	        day = new Date(now.getTime() + (offset * -1000)),
	        timeslot;

	    for (var i = 0; i < schedules.length; i++) {
	        timeslot = schedules[i];

	        if (time < parseInt(timeslot.start)) continue;
	        if (time > parseInt(timeslot.finish)) continue;
	        if (day.getDay() !== parseInt(timeslot.day)) continue;

	        return true;
	    }

	    return false;
	}

	module.exports = showBySchedule;


/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = {
	    show: function show() {
	        var _ = this;
	        _.$el.show();
	    },

	    hide: function hide() {
	        var _ = this;
	        _.$el.hide();
	    },

	    toggle: function toggle() {
	        var _ = this;
	        _.$el.toggle();
	    },

	    fadeIn: function fadeIn() {
	        var _ = this;
	        _.$el.fadeIn();
	    },

	    fadeOut: function fadeOut() {
	        var _ = this;
	        _.$el.fadeOut();
	    },

	    fadeToggle: function fadeToggle() {
	        var _ = this;
	        _.$el.fadeToggle();
	    },

	    slideToggle: function slideToggle() {
	        var _ = this;
	        _.$el.slideToggle();
	    },
	};


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 *  howler.js v2.0.2
	 *  howlerjs.com
	 *
	 *  (c) 2013-2016, James Simpson of GoldFire Studios
	 *  goldfirestudios.com
	 *
	 *  MIT License
	 */

	(function() {

	  'use strict';

	  /** Global Methods **/
	  /***************************************************************************/

	  /**
	   * Create the global controller. All contained methods and properties apply
	   * to all sounds that are currently playing or will be in the future.
	   */
	  var HowlerGlobal = function() {
	    this.init();
	  };
	  HowlerGlobal.prototype = {
	    /**
	     * Initialize the global Howler object.
	     * @return {Howler}
	     */
	    init: function() {
	      var self = this || Howler;

	      // Internal properties.
	      self._codecs = {};
	      self._howls = [];
	      self._muted = false;
	      self._volume = 1;
	      self._canPlayEvent = 'canplaythrough';
	      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

	      // Public properties.
	      self.masterGain = null;
	      self.noAudio = false;
	      self.usingWebAudio = true;
	      self.autoSuspend = true;
	      self.ctx = null;

	      // Set to false to disable the auto iOS enabler.
	      self.mobileAutoEnable = true;

	      // Setup the various state values for global tracking.
	      self._setup();

	      return self;
	    },

	    /**
	     * Get/set the global volume for all sounds.
	     * @param  {Float} vol Volume from 0.0 to 1.0.
	     * @return {Howler/Float}     Returns self or current volume.
	     */
	    volume: function(vol) {
	      var self = this || Howler;
	      vol = parseFloat(vol);

	      // If we don't have an AudioContext created yet, run the setup.
	      if (!self.ctx) {
	        setupAudioContext();
	      }

	      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
	        self._volume = vol;

	        // Don't update any of the nodes if we are muted.
	        if (self._muted) {
	          return self;
	        }

	        // When using Web Audio, we just need to adjust the master gain.
	        if (self.usingWebAudio) {
	          self.masterGain.gain.value = vol;
	        }

	        // Loop through and change volume for all HTML5 audio nodes.
	        for (var i=0; i<self._howls.length; i++) {
	          if (!self._howls[i]._webAudio) {
	            // Get all of the sounds in this Howl group.
	            var ids = self._howls[i]._getSoundIds();

	            // Loop through all sounds and change the volumes.
	            for (var j=0; j<ids.length; j++) {
	              var sound = self._howls[i]._soundById(ids[j]);

	              if (sound && sound._node) {
	                sound._node.volume = sound._volume * vol;
	              }
	            }
	          }
	        }

	        return self;
	      }

	      return self._volume;
	    },

	    /**
	     * Handle muting and unmuting globally.
	     * @param  {Boolean} muted Is muted or not.
	     */
	    mute: function(muted) {
	      var self = this || Howler;

	      // If we don't have an AudioContext created yet, run the setup.
	      if (!self.ctx) {
	        setupAudioContext();
	      }

	      self._muted = muted;

	      // With Web Audio, we just need to mute the master gain.
	      if (self.usingWebAudio) {
	        self.masterGain.gain.value = muted ? 0 : self._volume;
	      }

	      // Loop through and mute all HTML5 Audio nodes.
	      for (var i=0; i<self._howls.length; i++) {
	        if (!self._howls[i]._webAudio) {
	          // Get all of the sounds in this Howl group.
	          var ids = self._howls[i]._getSoundIds();

	          // Loop through all sounds and mark the audio node as muted.
	          for (var j=0; j<ids.length; j++) {
	            var sound = self._howls[i]._soundById(ids[j]);

	            if (sound && sound._node) {
	              sound._node.muted = (muted) ? true : sound._muted;
	            }
	          }
	        }
	      }

	      return self;
	    },

	    /**
	     * Unload and destroy all currently loaded Howl objects.
	     * @return {Howler}
	     */
	    unload: function() {
	      var self = this || Howler;

	      for (var i=self._howls.length-1; i>=0; i--) {
	        self._howls[i].unload();
	      }

	      // Create a new AudioContext to make sure it is fully reset.
	      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
	        self.ctx.close();
	        self.ctx = null;
	        setupAudioContext();
	      }

	      return self;
	    },

	    /**
	     * Check for codec support of specific extension.
	     * @param  {String} ext Audio file extention.
	     * @return {Boolean}
	     */
	    codecs: function(ext) {
	      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
	    },

	    /**
	     * Setup various state values for global tracking.
	     * @return {Howler}
	     */
	    _setup: function() {
	      var self = this || Howler;

	      // Keeps track of the suspend/resume state of the AudioContext.
	      self.state = self.ctx ? self.ctx.state || 'running' : 'running';

	      // Automatically begin the 30-second suspend process
	      self._autoSuspend();

	      // Check if audio is available.
	      if (!self.usingWebAudio) {
	        // No audio is available on this system if noAudio is set to true.
	        if (typeof Audio !== 'undefined') {
	          try {
	            var test = new Audio();

	            // Check if the canplaythrough event is available.
	            if (typeof test.oncanplaythrough === 'undefined') {
	              self._canPlayEvent = 'canplay';
	            }
	          } catch(e) {
	            self.noAudio = true;
	          }
	        } else {
	          self.noAudio = true;
	        }
	      }

	      // Test to make sure audio isn't disabled in Internet Explorer.
	      try {
	        var test = new Audio();
	        if (test.muted) {
	          self.noAudio = true;
	        }
	      } catch (e) {}

	      // Check for supported codecs.
	      if (!self.noAudio) {
	        self._setupCodecs();
	      }

	      return self;
	    },

	    /**
	     * Check for browser support for various codecs and cache the results.
	     * @return {Howler}
	     */
	    _setupCodecs: function() {
	      var self = this || Howler;
	      var audioTest = null;

	      // Must wrap in a try/catch because IE11 in server mode throws an error.
	      try {
	        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
	      } catch (err) {
	        return self;
	      }

	      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
	        return self;
	      }

	      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

	      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
	      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
	      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

	      self._codecs = {
	        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
	        mpeg: !!mpegTest,
	        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
	        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
	        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
	        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
	        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
	        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
	        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
	        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
	        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
	        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
	        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
	        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
	      };

	      return self;
	    },

	    /**
	     * Mobile browsers will only allow audio to be played after a user interaction.
	     * Attempt to automatically unlock audio on the first user interaction.
	     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
	     * @return {Howler}
	     */
	    _enableMobileAudio: function() {
	      var self = this || Howler;

	      // Only run this on mobile devices if audio isn't already eanbled.
	      var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
	      var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
	      if (self._mobileEnabled || !self.ctx || (!isMobile && !isTouch)) {
	        return;
	      }

	      self._mobileEnabled = false;

	      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
	      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
	      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
	      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
	        self._mobileUnloaded = true;
	        self.unload();
	      }

	      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
	      // http://stackoverflow.com/questions/24119684
	      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

	      // Call this method on touch start to create and play a buffer,
	      // then check if the audio actually played to determine if
	      // audio has now been unlocked on iOS, Android, etc.
	      var unlock = function() {
	        // Create an empty buffer.
	        var source = self.ctx.createBufferSource();
	        source.buffer = self._scratchBuffer;
	        source.connect(self.ctx.destination);

	        // Play the empty buffer.
	        if (typeof source.start === 'undefined') {
	          source.noteOn(0);
	        } else {
	          source.start(0);
	        }

	        // Setup a timeout to check that we are unlocked on the next event loop.
	        source.onended = function() {
	          source.disconnect(0);

	          // Update the unlocked state and prevent this check from happening again.
	          self._mobileEnabled = true;
	          self.mobileAutoEnable = false;

	          // Remove the touch start listener.
	          document.removeEventListener('touchend', unlock, true);
	        };
	      };

	      // Setup a touch start listener to attempt an unlock in.
	      document.addEventListener('touchend', unlock, true);

	      return self;
	    },

	    /**
	     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
	     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
	     * @return {Howler}
	     */
	    _autoSuspend: function() {
	      var self = this;

	      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
	        return;
	      }

	      // Check if any sounds are playing.
	      for (var i=0; i<self._howls.length; i++) {
	        if (self._howls[i]._webAudio) {
	          for (var j=0; j<self._howls[i]._sounds.length; j++) {
	            if (!self._howls[i]._sounds[j]._paused) {
	              return self;
	            }
	          }
	        }
	      }

	      if (self._suspendTimer) {
	        clearTimeout(self._suspendTimer);
	      }

	      // If no sound has played after 30 seconds, suspend the context.
	      self._suspendTimer = setTimeout(function() {
	        if (!self.autoSuspend) {
	          return;
	        }

	        self._suspendTimer = null;
	        self.state = 'suspending';
	        self.ctx.suspend().then(function() {
	          self.state = 'suspended';

	          if (self._resumeAfterSuspend) {
	            delete self._resumeAfterSuspend;
	            self._autoResume();
	          }
	        });
	      }, 30000);

	      return self;
	    },

	    /**
	     * Automatically resume the Web Audio AudioContext when a new sound is played.
	     * @return {Howler}
	     */
	    _autoResume: function() {
	      var self = this;

	      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
	        return;
	      }

	      if (self.state === 'running' && self._suspendTimer) {
	        clearTimeout(self._suspendTimer);
	        self._suspendTimer = null;
	      } else if (self.state === 'suspended') {
	        self.state = 'resuming';
	        self.ctx.resume().then(function() {
	          self.state = 'running';

	          // Emit to all Howls that the audio has resumed.
	          for (var i=0; i<self._howls.length; i++) {
	            self._howls[i]._emit('resume');
	          }
	        });

	        if (self._suspendTimer) {
	          clearTimeout(self._suspendTimer);
	          self._suspendTimer = null;
	        }
	      } else if (self.state === 'suspending') {
	        self._resumeAfterSuspend = true;
	      }

	      return self;
	    }
	  };

	  // Setup the global audio controller.
	  var Howler = new HowlerGlobal();

	  /** Group Methods **/
	  /***************************************************************************/

	  /**
	   * Create an audio group controller.
	   * @param {Object} o Passed in properties for this group.
	   */
	  var Howl = function(o) {
	    var self = this;

	    // Throw an error if no source is provided.
	    if (!o.src || o.src.length === 0) {
	      console.error('An array of source files must be passed with any new Howl.');
	      return;
	    }

	    self.init(o);
	  };
	  Howl.prototype = {
	    /**
	     * Initialize a new Howl group object.
	     * @param  {Object} o Passed in properties for this group.
	     * @return {Howl}
	     */
	    init: function(o) {
	      var self = this;

	      // If we don't have an AudioContext created yet, run the setup.
	      if (!Howler.ctx) {
	        setupAudioContext();
	      }

	      // Setup user-defined default properties.
	      self._autoplay = o.autoplay || false;
	      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
	      self._html5 = o.html5 || false;
	      self._muted = o.mute || false;
	      self._loop = o.loop || false;
	      self._pool = o.pool || 5;
	      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
	      self._rate = o.rate || 1;
	      self._sprite = o.sprite || {};
	      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
	      self._volume = o.volume !== undefined ? o.volume : 1;

	      // Setup all other default properties.
	      self._duration = 0;
	      self._state = 'unloaded';
	      self._sounds = [];
	      self._endTimers = {};
	      self._queue = [];

	      // Setup event listeners.
	      self._onend = o.onend ? [{fn: o.onend}] : [];
	      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
	      self._onload = o.onload ? [{fn: o.onload}] : [];
	      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
	      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
	      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
	      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
	      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
	      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
	      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
	      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
	      self._onresume = [];

	      // Web Audio or HTML5 Audio?
	      self._webAudio = Howler.usingWebAudio && !self._html5;

	      // Automatically try to enable audio on iOS.
	      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.mobileAutoEnable) {
	        Howler._enableMobileAudio();
	      }

	      // Keep track of this Howl group in the global controller.
	      Howler._howls.push(self);

	      // If they selected autoplay, add a play event to the load queue.
	      if (self._autoplay) {
	        self._queue.push({
	          event: 'play',
	          action: function() {
	            self.play();
	          }
	        });
	      }

	      // Load the source file unless otherwise specified.
	      if (self._preload) {
	        self.load();
	      }

	      return self;
	    },

	    /**
	     * Load the audio file.
	     * @return {Howler}
	     */
	    load: function() {
	      var self = this;
	      var url = null;

	      // If no audio is available, quit immediately.
	      if (Howler.noAudio) {
	        self._emit('loaderror', null, 'No audio support.');
	        return;
	      }

	      // Make sure our source is in an array.
	      if (typeof self._src === 'string') {
	        self._src = [self._src];
	      }

	      // Loop through the sources and pick the first one that is compatible.
	      for (var i=0; i<self._src.length; i++) {
	        var ext, str;

	        if (self._format && self._format[i]) {
	          // If an extension was specified, use that instead.
	          ext = self._format[i];
	        } else {
	          // Make sure the source is a string.
	          str = self._src[i];
	          if (typeof str !== 'string') {
	            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
	            continue;
	          }

	          // Extract the file extension from the URL or base64 data URI.
	          ext = /^data:audio\/([^;,]+);/i.exec(str);
	          if (!ext) {
	            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
	          }

	          if (ext) {
	            ext = ext[1].toLowerCase();
	          }
	        }

	        // Check if this extension is available.
	        if (Howler.codecs(ext)) {
	          url = self._src[i];
	          break;
	        }
	      }

	      if (!url) {
	        self._emit('loaderror', null, 'No codec support for selected audio sources.');
	        return;
	      }

	      self._src = url;
	      self._state = 'loading';

	      // If the hosting page is HTTPS and the source isn't,
	      // drop down to HTML5 Audio to avoid Mixed Content errors.
	      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
	        self._html5 = true;
	        self._webAudio = false;
	      }

	      // Create a new sound object and add it to the pool.
	      new Sound(self);

	      // Load and decode the audio data for playback.
	      if (self._webAudio) {
	        loadBuffer(self);
	      }

	      return self;
	    },

	    /**
	     * Play a sound or resume previous playback.
	     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
	     * @param  {Boolean} internal Internal Use: true prevents event firing.
	     * @return {Number}          Sound ID.
	     */
	    play: function(sprite, internal) {
	      var self = this;
	      var id = null;

	      // Determine if a sprite, sound id or nothing was passed
	      if (typeof sprite === 'number') {
	        id = sprite;
	        sprite = null;
	      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
	        // If the passed sprite doesn't exist, do nothing.
	        return null;
	      } else if (typeof sprite === 'undefined') {
	        // Use the default sound sprite (plays the full audio length).
	        sprite = '__default';

	        // Check if there is a single paused sound that isn't ended.
	        // If there is, play that sound. If not, continue as usual.
	        var num = 0;
	        for (var i=0; i<self._sounds.length; i++) {
	          if (self._sounds[i]._paused && !self._sounds[i]._ended) {
	            num++;
	            id = self._sounds[i]._id;
	          }
	        }

	        if (num === 1) {
	          sprite = null;
	        } else {
	          id = null;
	        }
	      }

	      // Get the selected node, or get one from the pool.
	      var sound = id ? self._soundById(id) : self._inactiveSound();

	      // If the sound doesn't exist, do nothing.
	      if (!sound) {
	        return null;
	      }

	      // Select the sprite definition.
	      if (id && !sprite) {
	        sprite = sound._sprite || '__default';
	      }

	      // If we have no sprite and the sound hasn't loaded, we must wait
	      // for the sound to load to get our audio's duration.
	      if (self._state !== 'loaded' && !self._sprite[sprite]) {
	        self._queue.push({
	          event: 'play',
	          action: function() {
	            self.play(self._soundById(sound._id) ? sound._id : undefined);
	          }
	        });

	        return sound._id;
	      }

	      // Don't play the sound if an id was passed and it is already playing.
	      if (id && !sound._paused) {
	        // Trigger the play event, in order to keep iterating through queue.
	        if (!internal) {
	          setTimeout(function() {
	            self._emit('play', sound._id);
	          }, 0);
	        }

	        return sound._id;
	      }

	      // Make sure the AudioContext isn't suspended, and resume it if it is.
	      if (self._webAudio) {
	        Howler._autoResume();
	      }

	      // Determine how long to play for and where to start playing.
	      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
	      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
	      var timeout = (duration * 1000) / Math.abs(sound._rate);

	      // Update the parameters of the sound
	      sound._paused = false;
	      sound._ended = false;
	      sound._sprite = sprite;
	      sound._seek = seek;
	      sound._start = self._sprite[sprite][0] / 1000;
	      sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
	      sound._loop = !!(sound._loop || self._sprite[sprite][2]);

	      // Begin the actual playback.
	      var node = sound._node;
	      if (self._webAudio) {
	        // Fire this when the sound is ready to play to begin Web Audio playback.
	        var playWebAudio = function() {
	          self._refreshBuffer(sound);

	          // Setup the playback params.
	          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
	          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
	          sound._playStart = Howler.ctx.currentTime;

	          // Play the sound using the supported method.
	          if (typeof node.bufferSource.start === 'undefined') {
	            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
	          } else {
	            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
	          }

	          // Start a new timer if none is present.
	          if (timeout !== Infinity) {
	            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
	          }

	          if (!internal) {
	            setTimeout(function() {
	              self._emit('play', sound._id);
	            }, 0);
	          }
	        };

	        var isRunning = (Howler.state === 'running');
	        if (self._state === 'loaded' && isRunning) {
	          playWebAudio();
	        } else {
	          // Wait for the audio to load and then begin playback.
	          self.once(isRunning ? 'load' : 'resume', playWebAudio, isRunning ? sound._id : null);

	          // Cancel the end timer.
	          self._clearTimer(sound._id);
	        }
	      } else {
	        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
	        var playHtml5 = function() {
	          node.currentTime = seek;
	          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
	          node.volume = sound._volume * Howler.volume();
	          node.playbackRate = sound._rate;

	          setTimeout(function() {
	            node.play();

	            // Setup the new end timer.
	            if (timeout !== Infinity) {
	              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
	            }

	            if (!internal) {
	              self._emit('play', sound._id);
	            }
	          }, 0);
	        };

	        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
	        var loadedNoReadyState = (self._state === 'loaded' && (window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS));
	        if (node.readyState === 4 || loadedNoReadyState) {
	          playHtml5();
	        } else {
	          var listener = function() {
	            // Begin playback.
	            playHtml5();

	            // Clear this listener.
	            node.removeEventListener(Howler._canPlayEvent, listener, false);
	          };
	          node.addEventListener(Howler._canPlayEvent, listener, false);

	          // Cancel the end timer.
	          self._clearTimer(sound._id);
	        }
	      }

	      return sound._id;
	    },

	    /**
	     * Pause playback and save current position.
	     * @param  {Number} id The sound ID (empty to pause all in group).
	     * @return {Howl}
	     */
	    pause: function(id) {
	      var self = this;

	      // If the sound hasn't loaded, add it to the load queue to pause when capable.
	      if (self._state !== 'loaded') {
	        self._queue.push({
	          event: 'pause',
	          action: function() {
	            self.pause(id);
	          }
	        });

	        return self;
	      }

	      // If no id is passed, get all ID's to be paused.
	      var ids = self._getSoundIds(id);

	      for (var i=0; i<ids.length; i++) {
	        // Clear the end timer.
	        self._clearTimer(ids[i]);

	        // Get the sound.
	        var sound = self._soundById(ids[i]);

	        if (sound && !sound._paused) {
	          // Reset the seek position.
	          sound._seek = self.seek(ids[i]);
	          sound._rateSeek = 0;
	          sound._paused = true;

	          // Stop currently running fades.
	          self._stopFade(ids[i]);

	          if (sound._node) {
	            if (self._webAudio) {
	              // make sure the sound has been created
	              if (!sound._node.bufferSource) {
	                return self;
	              }

	              if (typeof sound._node.bufferSource.stop === 'undefined') {
	                sound._node.bufferSource.noteOff(0);
	              } else {
	                sound._node.bufferSource.stop(0);
	              }

	              // Clean up the buffer source.
	              self._cleanBuffer(sound._node);
	            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
	              sound._node.pause();
	            }
	          }
	        }

	        // Fire the pause event, unless `true` is passed as the 2nd argument.
	        if (!arguments[1]) {
	          self._emit('pause', sound ? sound._id : null);
	        }
	      }

	      return self;
	    },

	    /**
	     * Stop playback and reset to start.
	     * @param  {Number} id The sound ID (empty to stop all in group).
	     * @param  {Boolean} internal Internal Use: true prevents event firing.
	     * @return {Howl}
	     */
	    stop: function(id, internal) {
	      var self = this;

	      // If the sound hasn't loaded, add it to the load queue to stop when capable.
	      if (self._state !== 'loaded') {
	        self._queue.push({
	          event: 'stop',
	          action: function() {
	            self.stop(id);
	          }
	        });

	        return self;
	      }

	      // If no id is passed, get all ID's to be stopped.
	      var ids = self._getSoundIds(id);

	      for (var i=0; i<ids.length; i++) {
	        // Clear the end timer.
	        self._clearTimer(ids[i]);

	        // Get the sound.
	        var sound = self._soundById(ids[i]);

	        if (sound) {
	          // Reset the seek position.
	          sound._seek = sound._start || 0;
	          sound._rateSeek = 0;
	          sound._paused = true;
	          sound._ended = true;

	          // Stop currently running fades.
	          self._stopFade(ids[i]);

	          if (sound._node) {
	            if (self._webAudio) {
	              // make sure the sound has been created
	              if (!sound._node.bufferSource) {
	                if (!internal) {
	                  self._emit('stop', sound._id);
	                }

	                return self;
	              }

	              if (typeof sound._node.bufferSource.stop === 'undefined') {
	                sound._node.bufferSource.noteOff(0);
	              } else {
	                sound._node.bufferSource.stop(0);
	              }

	              // Clean up the buffer source.
	              self._cleanBuffer(sound._node);
	            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
	              sound._node.currentTime = sound._start || 0;
	              sound._node.pause();
	            }
	          }
	        }

	        if (sound && !internal) {
	          self._emit('stop', sound._id);
	        }
	      }

	      return self;
	    },

	    /**
	     * Mute/unmute a single sound or all sounds in this Howl group.
	     * @param  {Boolean} muted Set to true to mute and false to unmute.
	     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
	     * @return {Howl}
	     */
	    mute: function(muted, id) {
	      var self = this;

	      // If the sound hasn't loaded, add it to the load queue to mute when capable.
	      if (self._state !== 'loaded') {
	        self._queue.push({
	          event: 'mute',
	          action: function() {
	            self.mute(muted, id);
	          }
	        });

	        return self;
	      }

	      // If applying mute/unmute to all sounds, update the group's value.
	      if (typeof id === 'undefined') {
	        if (typeof muted === 'boolean') {
	          self._muted = muted;
	        } else {
	          return self._muted;
	        }
	      }

	      // If no id is passed, get all ID's to be muted.
	      var ids = self._getSoundIds(id);

	      for (var i=0; i<ids.length; i++) {
	        // Get the sound.
	        var sound = self._soundById(ids[i]);

	        if (sound) {
	          sound._muted = muted;

	          if (self._webAudio && sound._node) {
	            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
	          } else if (sound._node) {
	            sound._node.muted = Howler._muted ? true : muted;
	          }

	          self._emit('mute', sound._id);
	        }
	      }

	      return self;
	    },

	    /**
	     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
	     *   volume() -> Returns the group's volume value.
	     *   volume(id) -> Returns the sound id's current volume.
	     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
	     *   volume(vol, id) -> Sets the volume of passed sound id.
	     * @return {Howl/Number} Returns self or current volume.
	     */
	    volume: function() {
	      var self = this;
	      var args = arguments;
	      var vol, id;

	      // Determine the values based on arguments.
	      if (args.length === 0) {
	        // Return the value of the groups' volume.
	        return self._volume;
	      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
	        // First check if this is an ID, and if not, assume it is a new volume.
	        var ids = self._getSoundIds();
	        var index = ids.indexOf(args[0]);
	        if (index >= 0) {
	          id = parseInt(args[0], 10);
	        } else {
	          vol = parseFloat(args[0]);
	        }
	      } else if (args.length >= 2) {
	        vol = parseFloat(args[0]);
	        id = parseInt(args[1], 10);
	      }

	      // Update the volume or return the current volume.
	      var sound;
	      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
	        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
	        if (self._state !== 'loaded') {
	          self._queue.push({
	            event: 'volume',
	            action: function() {
	              self.volume.apply(self, args);
	            }
	          });

	          return self;
	        }

	        // Set the group volume.
	        if (typeof id === 'undefined') {
	          self._volume = vol;
	        }

	        // Update one or all volumes.
	        id = self._getSoundIds(id);
	        for (var i=0; i<id.length; i++) {
	          // Get the sound.
	          sound = self._soundById(id[i]);

	          if (sound) {
	            sound._volume = vol;

	            // Stop currently running fades.
	            if (!args[2]) {
	              self._stopFade(id[i]);
	            }

	            if (self._webAudio && sound._node && !sound._muted) {
	              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
	            } else if (sound._node && !sound._muted) {
	              sound._node.volume = vol * Howler.volume();
	            }

	            self._emit('volume', sound._id);
	          }
	        }
	      } else {
	        sound = id ? self._soundById(id) : self._sounds[0];
	        return sound ? sound._volume : 0;
	      }

	      return self;
	    },

	    /**
	     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
	     * @param  {Number} from The value to fade from (0.0 to 1.0).
	     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
	     * @param  {Number} len  Time in milliseconds to fade.
	     * @param  {Number} id   The sound id (omit to fade all sounds).
	     * @return {Howl}
	     */
	    fade: function(from, to, len, id) {
	      var self = this;
	      var diff = Math.abs(from - to);
	      var dir = from > to ? 'out' : 'in';
	      var steps = diff / 0.01;
	      var stepLen = (steps > 0) ? len / steps : len;

	      // Since browsers clamp timeouts to 4ms, we need to clamp our steps to that too.
	      if (stepLen < 4) {
	        steps = Math.ceil(steps / (4 / stepLen));
	        stepLen = 4;
	      }

	      // If the sound hasn't loaded, add it to the load queue to fade when capable.
	      if (self._state !== 'loaded') {
	        self._queue.push({
	          event: 'fade',
	          action: function() {
	            self.fade(from, to, len, id);
	          }
	        });

	        return self;
	      }

	      // Set the volume to the start position.
	      self.volume(from, id);

	      // Fade the volume of one or all sounds.
	      var ids = self._getSoundIds(id);
	      for (var i=0; i<ids.length; i++) {
	        // Get the sound.
	        var sound = self._soundById(ids[i]);

	        // Create a linear fade or fall back to timeouts with HTML5 Audio.
	        if (sound) {
	          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
	          if (!id) {
	            self._stopFade(ids[i]);
	          }

	          // If we are using Web Audio, let the native methods do the actual fade.
	          if (self._webAudio && !sound._muted) {
	            var currentTime = Howler.ctx.currentTime;
	            var end = currentTime + (len / 1000);
	            sound._volume = from;
	            sound._node.gain.setValueAtTime(from, currentTime);
	            sound._node.gain.linearRampToValueAtTime(to, end);
	          }

	          var vol = from;
	          sound._interval = setInterval(function(soundId, sound) {
	            // Update the volume amount, but only if the volume should change.
	            if (steps > 0) {
	              vol += (dir === 'in' ? 0.01 : -0.01);
	            }

	            // Make sure the volume is in the right bounds.
	            vol = Math.max(0, vol);
	            vol = Math.min(1, vol);

	            // Round to within 2 decimal points.
	            vol = Math.round(vol * 100) / 100;

	            // Change the volume.
	            if (self._webAudio) {
	              if (typeof id === 'undefined') {
	                self._volume = vol;
	              }

	              sound._volume = vol;
	            } else {
	              self.volume(vol, soundId, true);
	            }

	            // When the fade is complete, stop it and fire event.
	            if (vol === to) {
	              clearInterval(sound._interval);
	              sound._interval = null;
	              self.volume(vol, soundId);
	              self._emit('fade', soundId);
	            }
	          }.bind(self, ids[i], sound), stepLen);
	        }
	      }

	      return self;
	    },

	    /**
	     * Internal method that stops the currently playing fade when
	     * a new fade starts, volume is changed or the sound is stopped.
	     * @param  {Number} id The sound id.
	     * @return {Howl}
	     */
	    _stopFade: function(id) {
	      var self = this;
	      var sound = self._soundById(id);

	      if (sound && sound._interval) {
	        if (self._webAudio) {
	          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
	        }

	        clearInterval(sound._interval);
	        sound._interval = null;
	        self._emit('fade', id);
	      }

	      return self;
	    },

	    /**
	     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
	     *   loop() -> Returns the group's loop value.
	     *   loop(id) -> Returns the sound id's loop value.
	     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
	     *   loop(loop, id) -> Sets the loop value of passed sound id.
	     * @return {Howl/Boolean} Returns self or current loop value.
	     */
	    loop: function() {
	      var self = this;
	      var args = arguments;
	      var loop, id, sound;

	      // Determine the values for loop and id.
	      if (args.length === 0) {
	        // Return the grou's loop value.
	        return self._loop;
	      } else if (args.length === 1) {
	        if (typeof args[0] === 'boolean') {
	          loop = args[0];
	          self._loop = loop;
	        } else {
	          // Return this sound's loop value.
	          sound = self._soundById(parseInt(args[0], 10));
	          return sound ? sound._loop : false;
	        }
	      } else if (args.length === 2) {
	        loop = args[0];
	        id = parseInt(args[1], 10);
	      }

	      // If no id is passed, get all ID's to be looped.
	      var ids = self._getSoundIds(id);
	      for (var i=0; i<ids.length; i++) {
	        sound = self._soundById(ids[i]);

	        if (sound) {
	          sound._loop = loop;
	          if (self._webAudio && sound._node && sound._node.bufferSource) {
	            sound._node.bufferSource.loop = loop;
	            if (loop) {
	              sound._node.bufferSource.loopStart = sound._start || 0;
	              sound._node.bufferSource.loopEnd = sound._stop;
	            }
	          }
	        }
	      }

	      return self;
	    },

	    /**
	     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
	     *   rate() -> Returns the first sound node's current playback rate.
	     *   rate(id) -> Returns the sound id's current playback rate.
	     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
	     *   rate(rate, id) -> Sets the playback rate of passed sound id.
	     * @return {Howl/Number} Returns self or the current playback rate.
	     */
	    rate: function() {
	      var self = this;
	      var args = arguments;
	      var rate, id;

	      // Determine the values based on arguments.
	      if (args.length === 0) {
	        // We will simply return the current rate of the first node.
	        id = self._sounds[0]._id;
	      } else if (args.length === 1) {
	        // First check if this is an ID, and if not, assume it is a new rate value.
	        var ids = self._getSoundIds();
	        var index = ids.indexOf(args[0]);
	        if (index >= 0) {
	          id = parseInt(args[0], 10);
	        } else {
	          rate = parseFloat(args[0]);
	        }
	      } else if (args.length === 2) {
	        rate = parseFloat(args[0]);
	        id = parseInt(args[1], 10);
	      }

	      // Update the playback rate or return the current value.
	      var sound;
	      if (typeof rate === 'number') {
	        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
	        if (self._state !== 'loaded') {
	          self._queue.push({
	            event: 'rate',
	            action: function() {
	              self.rate.apply(self, args);
	            }
	          });

	          return self;
	        }

	        // Set the group rate.
	        if (typeof id === 'undefined') {
	          self._rate = rate;
	        }

	        // Update one or all volumes.
	        id = self._getSoundIds(id);
	        for (var i=0; i<id.length; i++) {
	          // Get the sound.
	          sound = self._soundById(id[i]);

	          if (sound) {
	            // Keep track of our position when the rate changed and update the playback
	            // start position so we can properly adjust the seek position for time elapsed.
	            sound._rateSeek = self.seek(id[i]);
	            sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
	            sound._rate = rate;

	            // Change the playback rate.
	            if (self._webAudio && sound._node && sound._node.bufferSource) {
	              sound._node.bufferSource.playbackRate.value = rate;
	            } else if (sound._node) {
	              sound._node.playbackRate = rate;
	            }

	            // Reset the timers.
	            var seek = self.seek(id[i]);
	            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
	            var timeout = (duration * 1000) / Math.abs(sound._rate);

	            // Start a new end timer if sound is already playing.
	            if (self._endTimers[id[i]] || !sound._paused) {
	              self._clearTimer(id[i]);
	              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
	            }

	            self._emit('rate', sound._id);
	          }
	        }
	      } else {
	        sound = self._soundById(id);
	        return sound ? sound._rate : self._rate;
	      }

	      return self;
	    },

	    /**
	     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
	     *   seek() -> Returns the first sound node's current seek position.
	     *   seek(id) -> Returns the sound id's current seek position.
	     *   seek(seek) -> Sets the seek position of the first sound node.
	     *   seek(seek, id) -> Sets the seek position of passed sound id.
	     * @return {Howl/Number} Returns self or the current seek position.
	     */
	    seek: function() {
	      var self = this;
	      var args = arguments;
	      var seek, id;

	      // Determine the values based on arguments.
	      if (args.length === 0) {
	        // We will simply return the current position of the first node.
	        id = self._sounds[0]._id;
	      } else if (args.length === 1) {
	        // First check if this is an ID, and if not, assume it is a new seek position.
	        var ids = self._getSoundIds();
	        var index = ids.indexOf(args[0]);
	        if (index >= 0) {
	          id = parseInt(args[0], 10);
	        } else {
	          id = self._sounds[0]._id;
	          seek = parseFloat(args[0]);
	        }
	      } else if (args.length === 2) {
	        seek = parseFloat(args[0]);
	        id = parseInt(args[1], 10);
	      }

	      // If there is no ID, bail out.
	      if (typeof id === 'undefined') {
	        return self;
	      }

	      // If the sound hasn't loaded, add it to the load queue to seek when capable.
	      if (self._state !== 'loaded') {
	        self._queue.push({
	          event: 'seek',
	          action: function() {
	            self.seek.apply(self, args);
	          }
	        });

	        return self;
	      }

	      // Get the sound.
	      var sound = self._soundById(id);

	      if (sound) {
	        if (typeof seek === 'number' && seek >= 0) {
	          // Pause the sound and update position for restarting playback.
	          var playing = self.playing(id);
	          if (playing) {
	            self.pause(id, true);
	          }

	          // Move the position of the track and cancel timer.
	          sound._seek = seek;
	          sound._ended = false;
	          self._clearTimer(id);

	          // Restart the playback if the sound was playing.
	          if (playing) {
	            self.play(id, true);
	          }

	          // Update the seek position for HTML5 Audio.
	          if (!self._webAudio && sound._node) {
	            sound._node.currentTime = seek;
	          }

	          self._emit('seek', id);
	        } else {
	          if (self._webAudio) {
	            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
	            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
	            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
	          } else {
	            return sound._node.currentTime;
	          }
	        }
	      }

	      return self;
	    },

	    /**
	     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
	     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
	     * @return {Boolean} True if playing and false if not.
	     */
	    playing: function(id) {
	      var self = this;

	      // Check the passed sound ID (if any).
	      if (typeof id === 'number') {
	        var sound = self._soundById(id);
	        return sound ? !sound._paused : false;
	      }

	      // Otherwise, loop through all sounds and check if any are playing.
	      for (var i=0; i<self._sounds.length; i++) {
	        if (!self._sounds[i]._paused) {
	          return true;
	        }
	      }

	      return false;
	    },

	    /**
	     * Get the duration of this sound. Passing a sound id will return the sprite duration.
	     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
	     * @return {Number} Audio duration in seconds.
	     */
	    duration: function(id) {
	      var self = this;
	      var duration = self._duration;

	      // If we pass an ID, get the sound and return the sprite length.
	      var sound = self._soundById(id);
	      if (sound) {
	        duration = self._sprite[sound._sprite][1] / 1000;
	      }

	      return duration;
	    },

	    /**
	     * Returns the current loaded state of this Howl.
	     * @return {String} 'unloaded', 'loading', 'loaded'
	     */
	    state: function() {
	      return this._state;
	    },

	    /**
	     * Unload and destroy the current Howl object.
	     * This will immediately stop all sound instances attached to this group.
	     */
	    unload: function() {
	      var self = this;

	      // Stop playing any active sounds.
	      var sounds = self._sounds;
	      for (var i=0; i<sounds.length; i++) {
	        // Stop the sound if it is currently playing.
	        if (!sounds[i]._paused) {
	          self.stop(sounds[i]._id);
	          self._emit('end', sounds[i]._id);
	        }

	        // Remove the source or disconnect.
	        if (!self._webAudio) {
	          // Set the source to 0-second silence to stop any downloading.
	          sounds[i]._node.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';

	          // Remove any event listeners.
	          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
	          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
	        }

	        // Empty out all of the nodes.
	        delete sounds[i]._node;

	        // Make sure all timers are cleared out.
	        self._clearTimer(sounds[i]._id);

	        // Remove the references in the global Howler object.
	        var index = Howler._howls.indexOf(self);
	        if (index >= 0) {
	          Howler._howls.splice(index, 1);
	        }
	      }

	      // Delete this sound from the cache (if no other Howl is using it).
	      var remCache = true;
	      for (i=0; i<Howler._howls.length; i++) {
	        if (Howler._howls[i]._src === self._src) {
	          remCache = false;
	          break;
	        }
	      }

	      if (cache && remCache) {
	        delete cache[self._src];
	      }

	      // Clear global errors.
	      Howler.noAudio = false;

	      // Clear out `self`.
	      self._state = 'unloaded';
	      self._sounds = [];
	      self = null;

	      return null;
	    },

	    /**
	     * Listen to a custom event.
	     * @param  {String}   event Event name.
	     * @param  {Function} fn    Listener to call.
	     * @param  {Number}   id    (optional) Only listen to events for this sound.
	     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
	     * @return {Howl}
	     */
	    on: function(event, fn, id, once) {
	      var self = this;
	      var events = self['_on' + event];

	      if (typeof fn === 'function') {
	        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
	      }

	      return self;
	    },

	    /**
	     * Remove a custom event. Call without parameters to remove all events.
	     * @param  {String}   event Event name.
	     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
	     * @param  {Number}   id    (optional) Only remove events for this sound.
	     * @return {Howl}
	     */
	    off: function(event, fn, id) {
	      var self = this;
	      var events = self['_on' + event];
	      var i = 0;

	      if (fn) {
	        // Loop through event store and remove the passed function.
	        for (i=0; i<events.length; i++) {
	          if (fn === events[i].fn && id === events[i].id) {
	            events.splice(i, 1);
	            break;
	          }
	        }
	      } else if (event) {
	        // Clear out all events of this type.
	        self['_on' + event] = [];
	      } else {
	        // Clear out all events of every type.
	        var keys = Object.keys(self);
	        for (i=0; i<keys.length; i++) {
	          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
	            self[keys[i]] = [];
	          }
	        }
	      }

	      return self;
	    },

	    /**
	     * Listen to a custom event and remove it once fired.
	     * @param  {String}   event Event name.
	     * @param  {Function} fn    Listener to call.
	     * @param  {Number}   id    (optional) Only listen to events for this sound.
	     * @return {Howl}
	     */
	    once: function(event, fn, id) {
	      var self = this;

	      // Setup the event listener.
	      self.on(event, fn, id, 1);

	      return self;
	    },

	    /**
	     * Emit all events of a specific type and pass the sound id.
	     * @param  {String} event Event name.
	     * @param  {Number} id    Sound ID.
	     * @param  {Number} msg   Message to go with event.
	     * @return {Howl}
	     */
	    _emit: function(event, id, msg) {
	      var self = this;
	      var events = self['_on' + event];

	      // Loop through event store and fire all functions.
	      for (var i=events.length-1; i>=0; i--) {
	        if (!events[i].id || events[i].id === id || event === 'load') {
	          setTimeout(function(fn) {
	            fn.call(this, id, msg);
	          }.bind(self, events[i].fn), 0);

	          // If this event was setup with `once`, remove it.
	          if (events[i].once) {
	            self.off(event, events[i].fn, events[i].id);
	          }
	        }
	      }

	      return self;
	    },

	    /**
	     * Queue of actions initiated before the sound has loaded.
	     * These will be called in sequence, with the next only firing
	     * after the previous has finished executing (even if async like play).
	     * @return {Howl}
	     */
	    _loadQueue: function() {
	      var self = this;

	      if (self._queue.length > 0) {
	        var task = self._queue[0];

	        // don't move onto the next task until this one is done
	        self.once(task.event, function() {
	          self._queue.shift();
	          self._loadQueue();
	        });

	        task.action();
	      }

	      return self;
	    },

	    /**
	     * Fired when playback ends at the end of the duration.
	     * @param  {Sound} sound The sound object to work with.
	     * @return {Howl}
	     */
	    _ended: function(sound) {
	      var self = this;
	      var sprite = sound._sprite;

	      // Should this sound loop?
	      var loop = !!(sound._loop || self._sprite[sprite][2]);

	      // Fire the ended event.
	      self._emit('end', sound._id);

	      // Restart the playback for HTML5 Audio loop.
	      if (!self._webAudio && loop) {
	        self.stop(sound._id, true).play(sound._id);
	      }

	      // Restart this timer if on a Web Audio loop.
	      if (self._webAudio && loop) {
	        self._emit('play', sound._id);
	        sound._seek = sound._start || 0;
	        sound._rateSeek = 0;
	        sound._playStart = Howler.ctx.currentTime;

	        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
	        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
	      }

	      // Mark the node as paused.
	      if (self._webAudio && !loop) {
	        sound._paused = true;
	        sound._ended = true;
	        sound._seek = sound._start || 0;
	        sound._rateSeek = 0;
	        self._clearTimer(sound._id);

	        // Clean up the buffer source.
	        self._cleanBuffer(sound._node);

	        // Attempt to auto-suspend AudioContext if no sounds are still playing.
	        Howler._autoSuspend();
	      }

	      // When using a sprite, end the track.
	      if (!self._webAudio && !loop) {
	        self.stop(sound._id);
	      }

	      return self;
	    },

	    /**
	     * Clear the end timer for a sound playback.
	     * @param  {Number} id The sound ID.
	     * @return {Howl}
	     */
	    _clearTimer: function(id) {
	      var self = this;

	      if (self._endTimers[id]) {
	        clearTimeout(self._endTimers[id]);
	        delete self._endTimers[id];
	      }

	      return self;
	    },

	    /**
	     * Return the sound identified by this ID, or return null.
	     * @param  {Number} id Sound ID
	     * @return {Object}    Sound object or null.
	     */
	    _soundById: function(id) {
	      var self = this;

	      // Loop through all sounds and find the one with this ID.
	      for (var i=0; i<self._sounds.length; i++) {
	        if (id === self._sounds[i]._id) {
	          return self._sounds[i];
	        }
	      }

	      return null;
	    },

	    /**
	     * Return an inactive sound from the pool or create a new one.
	     * @return {Sound} Sound playback object.
	     */
	    _inactiveSound: function() {
	      var self = this;

	      self._drain();

	      // Find the first inactive node to recycle.
	      for (var i=0; i<self._sounds.length; i++) {
	        if (self._sounds[i]._ended) {
	          return self._sounds[i].reset();
	        }
	      }

	      // If no inactive node was found, create a new one.
	      return new Sound(self);
	    },

	    /**
	     * Drain excess inactive sounds from the pool.
	     */
	    _drain: function() {
	      var self = this;
	      var limit = self._pool;
	      var cnt = 0;
	      var i = 0;

	      // If there are less sounds than the max pool size, we are done.
	      if (self._sounds.length < limit) {
	        return;
	      }

	      // Count the number of inactive sounds.
	      for (i=0; i<self._sounds.length; i++) {
	        if (self._sounds[i]._ended) {
	          cnt++;
	        }
	      }

	      // Remove excess inactive sounds, going in reverse order.
	      for (i=self._sounds.length - 1; i>=0; i--) {
	        if (cnt <= limit) {
	          return;
	        }

	        if (self._sounds[i]._ended) {
	          // Disconnect the audio source when using Web Audio.
	          if (self._webAudio && self._sounds[i]._node) {
	            self._sounds[i]._node.disconnect(0);
	          }

	          // Remove sounds until we have the pool size.
	          self._sounds.splice(i, 1);
	          cnt--;
	        }
	      }
	    },

	    /**
	     * Get all ID's from the sounds pool.
	     * @param  {Number} id Only return one ID if one is passed.
	     * @return {Array}    Array of IDs.
	     */
	    _getSoundIds: function(id) {
	      var self = this;

	      if (typeof id === 'undefined') {
	        var ids = [];
	        for (var i=0; i<self._sounds.length; i++) {
	          ids.push(self._sounds[i]._id);
	        }

	        return ids;
	      } else {
	        return [id];
	      }
	    },

	    /**
	     * Load the sound back into the buffer source.
	     * @param  {Sound} sound The sound object to work with.
	     * @return {Howl}
	     */
	    _refreshBuffer: function(sound) {
	      var self = this;

	      // Setup the buffer source for playback.
	      sound._node.bufferSource = Howler.ctx.createBufferSource();
	      sound._node.bufferSource.buffer = cache[self._src];

	      // Connect to the correct node.
	      if (sound._panner) {
	        sound._node.bufferSource.connect(sound._panner);
	      } else {
	        sound._node.bufferSource.connect(sound._node);
	      }

	      // Setup looping and playback rate.
	      sound._node.bufferSource.loop = sound._loop;
	      if (sound._loop) {
	        sound._node.bufferSource.loopStart = sound._start || 0;
	        sound._node.bufferSource.loopEnd = sound._stop;
	      }
	      sound._node.bufferSource.playbackRate.value = sound._rate;

	      return self;
	    },

	    /**
	     * Prevent memory leaks by cleaning up the buffer source after playback.
	     * @param  {Object} node Sound's audio node containing the buffer source.
	     * @return {Howl}
	     */
	    _cleanBuffer: function(node) {
	      var self = this;

	      if (self._scratchBuffer) {
	        node.bufferSource.onended = null;
	        node.bufferSource.disconnect(0);
	        try { node.bufferSource.buffer = self._scratchBuffer; } catch(e) {}
	      }
	      node.bufferSource = null;

	      return self;
	    }
	  };

	  /** Single Sound Methods **/
	  /***************************************************************************/

	  /**
	   * Setup the sound object, which each node attached to a Howl group is contained in.
	   * @param {Object} howl The Howl parent group.
	   */
	  var Sound = function(howl) {
	    this._parent = howl;
	    this.init();
	  };
	  Sound.prototype = {
	    /**
	     * Initialize a new Sound object.
	     * @return {Sound}
	     */
	    init: function() {
	      var self = this;
	      var parent = self._parent;

	      // Setup the default parameters.
	      self._muted = parent._muted;
	      self._loop = parent._loop;
	      self._volume = parent._volume;
	      self._muted = parent._muted;
	      self._rate = parent._rate;
	      self._seek = 0;
	      self._paused = true;
	      self._ended = true;
	      self._sprite = '__default';

	      // Generate a unique ID for this sound.
	      self._id = Math.round(Date.now() * Math.random());

	      // Add itself to the parent's pool.
	      parent._sounds.push(self);

	      // Create the new node.
	      self.create();

	      return self;
	    },

	    /**
	     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
	     * @return {Sound}
	     */
	    create: function() {
	      var self = this;
	      var parent = self._parent;
	      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

	      if (parent._webAudio) {
	        // Create the gain node for controlling volume (the source will connect to this).
	        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
	        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
	        self._node.paused = true;
	        self._node.connect(Howler.masterGain);
	      } else {
	        self._node = new Audio();

	        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
	        self._errorFn = self._errorListener.bind(self);
	        self._node.addEventListener('error', self._errorFn, false);

	        // Listen for 'canplaythrough' event to let us know the sound is ready.
	        self._loadFn = self._loadListener.bind(self);
	        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

	        // Setup the new audio node.
	        self._node.src = parent._src;
	        self._node.preload = 'auto';
	        self._node.volume = volume * Howler.volume();

	        // Begin loading the source.
	        self._node.load();
	      }

	      return self;
	    },

	    /**
	     * Reset the parameters of this sound to the original state (for recycle).
	     * @return {Sound}
	     */
	    reset: function() {
	      var self = this;
	      var parent = self._parent;

	      // Reset all of the parameters of this sound.
	      self._muted = parent._muted;
	      self._loop = parent._loop;
	      self._volume = parent._volume;
	      self._muted = parent._muted;
	      self._rate = parent._rate;
	      self._seek = 0;
	      self._rateSeek = 0;
	      self._paused = true;
	      self._ended = true;
	      self._sprite = '__default';

	      // Generate a new ID so that it isn't confused with the previous sound.
	      self._id = Math.round(Date.now() * Math.random());

	      return self;
	    },

	    /**
	     * HTML5 Audio error listener callback.
	     */
	    _errorListener: function() {
	      var self = this;

	      // Fire an error event and pass back the code.
	      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

	      // Clear the event listener.
	      self._node.removeEventListener('error', self._errorListener, false);
	    },

	    /**
	     * HTML5 Audio canplaythrough listener callback.
	     */
	    _loadListener: function() {
	      var self = this;
	      var parent = self._parent;

	      // Round up the duration to account for the lower precision in HTML5 Audio.
	      parent._duration = Math.ceil(self._node.duration * 10) / 10;

	      // Setup a sprite if none is defined.
	      if (Object.keys(parent._sprite).length === 0) {
	        parent._sprite = {__default: [0, parent._duration * 1000]};
	      }

	      if (parent._state !== 'loaded') {
	        parent._state = 'loaded';
	        parent._emit('load');
	        parent._loadQueue();
	      }

	      // Clear the event listener.
	      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
	    }
	  };

	  /** Helper Methods **/
	  /***************************************************************************/

	  var cache = {};

	  /**
	   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
	   * @param  {Howl} self
	   */
	  var loadBuffer = function(self) {
	    var url = self._src;

	    // Check if the buffer has already been cached and use it instead.
	    if (cache[url]) {
	      // Set the duration from the cache.
	      self._duration = cache[url].duration;

	      // Load the sound into this Howl.
	      loadSound(self);

	      return;
	    }

	    if (/^data:[^;]+;base64,/.test(url)) {
	      // Decode the base64 data URI without XHR, since some browsers don't support it.
	      var data = atob(url.split(',')[1]);
	      var dataView = new Uint8Array(data.length);
	      for (var i=0; i<data.length; ++i) {
	        dataView[i] = data.charCodeAt(i);
	      }

	      decodeAudioData(dataView.buffer, self);
	    } else {
	      // Load the buffer from the URL.
	      var xhr = new XMLHttpRequest();
	      xhr.open('GET', url, true);
	      xhr.responseType = 'arraybuffer';
	      xhr.onload = function() {
	        // Make sure we get a successful response back.
	        var code = (xhr.status + '')[0];
	        if (code !== '0' && code !== '2' && code !== '3') {
	          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
	          return;
	        }

	        decodeAudioData(xhr.response, self);
	      };
	      xhr.onerror = function() {
	        // If there is an error, switch to HTML5 Audio.
	        if (self._webAudio) {
	          self._html5 = true;
	          self._webAudio = false;
	          self._sounds = [];
	          delete cache[url];
	          self.load();
	        }
	      };
	      safeXhrSend(xhr);
	    }
	  };

	  /**
	   * Send the XHR request wrapped in a try/catch.
	   * @param  {Object} xhr XHR to send.
	   */
	  var safeXhrSend = function(xhr) {
	    try {
	      xhr.send();
	    } catch (e) {
	      xhr.onerror();
	    }
	  };

	  /**
	   * Decode audio data from an array buffer.
	   * @param  {ArrayBuffer} arraybuffer The audio data.
	   * @param  {Howl}        self
	   */
	  var decodeAudioData = function(arraybuffer, self) {
	    // Decode the buffer into an audio source.
	    Howler.ctx.decodeAudioData(arraybuffer, function(buffer) {
	      if (buffer && self._sounds.length > 0) {
	        cache[self._src] = buffer;
	        loadSound(self, buffer);
	      }
	    }, function() {
	      self._emit('loaderror', null, 'Decoding audio data failed.');
	    });
	  };

	  /**
	   * Sound is now loaded, so finish setting everything up and fire the loaded event.
	   * @param  {Howl} self
	   * @param  {Object} buffer The decoded buffer sound source.
	   */
	  var loadSound = function(self, buffer) {
	    // Set the duration.
	    if (buffer && !self._duration) {
	      self._duration = buffer.duration;
	    }

	    // Setup a sprite if none is defined.
	    if (Object.keys(self._sprite).length === 0) {
	      self._sprite = {__default: [0, self._duration * 1000]};
	    }

	    // Fire the loaded event.
	    if (self._state !== 'loaded') {
	      self._state = 'loaded';
	      self._emit('load');
	      self._loadQueue();
	    }
	  };

	  /**
	   * Setup the audio context when available, or switch to HTML5 Audio mode.
	   */
	  var setupAudioContext = function() {
	    // Check if we are using Web Audio and setup the AudioContext if we are.
	    try {
	      if (typeof AudioContext !== 'undefined') {
	        Howler.ctx = new AudioContext();
	      } else if (typeof webkitAudioContext !== 'undefined') {
	        Howler.ctx = new webkitAudioContext();
	      } else {
	        Howler.usingWebAudio = false;
	      }
	    } catch(e) {
	      Howler.usingWebAudio = false;
	    }

	    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
	    // If it is, disable Web Audio as it causes crashing.
	    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
	    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
	    var version = appVersion ? parseInt(appVersion[1], 10) : null;
	    if (iOS && version && version < 9) {
	      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
	      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
	        Howler.usingWebAudio = false;
	      }
	    }

	    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
	    if (Howler.usingWebAudio) {
	      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
	      Howler.masterGain.gain.value = 1;
	      Howler.masterGain.connect(Howler.ctx.destination);
	    }

	    // Re-run the setup on Howler.
	    Howler._setup();
	  };

	  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return {
	        Howler: Howler,
	        Howl: Howl
	      };
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }

	  // Add support for CommonJS libraries such as browserify.
	  if (true) {
	    exports.Howler = Howler;
	    exports.Howl = Howl;
	  }

	  // Define globally in case AMD is not available or unused.
	  if (typeof window !== 'undefined') {
	    window.HowlerGlobal = HowlerGlobal;
	    window.Howler = Howler;
	    window.Howl = Howl;
	    window.Sound = Sound;
	  } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
	    global.HowlerGlobal = HowlerGlobal;
	    global.Howler = Howler;
	    global.Howl = Howl;
	    global.Sound = Sound;
	  }
	})();


	/*!
	 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
	 *  
	 *  howler.js v2.0.2
	 *  howlerjs.com
	 *
	 *  (c) 2013-2016, James Simpson of GoldFire Studios
	 *  goldfirestudios.com
	 *
	 *  MIT License
	 */

	(function() {

	  'use strict';

	  // Setup default properties.
	  HowlerGlobal.prototype._pos = [0, 0, 0];
	  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
	  
	  /** Global Methods **/
	  /***************************************************************************/

	  /**
	   * Helper method to update the stereo panning position of all current Howls.
	   * Future Howls will not use this value unless explicitly set.
	   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
	   * @return {Howler/Number}     Self or current stereo panning value.
	   */
	  HowlerGlobal.prototype.stereo = function(pan) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self.ctx || !self.ctx.listener) {
	      return self;
	    }

	    // Loop through all Howls and update their stereo panning.
	    for (var i=self._howls.length-1; i>=0; i--) {
	      self._howls[i].stereo(pan);
	    }

	    return self;
	  };

	  /**
	   * Get/set the position of the listener in 3D cartesian space. Sounds using
	   * 3D position will be relative to the listener's position.
	   * @param  {Number} x The x-position of the listener.
	   * @param  {Number} y The y-position of the listener.
	   * @param  {Number} z The z-position of the listener.
	   * @return {Howler/Array}   Self or current listener position.
	   */
	  HowlerGlobal.prototype.pos = function(x, y, z) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self.ctx || !self.ctx.listener) {
	      return self;
	    }

	    // Set the defaults for optional 'y' & 'z'.
	    y = (typeof y !== 'number') ? self._pos[1] : y;
	    z = (typeof z !== 'number') ? self._pos[2] : z;

	    if (typeof x === 'number') {
	      self._pos = [x, y, z];
	      self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
	    } else {
	      return self._pos;
	    }

	    return self;
	  };

	  /**
	   * Get/set the direction the listener is pointing in the 3D cartesian space.
	   * A front and up vector must be provided. The front is the direction the
	   * face of the listener is pointing, and up is the direction the top of the
	   * listener is pointing. Thus, these values are expected to be at right angles
	   * from each other.
	   * @param  {Number} x   The x-orientation of the listener.
	   * @param  {Number} y   The y-orientation of the listener.
	   * @param  {Number} z   The z-orientation of the listener.
	   * @param  {Number} xUp The x-orientation of the top of the listener.
	   * @param  {Number} yUp The y-orientation of the top of the listener.
	   * @param  {Number} zUp The z-orientation of the top of the listener.
	   * @return {Howler/Array}     Returns self or the current orientation vectors.
	   */
	  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self.ctx || !self.ctx.listener) {
	      return self;
	    }

	    // Set the defaults for optional 'y' & 'z'.
	    var or = self._orientation;
	    y = (typeof y !== 'number') ? or[1] : y;
	    z = (typeof z !== 'number') ? or[2] : z;
	    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
	    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
	    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

	    if (typeof x === 'number') {
	      self._orientation = [x, y, z, xUp, yUp, zUp];
	      self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
	    } else {
	      return or;
	    }

	    return self;
	  };

	  /** Group Methods **/
	  /***************************************************************************/

	  /**
	   * Add new properties to the core init.
	   * @param  {Function} _super Core init method.
	   * @return {Howl}
	   */
	  Howl.prototype.init = (function(_super) {
	    return function(o) {
	      var self = this;

	      // Setup user-defined default properties.
	      self._orientation = o.orientation || [1, 0, 0];
	      self._stereo = o.stereo || null;
	      self._pos = o.pos || null;
	      self._pannerAttr = {
	        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
	        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
	        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
	        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
	        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
	        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
	        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
	        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
	      };

	      // Setup event listeners.
	      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
	      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
	      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

	      // Complete initilization with howler.js core's init function.
	      return _super.call(this, o);
	    };
	  })(Howl.prototype.init);

	  /**
	   * Get/set the stereo panning of the audio source for this sound or all in the group.
	   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
	   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
	   * @return {Howl/Number}    Returns self or the current stereo panning value.
	   */
	  Howl.prototype.stereo = function(pan, id) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }

	    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
	    if (self._state !== 'loaded') {
	      self._queue.push({
	        event: 'stereo',
	        action: function() {
	          self.stereo(pan, id);
	        }
	      });

	      return self;
	    }

	    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
	    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

	    // Setup the group's stereo panning if no ID is passed.
	    if (typeof id === 'undefined') {
	      // Return the group's stereo panning if no parameters are passed.
	      if (typeof pan === 'number') {
	        self._stereo = pan;
	        self._pos = [pan, 0, 0];
	      } else {
	        return self._stereo;
	      }
	    }

	    // Change the streo panning of one or all sounds in group.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      // Get the sound.
	      var sound = self._soundById(ids[i]);

	      if (sound) {
	        if (typeof pan === 'number') {
	          sound._stereo = pan;
	          sound._pos = [pan, 0, 0];

	          if (sound._node) {
	            // If we are falling back, make sure the panningModel is equalpower.
	            sound._pannerAttr.panningModel = 'equalpower';

	            // Check if there is a panner setup and create a new one if not.
	            if (!sound._panner || !sound._panner.pan) {
	              setupPanner(sound, pannerType);
	            }

	            if (pannerType === 'spatial') {
	              sound._panner.setPosition(pan, 0, 0);
	            } else {
	              sound._panner.pan.value = pan;
	            }
	          }

	          self._emit('stereo', sound._id);
	        } else {
	          return sound._stereo;
	        }
	      }
	    }

	    return self;
	  };

	  /**
	   * Get/set the 3D spatial position of the audio source for this sound or
	   * all in the group. The most common usage is to set the 'x' position for
	   * left/right panning. Setting any value higher than 1.0 will begin to
	   * decrease the volume of the sound as it moves further away.
	   * @param  {Number} x  The x-position of the audio from -1000.0 to 1000.0.
	   * @param  {Number} y  The y-position of the audio from -1000.0 to 1000.0.
	   * @param  {Number} z  The z-position of the audio from -1000.0 to 1000.0.
	   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
	   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
	   */
	  Howl.prototype.pos = function(x, y, z, id) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }

	    // If the sound hasn't loaded, add it to the load queue to change position when capable.
	    if (self._state !== 'loaded') {
	      self._queue.push({
	        event: 'pos',
	        action: function() {
	          self.pos(x, y, z, id);
	        }
	      });

	      return self;
	    }

	    // Set the defaults for optional 'y' & 'z'.
	    y = (typeof y !== 'number') ? 0 : y;
	    z = (typeof z !== 'number') ? -0.5 : z;

	    // Setup the group's spatial position if no ID is passed.
	    if (typeof id === 'undefined') {
	      // Return the group's spatial position if no parameters are passed.
	      if (typeof x === 'number') {
	        self._pos = [x, y, z];
	      } else {
	        return self._pos;
	      }
	    }

	    // Change the spatial position of one or all sounds in group.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      // Get the sound.
	      var sound = self._soundById(ids[i]);

	      if (sound) {
	        if (typeof x === 'number') {
	          sound._pos = [x, y, z];

	          if (sound._node) {
	            // Check if there is a panner setup and create a new one if not.
	            if (!sound._panner || sound._panner.pan) {
	              setupPanner(sound, 'spatial');
	            }

	            sound._panner.setPosition(x, y, z);
	          }

	          self._emit('pos', sound._id);
	        } else {
	          return sound._pos;
	        }
	      }
	    }

	    return self;
	  };

	  /**
	   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
	   * space. Depending on how direction the sound is, based on the `cone` attributes,
	   * a sound pointing away from the listener can be quiet or silent.
	   * @param  {Number} x  The x-orientation of the source.
	   * @param  {Number} y  The y-orientation of the source.
	   * @param  {Number} z  The z-orientation of the source.
	   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
	   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
	   */
	  Howl.prototype.orientation = function(x, y, z, id) {
	    var self = this;

	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }

	    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
	    if (self._state !== 'loaded') {
	      self._queue.push({
	        event: 'orientation',
	        action: function() {
	          self.orientation(x, y, z, id);
	        }
	      });

	      return self;
	    }

	    // Set the defaults for optional 'y' & 'z'.
	    y = (typeof y !== 'number') ? self._orientation[1] : y;
	    z = (typeof z !== 'number') ? self._orientation[2] : z;

	    // Setup the group's spatial orientation if no ID is passed.
	    if (typeof id === 'undefined') {
	      // Return the group's spatial orientation if no parameters are passed.
	      if (typeof x === 'number') {
	        self._orientation = [x, y, z];
	      } else {
	        return self._orientation;
	      }
	    }

	    // Change the spatial orientation of one or all sounds in group.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      // Get the sound.
	      var sound = self._soundById(ids[i]);

	      if (sound) {
	        if (typeof x === 'number') {
	          sound._orientation = [x, y, z];

	          if (sound._node) {
	            // Check if there is a panner setup and create a new one if not.
	            if (!sound._panner) {
	              // Make sure we have a position to setup the node with.
	              if (!sound._pos) {
	                sound._pos = self._pos || [0, 0, -0.5];
	              }

	              setupPanner(sound, 'spatial');
	            }

	            sound._panner.setOrientation(x, y, z);
	          }

	          self._emit('orientation', sound._id);
	        } else {
	          return sound._orientation;
	        }
	      }
	    }

	    return self;
	  };

	  /**
	   * Get/set the panner node's attributes for a sound or group of sounds.
	   * This method can optionall take 0, 1 or 2 arguments.
	   *   pannerAttr() -> Returns the group's values.
	   *   pannerAttr(id) -> Returns the sound id's values.
	   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
	   *   pannerAttr(o, id) -> Set's the values of passed sound id.
	   *
	   *   Attributes:
	   *     coneInnerAngle - (360 by default) There will be no volume reduction inside this angle.
	   *     coneOuterAngle - (360 by default) The volume will be reduced to a constant value of
	   *                      `coneOuterGain` outside this angle.
	   *     coneOuterGain - (0 by default) The amount of volume reduction outside of `coneOuterAngle`.
	   *     distanceModel - ('inverse' by default) Determines algorithm to use to reduce volume as audio moves
	   *                      away from listener. Can be `linear`, `inverse` or `exponential`.
	   *     maxDistance - (10000 by default) Volume won't reduce between source/listener beyond this distance.
	   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
	   *                     Can be `HRTF` or `equalpower`.
	   *     refDistance - (1 by default) A reference distance for reducing volume as the source
	   *                    moves away from the listener.
	   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener.
	   * 
	   * @return {Howl/Object} Returns self or current panner attributes.
	   */
	  Howl.prototype.pannerAttr = function() {
	    var self = this;
	    var args = arguments;
	    var o, id, sound;

	    // Stop right here if not using Web Audio.
	    if (!self._webAudio) {
	      return self;
	    }

	    // Determine the values based on arguments.
	    if (args.length === 0) {
	      // Return the group's panner attribute values.
	      return self._pannerAttr;
	    } else if (args.length === 1) {
	      if (typeof args[0] === 'object') {
	        o = args[0];

	        // Set the grou's panner attribute values.
	        if (typeof id === 'undefined') {
	          self._pannerAttr = {
	            coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : self._coneInnerAngle,
	            coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : self._coneOuterAngle,
	            coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : self._coneOuterGain,
	            distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : self._distanceModel,
	            maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : self._maxDistance,
	            panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : self._panningModel,
	            refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : self._refDistance,
	            rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : self._rolloffFactor
	          };
	        }
	      } else {
	        // Return this sound's panner attribute values.
	        sound = self._soundById(parseInt(args[0], 10));
	        return sound ? sound._pannerAttr : self._pannerAttr;
	      }
	    } else if (args.length === 2) {
	      o = args[0];
	      id = parseInt(args[1], 10);
	    }

	    // Update the values of the specified sounds.
	    var ids = self._getSoundIds(id);
	    for (var i=0; i<ids.length; i++) {
	      sound = self._soundById(ids[i]);

	      if (sound) {
	        // Merge the new values into the sound.
	        var pa = sound._pannerAttr;
	        pa = {
	          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
	          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
	          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
	          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
	          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
	          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel,
	          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
	          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor
	        };

	        // Update the panner values or create a new panner if none exists.
	        var panner = sound._panner;
	        if (panner) {
	          panner.coneInnerAngle = pa.coneInnerAngle;
	          panner.coneOuterAngle = pa.coneOuterAngle;
	          panner.coneOuterGain = pa.coneOuterGain;
	          panner.distanceModel = pa.distanceModel;
	          panner.maxDistance = pa.maxDistance;
	          panner.panningModel = pa.panningModel;
	          panner.refDistance = pa.refDistance;
	          panner.rolloffFactor = pa.rolloffFactor;
	        } else {
	          // Make sure we have a position to setup the node with.
	          if (!sound._pos) {
	            sound._pos = self._pos || [0, 0, -0.5];
	          }

	          // Create a new panner node.
	          setupPanner(sound, 'spatial');
	        }
	      }
	    }

	    return self;
	  };

	  /** Single Sound Methods **/
	  /***************************************************************************/

	  /**
	   * Add new properties to the core Sound init.
	   * @param  {Function} _super Core Sound init method.
	   * @return {Sound}
	   */
	  Sound.prototype.init = (function(_super) {
	    return function() {
	      var self = this;
	      var parent = self._parent;

	      // Setup user-defined default properties.
	      self._orientation = parent._orientation;
	      self._stereo = parent._stereo;
	      self._pos = parent._pos;
	      self._pannerAttr = parent._pannerAttr;

	      // Complete initilization with howler.js core Sound's init function.
	      _super.call(this);

	      // If a stereo or position was specified, set it up.
	      if (self._stereo) {
	        parent.stereo(self._stereo);
	      } else if (self._pos) {
	        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
	      }
	    };
	  })(Sound.prototype.init);

	  /**
	   * Override the Sound.reset method to clean up properties from the spatial plugin.
	   * @param  {Function} _super Sound reset method.
	   * @return {Sound}
	   */
	  Sound.prototype.reset = (function(_super) {
	    return function() {
	      var self = this;
	      var parent = self._parent;

	      // Reset all spatial plugin properties on this sound.
	      self._orientation = parent._orientation;
	      self._pos = parent._pos;
	      self._pannerAttr = parent._pannerAttr;

	      // Complete resetting of the sound.
	      return _super.call(this);
	    };
	  })(Sound.prototype.reset);

	  /** Helper Methods **/
	  /***************************************************************************/

	  /**
	   * Create a new panner node and save it on the sound.
	   * @param  {Sound} sound Specific sound to setup panning on.
	   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
	   */
	  var setupPanner = function(sound, type) {
	    type = type || 'spatial';

	    // Create the new panner node.
	    if (type === 'spatial') {
	      sound._panner = Howler.ctx.createPanner();
	      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
	      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
	      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
	      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
	      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
	      sound._panner.panningModel = sound._pannerAttr.panningModel;
	      sound._panner.refDistance = sound._pannerAttr.refDistance;
	      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
	      sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
	      sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
	    } else {
	      sound._panner = Howler.ctx.createStereoPanner();
	      sound._panner.pan.value = sound._stereo;
	    }

	    sound._panner.connect(sound._node);

	    // Update the connections.
	    if (!sound._paused) {
	      sound._parent.pause(sound._id, true).play(sound._id);
	    }
	  };
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);