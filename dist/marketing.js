/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @name generate.js
 * @author Michaelangelo Jong
 */

(function GeneratorScope() {

    // Variables
    var Creation = {},
        Generation = {},
        Generator = {};

    // Helper Methods

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
                '\' but instead found \'' + typeof test + '\'');
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

    // Creation Class
    defineObjectProperties(
        Creation, {
            configurable: false,
            enumerable: false,
            writable: false
        }, {
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
                return Object.getPrototypeOf(this.generator)
                    .proto;
                // return Object.getPrototypeOf(Object.getPrototypeOf(this));
            }
        }
    );

    // Generation Class
    defineObjectProperties(
        Generation, {
            configurable: false,
            enumerable: false,
            writable: false
        }, {
            name: 'Generation',

            proto: Creation,

            /**
             * Creates a new instance of this Generator.
             * @return {Generator} Instance of this Generator.
             */
            create: function create() {
                var _ = this,
                    newObj = Object.create(_.proto);

                _.__supercreate(newObj, arguments);

                return newObj;
            },

            __supercreate: function __supercreate(newObj, args) {
                var _ = this,
                    superGenerator = Object.getPrototypeOf(_),
                    supercreateCalled = false;

                newObj.supercreate = function supercreate() {

                    supercreateCalled = true;

                    if (Generation.isGeneration(superGenerator)) {
                        superGenerator.__supercreate(newObj,
                            arguments);
                    }
                };

                _.__create.apply(newObj, args);

                if (!supercreateCalled) {
                    newObj.supercreate();
                }

                delete newObj.supercreate;
            },

            __create: function () {},

            /**
             * Generates a new generator that inherits from `this` generator.
             * @param {Generator} ParentGenerator Generator to inherit from.
             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
             */
            generate: function generate(create) {
                var _ = this;

                assertError(Generation.isGeneration(_) || _ ===
                    Generation,
                    'Cannot call method \'generate\' on non-Generations.'
                );
                assertTypeError(create, 'function');

                var newGenerator = Object.create(_),
                    newProto = Object.create(_.proto);

                defineObjectProperties(
                    newProto, {
                        configurable: false,
                        enumerable: false,
                        writable: false
                    }, {
                        generator: newGenerator
                    }
                );

                defineObjectProperties(
                    newGenerator, {
                        configurable: false,
                        enumerable: false,
                        writable: false
                    }, {
                        name: getFunctionName(create),
                        proto: newProto,
                        __create: create
                    }
                );

                return newGenerator;
            },

            /**
             * Returns true if 'generator' was generated by this Generator.
             * @param  {Generator} generator A Generator.
             * @return {Boolean}             true or false.
             */
            isGeneration: function isGeneration(generator) {
                var _ = this;
                return _.isPrototypeOf(generator);
            },

            /**
             * Returns true if 'object' was created by this Generator.
             * @param  {Object} object An Object.
             * @return {Boolean}       true or false.
             */
            isCreation: function isCreation(object) {
                var _ = this;
                return _.proto.isPrototypeOf(object);
            },

            /**
             * Defines shared properties for all objects created by this generator.
             * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
             * @param  {Object} properties An object who's properties will be attached to this generator's prototype.
             * @return {Generator}         This generator.
             */
            definePrototype: function definePrototype(descriptor,
                properties) {
                defineObjectProperties(this.proto, descriptor,
                    properties);
                return this;
            },

            /**
             * Generator.toString method.
             * @return {String} A string representation of this generator.
             */
            toString: function toString() {
                return '[' + (this.name || 'generation') +
                    ' Generator]';
            }
        }
    );

    // Generator Class Methods
    defineObjectProperties(
        Generator, {
            configurable: false,
            enumerable: false,
            writable: false
        }, {
            /**
             * Generates a new generator that inherits from `this` generator.
             * @param {Generator} ParentGenerator Generator to inherit from.
             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
             */
            generate: function generate(create) {
                return Generation.generate(create);
            },

            /**
             * Returns true if 'generator' was generated by this Generator.
             * @param  {Generator} generator A Generator.
             * @return {Boolean}             true or false.
             */
            isGenerator: function isGenerator(generator) {
                return Generation.isGeneration(generator);
            },

            /**
             * [toGenerator description]
             * @param  {Function} constructor A constructor function.
             * @return {Generator}            A new generator who's create method is `constructor` and inherits from `constructor.prototype`.
             */
            toGenerator: function toGenerator(constructor) {

                assertTypeError(constructor, 'function');

                var newGenerator = Object.create(Generation),
                    newProto = Object.create(constructor.prototype);

                defineObjectProperties(
                    newProto, {
                        configurable: false,
                        enumerable: false,
                        writable: false
                    }, {
                        generator: newGenerator
                    }
                );

                defineObjectProperties(
                    newProto, {
                        configurable: false,
                        enumerable: false,
                        writable: false
                    },
                    Creation
                );

                defineObjectProperties(
                    newGenerator, {
                        configurable: false,
                        enumerable: false,
                        writable: false
                    }, {
                        name: getFunctionName(constructor),
                        proto: newProto,
                        __create: constructor
                    }
                );

                return newGenerator;
            }
        }
    );

    Object.freeze(Creation);
    Object.freeze(Generation);
    Object.freeze(Generator);

    // Exports
    if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return Generator;
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module === 'object' && typeof exports === 'object') {
        // Node/CommonJS
        module.exports = Generator;
    } else {
        // Browser global
        window.Generator = Generator;
    }

}());


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
    A Base CTA to inherit from
*/

var CustomElement = __webpack_require__(27),
    Trigger = __webpack_require__(2),
    formSerialize = __webpack_require__(18);

var CTA = CustomElement.createElement({}, function CTA(options) {
    var _ = this;

    if (typeof options !== 'object')      return console.warn('`CTA.options` must be an object.');
    if (typeof options.$ === 'undefined') return console.warn('`CTA.$` is required.');

    options.data = options.data || {};
    options.data.cta = options.cta;

    CustomElement.call(_, options);

    options.$el = options.$(_.element);

    _.defineProperties(options);
    _.registerEvents(_.$el);
});

CTA.definePrototype(__webpack_require__(12));

CTA.definePrototype({
    ready: function ready() {
        var _ = this,
            triggers = _.get('cta.data.triggers') || { ready: { event: 'ready', action: 'show' } },
            id = 'cta-' + (_.get('cta.id') || Date.now());

        if (!_.isVisibleForURL(_.get('cta.visibility.show'), _.get('cta.visibility.hide'))) return console.warn('CTA outside of URL.');

        _.$el.attr('id', id);
        _.$el.addClass(('cta cta-' + _.get('cta.data.type') + ' cta-position-' + _.get('cta.data.position')).toLowerCase());

        if (_.get('cta.data.colours.primary')) {
            _.$('<style type="text/css">\
                #' + id + ' .primary-bg {\
                    background: ' + _.get('cta.data.colours.primary') + '\
                }\
                #' + id + ' .secondary-bg {\
                    background: ' + _.get('cta.data.colours.secondary') + '\
                }\
                #' + id + ' .primary {\
                    color: ' + _.get('cta.data.colours.primary') + '\
                }\
                #' + id + ' .secondary {\
                    background: ' + _.get('cta.data.colours.secondary') + '\
                }\
            </style>').appendTo('body');
        }

        for (var key in (triggers || {})) {
            _.registerTrigger( triggers[key] );
        }

        _.append();
        _.emit('ready');

        return _;
    },

    registerTrigger: function registerTrigger(trigger) {
        var _ = this;

        trigger.$ = _.$;
        trigger.cta = _;

        return new Trigger( trigger );
    },

    registerEvents: function registerEvents($el) {
        var _ = this;

        $el.on('click', '[data-go]', function() {
            _.set('currentPath', this.dataset.go);
            return false;
        });
    },

    append: function append() {
        var _ = this,
            $target = _.$(_.get('cta.target.element') || 'body'),
            method = _.get('cta.target.method');

        _.$el.hide();

        if (method === 'replaceWith') {
            $target.replaceWith(_.$el);
        } else if (method === 'append') {
            $target.replaceWith(_.$el);
        } else if (method === 'appendTo') {
            _.$el.appendTo($target);
        } else if (method === 'prependTo') {
            _.$el.prependTo($target);
        } else if (method === 'html') {
            $target.html(_.$el);
        } else {
            _.$el.appendTo($target);
        }
    }
});

CTA.definePrototype({
    isVisibleForURL: __webpack_require__(9),
    showBySchedule: __webpack_require__(11),
    serialize: function serialize(form) {
        return formSerialize(
            form,
            { hash: true }
        );
    },
});

__webpack_require__(13);

module.exports = CTA;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
    An event that fires upon a specific UI or CTA condition
*/

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
                _.action(_);
            } else if (typeof Trigger.ACTIONS[_.action] === 'function') {
                Trigger.ACTIONS[_.action].apply(_);
            } else {
                _.cta[_.action](_);
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

Trigger.ACTIONS = {};

Trigger.registerAction = function registerAction(name, func) {
    this.ACTIONS[name] = func;
};

module.exports = Trigger;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module === 'object' && typeof exports === 'object') {
        // Node/CommonJS
        module.exports = Generator;
    } else {
        // Browser global
        window.Generator = Generator;
    }

}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var CTAs = __webpack_require__(14),
    Marketing = new CTAs();

if (typeof window !== 'undefined') {
    window.Marketing = Marketing;
}

module.exports = Marketing;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
    A Chat CTA
*/

var CTA = __webpack_require__(1),
    howler = __webpack_require__(19),
    CONFIG = {
        template: '{{>?currentPath}}',
        partials: {
            '/prompter': __webpack_require__(21),
            '/interactions': __webpack_require__(20)
        },
        transforms: __webpack_require__(7)
    };

var Chat = CTA.createElement(CONFIG, function Chat(options) {
    var _ = this;

    options.data.currentPath = '/prompter';
    options.bell = new howler.Howl({
        autoplay: false,
        src: [
            options.assetURL + '/audio/pling.ogg',
            options.assetURL + '/audio/pling.mp3',
            options.assetURL + '/audio/pling.wav'
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

        _.connect();

        return _;
    },

    connect: function connect() {
        var _ = this;

        _.realTime.connect('private-events-' + _.get('user.access_token'), function() {
            _.realTime.channel.bind('event', function(e) {
                if (e.data.from === 'visitor') return;
                _.addMessage(e);
            });
        });
    },

    addMessage: function addMessage(msg) {
        var _ = this;

        _.push('events', msg);

        if (msg.data.from === 'agent') {
            _.bell.stop();
            _.bell.play();
        }

        setTimeout(function() {
            _.scrollMessages();
        }, 10);
    },

    scrollMessages: function scrollMessages() {
        var _ = this,
            $messages = _.$el.find('.interactions .messages-wrapper');

        if ($messages.length) {
            $messages.scrollTop( $messages[0].scrollHeight );
        }
    }
});

Chat.definePrototype({
    registerEvents: __webpack_require__(6)
});

__webpack_require__(8);

module.exports = Chat;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
    UI Events for the Chat CTA
*/

var CTA = __webpack_require__(1);

module.exports = function registerEvents($el) {
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

        if (/*!this.get('agent.online') &&*/ _.showBySchedule(_.get('agent.schedules'), _.get('agent.offset'))) {
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
                    user: _.get('user.id'),
                    cta: _.get('cta.id'),
                    from: 'visitor'
                },
                _publish: _publish
            };

        if (!body.length) return false;

        $textarea.val('');

        _.api.post('/things', { thing: thing });

        _.addMessage(thing);

        return false;
    });
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
    Template Helpers for the Chat CTA
*/

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
        var avatarsURL = window.rm.api.baseUrl.replace(/api/, 'assets') + '/avatars/'; // TODO: Generalize
        if (!agent) return avatarsURL + '7.jpg';
        if (!agent.avatar) return avatarsURL + Math.floor((agent.email + '').length / 7) + '.jpg';
        return agent.avatar;
    }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
    Register custom triggers for the Chat CTA
*/

var Trigger = __webpack_require__(2);

function sendMsg(cta, message) {
    var thing = {
            model: 'event',
            data: {
                action: 'message',
                from: 'agent',
                cta: cta.get('cta.id'),
                user: cta.get('user.id'),
                agent: cta.get('agent.id'),
                message: message
            }
        };

    cta.api.post('/things', {
        thing: thing
    });

    cta.addMessage(thing);
}

