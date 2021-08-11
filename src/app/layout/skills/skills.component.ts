import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  listSkills = [
    {
      image: '../../../assets/skills/html-5.png',
      name: 'HTML5'
    },
    {
      image: '../../../assets/skills/css-3.png',
      name: 'CSS3'
    },
    {
      image: '../../../assets/skills/js.png',
      name: 'JAVASCRIPT'
    },
    {
      image: '../../../assets/skills/git.png',
      name: 'GIT'
    },
    {
      image: '../../../assets/skills/bootstrap.png',
      name: 'BOOTSTRAP'
    },
    {
      image: '../../../assets/skills/angular.png',
      name: 'ANGULAR'
    },
    {
      image: '../../../assets/skills/mongodb.png',
      name: 'MONGODB'
    },
    {
      image: '../../../assets/skills/nodejs.png',
      name: 'NODEJS'
    },
    {
      image: '../../../assets/skills/typescript.png',
      name: 'TYPESCRIPT'
    },
  ];
  listLear = [
    {
      image: '../../../assets/skills/python.png',
      name: 'PYTHON'
    },
    {
      image: '../../../assets/skills/java.png',
      name: 'JAVA'
    },
    {
      image: '../../../assets/skills/react.png',
      name: 'REACT'
    },
  ];
  listOther = [
    {
      image: '../../../assets/skills/c.png',
      name: 'C'
    },
    {
      image: '../../../assets/skills/sql.png',
      name: 'SQL SERVER'
    },
  ];

  constructor() { }
  ngOnInit(): void {
  }

}
