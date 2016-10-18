"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var zakoniLqv = ["kur za bogatite", "kur za pazara", "kur za bankerite"];
var zakoniDesen = ["kur za policiqta", "kur za pravitelstvoto", "kur za administratorite"];
var numOfQuestions = 3;
var question = 0;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Duel';
        this.levi = zakoniLqv;
        this.desni = zakoniDesen;
        this.vupros = question;
        this.krai = false;
        this.leftPoints = 0;
        this.rightPoints = 0;
        this.onSelect = function onSelect(side) {
            if (numOfQuestions > this.vupros) {
                if (side == 1) {
                    this.leftPoints++;
                    this.vupros++;
                    if (numOfQuestions <= this.vupros) {
                        this.krai = true;
                    }
                }
                else if (side == 2) {
                    this.rightPoints++;
                    this.vupros++;
                    if (numOfQuestions <= this.vupros) {
                        this.krai = true;
                    }
                }
            }
        };
        this.next = function next() {
            this.vupros += 1;
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n            <div *ngIf=\"!krai\" (click)=\"onSelect(1)\" class=\"leftSide\"><h1  style=\"color:white; text-align:center;\"> {{levi[vupros]}}</h1></div>\n            <div *ngIf=\"!krai\" (click)=\"onSelect(2)\" class=\"rightSide\"><h1  style=\"color:black; text-align:center;\">{{rightPoints}} {{desni[vupros]}}</h1></div> \n            <div class=\"endLeft\" *ngIf=\"krai && leftPoints>rightPoints\"> <h1>\u0422\u0438 \u0441\u0438 \u0430\u0432\u0442\u043E\u0440\u0438\u0442\u0430\u0440\u0435\u043D \u0433\u0435\u0439</h1></div>\n            <div class=\"endRight\" *ngIf=\"krai && leftPoints<rightPoints\"><h1>\u0422\u0438 \u0441\u0438 \u043B\u0438\u0431\u0435\u0440\u0442\u0430\u0440\u0438\u0430\u043D\u0441\u043A\u0438 \u0433\u0435\u0439</h1></div>\n  \t\t\t",
            styles: [".leftSide{float:left; background:black; height:100%; width:50%;}\n            .rightSide{float:right; background:white; height:100%;width:50%;}  \n            .rightSide:active, .leftSide:active{background:green;}\n            .endLeft{height:100%;width:100%;background:black; color:white;text-align:center;}\n            .endRight{height:100%;width:100%;text-align:center;background:white;color:black}\n\n            "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map