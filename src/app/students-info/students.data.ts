import  { Student } from './student.class';

export const students : Student[] = [
  {
    id: 0,
    name: '王源',
    age: 18,
    mobile: '15011111111',
    wx: '15011111111',
    qq: '11223344',
    hometown: '北京',
    sex: 1,
    isworked: true,
    interviews: [
      {
        name: '腾讯',
        location: '深圳',
        station: 'web前端',
        questions:[
          '说一下弹性盒子？',
          'jsonp的原理是什么？'
        ]
      }
    ]
  }
]
