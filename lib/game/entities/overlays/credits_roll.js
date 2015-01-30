/**
* credits_roll.js
* ----
* Entity used for displaying contents for the credits screen.
*
*/

ig.module(
    'game.entities.overlays.credits_roll'
)
.requires(
    'impact.entity',
    'impact.font',
    'plugins.font-sugar.font'
)
.defines(function() {
    'use strict';

    ig.global.EntityCredits_roll = ig.Entity.extend({
        font16: new ig.Font('media/04b03_16.font.png', { fontColor: '#FFFFFF' }),
        font20: new ig.Font('media/04b03_20.font.png', { fontColor: '#FFFFFF' }),
        font30: new ig.Font('media/04b03_30.font.png', { fontColor: '#FFFFFF' }),

        maxY: -1,

        x0: -1, // center column x-position
        xL: -1, // left column x-position
        xR: -1, // right column x-position
        dx: 25, // x-position delta from center column to left or right columns
        dy: 30, // column y-position delta
        s: 4, // section spacer index

        init: function(x, y, settings) {
            this.parent(x, y, settings);

            this.x0 = this.pos.x + ig.system.width / 2;
            this.xL = this.x0 - this.dx;
            this.xR = this.x0 + this.dx;
        },

        draw: function() {
            this.parent();

            var y = 0; // y-position iteration index

            this.font30.draw('Fire Emblem',             this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            y++
            this.font30.draw('Chronicles of the Abyss',  this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);

            y += this.s * 4;
            this.font16.draw('Project Lead',  this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            this.font20.draw('Kevin Chan',    this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 1
            this.font20.draw('David Leonard', this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 2

            y += this.s;
            this.font16.draw('Technical Lead', this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            this.font20.draw('Kevin Chan',     this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 1
            this.font20.draw('David Leonard',  this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 2

            y += this.s;
            this.font16.draw('Programmer',        this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            this.font20.draw('Kevin Chan',        this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 1
            this.font20.draw('David Leonard',     this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 2
            this.font20.draw('Wan Kim Mok',       this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 3
            this.font20.draw('Christopher Zhang', this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 4

            y += this.s;
            this.font16.draw('Artwork',          this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            this.font20.draw('Title Screen',     this.xL, this.pos.y + this.dy * ++y, ig.Font.ALIGN.RIGHT ); // 1
            this.font20.draw('Enan Rahman',      this.xR, this.pos.y + this.dy *   y, ig.Font.ALIGN.LEFT  );
            this.font20.draw('Game Over Screen', this.xL, this.pos.y + this.dy * ++y, ig.Font.ALIGN.RIGHT ); // 2
            this.font20.draw('Enan Rahman',      this.xR, this.pos.y + this.dy *   y, ig.Font.ALIGN.LEFT  );

            y += this.s;
            this.font16.draw('Music',                this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            this.font20.draw('"Companions"',         this.xL, this.pos.y + this.dy * ++y, ig.Font.ALIGN.RIGHT ); // 1
            this.font20.draw('Christopher Zhang',    this.xR, this.pos.y + this.dy *   y, ig.Font.ALIGN.LEFT  );
            this.font20.draw('"Wind Across Plains"', this.xL, this.pos.y + this.dy * ++y, ig.Font.ALIGN.RIGHT ); // 2
            this.font20.draw('AxemJinx',             this.xR, this.pos.y + this.dy *   y, ig.Font.ALIGN.LEFT  );
            this.font20.draw('"Strange Encounters"', this.xL, this.pos.y + this.dy * ++y, ig.Font.ALIGN.RIGHT ); // 3
            this.font20.draw('AxemJinx',             this.xR, this.pos.y + this.dy *   y, ig.Font.ALIGN.LEFT  );
            this.font20.draw('"Inescapable Fate"',   this.xL, this.pos.y + this.dy * ++y, ig.Font.ALIGN.RIGHT ); // 4
            this.font20.draw('Gamma V',              this.xR, this.pos.y + this.dy *   y, ig.Font.ALIGN.LEFT  );
            this.font20.draw('"Awakening"',          this.xL, this.pos.y + this.dy * ++y, ig.Font.ALIGN.RIGHT ); // 5
            this.font20.draw('CrispyYoshi',          this.xR, this.pos.y + this.dy *   y, ig.Font.ALIGN.LEFT  );

            y += this.s;
            this.font16.draw('Graphics Editing', this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            this.font20.draw('David Leonard',    this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 1

            y += this.s;
            this.font16.draw('Special Thanks',                   this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            this.font20.draw('Dominic Szablewski',               this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 1
            this.font20.draw('for the ImpactJS Game Engine',     this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            y++;
            this.font20.draw('The ImpactJS community',           this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 2
            this.font20.draw('for their invaluable resources',   this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            y++;
            this.font20.draw('Nintendo and Intelligent Systems', this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER); // 3
            this.font20.draw('for creating Fire Emblem',         this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);

            y += this.s * 2;
            this.font20.draw('Fire Emblem: Chronicles of the Abyss is a non-profit,',   this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            this.font20.draw('fan-made game created strictly for educational purposes', this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            this.font20.draw('and to push the boundaries of ImpactJS. All animations,', this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            this.font20.draw('map tiles, characters, and gameplay mechanics are',       this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);
            this.font20.draw('property of both Nintendo and Intelligent Systems.',      this.x0, this.pos.y + this.dy * ++y, ig.Font.ALIGN.CENTER);


            if(this.maxY < 0) {
                this.maxY = this.dy * y + y;
            }
        }
    });
});