const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PlayerSchema = new Schema({
    PlayerName:{
        type: String,
        required: true
    },
    CharacterName:{
        type: String,
        required: true
    },
    CharacterType:{
        type: String,
        required: true
    },
    Strength:{
        type: Number,
        required: true
    },
    Endurance:{
        type: Number,
        required: true
    },
    Perception:{
        type: Number,
        required: true
    },
    Dexterity:{
        type: Number,
        required: true
    },
    Intelligence:{
        type: Number,
        required: true
    },
    Willpower:{
        type: Number,
        required: true
    },
    Agility:{
        type: Number,
        required: true
    },
    Luck:{
        type: Number,
        required: true
    },
    Persuasion:{
        type: Number,
        required: true
    },
    Sneak:{
        type: Number,
        required: true
    },
    PickPocket:{
        type: Number,
        required: true
    },
    LightArmor:{
        type: Number,
        required: true
    },
    HeavyArmor:{
        type: Number,
        required: true
    },
    Gambling:{
        type: Number,
        required: true
    },
    Althletics:{
        type: Number,
        required: true
    },
    Melee:{
        type: Number,
        required: true
    },
    Blade:{
        type: Number,
        required: true
    },
    StandardGuns:{
        type: Number,
        required: true
    },
    SmartGuns:{
        type: Number,
        required: true
    },
    HeavyWeapons:{
        type: Number,
        required: true
    },
    Interrogate:{
        type: Number,
        required: true
    },
    Mercantile:{
        type: Number,
        required: true
    },
    Analize:{
        type: Number,
        required: true
    },
    Hack:{
        type: Number,
        required: true
    },
    Research:{
        type: Number,
        required: true
    },
    Art:{
        type: Number,
        required: true
    },
    Experience:{
      type: Number,
      require: true
    },
    HealthPoints:{
      type: Number,
      require: true
    },
    PainTolerance:{
      type: Number,
      require: true
    },
    Weapon1:{
      name: String,
      damage: Number,
      pain: Number,
      description: String,
      require: false
    },
    Weapon2:{
      name: String,
      damage: Number,
      pain: Number,
      description: String,
      require: false
    },
    Armor:{
      name: String,
      protection: Number,
      durability: Number,
      description: String,
      require: false
    },
    Item1:{
      name: String,
      effect: Number,
      description: String,
      require: false
    },
    Item2:{
      name: String,
      effect: Number,
      description: String,
      require: false
    },
    Item3:{
      name: String,
      effect: Number,
      description: String,
      require: false
    },





    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('players', PlayerSchema)