Trigger.registerEvent('noMessages', function bindNoMessageEvent() {
    var _ = this;

    _.cta.on(_.event, function noMessageEvent() {
        _.trigger(function() {
            sendMsg(_.cta, _.message);
        });
    });
});

Trigger.registerAction('sendMessage', function sendMessage() {
    sendMsg(_.cta, _.message);
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

function objectValues(obj) {
    return Object.keys(obj).map(function(i) {
        return obj[i];
    });
}

module.exports = function isVisibleForURL(show, hide) {
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
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Generator = __webpack_require__(3);

var LazyLoader = Generator.generate(function LazyLoader(options) {
    var _ = this;

    options = typeof options === 'object' ? options : {};

    _.defineProperties({
        debug: options.debug,
        loaders: typeof options.loaders === 'object' ? options.loaders : {}
    });
});

LazyLoader.definePrototype({
    register: function register(name, func) {
        var _ = this;

        _.loaders[name] = {
            name: name,
            func: func,
            state: 'unloaded',
            dependents: []
        };

        if (_.debug) console.log('LazyLoader', 'Register', name);

        return _.loaders[name];
    },

    load: function load(name, done) {
        var _ = this,
            loader = _.loaders[name];

        if (!loader) {
            if (_.debug) console.warn('LazyLoader', 'No Loader Found:', name);
            return;
        }

        if (loader.state === 'loaded') {
            if (_.debug) console.log('LazyLoader', 'Load', name);
            done();
        } else {
            if (_.debug) console.log('LazyLoader', 'Load Added to Stack', name);
            loader.dependents.push(done);

            if (loader.state !== 'loading') {
                loader.state = 'loading';
            if (_.debug) console.log('LazyLoader', 'Loading', name);
                loader.func.call(_, function() {
                    _.loadComplete(name);
                });
            }
        }
    },

    loadComplete: function loadComplete(name) {
        var _ = this,
            loader = _.loaders[name];

        loader.state = 'loaded';

        for (var i = 0; i < loader.dependents.length; i++) {
            loader.dependents[i]();
        }

        if (_.debug) console.log('LazyLoader', 'Load Complete', name);
    }
});

module.exports = LazyLoader;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
    Given a schedule, is it available in my time zone?
*/

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


/***/ }),
/* 12 */
/***/ (function(module, exports) {

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

        if (typeof _.$el.fadeIn === 'function') {
            _.$el.fadeIn();
        } else {
            _.$el.show();
        }
    },

    fadeOut: function fadeOut() {
        var _ = this;

        if (typeof _.$el.fadeOut === 'function') {
            _.$el.fadeOut();
        } else {
            _.$el.hide();
        }
    },

    fadeToggle: function fadeToggle() {
        var _ = this;

        if (typeof _.$el.fadeToggle === 'function') {
            _.$el.fadeToggle();
        } else {
            _.$el.toggle();
        }
    },

    slideToggle: function slideToggle() {
        var _ = this;

        if (typeof _.$el.slideToggle === 'function') {
            _.$el.slideToggle();
        } else {
            _.$el.toggle();
        }
    }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
    Custom Triggers for all CTAs
*/

var Trigger = __webpack_require__(2);

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


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
    The Available CTAs
*/

var Generator = __webpack_require__(3);

var CTAs = Generator.generate(function CTAs() {});

CTAs.definePrototype({
    Chat: __webpack_require__(5),
    Social: __webpack_require__(15),
    Wizard: __webpack_require__(17)
});

module.exports = CTAs;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
    A CTA that builds a social sharing widget
*/

var CTA = __webpack_require__(1),
    loadExternal = __webpack_require__(24),
    networkDetector = __webpack_require__(16),
    LazyLoader = __webpack_require__(10),
    lazyLoader = new LazyLoader(),
    CONFIG = {
        template: __webpack_require__(22),
        transforms: {
            findNetwork: function findNetwork(key, data) {
                return networkDetector(key, data);
            },
        }
    };

lazyLoader.register('font-awesome', function(done) {
    loadExternal('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css', done);
});

var Social = CTA.createElement(CONFIG, function Social(options) {
    var _ = this;

    CTA.call(_, options);

    _.set('iconPrefix', options.iconPrefix || 'fa fa-');
    _.set('networks', typeof _.get('cta.networks') === 'object' ? _.get('cta.networks') : {});
});

Social.definePrototype({
    ready: function ready() {
        var _ = this;

        lazyLoader.load('font-awesome', function() {
            CTA.prototype.ready.call(_);
        });

        return _;
    },

    registerEvents: function registerEvents($el) {
        var _ = this;

        CTA.prototype.registerEvents.call(_, $el);

        // $el.on('submit', 'form', function() {
        //     var form = this;

        //     (form.data('form').validate || _.validateForm).call(_, form, function(err) {
        //         _.set('currentForm.response', _.serialize( form ) );
        //         _.changeForm( +1 );
        //     });

        //     return false;
        // });
    }
});

module.exports = Social;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var USERNAME_REGEX = /\{\{username\}\}/,
    COLOURS = {
        facebook: '#3b5998',
        twitter: '#00b6f1',
        youtube: '#b31217',
        instagram: '#405de6',
        pinterest: '#cb2027',
        linkedin: '#007bb6',
        tumblr: '#35465d',
        vimeo: '#45bbff',
        stumbleupon: '#eb4924',
        flickr: '#f40083',
        reddit: '#ff5700',
        google: '#df4a32',
        'google-plus': '#df4a32'
    };

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function defaultIcon(network) {
    return network.name.toLowerCase();
}

function defaultName(network) {
    return capitalize(network.key);
}

function defaultHref(network) {
    return 'https://' + network.name.toLowerCase() + '.com/{{username}}';
}

module.exports = function networkDetector(key, data) {
    var username = typeof data === 'string' ? data : data.username,
        network = {
            key: key,
            username: username
        };

    data = typeof data === 'object' ? data : {};

    network.name = data.name || defaultName(network);
    network.href = (data.href || defaultHref(network)).toString().replace(USERNAME_REGEX, network.username || '');
    network.icon = data.icon || defaultIcon(network);
    network.color = data.color || COLOURS[network.key] || '#333';

    return network;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
    A CTA that builds a sequence of related forms
*/

var CTA = __webpack_require__(1),
    CONFIG = {
        template: '{{>form form=currentForm}}',
        partials: {
            form: __webpack_require__(23)
        }
    };

var Wizard = CTA.createElement(CONFIG, function Wizard(options) {
    var _ = this;

    CTA.call(_, options);

    _.defineProperties({
        forms: _.get('cta.forms'),
        response: {}
    });

    _.changeForm( _.initialForm );
});

Wizard.definePrototype({
    registerEvents: function registerEvents($el) {
        var _ = this;

        CTA.prototype.registerEvents.call(_, $el);

        $el.on('submit', 'form', function() {
            var form = this;

            (form.data('form').validate || _.validateForm).call(_, form, function(err) {
                _.set('currentForm.response', _.serialize( form ) );
                _.changeForm( +1 );
            });

            return false;
        });
    }
});

Wizard.definePrototype({
    validateForm: function validateForm(form, done) {
        done(undefined, form);
    }
});

Wizard.definePrototype({
    changeForm: function changeForm(formOrDelta) {
        var _ = this,
            form;

        if (typeof _.forms === 'object') {
            if (typeof formOrDelta === 'string') {
                form = _.forms[formOrDelta];
            } else if (typeof formOrDelta === 'number') {
                var keys = Object.keys(_.forms),
                    nextIndex = findCurrentIndex(_.forms, _.get('currentForm')) + formOrDelta;

                form = _.forms[ keys[nextIndex] ];
            } else if (formOrDelta === 'object') {
                form = formOrDelta;
            }
        } else if (formOrDelta === 'object') {
            form = formOrDelta;
        }

        if (typeof formOrDelta === 'undefined' && !form) {
            form = _.forms[Object.keys(_.forms)[0]];
        }

        if (!form) {
            console.warn('No form supplied.');
            _.set('currentForm', undefined);
            return false;
        }

        form.id = form.id || parseInt(Date.now() * Math.random());

        _.set('currentForm', form);

        if (form.redirect) {
            window.location.href = form.redirect;
        }

        return form;
    },
});

function findCurrentIndex(forms, form) {
    if (forms instanceof Array) {
        return forms.indexOf(form);
    }

    var i = 0;

    for (var key in forms) {
        if (forms[key] === form) {
            return i;
        }

        i++;
    }
}

module.exports = Wizard;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// get successful control from form and assemble into object
// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2

// types which indicate a submit action and are not successful controls
// these will be ignored
var k_r_submitter = /^(?:submit|button|image|reset|file)$/i;

// node names which could be successful controls
var k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;

// Matches bracket notation.
var brackets = /(\[[^\[\]]*\])/g;

// serializes form fields
// @param form MUST be an HTMLForm element
// @param options is an optional argument to configure the serialization. Default output
// with no options specified is a url encoded string
//    - hash: [true | false] Configure the output type. If true, the output will
//    be a js object.
//    - serializer: [function] Optional serializer function to override the default one.
//    The function takes 3 arguments (result, key, value) and should return new result
//    hash and url encoded str serializers are provided with this module
//    - disabled: [true | false]. If true serialize disabled fields.
//    - empty: [true | false]. If true serialize empty fields
function serialize(form, options) {
    if (typeof options != 'object') {
        options = { hash: !!options };
    }
    else if (options.hash === undefined) {
        options.hash = true;
    }

    var result = (options.hash) ? {} : '';
    var serializer = options.serializer || ((options.hash) ? hash_serializer : str_serialize);

    var elements = form && form.elements ? form.elements : [];

    //Object store each radio and set if it's empty or not
    var radio_store = Object.create(null);

    for (var i=0 ; i<elements.length ; ++i) {
        var element = elements[i];

        // ingore disabled fields
        if ((!options.disabled && element.disabled) || !element.name) {
            continue;
        }
        // ignore anyhting that is not considered a success field
        if (!k_r_success_contrls.test(element.nodeName) ||
            k_r_submitter.test(element.type)) {
            continue;
        }

        var key = element.name;
        var val = element.value;

        // we can't just use element.value for checkboxes cause some browsers lie to us
        // they say "on" for value when the box isn't checked
        if ((element.type === 'checkbox' || element.type === 'radio') && !element.checked) {
            val = undefined;
        }

        // If we want empty elements
        if (options.empty) {
            // for checkbox
            if (element.type === 'checkbox' && !element.checked) {
                val = '';
            }

            // for radio
            if (element.type === 'radio') {
                if (!radio_store[element.name] && !element.checked) {
                    radio_store[element.name] = false;
                }
                else if (element.checked) {
                    radio_store[element.name] = true;
                }
            }

            // if options empty is true, continue only if its radio
            if (!val && element.type == 'radio') {
                continue;
            }
        }
        else {
            // value-less fields are ignored unless options.empty is true
            if (!val) {
                continue;
            }
        }

        // multi select boxes
        if (element.type === 'select-multiple') {
            val = [];

            var selectOptions = element.options;
            var isSelectedOptions = false;
            for (var j=0 ; j<selectOptions.length ; ++j) {
                var option = selectOptions[j];
                var allowedEmpty = options.empty && !option.value;
                var hasValue = (option.value || allowedEmpty);
                if (option.selected && hasValue) {
                    isSelectedOptions = true;

                    // If using a hash serializer be sure to add the
                    // correct notation for an array in the multi-select
                    // context. Here the name attribute on the select element
                    // might be missing the trailing bracket pair. Both names
                    // "foo" and "foo[]" should be arrays.
                    if (options.hash && key.slice(key.length - 2) !== '[]') {
                        result = serializer(result, key + '[]', option.value);
                    }
                    else {
                        result = serializer(result, key, option.value);
                    }
                }
            }

            // Serialize if no selected options and options.empty is true
            if (!isSelectedOptions && options.empty) {
                result = serializer(result, key, '');
            }

            continue;
        }

        result = serializer(result, key, val);
    }

    // Check for all empty radio buttons and serialize them with key=""
    if (options.empty) {
        for (var key in radio_store) {
            if (!radio_store[key]) {
                result = serializer(result, key, '');
            }
        }
    }

    return result;
}

function parse_keys(string) {
    var keys = [];
    var prefix = /^([^\[\]]*)/;
    var children = new RegExp(brackets);
    var match = prefix.exec(string);

    if (match[1]) {
        keys.push(match[1]);
    }

    while ((match = children.exec(string)) !== null) {
        keys.push(match[1]);
    }

    return keys;
}

function hash_assign(result, keys, value) {
    if (keys.length === 0) {
        result = value;
        return result;
    }

    var key = keys.shift();
    var between = key.match(/^\[(.+?)\]$/);

    if (key === '[]') {
        result = result || [];

        if (Array.isArray(result)) {
            result.push(hash_assign(null, keys, value));
        }
        else {
            // This might be the result of bad name attributes like "[][foo]",
            // in this case the original `result` object will already be
            // assigned to an object literal. Rather than coerce the object to
            // an array, or cause an exception the attribute "_values" is
            // assigned as an array.
            result._values = result._values || [];
            result._values.push(hash_assign(null, keys, value));
        }

        return result;
    }

    // Key is an attribute name and can be assigned directly.
    if (!between) {
        result[key] = hash_assign(result[key], keys, value);
    }
    else {
        var string = between[1];
        // +var converts the variable into a number
        // better than parseInt because it doesn't truncate away trailing
        // letters and actually fails if whole thing is not a number
        var index = +string;

        // If the characters between the brackets is not a number it is an
        // attribute name and can be assigned directly.
        if (isNaN(index)) {
            result = result || {};
            result[string] = hash_assign(result[string], keys, value);
        }
        else {
            result = result || [];
            result[index] = hash_assign(result[index], keys, value);
        }
    }

    return result;
}

// Object/hash encoding serializer.
function hash_serializer(result, key, value) {
    var matches = key.match(brackets);

    // Has brackets? Use the recursive assignment function to walk the keys,
    // construct any missing objects in the result tree and make the assignment
    // at the end of the chain.
    if (matches) {
        var keys = parse_keys(key);
        hash_assign(result, keys, value);
    }
    else {
        // Non bracket notation can make assignments directly.
        var existing = result[key];

        // If the value has been assigned already (for instance when a radio and
        // a checkbox have the same name attribute) convert the previous value
        // into an array before pushing into it.
        //
        // NOTE: If this requirement were removed all hash creation and
        // assignment could go through `hash_assign`.
        if (existing) {
            if (!Array.isArray(existing)) {
                result[key] = [ existing ];
            }

            result[key].push(value);
        }
        else {
            result[key] = value;
        }
    }

    return result;
}

// urlform encoding serializer
function str_serialize(result, key, value) {
    // encode newlines as \r\n cause the html spec says so
    value = value.replace(/(\r)?\n/g, '\r\n');
    value = encodeURIComponent(value);

    // spaces should be '+' rather than '%20'.
    value = value.replace(/%20/g, '+');
    return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;
}

module.exports = serialize;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
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
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=\"interactions animated fadeInUp\">\n     <a href=\"#\" data-go=\"/prompter\" class=\"head primary-bg\">\n         <h2>\n            {{cta.name}}\n            <span>-</span>\n         </h2>\n     </a>\n\n     <div class=\"meta\">\n         <a>\n             <img src=\"{{@avatar(agent)}}\" class=\"primary-bg\">\n         </a>\n         <p>You're chatting with<br><strong>{{agent.name}}</strong></p>\n     </div>\n\n     <div class=\"messages-wrapper\">\n         <ul class=\"messages\">\n             {{#each events}}\n                 <li class=\"bubble animated {{#if data.from === 'agent'}}primary-bg from-agent slideInRight{{else}}{{#if data.from === 'system'}}from-system slideInUp{{else}}slideInUp{{/if}}{{/if}}\">\n                    {{data.message.body}}\n                </li>\n             {{/each}}\n         </ul>\n\n         <div class=\"bubble new-message-wrapper\">\n             <form>\n                 <textarea placeholder=\"Your message here...\"></textarea>\n             </form>\n         </div>\n     </div>\n </div>\n";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" data-go=\"/interactions\" class=\"prompter animated bounceIn\">\n    {{#with @lastReceivedMessage(events)}}\n        <p class=\"bubble from-agent primary-bg animated bounceIn\">\n            {{@truncate(data.message.body, 105)}}\n        </p>\n    {{/with}}\n    <img src=\"{{@avatar(agent)}}\" class=\"primary-bg\">\n</a>\n";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "{{#with iconPrefix=iconPrefix}}\n<ul>\n    {{#each networks}}\n        <li>\n            {{#if @findNetwork(@key, this)}}\n                <a href=\"{{@findNetwork(@key, this).href}}\" target=\"{{target || '_blank'}}\" title=\"{{@findNetwork(@key, this).name}}\" style=\"background: {{@findNetwork(@key, this).color}}; color: #fff; text-align: center; padding: 10px; display: block;\">\n                    <i class=\"{{iconPrefix}}{{@findNetwork(@key, this).icon}}\"></i>\n\n                    <span class=\"word\" style=\"display: none; \">\n                        {{@findNetwork(@key, this).name}}\n                    </span>\n                </a>\n            {{/if}}\n        </li>\n    {{/each}}\n</ul>\n{{/with}}\n";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "{{#with form}}\n    <form id=\"form_{{form.id}}\" form:{{form}}>\n        {{#if title}}\n            <h3>{{title}}</h3>\n        {{/if}}\n\n        {{#if subtitle}}\n            <h4>{{subtitle}}</h4>\n        {{/if}}\n\n        {{#if content}}\n            <p>{{content}}</p>\n        {{/if}}\n\n        {{#each fields key=@key}}\n            <div class=\"field\">\n                <label for=\"form_{{form.id}}_{{name || key}}\">{{label}}</label>\n\n                {{#if type}}\n                    {{#if type === 'select'}}\n                        <select id=\"form_{{form.id}}_{{name || key}}\" name=\"{{name || key}}\">\n                            {{#each options}}\n                                <option value=\"{{value || label}}\">{{label}}</option>\n                            {{/each}}\n                        </select>\n                    {{else}}\n                        {{#if type === 'checkbox'}}\n                            <ul>\n                                {{#each options}}\n                                    <li>\n                                        <input type=\"checkbox\" value=\"{{value || label}}\" id=\"form_{{form.id}}_{{name || key}}_{{@key}}\" name=\"{{name || key}}[]\">\n                                        <label for=\"form_{{form.id}}_{{name || key}}_{{@key}}\">{{label}}</label>\n                                    </li>\n                                {{/each}}\n                            </ul>\n                        {{else}}\n                            {{#if type === 'radio'}}\n                                <ul>\n                                    {{#each options}}\n                                        <li>\n                                            <input type=\"radio\" value=\"{{value || label}}\" id=\"form_{{form.id}}_{{name || key}}_{{@key}}\" name=\"{{name || key}}\">\n                                            <label for=\"form_{{form.id}}_{{name || key}}_{{@key}}\">{{label}}</label>\n                                        </li>\n                                    {{/each}}\n                                </ul>\n                            {{else}}\n                                {{#if type === 'textarea'}}\n                                    <textarea id=\"form_{{form.id}}_{{name || key}}\" name=\"{{name || key}}\"></textarea>\n                                {{else}}\n                                    <input type=\"{{type}}\" id=\"form_{{form.id}}_{{name || key}}\" name=\"{{name || key}}\">\n                                {{/if}}\n                            {{/if}}\n                        {{/if}}\n                    {{/if}}\n                {{/if}}\n            </div>\n        {{/each}}\n    </form>\n{{/with}}\n";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function loadExternal(url, mode, callback) {
    var script = undefined;

    if (typeof mode === 'function') {
        callback = mode;
        mode = /css/.test(url) ? 'css' : 'js';
    }

    if (mode === 'css') {
        script = document.createElement( 'link' );
        script.setAttribute( 'href', url );
        script.setAttribute( 'rel', 'stylesheet' );
        script.setAttribute( 'type', 'text/css' );
    } else {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
    }

    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = undefined;

                if (typeof callback === 'function') {
                    callback();
                }
            }
        };
    } else {
        script.onload = function() {
            if (typeof callback === 'function') {
                callback();
            }
        };
    }

    document.getElementsByTagName('head')[0].appendChild(script);
}

