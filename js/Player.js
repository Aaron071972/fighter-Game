class Player {
    constructor(){
        this.index=null;
        this.name = null;
        this.health=100
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }
    update(){
        var playerIndex = "player/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name

        });
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val()
        })
    }
    // getHealth(){
    //     database.ref
    // }
}