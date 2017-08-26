import { Component } from '@angular/core';
// import  { students } from './students.data';

@Component({
  selector: 'students-info',
  templateUrl:'./students.component.html',
  styleUrls:['./students.component.css']
})

export class StudentsComponent {
  msg = '就业学员信息';
  students = [
    {id:0,name:'aaaa'},
    {id:1,name:'bbbb'},
    {id:2,name:'cccc'},
    {id:3,name:'dddd'},
    {id:4,name:'eeee'},
    {id:5,name:'ffff'},
    {id:6,name:'gggg'},
    {id:7,name:'hhhh'},
    {id:8,name:'iiii'},
    {id:9,name:'hhhh'}
  ];
}