if (typeof window !== 'undefined') {
    window.loadExternal = window.externalLoader = loadExternal;
}

if (true) {
    module.exports = loadExternal;
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var Bindable = __webpack_require__(37),
    Bars = __webpack_require__(29),
    globalBars = new Bars();

function attach(config) {
    var _ = this,
        klass = config.class,
        proto = config.proto,
        key;

    delete config.proto;
    delete config.class;

    _.registerConfig(config);

    for (key in klass) {
        _[key] = klass[key];
    }

    _.definePrototype({
        writable: true,
        configurable: true
    }, proto);

    config.class = klass;
    config.proto = proto;
}

function registerConfig(config) {
    var _ = this,
        templates = config.templates,
        partials = config.partials,
        helpers = config.helpers,
        blocks = config.blocks,
        interactions = config.interactions,
        key;

    delete config.templates;
    delete config.partials;
    delete config.helpers;
    delete config.blocks;
    delete config.interactions;

    if (templates) {
        for (key in templates) {
            _.proto.templates[key] = globalBars.parse(templates[key]);
        }
    }

    if (partials) {
        for (key in partials) {
            _.proto.partials[key] = globalBars.parse(partials[key]);
        }
    }

    if (helpers) {
        for (key in helpers) {
            _.proto.helpers[key] = helpers[key];
        }
    }

    if (blocks) {
        for (key in blocks) {
            _.proto.blocks[key] = blocks[key];
        }
    }

    if (interactions) {
        for (key in interactions) {
            _.proto.interactions[key] = interactions[key];
        }
    }

    _.definePrototype({
        writable: true,
        enumerable: true,
        configurable: true
    }, config);

    config.templates = templates;
    config.partials = partials;
    config.helpers = helpers;
    config.blocks = blocks;
    config.interactions = interactions;
}

function registerBars(_) {
    var key;

    for (key in _.partials) {
        if (!_.Bars.partials[key]) {
            _.Bars.partials[key] = _.Bars.build(_.partials[key]);
        }
    }

    for (key in _.templates) {
        if (!_.templates[key].bars) {
            _.templates[key] = _.Bars.build(_.templates[key]);
        }
    }

    for (key in _.helpers) {
        if (!_.helpers[key].bars) {
            _.Bars.helpers[key] = _.helpers[key];
        }
    }

    for (key in _.blocks) {
        if (!_.blocks[key].bars) {
            _.Bars.blocks[key] = _.blocks[key];
        }
    }
}

function createElement(config, constructor) {
    var _ = this,
        el = _.generate(constructor);

    el.definePrototype({
        templates: Object.create(_.proto.templates),
        helpers: Object.create(_.proto.helpers),
        blocks: Object.create(_.proto.blocks),
        partials: Object.create(_.proto.partials),
        interactions: Object.create(_.proto.interactions)
    });

    el.createElement = createElement;
    el.registerConfig = registerConfig;
    el.attach = attach;

    el.registerConfig(config);

    return el;
}

var CustomElement = Bindable.generate(function CustomElement(options) {
    options = options || {};

    var _ = this;

    _.supercreate(options);

    _.$element = options.$element || document.createElement('div');

    _.Bars = new Bars();

    registerBars(_);

    _.registerInteractions(_.interactions);

    _.defineProperties({
        templates: Object.create(_.templates)
    });

    _.render();
});

CustomElement.createElement = createElement;

CustomElement.definePrototype({
    templates: {},
    helpers: {},
    blocks: {},
    partials: {},
    interactions: {}
});

CustomElement.definePrototype({
    update: function(data) {
        var _ = this;
        _.dom.update(data || _._data);
    },

    dispose: function dispose() {
        var _ = this;
        _.$element.off();
        _.$element.innerHTML = '';
    },

    render: function render(template) {
        var _ = this;

        template = typeof template === 'string' ? _.templates[template] : _.templates.index;

        if (template && typeof template.render === 'function') {
            _.$element.innerHTML = '';
            _.dom = template.render(_._data);
            _.dom.appendTo(_.$element);
            _.dom.update(_._data);
        } else {
            _.emit('error', new Error('Failed to render: Invalid template.'));
        }
    }
});

CustomElement.definePrototype({
    __eventListener: function eventListener(interaction) {
        var _ = this;

        return function (event) {
            return interaction.listener.call(_, event, $(this));
        };
    },

    registerInteractions: function registerInteractions(interactions) {
        var _ = this,
            interaction, key;

        for (key in interactions) {
            interaction = interactions[key];

            if (interaction.target) {
                _.$element.on(interaction.event, interaction.target, _.__eventListener(interaction));
            } else {
                _.$element.on(interaction.event, _.__eventListener(interaction));
            }
        }
    },

    registerTemplates: function registerTemplates(templates) {
        var _ = this,
            key;

        for (key in templates) {
            _.templates[name] = _.Bars.key( templates[key] );
        }
    },

    registerBlocks: function registerBlocks(blocks) {
        var _ = this,
            key;

        for (key in blocks) {
            _.Bars.registerBlock(key, blocks[key]);
        }
    },

    registerPartials: function registerPartials(partials) {
        var _ = this,
            key;

        for (key in partials) {
            _.Bars.registerPartial(key, partials[key]);
        }
    },

    registerHelpers: function registerHelpers(helpers) {
        var _ = this,
            key;

        for (key in helpers) {
            _.Bars.registerHelper(key, helpers[key]);
        }
    },
});

if (window && !module.parent) window.CustomElement = CustomElement;
module.exports = CustomElement;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Generator = __webpack_require__(0),
    Parser = __webpack_require__(35),
    Renderer = __webpack_require__(36),
    Blocks = __webpack_require__(31),
    Helpers = __webpack_require__(33);

var Bars = Generator.generate(function Bars() {
    var _ = this;

    _.defineProperties({
        blocks: Blocks.create(),
        partials: {},
        helpers: Helpers.create()
    });
});

Bars.definePrototype({
    compile: function compile(template) {
        var _ = this;
        return _.build( _.parse(template) );
    },

    parse: function parse(template) {
        return Parser(template);
    },

    build: function build(parsedTemplate) {
        var _ = this;
        return Renderer.create( _, parsedTemplate );
    },

    registerBlock: function registerBlock(name, block) {
        var _ = this;

        _.blocks[name] = block;
    },

    registerPartial: function registerPartial(name, template) {
        var _ = this;

        _.partials[name] = _.compile(template);
    },

    registerHelper: function registerHelper(name, func) {
        var _ = this;

        _.helpers[name] = func;
    },
});

module.exports = window.Bars = Bars;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Generator = __webpack_require__(0);

var Blocks = Generator.generate(function Blocks() {});

Blocks.definePrototype({
    if: function ifBlock(con) {
        return con;
    },

    unless: function unlessBlock(con) {
        return !con;
    },

    with: function withBlock(data) {
        var _ = this;

        if (data && typeof data === 'object') {
            _.context = _.context.getContext(_.args);

            return true;
        }

        return false;
    },

    each: function eachBlock(data) {
        var _ = this,
            i;

        if (data && typeof data === 'object') {
            var keys = Object.keys(data);

            _.context = _.context.getContext(_.args);

            if (keys.length) {
                // TODO: This should be smarter.

                for (var i = _.nodes.length - 1; i >= 0; i--) {
                    _.nodes[i].remove();
                }

                for (var i = 0; i < keys.length; i++) {
                    _.createFragment(keys[i]);
                }

                return true;
            }
        }

        return false;
    },

    reverse: function reverseBlock(data) {
        var _ = this,
            i;

        if (data && typeof data === 'object') {
            var keys = Object.keys(data).reverse();

            _.context = _.context.getContext(_.args);

            if (keys.length) {
                // TODO: This should be smarter.

                for (var i = _.nodes.length - 1; i >= 0; i--) {
                    _.nodes[i].remove();
                }

                for (var i = 0; i < keys.length; i++) {
                    _.createFragment(keys[i]);
                }

                return true;
            }
        }

        return false;
    }
});

module.exports = Blocks;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Generator = __webpack_require__(0),
    Nodes = {},
    ARRAY = [];

function parseArgs(args, context) {
    return args.split(/\s+/).map(function(item) {
        if (item === 'null') {
            return null;
        }

        if (item === 'undefined') {
            return void(0);
        }

        if (item === 'true') {
            return true;
        }

        if (item === 'false') {
            return false;
        }

        if (/("([^"\\]*(\\.[^"\\]*)*)"|'([^'\\]*(\\.[^'\\]*)*)')/.test(item)) {
            return item.slice(1, -1);
        }

        if (/^\-?\d*\.?\d+$/.test(item)) {
            return parseFloat(item);
        }

        return context(item);
    });
}

/**
 * [BarsNode description]
 * @param {[type]} bars     [description]
 * @param {[type]} struct   [description]
 */
var BarsNode = Generator.generate(function BarsNode(bars, struct) {
    var _ = this;

    _.defineProperties({
        bars: bars,
        nodes: [],
        parentTag: {
            get: _.getParentTag
        },
        prevDom: {
            get: _.getPrevDom
        },
        type: struct.type,
        name: struct.name,
        text: struct.text,
        args: struct.args,
        conFrag: struct.conFrag,
        altFrag: struct.altFrag,
    });
});

BarsNode.definePrototype({
    update: function update(context) {
        var _ = this;

        _.previousDom = null;

        _._update(context);

        if (_.isDOM) {
            _._elementAppendTo();
            _.parentTag.previousDom = _;
        }

        _.previousDom = null;
    },

    _update: function _update() {
        console.warn('_update method not implemented.');
    },

    appendChild: function appendChild(child) {
        var _ = this;

        _.nodes.push(child);
        child.parent = _;
    },

    appendTo: function appendTo(parent) {
        var _ = this;

        if (parent instanceof Element) {
            _._elementAppendTo(parent);
        }

        if (BarsNode.isCreation(parent)) {
            parent.appendChild(_);
        }
    },

    remove: function remove() {
        var _ = this,
            index = _.parent.nodes.indexOf(_);

        if (index >= 0) {
            _.parent.nodes.splice(index, 1);
        }

        _._elementRemove();
    },

    getParentTag: function getParentTag() {
        var _ = this,
            parent = _.parent,
            oldParent = parent;

        while (parent && !parent.isDOM) {
            oldParent = parent;
            parent = parent.parent;
        }

        return parent || oldParent || null;
    },

    getPrevDom: function getPrevDom() {
        var _ = this;

        return (_.parentTag && _.parentTag.previousDom) || null;
    },

    _elementAppendTo: function _elementAppendTo(parent) {
        var _ = this;

        if (!_.parentTag) return;

        parent = parent || _.parentTag.$el || _.parentTag.$parent;

        if (!parent) return;
        if (_.$el.parentElement) return;

        var prev = _.prevDom;

        if (prev) {
            parent.insertBefore(_.$el, prev.$el.nextSibling);
        } else {
            parent.appendChild(_.$el);
        }
    },

    _elementRemove: function _elementRemove() {
        var _ = this;

        if (_.isDOM && _.$el.parentNode instanceof Element) {
            _.$el.parentNode.removeChild(_.$el);
        }
    },
});


/**
 * [TextNode description]
 * @param {[type]} bars    [description]
 * @param {[type]} struct  [description]
 */
Nodes.TEXT = BarsNode.generate(function TextNode(bars, struct) {
    var _ = this;

    _.supercreate(bars, struct);

    _.defineProperties({
        $el: document.createTextNode(struct.text)
    });
});

Nodes.TEXT.definePrototype({
    isDOM: true,

    appendChild: function appendChild(child) {
        console.warn('appendChild CANNOT be called on TextNodes.');
    },

    _update: function _update(context) {
        var _ = this,
            helper,
            args;

        if (_.name) {
            helper = _.bars.helpers[_.name];

            if (typeof helper === 'function') {
                args = parseArgs(_.args, context);
                _.$el.textContent = helper.apply(_, args);
            } else {
                throw new Error('Helper not found: ' + _.name);
            }
        } else if (typeof _.args === 'string') {
            _.$el.textContent = context(_.args);
        }
    },
});


/**
 * [TagNode description]
 * @param {[type]} bars    [description]
 * @param {[type]} struct  [description]
 */
Nodes.TAG = BarsNode.generate(function TagNode(bars, struct) {
    var _ = this,
        nodes = struct.nodes || ARRAY,
        attrs = struct.attrs || ARRAY,
        i;

    _.supercreate(bars, struct);

    _.defineProperties({
        $el: document.createElement(struct.name),
        attrs: []
    });

    for (i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        _.appendChild(Nodes[node.type].create(bars, node));
    }

    for (i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        _.addAttr(Nodes[attr.type].create(bars, attr));
    }

});

Nodes.TAG.definePrototype({
    isDOM: true,

    _update: function _update(context) {
        var _ = this,
            i;

        for (i = 0; i < _.attrs.length; i++) {
            _.attrs[i].update(context);
        }

        for (i = 0; i < _.nodes.length; i++) {
            _.nodes[i].update(context);
        }
    },

    addAttr: function addAttr(child) {
        var _ = this;

        _.attrs.push(child);
        child.parent = _;
    },
});


/**
 * [AttrNode description]
 * @param {[type]} bars    [description]
 * @param {[type]} struct  [description]
 */
Nodes.ATTR = BarsNode.generate(function AttrNode(bars, struct) {
    var _ = this,
        nodes = struct.nodes || ARRAY;

    _.supercreate(bars, struct);

    _.defineProperties({
        $el: document.createElement('div'),
    });

    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        _.appendChild(Nodes[node.type].create(bars, node));
    }
});

Nodes.ATTR.definePrototype({
    isDOM: true,
    type: 'ATTR',
    _update: function _update(context) {
        var _ = this,
            i;

        for (i = 0; i < _.nodes.length; i++) {
            _.nodes[i].update(context);
        }
    },
    _elementAppendTo: function _elementAppendTo() {
        var _ = this,
            parent = _.parentTag.$el;

        if (parent instanceof Element) {
            parent.setAttribute(_.name, _.$el.textContent);
        }
    },
    _elementRemove: function _elementRemove() {
        var _ = this,
            parent = _.parentTag.$el;

        if (parent instanceof Element) {
            parent.removeAttribute(_.name);
        }
    }
});


/**
 * [BlockNode description]
 * @param {[type]} bars    [description]
 * @param {[type]} struct  [description]
 */
Nodes.BLOCK = BarsNode.generate(function BlockNode(bars, struct) {
    var _ = this;

    _.supercreate(bars, struct);
});

Nodes.BLOCK.definePrototype({
    type: 'BLOCK',

    createFragment: function createFragment(path) {
        var _ = this,
            frag = Nodes.FRAG.create(_.bars, _.conFrag);

        frag.setPath(path);

        _.appendChild(frag);
    },

    _update: function _update(context) {
        var _ = this,
            con,
            args,
            i;

        if (typeof _.bars.blocks[_.name] === 'function') {
            args = parseArgs(_.args, context);
            _.context = context;
            con = _.bars.blocks[_.name].apply(_, args);
        } else {
            throw new Error('Block helper not found: ' + _.name);
        }

        if (con) {
            if (!_.nodes.length) {
                _.createFragment();
            }

            for (i = 0; i < _.nodes.length; i++) {
                _.nodes[i].update(_.context);
            }

            if (_.alternate) {
                _.alternate._elementRemove();
            }
        } else {
            for (i = 0; i < _.nodes.length; i++) {
                _.nodes[i]._elementRemove();
            }

            if (!_.alternate) {
                _.alternate = Nodes.FRAG.create(_.bars, _.altFrag);
                _.alternate.parent = _;
            }

            _.alternate.update(_.context);
        }
    },
    _elementAppendTo: function _elementAppendTo() {},
    _elementRemove: function _elementRemove() {
        var _ = this,
            i;

        for (i = 0; i < _.nodes.length; i++) {
            _.nodes[i]._elementRemove();
        }

        if (_.alternate) {
            _.alternate._elementRemove();
        }
    }
});


/**
 * [PartialNode description]
 * @param {[type]} bars    [description]
 * @param {[type]} struct  [description]
 */
Nodes.PARTIAL = BarsNode.generate(function PartialNode(bars, struct) {
    var _ = this;

    _.supercreate(bars, struct);
});

Nodes.PARTIAL.definePrototype({
    _update: function _update(context) {
        var _ = this;

        if (!_.partial) {
            var partial = _.bars.partials[_.name];

            if (partial && typeof partial === 'object') {
                _.partial = Nodes.FRAG.create(_.bars, partial.struct);
                _.partial.parent = _;
                _.partial.setPath(_.args);
            } else {
                throw new Error('Partial not found: ' + _.name);
            }
        }

        _.partial.update(context);
    }
});


/**
 * [FragNode description]
 * @param {[type]} bars    [description]
 * @param {[type]} struct  [description]
 */
Nodes.FRAG = BarsNode.generate(function FragNode(bars, struct) {
    var _ = this,
        nodes = struct.nodes || ARRAY;

    _.supercreate(bars, struct);

    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        _.appendChild(Nodes[node.type].create(bars, node));
    }
});

Nodes.FRAG.definePrototype({
    _update: function _update(context) {
        var _ = this;

        if (typeof context !== 'function') {
            _.data = context;
            context = _.getContext('');
        }

        if (_.path) {
            context = context.getContext(_.path);
        }

        for (var i = 0; i < _.nodes.length; i++) {
            _.nodes[i].update(context);
        }
    },

    _elementAppendTo: function _elementAppendTo(parent) {
        var _ = this;

        _.$parent = parent;
    },
    _elementRemove: function _elementRemove() {
        var _ = this;

        for (var i = 0; i < _.nodes.length; i++) {
            _.nodes[i]._elementRemove();
        }

        _.$parent = null;
    },
    getValue: function getValue(splitPath) {
        var _ = this;

        var value = _.data;

        for (var i = 0; i < splitPath.length; i++) {
            if (splitPath[i] === '@key' || splitPath[i] === '@index') {
                value = splitPath[i - 1];
            } else if (value !== null && value !== void(0)) {
                value = value[splitPath[i]];
            } else {
                return;
            }
        }

        return value;
    },
    getContext: function getContext(basepath) {
        var _ = this;

        function context(path) {
            return _.getValue(_.resolve(basepath, path));
        }

        context.getContext = function getContext(path) {
            return _.getContext(_.resolve(basepath, path).join('/'));
        };

        return context;
    },

    setPath: function setPath(path) {
        var _ = this;

        if (path) {
            _.defineProperties({
                path: path.toString()
            });
        }
    },

    resolve: function resolve(basepath, path) {
        var newSplitpath;

        if (path[0] === '/') {
            newSplitpath = path.split('/');
        } else {
            newSplitpath = basepath.split('/').concat(path.split('/'));
        }


        for (var i = 0; i < newSplitpath.length; i++) {
            if (newSplitpath[i] === '.' || newSplitpath[i] === '') {
                newSplitpath.splice(i, 1);
                i--;
            } else if (newSplitpath[i] === '..') {
                newSplitpath.splice(i - 1, 2);
                i -= 2;
            }
        }

        return newSplitpath;
    }
});

module.exports = Nodes.FRAG;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Generator = __webpack_require__(0);

var Helpers = Generator.generate(function Helpers() {});

Helpers.definePrototype({
    log: function log() {
        console.log.apply(console, arguments);
    }
});

module.exports = Helpers;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

if (!String.prototype.codePointAt) {
    String.prototype.codePointAt = function (pos) {
        pos = isNaN(pos) ? 0 : pos;
        var str = String(this),
            code = str.charCodeAt(pos),
            next = str.charCodeAt(pos + 1);
        // If a surrogate pair
        if (0xD800 <= code && code <= 0xDBFF && 0xDC00 <= next && next <= 0xDFFF) {
            return ((code - 0xD800) * 0x400) + (next - 0xDC00) + 0x10000;
        }
        return code;
    };
}

if (!Number.isNaN) {
    Number.isNaN = function isNaN(value) {
        return value !== value;
    };
}

var LOGGING = false;

var SELF_CLOSEING_TAGS = [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];

var MODES = {
    'DOM-MODE': [
        60 /*'<'*/,  parseHTMLComment,
        60 /*'<'*/,  parseTagClose,
        60 /*'<'*/,  parseTag,
        123 /*'{'*/, parseBarsHelperHTML,
        123 /*'{'*/, parseBarsInsertHTML,
        123 /*'{'*/, parseBarsComment,
        123 /*'{'*/, parseBarsHelper,
        123 /*'{'*/, parseBarsPartial,
        123 /*'{'*/, parseBarsBlockElse,
        123 /*'{'*/, parseBarsBlockClose,
        123 /*'{'*/, parseBarsBlock,
        123 /*'{'*/, parseBarsInsert,
        null,        parseText
    ],
    'ATTR-MODE': [
        47 /*'/'*/, parseTagEnd,
        62 /*'>'*/, parseTagEnd,
        123 /*'{'*/, parseBarsComment,
        123 /*'{'*/, parseBarsBlockElse,
        123 /*'{'*/, parseBarsBlockClose,
        123 /*'{'*/, parseBarsBlock,
        null,        parseWhiteSpace,
        null,        parseAttr,
        null,        parseError
    ],
    'VALUE-MODE': [
        34 /*'"'*/,   parseStringClose,
        39 /*'\''*/,  parseStringClose,
        123 /*'{'*/,  parseBarsComment,
        123 /*'{'*/,  parseBarsHelper,
        123 /*'{'*/,  parseBarsBlockElse,
        123 /*'{'*/,  parseBarsBlockClose,
        123 /*'{'*/,  parseBarsBlock,
        123 /*'{'*/,  parseBarsInsert,
        null,         parseTextValue
    ],
};

var HASH = {
    '&quot;':      34,
    '&amp;':       38,
    '&lt;':        60,
    '&gt;':        62,
    '&nbsp;':      160,
    '&iexcl;':     161,
    '&cent;':      162,
    '&pound;':     163,
    '&curren;':    164,
    '&yen;':       165,
    '&brvbar;':    166,
    '&sect;':      167,
    '&uml;':       168,
    '&copy;':      169,
    '&ordf;':      170,
    '&not;':       172,
    '&shy;':       173,
    '&reg;':       174,
    '&macr;':      175,
    '&deg;':       176,
    '&plusmn;':    177,
    '&sup2;':      178,
    '&sup3;':      179,
    '&acute;':     180,
    '&micro;':     181,
    '&para;':      182,
    '&middot;':    183,
    '&cedil;':     184,
    '&sup1;':      185,
    '&ordm;':      186,
    '&raquo;':     187,
    '&frac14;':    188,
    '&frac12;':    189,
    '&frac34;':    190,
    '&iquest;':    191,
    '&Agrave;':    192,
    '&Aacute;':    193,
    '&Acirc;':     194,
    '&Atilde;':    195,
    '&Auml;':      196,
    '&Aring;':     197,
    '&AElig;':     198,
    '&Ccedil;':    199,
    '&Egrave;':    200,
    '&Eacute;':    201,
    '&Ecirc;':     202,
    '&Euml;':      203,
    '&Igrave;':    204,
    '&Iacute;':    205,
    '&Icirc;':     206,
    '&Iuml;':      207,
    '&ETH;':       208,
    '&Ntilde;':    209,
    '&Ograve;':    210,
    '&Oacute;':    211,
    '&Ocirc;':     212,
    '&Otilde;':    213,
    '&Ouml;':      214,
    '&times;':     215,
    '&Oslash;':    216,
    '&Ugrave;':    217,
    '&Uacute;':    218,
    '&Ucirc;':     219,
    '&Uuml;':      220,
    '&Yacute;':    221,
    '&THORN;':     222,
    '&szlig;':     223,
    '&agrave;':    224,
    '&aacute;':    225,
    '&acirc;':     226,
    '&atilde;':    227,
    '&auml;':      228,
    '&aring;':     229,
    '&aelig;':     230,
    '&ccedil;':    231,
    '&egrave;':    232,
    '&eacute;':    233,
    '&ecirc;':     234,
    '&euml;':      235,
    '&igrave;':    236,
    '&iacute;':    237,
    '&icirc;':     238,
    '&iuml;':      239,
    '&eth;':       240,
    '&ntilde;':    241,
    '&ograve;':    242,
    '&oacute;':    243,
    '&ocirc;':     244,
    '&otilde;':    245,
    '&ouml;':      246,
    '&divide;':    247,
    '&oslash;':    248,
    '&ugrave;':    249,
    '&uacute;':    250,
    '&ucirc;':     251,
    '&uuml;':      252,
    '&yacute;':    253,
    '&thorn;':     254,
    '&euro;':      8364,
};

function HTML_IDENTIFIER(ch) {
    /* ^[_A-Za-z0-9-]$ */
    return (ch === 45) ||
           (48 <= ch && ch <= 57) ||
           (65 <= ch && ch <= 90) ||
           (ch === 95) ||
           (97 <= ch && ch <= 122);
}

function WHITESPACE(ch) {
    /* ^\s$ */
    return (9 <= ch && ch <= 13) ||
            ch === 32 ||
            ch === 160 ||
            ch === 5760 ||
            ch === 6158 ||
            ch === 8192 ||
            ch === 8193 ||
            ch === 8194 ||
            ch === 8195 ||
            ch === 8196 ||
            ch === 8197 ||
            ch === 8198 ||
            ch === 8199 ||
            ch === 8200 ||
            ch === 8201 ||
            ch === 8202 ||
            ch === 8232 ||
            ch === 8233 ||
            ch === 8239 ||
            ch === 8287 ||
            ch === 12288 ||
            ch === 65279;
}

function HTML_ENTITY(ch) {
    /* ^[A-Za-z0-9]$ */
    return (48 <= ch && ch <= 57) ||
           (65 <= ch && ch <= 90) ||
           (97 <= ch && ch <= 122);
}

function getHTMLUnEscape(str) {
    var code;

    code = HASH[str];

    if (typeof code !== 'number') {
        code = parseInt( str.slice(2, -1), 10);
    }

    if (typeof code === 'number' && !Number.isNaN(code)){
        return String.fromCharCode(code);
    }

    return str;
}

function throwError(buffer, index, message) {
    var lines = 1,
        columns = 0;

    for (var i = 0; i < index; i++) {
        if (buffer.codePointAt(i) === 10 /*'\n'*/) {
            lines++;
            columns = 1;
        } else {
            columns++;
        }
    }

    throw new SyntaxError(message + ' at ' + lines + ':' + columns);
}

function parseError(mode, tree, index, length, buffer, indent) {
    throwError(buffer, index, 'Unexpected token: ' + JSON.stringify(buffer[index])+'.');
}

function parseTagEnd(mode, tree, index, length, buffer, indent, close) {
    var ch = buffer.codePointAt(index);

    if (ch === 62 /*'>'*/) {
        LOGGING && console.log(indent + 'parseTagEnd');
        close.closed = true;
        return index;
    }

    if (ch === 47 /*'/'*/ && buffer.codePointAt(index + 1) === 62 /*'>'*/) {
        LOGGING && console.log(indent + 'parseTagEnd');
        index++;
        close.selfClosed = true;
        return index;
    }

    return null;
}

function parseAttr(mode, tree, index, length, buffer, indent) {
    var ch,
        token = {
            type: 'ATTR',
            name: '',
            nodes: []
        };

    for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (!HTML_IDENTIFIER(ch)) {
            break;
        }

        token.name += buffer[index];
    }

    if (token.name) {
        LOGGING && console.log(indent + 'parseAttr');

        tree.push(token);
        /* ch === '=' */
        if (ch === 61) {
            // move past =
            index++;

            ch = buffer.codePointAt(index);

            /* ch === '"' || ch === '\'' */
            if (ch === 34 || ch === 39) {
                var stringToken = {
                    type: 'STRING',
                    name: ch
                };

                index++;
                index = parse('VALUE-MODE', token.nodes, index, length, buffer, indent, stringToken);

                if (!stringToken.closed) {
                    throwError(buffer, index, 'Missing closing tag: expected \'' + stringToken + '\'.');
                }
            } else {
                var textValueToken = {
                    type: 'TEXT',
                    text: ''
                };
                for (; index < length; index++) {
                    ch = buffer.codePointAt(index);

                    if (!HTML_IDENTIFIER(ch)) {
                        break;
                    }

                    textValueToken.text += buffer[index];
                }

                if (textValueToken.text) {
                    token.nodes.push(textValueToken);
                    index--;
                } else {
                    throwError(buffer, index, 'Unexpected end of input.');
                }
            }
        } else {
            index--;
        }

        return index;
    }

    return null;
}

