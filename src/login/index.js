import angular from "angular";
import uiRouter from"angular-ui-router";
import route from"./login.route";
import LoginController from"./login.controller";

var loginComponent=angular.module("newsfeed.login",[uiRouter])
.config(route)
.controller("LoginController",LoginController)
.name;
export default loginComponent;