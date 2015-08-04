'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Auto = (function () {
    function Auto(data) {
        _classCallCheck(this, Auto);

        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.price = data.price;
    }

    _createClass(Auto, [{
        key: 'getTotal',
        value: function getTotal(taxRate) {
            return this.price + this.price * taxRate;
        }
    }, {
        key: 'getDetails',
        value: function getDetails() {
            return this.year + ' ' + this.make + ' ' + this.model;
        }
    }]);

    return Auto;
})();

exports.Auto = Auto;

var Car = (function (_Auto) {
    _inherits(Car, _Auto);

    function Car(data) {
        _classCallCheck(this, Car);

        _get(Object.getPrototypeOf(Car.prototype), 'constructor', this).call(this, data);
        this.isElectric = data.isElectric;
        this.isHatchback = data.isHatchback;
    }

    _createClass(Car, [{
        key: 'getDetails',
        value: function getDetails() {
            var details = _get(Object.getPrototypeOf(Car.prototype), 'getDetails', this).call(this);
            return details + ' Electric: ' + this.isElectric + ' Hatchback: ' + this.isHatchback;
        }
    }]);

    return Car;
})(Auto);

exports.Car = Car;

var Truck = (function (_Auto2) {
    _inherits(Truck, _Auto2);

    function Truck(data) {
        _classCallCheck(this, Truck);

        _get(Object.getPrototypeOf(Truck.prototype), 'constructor', this).call(this, data);
        this.is4by4 = data.is4by4;
    }

    _createClass(Truck, [{
        key: 'getDetails',
        value: function getDetails() {
            var details = _get(Object.getPrototypeOf(Truck.prototype), 'getDetails', this).call(this);
            return details + ' 4X4: ' + this.is4by4;
        }
    }]);

    return Truck;
})(Auto);

exports.Truck = Truck;