function parseWhiteSpace(mode, tree, index, length, buffer, indent) {
    var ch,
        whitespace = 0;


    for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (!WHITESPACE(ch)) {

            break;
        }
        whitespace++;
    }

    if (whitespace) {
        LOGGING && console.log(indent + 'parseWhiteSpace');
        index--;
        return index;
    }

    return null;
}

function parseStringClose(mode, tree, index, length, buffer, indent, close, noErrorOnMismatch) {
    var token = {
        type: 'STRING',
        name: buffer.codePointAt(index)
    };

    if (token.type === close.type) {
        if (token.name === close.name) {
            close.closed = true;
            return index;
        }
        return null;
    }

    throwError(buffer, index, 'Mismatched closing tag: expected \'' +close.name+ '\' but found \'' +token.name+ '\'.');
}

function parse(mode, tree, index, length, buffer, indent, close) {
    LOGGING && console.log(indent + 'parse - ', mode);

    // LOGGING && console.log({mode: mode, tree: tree, index: index, length: length, buffer: buffer, close: close, indent: indent});

    var ch,
        testCh,
        oldIndex,
        oldIndent = indent,
        oldElsed,
        newIndex,
        parseFuncs = MODES[mode],
        parseFuncsLength = parseFuncs.length,
        parseFunc,
        i;

    indent += '  ';

    loop: for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        for (i = 0; i < parseFuncsLength; i++) {
            testCh = parseFuncs[i];
            parseFunc = parseFuncs[++i];

            if (ch === testCh || testCh === null) {
                oldIndex = index;
                oldElsed = close && close.elsed;

                newIndex = parseFunc(mode, tree, index, length, buffer, indent, close);

                if (typeof newIndex === 'number') {
                    index = newIndex;
                }

                if (
                    close &&
                    (
                        (close.closed) ||
                        (close.elsed && !oldElsed)
                    )
                ) {
                    break loop;
                }

                if (typeof newIndex === 'number') {
                    break;
                }
            }
        }
    }

    LOGGING && console.log(oldIndent + '<<<');

    return index;
}

