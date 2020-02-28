let count = 0
let list = [sprites.castle.heroFrontAttack1, sprites.castle.heroFrontAttack2, sprites.castle.heroFrontAttack3]
let duck = sprites.create(list[0], SpriteKind.Player)
game.onUpdateInterval(200, function () {
    let character_Images: Image[] = []
    duck.setImage(character_Images[count % list.length])
    count += 1
})
