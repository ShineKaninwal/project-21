function HasCollide(o1,o2){
    if(
      o2.x-o1.x<o1.width/2+o2.width/2
      ){
        return true
    }
     else{
       return false
     }
    }