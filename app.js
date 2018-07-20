const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');


const app = express();

//promise
mongoose.Promise = global.Promise;
//connet to mongoose
mongoose.connect('mongodb://localhost/GrayMatter')
    .then(() => console.log('MongoDb Connected, hopefully this works'))
    .catch(err => console.log(err));

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//method overide for put instead of post
app.use(methodOverride('_method'));

//load Model
require('./models/players');
const Player = mongoose.model('players');
require('./models/test');
const Test = mongoose.model('tests');

//starts ejs
app.set('view engine', 'ejs');

//enables css
app.use(express.static('./views'));

app.get('/', (req, res) => {

    //DATABASE TO ARRAY
    Player.find({}, (err, playerData) => {
        if (err) return console.log(err);

        res.render('index', { playerData: playerData });
    });
});

app.get('/CharacterSheet/:id',(req, res) => {
  Player.find({}, (err, playerData) => {
      if (err) return console.log(err);
  Player.findOne({
      _id: req.params.id
  })
      .then(player => {
          res.render('CharacterSheet', {
              player: player,
              playerData: playerData
          });
        });
  });
});

app.get('/battle', (req, res) => {

      //DATABASE TO ARRAY
      Player.find({}, (err, playerData) => {
          if (err) return console.log(err);

          res.render('battle', { playerData: playerData });
      });
  });

app.get('/AddInventoryItem/:id', (req, res) => {
  Player.findOne({
      _id: req.params.id
  })
      .then(player => {
          res.render('AddInventoryItem', {
              player: player,

          });
        });
      });

app.put('/AddInventoryItem/:id', (req, res) =>{
  Player.findOne({
      _id: req.params.id
  })
  .then(player => {

      player.Weapon1.name = req.body.Weapon1name;
      player.Weapon1.damage = req.body.Weapon1damage;
      player.Weapon1.pain = req.body.Weapon1pain;
      player.Weapon1.description = req.body.Weapon1description;


      player.save()
        .then(player => {
          console.log("err");
            //res.redirect('/CharacterSheet/:id', {player: player });
        })
  })
})

app.get('/Characters', (req, res) => {
  Player.find({}, (err, playerData) => {
      if (err) return console.log(err);

      res.render('Characters', { playerData: playerData });
    });
});

