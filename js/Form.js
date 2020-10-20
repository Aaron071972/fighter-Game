class Form{

    constructor(){
        this.input = createInput("Name")
        this.button = createButton('Play')
        this.greeting = createElement('h2')
        this.title = createElement('h2')
        this.reset= createButton('Reset')

        this.fireBall=createButton('Fireball')
        this.wolfBall=createButton('Wolfball')
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Brawl Ninjas");
        this.title.position(displayWidth/2 - 40, 0)
    
        this.input.position(displayWidth/2 - 40, displayHeight/2);
        this.button.position(displayWidth/2+15, displayHeight/2-80)
        this.reset.position(displayWidth-100, 20)

        // this.fireBall.position(15, 200)
        // this.wolfBall.position(1830, 200)

       
    
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+ player.name)
            this.greeting.position(displayWidth/2-70, displayHeight/4)
        })

        this.reset.mousePressed(()=>{
            // player.updateCount(0);
            game.update(1)
        });
        // this.fireBall.mousePressed(()=>{
        //     fb1 = createSprite(fighter1.x, fighter2.y, 1, 1)
        //     fb1.addAnimation("fb1", fb1Img)
        //     fb1.velocityX=14
        // })
        // this.wolfBall.mousePressed(()=>{
        //  fb2 = createSprite(fighter2.x, fighter2.y, 1, 1)
        //  fb2.addAnimation("fb2", fb2Img)
        //  fb2.velocityX=-14
        // })
    }
}