import Phaser, { Physics } from "phaser";
// import titleScreen from "./sceanes/titleScreen";
import gameScreen from "./sceanes/gameScreen"; 

const config = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            dbug: true
        }
    }
}

const game = new Phaser.Game(config)

// game.scene.add('TitleScreen', titleScreen)
game.scene.add('game', gameScreen)

game.scene.start('game')