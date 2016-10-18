import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'


 var zakoniLqv:string[] = ["kur za bogatite", "kur za pazara", "kur za bankerite"];
 var zakoniDesen:string[]= ["kur za policiqta", "kur za pravitelstvoto", "kur za administratorite"];
 var numOfQuestions = 3;
 var question = 0;


@Component({
  
  selector: 'my-app',
  template: `
            <div *ngIf="!krai" (click)="onSelect(1)" class="leftSide"><h1  style="color:white; text-align:center;"> {{levi[vupros]}}</h1></div>
            <div *ngIf="!krai" (click)="onSelect(2)" class="rightSide"><h1  style="color:black; text-align:center;">{{rightPoints}} {{desni[vupros]}}</h1></div> 
            <div class="endLeft" *ngIf="krai && leftPoints>rightPoints"> <h1>Ти си авторитарен гей</h1></div>
            <div class="endRight" *ngIf="krai && leftPoints<rightPoints"><h1>Ти си либертариански гей</h1></div>
  			`,
  styles: [`.leftSide{float:left; background:black; height:100%; width:50%;}
            .rightSide{float:right; background:white; height:100%;width:50%;}  
            .rightSide:active, .leftSide:active{background:green;}
            .endLeft{height:100%;width:100%;background:black; color:white;text-align:center;}
            .endRight{height:100%;width:100%;text-align:center;background:white;color:black}

            `]
}) 


export class AppComponent {
  title = 'Duel';
  levi = zakoniLqv;
  desni = zakoniDesen;
  vupros = question;
  krai = false;
  leftPoints = 0;
  rightPoints = 0;
   
	  	constructor()
	  	{
	  	}

	  onSelect =function onSelect(side)
		{ 
      if(numOfQuestions>this.vupros) 
      {        
        if(side==1)
        {
          this.leftPoints++;
          this.vupros++;
          if(numOfQuestions<=this.vupros)
          {
            this.krai=true;
          }
        }
        else if(side==2)
        {
          this.rightPoints++;
          this.vupros++;
          if(numOfQuestions<=this.vupros)  
          {
            this.krai=true;
          }        
        }
		  }
    }

    next = function next(){
      this.vupros+=1;
    }

	}