app.post('/CreateCharacter', (req, res) => {
  let errors = [];

  if (!req.body.PlayerName) {
      errors.push({ text: 'Please add your name' });
      console.log("1");
  }
  if (!req.body.CharacterName) {
      errors.push({ text: 'Please add a Character Name' });
      console.log("2");
  }

  if (errors.length > 0) {
      res.render('index', {
          errors: errors,
          PlayerName: req.body.PlayerName,
          CharacterName: req.body.CharacterName
      });
  } else {
    let strength =30;
    let endurance=30;
    let perception=30;
    let dexterity=30;
    let intelligence=30;
    let willpower=30;
    let agility=30;
    let luck=30;

    let persuasion=20
    let sneak=20;
    let pickPocket=20;
    let lightArmor= 20;
    let heavyArmor =20;
    let gambling= 20;
    let althletics=20;
    let melee= 20;
    let blade=20;
    let standardGuns=20;
    let smartGuns=20;
    let heavyWeapons =20;
    let interrogate =20;
    let mercantile =20;
    let analize = 20;
    let hack = 20;
    let research =20;
    let art = 20;


    if(req.body.CharcterType="NatHuman"){
      willpower+=10;
      luck+=5;

    }else if (req.body.CharcterType="GenHuman") {
      dexterity+=5;
      endurance+=5;
      agility+=5;
      console.log(dexterity);
    }else if (req.body.CharcterType="MechHuman") {

    }else if (req.body.CharcterType="Cyborg") {

    }else if (req.body.CharcterType="AI") {

    }
    else {
      console.log("req.body.CharacterType")
    }

    if(req.body.Atribute1="Strength"){
      strength+=10;
    }else if(req.body.Atribute1="Endurance"){
      endurance+=10;
    }else if(req.body.Atribute1="Perception"){
      perception+=10;
    }else if(req.body.Atribute1="Dexterity"){
      dexterity+=10;
    }else if(req.body.Atribute1="Intelligence"){
      intelligence+=10;
    }else if(req.body.Atribute1="Willpower"){
      willpower+=10;
    }else if(req.body.Atribute1="Agility"){
      agility+=10;
    }else if(req.body.Atribute1="Luck"){
      luck+=10;
    }else{
      console.log(err);
    }

    if(req.body.Atribute2="Strength"){
      strength+=10;
    }else if(req.body.Atribute2="Endurance"){
      endurance+=10;
    }else if(req.body.Atribute2="Perception"){
      perception+=10;
    }else if(req.body.Atribute2="Dexterity"){
      dexterity+=10;
    }else if(req.body.Atribute2="Intelligence"){
      intelligence+=10;
    }else if(req.body.Atribute2="Willpower"){
      willpower+=10;
    }else if(req.body.Atribute2="Agility"){
      agility+=10;
    }else if(req.body.Atribute2="Luck"){
      luck+=10;
    }else{
      console.log(err);
    }

    if(req.body.Skill1="Persuasion"){
      persuasion+=10;
    }else if(req.body.Skill1="Sneak"){
      sneak+=10;
    }else if(req.body.Skill1="PickPocket"){
      pickPocket+=10;
    }else if(req.body.Skill1="LightArmor"){
      lightArmor+=10;
    }else if(req.body.Skill1="HeavyArmor"){
      heavyArmor+=10;
    }else if(req.body.Skill1="Gambling"){
      gambling+=10;
    }else if(req.body.Skill1="Althletics"){
      althletics+=10;
    }else if(req.body.Skill1="Melee"){
      melee+=10;
    }else if(req.body.Skill1="Blade"){
      blade+=10;
    }else if(req.body.Skill1="StandardGuns"){
      standardGuns+=10;
    }else if(req.body.Skill1="SmartGuns"){
      smartGuns+=10;
    }else if(req.body.Skill1="HeavyWeapons"){
      heavyWeapons+=10;
    }else if(req.body.Skill1="Interrogate"){
      interrogate+=10;
    }else if(req.body.Skill1="Mercantile"){
      mercantile+=10;
    }else if(req.body.Skill1="Analize"){
      Hack+=10;
    }else if(req.body.Skill1="Sneak"){
      sneak+=10;
    }else if(req.body.Skill1="Research"){
      research+=10;
    }else if(req.body.Skill1="Art"){
      art+=10;
    }else{
      console.log(err);
    }

    if(req.body.Skill2="Persuasion"){
      persuasion+=10;
    }else if(req.body.Skill2="Sneak"){
      sneak+=10;
    }else if(req.body.Skill2="PickPocket"){
      pickPocket+=10;
    }else if(req.body.Skill2="LightArmor"){
      lightArmor+=10;
    }else if(req.body.Skill2="HeavyArmor"){
      heavyArmor+=10;
    }else if(req.body.Skill2="Gambling"){
      gambling+=10;
    }else if(req.body.Skill2="Althletics"){
      althletics+=10;
    }else if(req.body.Skill2="Melee"){
      melee+=10;
    }else if(req.body.Skill2="Blade"){
      blade+=10;
    }else if(req.body.Skill2="StandardGuns"){
      standardGuns+=10;
    }else if(req.body.Skill2="SmartGuns"){
      smartGuns+=10;
    }else if(req.body.Skill2="HeavyWeapons"){
      heavyWeapons+=10;
    }else if(req.body.Skill2="Interrogate"){
      interrogate+=10;
    }else if(req.body.Skill2="Mercantile"){
      mercantile+=10;
    }else if(req.body.Skill2="Analize"){
      Hack+=10;
    }else if(req.body.Skill2="Sneak"){
      sneak+=10;
    }else if(req.body.Skill2="Research"){
      research+=10;
    }else if(req.body.Skill2="Art"){
      art+=10;
    }else{
      console.log(err);
    }

    if(req.body.Skill3="Persuasion"){
      persuasion+=10;
    }else if(req.body.Skill3="Sneak"){
      sneak+=10;
    }else if(req.body.Skill3="PickPocket"){
      pickPocket+=10;
    }else if(req.body.Skill3="LightArmor"){
      lightArmor+=10;
    }else if(req.body.Skill3="HeavyArmor"){
      heavyArmor+=10;
    }else if(req.body.Skill3="Gambling"){
      gambling+=10;
    }else if(req.body.Skill3="Althletics"){
      althletics+=10;
    }else if(req.body.Skill3="Melee"){
      melee+=10;
    }else if(req.body.Skill3="Blade"){
      blade+=10;
    }else if(req.body.Skill3="StandardGuns"){
      standardGuns+=10;
    }else if(req.body.Skill3="SmartGuns"){
      smartGuns+=10;
    }else if(req.body.Skill3="HeavyWeapons"){
      heavyWeapons+=10;
    }else if(req.body.Skill3="Interrogate"){
      interrogate+=10;
    }else if(req.body.Skill3="Mercantile"){
      mercantile+=10;
    }else if(req.body.Skill3="Analize"){
      Hack+=10;
    }else if(req.body.Skill3="Sneak"){
      sneak+=10;
    }else if(req.body.Skill3="Research"){
      research+=10;
    }else if(req.body.Skill3="Art"){
      art+=10;
    }else{
      console.log(err);
    }


      const newUser = {
          PlayerName: req.body.PlayerName,
          CharacterName: req.body.CharacterName,
          CharacterType: req.body.CharcterType,
          Strength: strength,
          Endurance: endurance,
          Perception: perception,
          Dexterity: dexterity,
          Intelligence: intelligence,
          Willpower: willpower,
          Agility: agility,
          Luck: luck,

          Persuasion:persuasion,
          Sneak:sneak,
          PickPocket: pickPocket,
          LightArmor: lightArmor,
          HeavyArmor: heavyArmor,
          Gambling: gambling,
          Althletics: althletics,
          Melee: melee,
          Blade: blade,
          StandardGuns: standardGuns,
          SmartGuns: smartGuns,
          HeavyWeapons: heavyWeapons,
          Interrogate: interrogate,
          Mercantile: mercantile,
          Analize: analize,
          Hack: hack,
          Research: research,
          Art: art,
          Experience: 0,
          HealthPoints: 3*endurance,
          PainTolerance: 4*willpower,
          Weapon1:{
            name: " ",
            damage: 0,
            pain: 0,
            description: " ",
          },
          Weapon2:{
            name: " ",
            damage: 0,
            pain: 0,
            description: " ",
          },
          Armor:{
            name: " ",
            protection: 0,
            durability: 0,
            description: " ",
          },
          Item1: {
            name: " ",
            effect: 0,
            description: " ",

          },
          Item2: {
            name: " ",
            effect: 0,
            description: " ",

          },
          Item3: {
            name: " ",
            effect: 0,
            description: " ",

          }



      }
      new Player(newUser)
          .save()
          .then(idea => {
              res.redirect('/Characters/')
          })
  }
});



const port = 3000;

app.listen(port, () => console.log('server started on 3000'));
