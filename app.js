new Vue({
    el: '#app',
    
    data: {
        
        player: {
            name: 'You',
            health: 100,
            damage: {
                min: 3,
                max: 10
            }
        },

        monster: {
            name: 'Monster',
            health: 100,
            damage: {
                min: 5,
                max: 12
            }
        },
        
        gameIsRunning: false,
    },

    methods: {

        resetHealth() {

            this.player.health = this.monster.health = 100;
        },

        startGame() {

            this.gameIsRunning = true;

            this.resetHealth();
        },

        getDamageToDeal(character) {

            // Get random number between minimum and maximum damage

            return Math.max(Math.floor(Math.random() * character.damage.max) + 1, character.damage.min);
        },

        characterIsDead(character) {

            let isDead = character.health <= 0;

            if (isDead) {
                character.health = 0;
            }

            return isDead;
        },

        assertGameFinished(attacker, defender) {

            let finished = this.characterIsDead(defender);

            if (finished) {

                alert(`${attacker.name} won the battle!`);
                
                this.gameIsRunning = false;
            }

            return finished;
        },

        playerTurn(multiplier = 1) {

            this.monster.health -= this.getDamageToDeal(this.player) * multiplier;

            return this.assertGameFinished(this.player, this.monster);
        },

        monsterTurn() {

            this.player.health -= this.getDamageToDeal(this.monster);

            this.assertGameFinished(this.monster, this.player);
        },

        attack() {

            let hasWon = this.playerTurn();

            if (hasWon) {
                return;
            }

            this.monsterTurn();           
        },

        specialAttack() {

            // Duplicate damage dealt
            let hasWon = this.playerTurn(2);
            
            if (hasWon) {
                return;
            }

            this.monsterTurn();
        },

        heal() {

        },

        giveUp() {

        }
    }
})