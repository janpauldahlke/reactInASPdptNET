"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var myMath_1 = __importDefault(require("../helpers/myMath"));
var SectionStyle = {
    backgroundColor: 'grey',
    height: '80vh'
};
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myMathHelper = new myMath_1.default();
        _this.calculateCircle = function (r) {
            return _this.myMathHelper.calculateCircle(r);
        };
        _this.calcultateRectangle = function (w, h) {
            return _this.myMathHelper.calculateRectangle(w, h);
        };
        return _this;
    }
    Section.prototype.render = function () {
        //a test comment
        console.log('circle', this.calculateCircle(5));
        console.log('rect', this.calcultateRectangle(5, 10));
        return (React.createElement("div", { className: "section-body", style: SectionStyle },
            React.createElement("section", null,
                React.createElement("h5", null, "Calcualtion Result"))));
    };
    return Section;
}(React.Component));
exports.default = Section;
