const mongoose = require('mongoose');
const State = require('../model/state');
const User = require('../model/user');

module.exports = {
    getStates: async (req, res) => {
        let states = await State.find();
        res.json({states});
    },
    getUsers: async (req, res) => {
        let users = await User.find();
        res.json({users})
    },
    editUser: async(req,res) => {
        const erros = validationResult(req);
        if(!erros.isEmpty()){
          res.json({
            error: erros.mapped()
          });
          return;
        }
        const data = matchedData(req);
        let updates = {};
    
        if(data.name){
          updates.name = data.name;
        }
        if(data.email){
          const emailCheck = await User.findOne({email:data.email});
          if(emailCheck){
            res.json({erro: 'Email ja existe'});
            return;
          }
          updates.email = data.email;
        }
        if(data.state){
          if(mongoose.Types.ObjectId.isValid(data.state)){
            const stateCheck = await States.findById(data.state);
            if(!stateCheck){
              res.json({erro: 'Estado não cadastrado'})
              return;
            }
            updates.states = data.states
          }else{
            res.json({erro: 'Codigo do estado fora do padrao'})
          }
        }
        if(data.password){
          updates.password = await bcrypt.hash(data.password,10);
        }
    
        await User.findOneAndUpdate({token: data.token}, {$set:updates});
        res.json({sucess:true}); 
      }
}

