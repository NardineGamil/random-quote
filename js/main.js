var text = document.getElementById('text');
//console.log(text);
var btn = document.getElementById("btn");
btn.addEventListener("click",(eo) => {
    eo.preventDefault();
    var qoute = [
        `
    <div class="txtBox">
    <div class="text-icon">
        <p><span>“Be yourself; everyone else is already taken.”</span></p>
    </div>
    <p class="name"><span></span><span>Oscar Wilde</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><span> "Don’t walk in front of me… I may not follow
        Don’t walk behind me… I may not lead
        Walk beside me… just be my friend "</span></p>
    </div>
    <p class="name"><span></span><span>Albert Camus</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><span>"The opposite of love is not hate, it's indifference.
        The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy,
        it's indifference. And the opposite of life is not death, it's indifference."
        </span></p>
    </div>
    <p class="name"><span></span><span>Elie Wiesel</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><span>"Books are the ultimate Dumpees: put them down and they’ll wait for you forever;
        pay attention to them and they always love you back."</span></p>
    </div>
    <p class="name"><span></span><span> John Green</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><span>"Never forget what you are,
        for surely the world will not. Make it your strength. Then it can never be
        your weakness. Armour yourself in it, and it will never be used to hurt you."
        </span> </p>
    </div>
    <p class="name"><span></span><span>George R.R. Martin</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p>
        <span>"And above all, watch with glittering eyes the whole world around you
        because the greatest secrets are always hidden in the most unlikely places.
        Those who don't believe in magic will never find it."
        </span></p>
    </div>
    <p class="name"><span></span><span>Roald Dahl</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p>
        <span>"Let me tell you this: if you meet a loner, no matter what they tell you,
        it's not because they enjoy solitude. It's because they have tried to blend
        into the world before, and people continue to disappoint them."
        </span></p>
    </div>
    <p class="name"><span></span><span>Jodi Picoult</span></p>
    </div>
    `
    ]
    text.innerHTML = qoute[Math.ceil(Math.random()*qoute.length-1)];
});