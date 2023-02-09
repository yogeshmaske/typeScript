var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.wheel = function () {
        return "4 wheeler";
    };
    Car.prototype.cheackAc = function () {
        return "Ac is Available";
    };
    Car.prototype.callFacility = function () {
        return "Call Facility supported";
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gps = false;
        return _this;
    }
    Toyota.prototype.price = function () {
        return 100000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.color = function () {
        return 'white';
    };
    return Toyota;
}(Car));
;
var Hundyai = /** @class */ (function (_super) {
    __extends(Hundyai, _super);
    function Hundyai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gps = true;
        return _this;
    }
    Hundyai.prototype.price = function () {
        return 900000;
    };
    Hundyai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundyai.prototype.color = function () {
        return 'gray';
    };
    return Hundyai;
}(Car));
var toyota = new Toyota();
var hundyai = new Hundyai();
console.log("Is Toyota Having GPS:", toyota.gps);
console.log("Is Hundyai having GPS", hundyai.gps);