function parseTag(mode, tree, index, length, buffer, indent) {
    LOGGING && console.log(indent+'parseTag');

    var ch,
        token = {
            type: 'TAG',
            name: '',
            nodes: [],
            attrs: []
        };

    index++; // move past <
    /* Get Name */
    for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (!HTML_IDENTIFIER(ch)) {
            break;
        }

        token.name += buffer[index];
    }

    if (!token.name) {
        throwError(buffer, index, 'Missing tag name.');
    }

    index = parse('ATTR-MODE', token.attrs, index, length, buffer, indent, token);

    if (!token.closed && !token.selfClosed) {
        throwError(buffer, index, 'Unexpected end of input.');
    }

    delete token.closed;

    if (token.selfClosed) {
        delete token.selfClosed;
        return index;
    }

    if (token.name === 'script' || token.name === 'style') {
        var textToken = {
            type: 'TEXT',
            text: ''
        };

        for (; index < length; index++) {
            ch = buffer.codePointAt(index);

            if (ch === 60 /*'<'*/) {
                index = parseTagClose(mode, tree, index, length, buffer, indent, token, true);

                if (token.closed) {
                    delete token.closed;
                    break;
                }
            }

            textToken.text += buffer[index];
        }

        if (textToken.text) {
            token.nodes.push(textToken);
        }
    } else if (SELF_CLOSEING_TAGS.indexOf(token.name) === -1) {
        index++;
        index = parse(mode, token.nodes, index, length, buffer, indent, token);
    } else {
        token.closed = true;
    }

    if (token.closed) {
        delete token.closed;
        tree.push(token);
    } else {
        throwError(buffer, index, 'Missing closing tag: expected \'' + token.name + '\'.');
    }

    return index;
}

