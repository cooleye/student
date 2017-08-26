export class InterviewComp {
    name: string;
    location: string;
    station: string;
    questions: [string]
}
export class Student{
  id: number;
  name: string;
  age: number;
  mobile: string;
  wx: string;
  qq: string;
  hometown: string;
  sex: number;
  isworked:boolean;
  interviews: [InterviewComp];
}
