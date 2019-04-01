import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players'

Meteor.startup(() => {

  

  //object spreed operator with object property shorthand
    // let house={
    //   bedrooms:2,
    //   bathrooms:1.5
    // };
    // let yearBuilt=1995;
    // let myhouse={
    //   ...house,
    //   bedrooms:3,
    //   yearBuilt,
    //   flooring:'carpet'
    // };
    // console.log(myhouse);


  //************************************* */
  // class Person
  // {
  //   constructor(name='anonymouse',age=0)
  //   {
  //     this.name = name
  //     this.age = age
  //   }

  //   getGreeting(){ return `Hi i am ${this.name}`}
  //   getPersonDescription(){ return `${this.name} is ${this.age} year(s) old`}

  // }

  // class Developer extends Person
  // {
  //    constructor(name,age,preferred_language) {
  //        super(name,age);
  //        this.preferred_language=preferred_language;
  //    }

  //    getGreeting() {
  //      if(this.preferred_language){
  //        return `i am ${this.name}. i am a ${this.preferred_language} developer.`
  //      }else{
  //        return super.getGreeting();
  //      }
  //    }
  // }


  // //create instance from class
  // let me = new Developer('gogo',23,'rails');
  // console.log(me.getGreeting())
  // let you = new Developer('hazem',32);
  // console.log(you.getGreeting())

});