function parseTagClose(mode, tree, index, length, buffer, indent, close, noErrorOnMismatch) {

    if (buffer.codePointAt(index + 1) !== 47 /*'/'*/) return null;

    LOGGING && console.log(indent+'parseTagClose');

    var ch,
        token = {
            type: 'TAG',
            name: ''
        },
        nameDone = false,
        end = false;

    index+=2; // move past </
    /* Get Name */
    for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (!nameDone && HTML_IDENTIFIER(ch)) {
            token.name += buffer[index];
        } else {
            nameDone = true;
        }

        if (ch === 62 /*'>'*/) {
            end = true;
            break;
        }
    }

    if (!end) {
        throwError(buffer, index, 'Unexpected end of input.');
    }

    if (!close) {
        throwError(buffer, index, 'Unexpected closing tag: \'' +token.name+ '\'.');
    }

    if (token.type === close.type && token.name === close.name) {
        close.closed = true;
    } else if (noErrorOnMismatch) {
        /* Canceling Parse */
        return null;
    } else {
        throwError(buffer, index, 'Mismatched closing tag: expected \'' +close.name+ '\' but found \'' +token.name+ '\'.');
    }

    return index;
}

function parseText(mode, tree, index, length, buffer, indent) {
    var ch,
        isEntity = false,
        entityStr = '',
        token = {
            type: 'TEXT',
            text: ''
        };

    for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 60 /*'<'*/ || ch === 123 /*'{'*/ && buffer.codePointAt(index + 1) === 123 /*'{'*/) {
            token.text += entityStr;
            index--;
            break;
        }

        if (ch === 38 /*'&'*/) {
            isEntity = true;
            entityStr = buffer[index];

            continue;
        } else if (isEntity && ch === 59 /*';'*/) {
            entityStr += buffer[index];

            token.text += getHTMLUnEscape(entityStr);

            isEntity = false;
            entityStr = '';

            continue;
        }

        if (isEntity && HTML_ENTITY(ch)) {
            entityStr += buffer[index];
        } else {
            token.text += entityStr;
            isEntity = false;
            entityStr = '';

            token.text += buffer[index];
        }
    }

    if (token.text) {
        LOGGING && console.log(indent+'parseText');
        tree.push(token);
        return index;
    }

    return null;
}

function parseTextValue(mode, tree, index, length, buffer, indent, close) {
    var ch,
        token = {
            type: 'TEXT',
            text: ''
        };

    for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 123 /*'{'*/ || (close && ch === close.name && buffer[index - 1] !== '\\')) {
            index--;
            break;
        }

        token.text += buffer[index];
    }

    if (token.text) {
        LOGGING && console.log(indent+'parseText');
        tree.push(token);
        return index;
    }

    return null;
}

function parseBarsInsert(mode, tree, index, length, buffer, indent) {
    LOGGING && console.log(indent+'parseBarsInsert');

    if (buffer.codePointAt(index + 1) !== 123 /*'{'*/) {
        return null;
    }

    var ch,
        token = {
            type: 'TEXT',
            args: ''
        }, endChars = 0;

    // move past {{
    index+=2;
    loop: for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 125 /*'}'*/) {
            endChars++;
            index++;

            for (; index < length; index++) {
                ch = buffer.codePointAt(index);

                if (ch === 125 /*'}'*/) {
                    endChars++;
                } else {
                    throwError(buffer, index, 'Unexpected character: expected \'}\' but found \'' +buffer[index]+ '\'.');
                }

                if (endChars === 2) {
                    break loop;
                }
            }
        }
        token.args += buffer[index];
    }

    tree.push(token);

    return index;
}

function parseBarsInsertHTML(mode, tree, index, length, buffer, indent) {
    LOGGING && console.log(indent+'parseBarsInsert');

    if (buffer.codePointAt(index + 1) !== 123 /*'{'*/) {
        return null;
    }

    if (buffer.codePointAt(index + 2) !== 123 /*'{'*/) {
        return null;
    }

    var ch,
        token = {
            type: 'FRAG',
            args: ''
        }, endChars = 0;

    // move past {{{
    index += 3;
    loop: for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 125 /*'}'*/) {
            endChars++;
            index++;

            for (; index < length; index++) {
                ch = buffer.codePointAt(index);

                if (ch === 125 /*'}'*/) {
                    endChars++;
                } else {
                    throwError(buffer, index, 'Unexpected character: expected \'}\' but found \'' +buffer[index]+ '\'.');
                }

                if (endChars === 3) {
                    break loop;
                }
            }
        }

        token.args += buffer[index];
    }

    tree.push(token);

    return index;
}

function parseBarsPartial(mode, tree, index, length, buffer, indent) {
    if (buffer.codePointAt(index + 1) !== 123 /*'{'*/) {
        return null;
    }

    if (buffer.codePointAt(index + 2) !== 62 /*'>'*/) {
        /* Canceling Parse */
        return null;
    }
    LOGGING && console.log(indent+'parseBarsPartial');

    var ch,
        token = {
            type: 'PARTIAL',
            name: '',
            args: ''
        }, endChars = 0;

    // move past {{>
    index += 3;

    for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (HTML_IDENTIFIER(ch)) {
            token.name += buffer[index];
        } else {
            break;
        }
    }

    if (!token.name) {
        throwError(buffer, index, 'Missing partial name.');
    }

    loop: for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 125 /*'}'*/) {
            endChars++;
            index++;

            for (; index < length; index++) {
                ch = buffer.codePointAt(index);

                if (ch === 125 /*'}'*/) {
                    endChars++;
                } else {
                    throwError(buffer, index, 'Unexpected character: expected \'}\' but found \'' +buffer[index]+ '\'.');
                }

                if (endChars === 2) {
                    break loop;
                }
            }
        }

        token.args += buffer[index];
    }

    token.args = token.args.trim();

    tree.push(token);

    return index;
}

function parseBarsHelper(mode, tree, index, length, buffer, indent) {
    if (buffer.codePointAt(index + 1) !== 123 /*'{'*/) {
        return null;
    }

    if (buffer.codePointAt(index + 2) !== 63 /*'?'*/) {
        /* Canceling Parse */
        return null;
    }
    LOGGING && console.log(indent+'parseBarsHelper');

    var ch,
        token = {
            type: 'TEXT',
            name: '',
            args: ''
        }, endChars = 0;

    // move past {{?
    index += 3;

    for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (HTML_IDENTIFIER(ch)) {
            token.name += buffer[index];
        } else {
            break;
        }
    }

    if (!token.name) {
        throwError(buffer, index, 'Missing helper name.');
    }

    loop: for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 125 /*'}'*/) {
            endChars++;
            index++;

            for (; index < length; index++) {
                ch = buffer.codePointAt(index);

                if (ch === 125 /*'}'*/) {
                    endChars++;
                } else {
                    throwError(buffer, index, 'Unexpected character: expected \'}\' but found \'' +buffer[index]+ '\'.');
                }

                if (endChars === 2) {
                    break loop;
                }
            }
        }

        token.args += buffer[index];
    }

    token.args = token.args.trim();

    tree.push(token);

    return index;
}

function parseBarsHelperHTML(mode, tree, index, length, buffer, indent) {
    if (buffer.codePointAt(index + 1) !== 123 /*'{'*/) {
        return null;
    }

    if (buffer.codePointAt(index + 2) !== 123 /*'{'*/) {
        /* Canceling Parse */
        return null;
    }

    if (buffer.codePointAt(index + 3) !== 63 /*'?'*/) {
        /* Canceling Parse */
        return null;
    }
    LOGGING && console.log(indent+'parseBarsHelperHTML');

    var ch,
        token = {
            type: 'FRAG',
            name: '',
            args: ''
        }, endChars = 0;

    // move past {{{?
    index += 4;

    for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (HTML_IDENTIFIER(ch)) {
            token.name += buffer[index];
        } else {
            break;
        }
    }

    if (!token.name) {
        throwError(buffer, index, 'Missing helper name.');
    }

    loop: for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 125 /*'}'*/) {
            endChars++;
            index++;

            for (; index < length; index++) {
                ch = buffer.codePointAt(index);

                if (ch === 125 /*'}'*/) {
                    endChars++;
                } else {
                    throwError(buffer, index, 'Unexpected character: expected \'}\' but found \'' +buffer[index]+ '\'.');
                }

                if (endChars === 3) {
                    break loop;
                }
            }
        }

        token.args += buffer[index];
    }

    token.args = token.args.trim();

    tree.push(token);

    return index;
}

