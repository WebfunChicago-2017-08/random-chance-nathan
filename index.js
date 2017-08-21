function slotMachine(quarters=50){
    var winningNum = Math.trunc(Math.random()*100);
    while (quarters>=0){
        var pull = Math.trunc(Math.random()*100);
        if (pull === winningNum){
            quarters += Math.trunc(Math.random()*51)+50;
            return quarters;
        }
        else if (quarters === 0){
            return quarters;
        }
        quarters-=1;
    }
}

slotMachine(100);