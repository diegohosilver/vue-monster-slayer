new Vue({
    el: '#app',
    
    data: {

        actions: {
            attack: 'attack',
            heal: 'heal'
        },
        
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

        turns: []
    },

    methods: {

        resetHealth() {

            this.player.health = this.monster.health = 100;
        },

        startGame() {

            this.gameIsRunning = true;

            this.turns = [];

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

        logAction(isPlayer, action, text) {
            this.turns.unshift({isPlayer, action, text});
        },

        playerTurn(action, multiplier = 1) {

            if (action === this.actions.attack) {
                let damage = this.getDamageToDeal(this.player) * multiplier
                this.monster.health -= damage;

                let message = multiplier > 1 ? `. It dealt ${multiplier}X damage!` : '';

                this.logAction(true, this.actions.attack, `Player hits Monster for ${damage}${message}`);
            }
            else {
                if (this.player.health <= 90) {
                    this.player.health += this.player.damage.max;
                }
                else {
                    this.player.health = 100;
                }

                this.logAction(true, this.actions.heal, `Player healed`);
            }      

            return this.assertGameFinished(this.player, this.monster);
        },

        monsterTurn(multiplier = 1) {

            let damage = this.getDamageToDeal(this.monster) * multiplier;
            this.player.health -= damage;

            this.logAction(false, this.actions.attack, `Monster hits Player for ${damage}`);
            
            return this.assertGameFinished(this.monster, this.player);
        },

        attack() {

            let hasWon = this.playerTurn(this.actions.attack);

            if (hasWon) {
                return;
            }

            this.monsterTurn();           
        },

        specialAttack() {

            // Duplicate damage dealt
            let hasWon = this.playerTurn(this.actions.attack, 2);
            
            if (hasWon) {
                return;
            }

            this.monsterTurn();
        },

        heal() {

            this.playerTurn(this.actions.heal);

            // Monster deals 0.5 damage when player heals
            this.monsterTurn(0.5);
        },

        giveUp() {

            this.gameIsRunning = false;
        }
    }
})