function parseBarsComment(mode, tree, index, length, buffer, indent) {
    if (buffer.codePointAt(index + 1) !== 123 /*'{'*/) {
        return null;
    }

    if (buffer.codePointAt(index + 2) !== 33 /*'!'*/) {
        return null;
    }

    var ch,
        token = {
            type: 'COMMENT',
            comment: ''
        }, endChars = 0;

    // move past {{!
    index+=3;
    loop: for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 125 /*'}'*/) {
            endChars++;
            index++;

            for (; index < length; index++) {
                ch = buffer.codePointAt(index);

                if (ch === 125 /*'}'*/) {
                    endChars++;
                } else {
                    throwError(buffer, index, 'Unexpected character: expected \'}\' but found \'' +buffer[index]+ '\'.');
                }

                if (endChars === 2) {
                    break loop;
                }
            }
        }
        token.comment += buffer[index];
    }

    // TODO: Maybe create comment node?
    // if (token.comment) {
        // LOGGING && console.log(indent+'parseBarsComment');

    //     tree.push(token);

    //     return index;
    // }

    return index;
}

function parseHTMLComment(mode, tree, index, length, buffer, indent) {
    if (buffer.codePointAt(index + 1) !== 33 /*'!'*/) {
        return null;
    }

    if (buffer.codePointAt(index + 2) !== 45 /*'-'*/) {
        return null;
    }

    if (buffer.codePointAt(index + 3) !== 45 /*'-'*/) {
        return null;
    }

    var ch,
        token = {
            type: 'COMMENT',
            comment: ''
        },
        endChars = 0;

    // move past <!--
    index+=4;
    loop: for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 45 /*'-'*/) {
            endChars++;
            index++;

            for (; index < length; index++) {
                ch = buffer.codePointAt(index);

                if (ch === 45 /*'-'*/) {
                    endChars++;
                } else {
                    endChars = 0;
                    break;
                }

                if (endChars >= 2) {
                    if (buffer.codePointAt(index + 1) === 62 /*'>'*/) {
                        index++;
                        break loop;
                    }
                }
            }
        }
        token.comment += buffer[index];
    }

    // TODO: Maybe create comment node?
    // if (token.comment) {
        // LOGGING && console.log(indent+'parseBarsComment');

    //     tree.push(token);

    //     return index;
    // }

    return index;
}

function parseBarsBlock(mode, tree, index, length, buffer, indent) {

    if (buffer.codePointAt(index + 1) !== 123 /*'{'*/) {
        throwError(buffer, index, 'Unexpected end of input.');
    }

    if (buffer.codePointAt(index + 2) !== 35 /*'#'*/) {
        /* Canceling Parse */
        return null;
    }
    LOGGING && console.log(indent+'parseBarsBlock');

    var ch,
        token = {
            type: 'BLOCK',
            name: '',
            args: '',
            conFrag: {
                type: 'FRAG',
                nodes: [],
            },
            altFrag: {
                type: 'FRAG',
                nodes: []
            }
        }, endChars = 0;

    // move past {{#
    index += 3;

    for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (HTML_IDENTIFIER(ch)) {
            token.name += buffer[index];
        } else {
            break;
        }
    }

    if (!token.name) {
        throwError(buffer, index, 'Missing block name.');
    }

    loop: for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 125 /*'}'*/) {
            endChars++;
            index++;

            for (; index < length; index++) {
                ch = buffer.codePointAt(index);

                if (ch === 125 /*'}'*/) {
                    endChars++;
                } else {
                    throwError(buffer, index, 'Unexpected character: expected \'}\' but found \'' +buffer[index]+ '\'.');
                }

                if (endChars === 2) {
                    break loop;
                }
            }
        }

        token.args += buffer[index];
    }

    token.args = token.args.trim();

    index++;
    index = parse(mode, token.conFrag.nodes, index, length, buffer, indent, token);

    if (token.elsed && !token.closed) {
        index++;
        index = parse(mode, token.altFrag.nodes, index, length, buffer, indent, token);
    }

    if (token.closed) {
        delete token.closed;
        delete token.elsed;
        tree.push(token);
    } else {
        throwError(buffer, index, 'Missing closing tag: expected \'' + token.name + '\'.');
    }

    return index;
}

function parseBarsBlockClose(mode, tree, index, length, buffer, indent, close, noErrorOnMismatch) {

    if (buffer.codePointAt(index + 1) !== 123 /*'{'*/) {
        throwError(buffer, index, 'Unexpected end of input.');
    }

    if (buffer.codePointAt(index + 2) !== 47 /*'/'*/) {
        return null;
    }

    LOGGING && console.log(indent+'parseBarsBlockClose');


    var ch,
        token = {
            type: 'BLOCK',
            name: ''
        },
        endChars = 0;

    // move past {{#
    index += 3;

    for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (HTML_IDENTIFIER(ch)) {
            token.name += buffer[index];
        } else {
            break;
        }
    }

    loop: for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 125 /*'}'*/) {
            endChars++;
            index++;

            for (; index < length; index++) {
                ch = buffer.codePointAt(index);

                if (ch === 125 /*'}'*/) {
                    endChars++;
                } else {
                    throwError(buffer, index, 'Unexpected character: expected \'}\' but found \'' +buffer[index]+ '\'.');
                }

                if (endChars === 2) {
                    break loop;
                }
            }
        }
    }

    if (!close) {
        throwError(buffer, index, 'Unexpected closing tag: \'' +token.name+ '\'.');
    }

    if (token.type === close.type && token.name === close.name) {
        close.closed = true;
    } else if (noErrorOnMismatch) {
        /* Canceling Parse */
        return null;
    } else {
        throwError(buffer, index, 'Mismatched closing tag: expected \'' +close.name+ '\' but found \'' +token.name+ '\'.');
    }

    return index;
}

function parseBarsBlockElse(mode, tree, index, length, buffer, indent, close) {

    if (buffer.codePointAt(index + 1) !== 123 /*'{'*/) {
        throwError(buffer, index, 'Unexpected end of input.');
    }

    var ch,
        name = '',
        endChars = 0;

    // move past {{
    index += 2;

    loop: for (; index < length; index++) {
        ch = buffer.codePointAt(index);

        if (ch === 125 /*'}'*/) {
            endChars++;
            index++;

            for (; index < length; index++) {
                ch = buffer.codePointAt(index);

                if (ch === 125 /*'}'*/) {
                    endChars++;
                } else {
                    throwError(buffer, index, 'Unexpected character: expected \'}\' but found \'' +buffer[index]+ '\'.');
                }

                if (endChars === 2) {
                    break loop;
                }
            }
        }
        name += buffer[index];
    }

    if (close && close.type === 'BLOCK' && name === 'else') {
        if (close.elsed) {
            throwError(buffer, index, 'Unexpected else token.');
        }

        close.elsed = true;

        LOGGING && console.log(indent+'parseBarsBlockElse');
        return index;
    } else if (!close && name === 'else') {
        throwError(buffer, index, 'Unexpected else tag.');
    } else {
        /* Canceling Parse */
        return null;
    }
}

function compile(buffer) {
    var n = Date.now();
    var tree = {
        type: 'FRAG',
        nodes: []
    };

    LOGGING && console.log('compile');

    parse('DOM-MODE', tree.nodes, 0, buffer.length, buffer, '  ', null);

    LOGGING && console.log('compiled');
    //
    LOGGING && console.log(Date.now()-n);

    return tree;
    // return JSON.stringify(tree, null, 2);
}

module.exports = compile;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Generator = __webpack_require__(0),
    Frag = __webpack_require__(32);

var Renderer = Generator.generate(function Renderer(bars, struct) {
    var _ = this;

    _.defineProperties({
        bars: bars,
        struct: struct
    });
});

Renderer.definePrototype({
    render: function render() {
        var _ = this;
        return Frag.create(_.bars, _.struct);
    },
});

module.exports = Renderer;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(38);

/**
 * A type assert method.
 * @param  {Any} variable
 * @param  {String} type
 * @return {void}
 */
function assertType(variable, type) {
    if (typeof variable !== type) {
        throw new Error('Expected ' + type + ' but found ' + typeof variable);
    }
}

var Bindable = EventEmitter.generate(
    /**
     * [Bindable description]
     * @param {Object} data
     */
    function Bindable(data) {
        var _ = this;

        _.defineProperties({
            _data: {}
        });

        for (var key in data) {
            _._data[key] = data[key];
        }
    }
);

function makeGetter(property) {
    return function getter() {
        var _ = this;
        return _.get(property);
    };
}

function makeSetter(property) {
    return function setter(val) {
        var _ = this;
        return _.set(property, val);
    };
}

Bindable.generateGetters = function generateGetter(bindable, descriptor, properties) {
    var getters = {},
        p = properties || descriptor,
        d = properties && descriptor;

    properties = (p && typeof p === 'object') ? p : {};
    descriptor = (d && typeof d === 'object') ? d : { enumerable: true };

    for (var i = 0; i < properties.length; i++) {
        getters[properties[i]] = {
            get: makeGetter(properties[i])
        };
    }

    bindable.definePrototype(descriptor, getters);
};

Bindable.generateSetters = function generateSetter(bindable, descriptor, properties) {
    var setters = {},
        p = properties || descriptor,
        d = properties && descriptor;

    properties = (p && typeof p === 'object') ? p : {};
    descriptor = (d && typeof d === 'object') ? d : { enumerable: true };

    for (var i = 0; i < properties.length; i++) {
        setters[properties[i]] = {
            set: makeSetter(properties[i])
        };
    }

    bindable.definePrototype(descriptor, setters);
};

Bindable.generateGettersSetters = function generateGetter(bindable, descriptor, properties) {
    var gettersSetters = {},
        p = properties || descriptor,
        d = properties && descriptor;

    properties = (p && typeof p === 'object') ? p : [];
    descriptor = (d && typeof d === 'object') ? d : { enumerable: true };

    for (var i = 0; i < properties.length; i++) {
        gettersSetters[properties[i]] = {
            get: makeGetter(properties[i]),
            set: makeSetter(properties[i])
        };
    }

    bindable.definePrototype(descriptor, gettersSetters);
};

Bindable.definePrototype({
    /**
     * [get description]
     * @param  {String} property
     * @return {Any}
     */
    get: function get(property) {
        var _ = this;

        var overWrittenGetter = _['get'+property.slice(0, 1).toUpperCase()+property.slice(1)];
        if (typeof overWrittenGetter === 'function') {
            return overWrittenGetter.call(_);
        }

        return _._data[property];
    },

    /**
     * [set description]
     * @param {String} property
     * @param {Any} newValue
     * @param {Object} changer
     */
    set: function set(property, newValue, changer) {
        changer = typeof changer === 'object' ? changer : null;

        var _ = this;

        var overWrittenSetter = _['set'+property.slice(0, 1).toUpperCase()+property.slice(1)];
        if (typeof overWrittenSetter === 'function') {
            return overWrittenSetter.call(_, newValue, changer);
        }

        var oldValue = _.get(property);
        _._data[property] = newValue;

        _.change(property, oldValue, newValue, changer);
    },

    /**
     * [bind description]
     * @param  {String} property
     * @param  {Function} listener
     * @param  {Object} observer
     * @return {self}
     */
    bind: function bind(property, listener, observer) {
        assertType(property, 'string');
        assertType(listener, 'function');
        assertType(observer, 'object');

        var _ = this;

        _.on(property, listener, observer);

        var value = _.get(property);

        _.__initial__ = true;

        listener.call(_, value, value, false);

        _.__initial__ = false;

        return _;
    },

    /**
     * [bindOnce description]
     * @param  {String} property
     * @param  {Function} listener
     * @param  {Object} observer
     * @return {self}
     */
    bindOnce: function bindOnce(property, listener, observer) {
        assertType(property, 'string');
        assertType(listener, 'function');
        assertType(observer, 'object');

        var _ = this;

        _.once(property, listener, observer);

        var value = _.get(property);

        listener.call(_, value, value, false);

        return _;
    },

    /**
     * [unbind description]
     * @param  {String} [property]
     * @param  {Function} [listener]
     * @param  {Object} [observer]
     * @return {self}
     */
    unbind: function unbind(property, listener, observer) {
        return this.off(property, listener, observer);
    },

    /**
     * [change description]
     * @param {String} property
     * @param {Any} oldValue
     * @param {Any} newValue
     * @param {Object} changer
     * @return {Boolean}
     */
    change: function change(property, oldValue, newValue, changer, object, nochaneevent) {
        assertType(property, 'string');
        assertType(changer, 'object');

        var _ = this;

        /**
         * Creates a closure around the listener 'func' and 'args'.
         * @param  {Function} func A listener.
         * @return {Function}      Closure function.
         */
        function emitOnFunc(func) {
            return function () {
                func.call(_, oldValue, newValue, changer, object);
            };
        }

        if (oldValue === newValue) return;

        object = object && typeof object === 'object' ? object : _;

        if (!nochaneevent) {
            _.emit('changed', property, oldValue, newValue, changer, object);
        }

        var bindings = _.__events[property];

        if (!bindings || !bindings.length) {
            return false;
        }

        var length = bindings.length;

        for (var i = 0; i < length; i++) {
            if (!changer || bindings[i].observer !== changer) {
                setTimeout(emitOnFunc(bindings[i].listener), 0);
            }
        }

        return true;
    }
});

