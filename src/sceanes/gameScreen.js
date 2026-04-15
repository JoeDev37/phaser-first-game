import Phaser from "phaser";

export default class gameScreen extends Phaser.Scene {

    init() {
        this.poddrightVelocity = new Phaser.Math.Vector2(0, 0)

        this.leftScore = 0;
        this.rightScore = 0;
    }

    preload() {

    }

    create() {

        this.physics.world.setBounds(-100, 0, 1000, 500)

        this.ball = this.add.circle(400, 250, 10, 0xffffff, 1);
        this.physics.add.existing(this.ball)
        this.ball.body.setBounce(1, 1)

        this.ball.body.setCollideWorldBounds(true, 1, 1)

        this.resetBall()

        // this.ball.body.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200));

        this.poddleft = this.add.rectangle(30, 243, 40, 100, 0xffffff, 1);
        this.physics.add.existing(this.poddleft, true);

        this.poddright = this.add.rectangle(770, 243, 40, 100, 0xffffff, 1)
        this.physics.add.existing(this.poddright, true);

        this.physics.add.collider(this.ball, this.poddleft);
        this.physics.add.collider(this.ball, this.poddright);

        const scoreSize = {
            fontSize: 48
        }

        this.leftScore = this.add.text(300, 125, '0', scoreSize)
        .setOrigin(0.5, 0.5)

        this.rightScore = this.add.text(500, 375, '0', scoreSize)
        .setOrigin(0.5, 0.5)

        this.cursors = this.input.keyboard.createCursorKeys()

    }

    update() {

        const body = this.poddleft.body

        if (this.cursors.up.isDown) {
            this.poddleft.y -= 10;
            body.updateFromGameObject();
        } else if (this.cursors.down.isDown) {
            this.poddleft.y += 10;
            body.updateFromGameObject();
        }

        const diff = this.ball.y - this.poddright.y

        const speed = 2;

        if (diff < 0) {
            this.poddrightVelocity.y = -speed;

            if (this.poddrightVelocity < -10) {
                this.poddrightVelocity = -10
            }

        } else if (diff > 0) {
            this.poddrightVelocity.y = speed;

            if(this.poddrightVelocity > 10) {
                this.poddrightVelocity = 10
            }
        }

        this.poddright.y += this.poddrightVelocity.y;
        this.poddright.body.updateFromGameObject()


        if (this.ball.x < -30) {
            // scored the left side
            
            this.resetBall();
            this.incrementLeftScore();

        } else if (this.ball.x > 830) {
        //scored the right side

        this.resetBall()

        }
        
    }

    incrementLeftScore() {
        this.leftScore++
        this.leftScoreText = setText(this.leftScore)
    }

    resetBall() {

        // this.ball.setPosition(400, 250)

        const angle = Phaser.Math.Between(1, 360)
        const vec = this.physics.velocityFromAngle(angle, 200)
        this.ball.body.setVelocity(vec.x, vec.y)
    }
        
}