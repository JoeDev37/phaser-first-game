import Phaser from "phaser";

export default class gameScreen extends Phaser.Scene {

    preload() {

    }

    create() {
        const ball = this.add.circle(400, 250, 10, 0xffffff, 1);
        this.physics.add.existing(ball)
        ball.body.setBounce(1, 1)

        ball.body.setCollideWorldBounds(true, 1, 1)

        ball.body.setVelocity(-200, 0);

       const poddleft = this.add.rectangle(30, 243, 40, 100, 0xffffff, 1);
       this.physics.add.existing(poddleft, true);

       const poddright = this.add.rectangle(770, 243, 40, 100, 0xffffff, 1)
       this.physics.add.existing(poddright, true);

    //    this.physics.add.collider(poddleft, ball, poddright)
        this.physics.add.collider(ball, poddleft);
        this.physics.add.collider(ball, poddright);


        

        

        // ball.body.setBounce(1);
        // ball.body.setCollideWorldBounds(true)
        // ball.body.setAllowGravity(true)


        // const ground = this.physics.add.staticGroup()
        
        // const floor = this.add.rectangle(400, 500, 800, 20, 0xffffff);
        // this.physics.add.existing(floor, true);
        // floor.displayWidth = 800;
        // floor.displayHeight = 20;
        
        // this.physics.add.collider(ball, ground)
    }
}