module.exports = Bindable;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @name events.js
 * @author Michaelangelo Jong
 */

// Dependences:
var Generator = __webpack_require__(39);

// Generator
var EventEmitter = Generator.generate(
    /**
     * Create method.
     */
    function EventEmitter() {

        this.defineProperties(
            {
                configurable: false,
                enumerable: false,
                writable: false
            },
            {
                __events: Object.create(null)
            }
        );
    }
);

// Prototype
EventEmitter.definePrototype(
    {
        configurable: false,
        enumerable: false,
        writable: false
    },
    {
        /**
         * Adds a 'listener' on 'event' to this EventEmitter instance.
         * @param  {String} event      Name of event.
         * @param  {Function} listener Event handler function.
         * @param  {Object} observer Object reference for binding.
         * @return {EventEmitter}      This EventEmitter instance.
         */
        on: function on(event, listener, observer) {
            var _ = this,
                listeners = _.__events[event];

            observer = typeof observer === 'object' ? observer : null;

            if (typeof event === 'string' && typeof listener === 'function') {
                if (!(listeners instanceof Array)) {
                    listeners = _.__events[event] = [];
                }

                listeners.push({
                    listener: listener,
                    observer: observer
                });
            }

            return _;
        },

        /**
         * Adds a 'listener' on 'event' to this EventEmitter instance which is removed after one 'event'.
         * @param  {String} event      Name of event.
         * @param  {Function} listener Event handler function.
         * @param  {Object} observer Object reference for binding.
         * @return {EventEmitter}      This EventEmitter instance.
         */
        once: function once(event, listener, observer) {
            var _ = this;
            var onceListener = function onceListener() {
                _.off(event, onceListener);
                listener.apply(_, arguments);
            };

            _.on(event, onceListener, observer);

            return _;
        },

        /**
         * Removes a 'listener' on 'event', or all listeners on 'event', or all listeners from this EventEmitter instance.
         * @param  {String} event      Name of event.
         * @param  {Function} listener Event handler function.
         * @param  {Object} observer Object reference for binding.
         * @return {EventEmitter}      This EventEmitter instance.
         */
        off: function off() {
            var _ = this,
                listeners,
                i,
                key,

                event = (typeof arguments[0] === 'string') ?
                    arguments[0] :
                    false,

                listener = (typeof arguments[0] === 'function') ?
                    arguments[0] :
                    (typeof arguments[1] === 'function') ?
                        arguments[1] :
                        false,

                observer = (typeof arguments[0] === 'object') ?
                    arguments[0] :
                    (typeof arguments[1] === 'object') ?
                        arguments[1] :
                        (typeof arguments[2] === 'object') ?
                            arguments[2] :
                            false;

            if (typeof event === 'string') {
                listeners = _.__events[event];

                if (!(listeners instanceof Array)) {
                    return _;
                }

                if (typeof listener === 'function' && typeof observer === 'object') {
                    for (i = listeners.length - 1; i >= 0; i--) {
                        if (listeners[i].listener === listener && listeners[i].observer === observer) {
                            listeners.splice(i, 1);
                        }
                    }
                } else if (typeof listener === 'function' || typeof observer === 'object') {
                    for (i = listeners.length - 1; i >= 0; i--) {
                        if (listeners[i].listener === listener || listeners[i].observer === observer) {
                            listeners.splice(i, 1);
                        }
                    }
                } else {
                    delete _.__events[event];
                }
            } else if (typeof listener === 'function' || typeof observer === 'object') {
                for (key in _.__events) {
                    listeners = _.__events[key];
                    for (i = listeners.length - 1; i >= 0; i--) {
                        if (listeners[i].listener === listener || listeners[i].observer === observer) {
                            listeners.splice(i, 1);
                        }
                    }
                }
            } else {
                for (key in _.__events) {
                    delete _.__events[key];
                }
            }

            return _;
        },

        /**
         * Emits an 'event' with 'args' on this EventEmitter instance.
         * @param  {String} event      Name of event.
         * @param  {Arguments} args    Event handler function.
         * @return {EventEmitter}      This EventEmitter instance.
         */
        emit: function emit(event) {
            var _ = this,
                args = Array.prototype.slice.call(arguments, 1),
                i,
                length,
                listener,
                listeners;

            /**
             * Creates a closure around the listener 'func' and 'args'.
             * @param  {Function} func A listener.
             * @return {Function}      Closure function.
             */
            function emitOnFunc(func) {
                return function () {
                    func.apply(_, args);
                };
            }

            listeners = _.__events[event];
            window.listeners = listeners;

            if (event === 'error' && !listeners && typeof _.onerror !== 'function') {
                if (args[0] instanceof Error){
                    throw args[0];
                } else {
                    throw args;
                }
            }

            if (typeof _['on' + event] === 'function') {
                setTimeout(emitOnFunc(_['on' + event]), 0);
            }

            if (listeners instanceof Array) {
                length = listeners.length;

                for (i = 0; i < length; i++) {
                    listener = listeners[i].listener;
                    setTimeout(emitOnFunc(listener), 0);
                }
            }
            return _;
        },

        /**
         * Emits an event object containing 'eventObject' on this EventEmitter instance.
         * @param  {String} event Name of event.
         * @param  {Object} eventObject  Event object sent to all on handlers.
         * @return {EventEmitter} This EventEmitter instance.
         */
        emitEvent: function emitEvent(event, eventObject) {
            var _ = this,
                timestamp = Date.now();

            eventObject = typeof eventObject === 'object' ? eventObject : { data: eventObject };

            eventObject.type = event;
            eventObject.timestamp = eventObject.timeStamp || eventObject.timestamp || timestamp;

            _.emit(event, eventObject);
            return _;
        }
    }
);

// Exports
module.exports = EventEmitter;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @name generate.js
 * @author Michaelangelo Jong
 */

(function GeneratorScope() {

// Variables
var Creation = {},
    Generation = {},
    Generator = {};

// Helper Methods

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
        throw new TypeError('Expected \'' + type + '\' but instead found \'' + typeof test +'\'');
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
    var funcNameMatch = func.toString().match(/function\s*([^\s]*)\s*\(/);
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
        keys = Object.getOwnPropertyNames(obj).sort();
        length = keys.length;

        if ((length === 1 && (keys[0] === 'get' && typeof obj.get === 'function' ||
                              keys[0] === 'set' && typeof obj.set === 'function')) ||
            (length === 2 && (keys[0] === 'get' && typeof obj.get === 'function' &&
                              keys[1] === 'set' && typeof obj.set === 'function'))) {
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

// Creation Class
defineObjectProperties(
    Creation,
    {
        configurable: false,
        enumerable: false,
        writable: false
    },
    {
        /**
         * Defines properties on this object.
         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
         * @param  {Object} properties An object who's properties will be attached to this object.
         * @return {Object}            This object.
         */
        defineProperties: function defineProperties(descriptor, properties) {
            defineObjectProperties(this, descriptor, properties);
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
            return Object.getPrototypeOf(this.generator).proto;
            // return Object.getPrototypeOf(Object.getPrototypeOf(this));
        }
    }
);

// Generation Class
defineObjectProperties(
    Generation,
    {
        configurable: false,
        enumerable: false,
        writable: false
    },
    {
        name: 'Generation',

        proto: Creation,

        /**
         * Creates a new instance of this Generator.
         * @return {Generator} Instance of this Generator.
         */
        create: function create() {
            var _ = this,
                newObj = Object.create(_.proto);

            _.__supercreate(newObj, arguments);

            return newObj;
        },

        __supercreate: function __supercreate(newObj, args) {
            var _ = this,
                superGenerator = Object.getPrototypeOf(_),
                supercreateCalled = false;

            newObj.supercreate = function supercreate() {

                supercreateCalled = true;

                if (Generation.isGeneration(superGenerator)){
                    superGenerator.__supercreate(newObj, arguments);
                }
            };

            _.__create.apply(newObj, args);

            if (!supercreateCalled) {
                newObj.supercreate();
            }

            delete newObj.supercreate;
        },

        __create: function () {},

        /**
         * Generates a new generator that inherits from `this` generator.
         * @param {Generator} ParentGenerator Generator to inherit from.
         * @param {Function} create           Create method that gets called when creating a new instance of new generator.
         * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
         */
        generate: function generate(create) {
            var _ = this;

            assertError(Generation.isGeneration(_) || _ === Generation, 'Cannot call method \'generate\' on non-Generations.');
            assertTypeError(create, 'function');

            var newGenerator = Object.create(_),
                newProto     = Object.create(_.proto);

            defineObjectProperties(
                newProto,
                {
                    configurable: false,
                    enumerable: false,
                    writable: false
                },
                {
                    generator: newGenerator
                }
            );

            defineObjectProperties(
                newGenerator,
                {
                    configurable: false,
                    enumerable: false,
                    writable: false
                },
                {
                    name: getFunctionName(create),
                    proto: newProto,
                    __create: create
                }
            );

            return newGenerator;
        },

        /**
         * Returns true if 'generator' was generated by this Generator.
         * @param  {Generator} generator A Generator.
         * @return {Boolean}             true or false.
         */
        isGeneration: function isGeneration(generator) {
            var _ = this;
            return _.isPrototypeOf(generator);
        },

        /**
         * Returns true if 'object' was created by this Generator.
         * @param  {Object} object An Object.
         * @return {Boolean}       true or false.
         */
        isCreation: function isCreation(object) {
            var _ = this;
            return _.proto.isPrototypeOf(object);
        },

        /**
         * Defines shared properties for all objects created by this generator.
         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
         * @param  {Object} properties An object who's properties will be attached to this generator's prototype.
         * @return {Generator}         This generator.
         */
        definePrototype: function definePrototype(descriptor, properties) {
            defineObjectProperties(this.proto, descriptor, properties);
            return this;
        },

        /**
         * Generator.toString method.
         * @return {String} A string representation of this generator.
         */
        toString: function toString() {
            return '[' + (this.name || 'generation') + ' Generator]';
        }
    }
);

// Generator Class Methods
defineObjectProperties(
    Generator,
    {
        configurable: false,
        enumerable: false,
        writable: false
    },
    {
        /**
         * Generates a new generator that inherits from `this` generator.
         * @param {Generator} ParentGenerator Generator to inherit from.
         * @param {Function} create           Create method that gets called when creating a new instance of new generator.
         * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
         */
        generate: function generate (create) {
            return Generation.generate(create);
        },

        /**
         * Returns true if 'generator' was generated by this Generator.
         * @param  {Generator} generator A Generator.
         * @return {Boolean}             true or false.
         */
        isGenerator: function isGenerator (generator) {
            return Generation.isGeneration(generator);
        },

        /**
         * [toGenerator description]
         * @param  {Function} constructor A constructor function.
         * @return {Generator}            A new generator who's create method is `constructor` and inherits from `constructor.prototype`.
         */
        toGenerator: function toGenerator(constructor) {

            assertTypeError(constructor, 'function');

            var newGenerator = Object.create(Generation),
                newProto     = Object.create(constructor.prototype);

            defineObjectProperties(
                newProto,
                {
                    configurable: false,
                    enumerable: false,
                    writable: false
                },
                {
                    generator: newGenerator
                }
            );

            defineObjectProperties(
                newProto,
                {
                    configurable: false,
                    enumerable: false,
                    writable: false
                },
                Creation
            );

            defineObjectProperties(
                newGenerator,
                {
                    configurable: false,
                    enumerable: false,
                    writable: false
                },
                {
                    name: getFunctionName(constructor),
                    proto: newProto,
                    __create: constructor
                }
            );

            return newGenerator;
        }
    }
);

Object.freeze(Creation);
Object.freeze(Generation);
Object.freeze(Generator);

// Exports
if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return Generator;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module === 'object' && typeof exports === 'object') {
    // Node/CommonJS
    module.exports = Generator;
} else {
    // Browser global
    window.Generator = Generator;
}

}());


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);