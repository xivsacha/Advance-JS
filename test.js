function Vartest(){
    var x = 21;
    if(true){
      var x = 22;
      console.log(x);
    }
    console.log(x);
  }
  function Lettest(){
    let x = 21;
    if(true){
      let x = 22;
      console.log(x);
    }
    console.log(x);
  }
  
  Vartest();
  Lettest();
