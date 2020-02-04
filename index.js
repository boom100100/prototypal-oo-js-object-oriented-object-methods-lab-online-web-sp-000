let BoardMember = function(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
};

BoardMember.prototype.veto = function(){
  returns `No, I must disagree`;
};
BoardMember.prototype.approve = function(){};
BoardMember.prototype.doCharity = function(){};
BoardMember.prototype.releasePressStatement = function(){};
BoardMember.prototype.sayHi = function(){};
