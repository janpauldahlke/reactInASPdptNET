"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Header_1 = __importDefault(require("./components/Header"));
var Footer_1 = __importDefault(require("./components/Footer"));
var Section_1 = __importDefault(require("./components/Section"));
var Body_1 = __importDefault(require("./components/Body"));
react_dom_1.default.render(react_1.default.createElement("div", null,
    react_1.default.createElement(Header_1.default, null),
    react_1.default.createElement("h1", null, "some words here"),
    react_1.default.createElement(Section_1.default, null),
    react_1.default.createElement(Body_1.default, null),
    react_1.default.createElement(Footer_1.default, null)), document.getElementById('root'));
