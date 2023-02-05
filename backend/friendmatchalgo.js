const friendDATA = require("../backend/json/friendtags.json")

export default function matchFriends(pref, veg, vegan, gluten) {  
    // list of pref, 10?, 1 1 0


    const generateScore = (item) => {
        let oldObj = item
        let keyValue = 0
        // let tie = 0
        if (item.veg == veg) {
            keyValue ++;
        }
        if (item.vegan == vegan) {
            keyValue ++;
        }
        if (item.gluten == gluten) {
            keyValue ++;
        }
        
        let intersection = pref.filter(function(value) {
            return (item.tags).includes(value);
          });
          
        tie += intersection.length;
    
        oldObj["key"] = keyValue;
        oldObj["tiebreaker"] = tie;
        return oldObj
    }

    return (friendDATA).map(item => generateScore(item)).sort(function(a, b) {
        console.log(a.name + a.key + b.name + b.key)
        if (a.key === b.key) {
          return b.tiebreaker - a.tiebreaker;
        } else {
          return b.key - a.key;
        }
      });
}

