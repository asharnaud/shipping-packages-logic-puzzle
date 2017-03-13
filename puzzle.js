// Step#1 Data Types:
var firstName = ['Ellen', 'Heather', 'Rick', 'Walter']
var lastName = ['Bartley', 'DeForest', 'Fairview', 'Gray']
var states = ['Ohio', 'Montana', 'Texas', 'Washington']
var partyType = ['anniversary', 'birthday', 'house warming', 'wedding']
var relationship = ['cousin', 'father', 'friend', 'sister']
var day = ['Wednesday', 'Thursday', 'Friday', 'Saturday']
// Step#2 Logical Statements:
// Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio. The birthday girl didn’t have her party on Friday.
if (relationship !== 'friend' && state !== 'Ohio') {
  maybeEllen = true
}
if (event === 'birthday' && day !== 'Friday') {
  maybeHeather = true
}
// Rick’s last name wasn’t Bartley but his event was on Saturday night.
if (lastname !== 'Bartley' && day === 'Saturday') {
  maybeRick = true
}
//Greg’s father wasn’t getting married, but his last name was Gray.
if (relationship === 'father' && event !== 'wedding' && lastname === 'Gray') {
  maybeWalter = true
}
//The friend having a house warming didn’t live in Ohio.
if (relationship === 'friend' && event === 'house warming' && state !== 'Ohio') {
  maybeRick = true
}
//The wedding was for Greg’s cousin. Heather, who didn’t live in Texas, was Greg’s sister but her event wasn’t on Wednesday night.
if (relationship === 'cousin' && event === 'wedding') {
  maybeEllen = true
}
if (state !== 'Texas' && relationship === 'sister' && day !== 'Wednesday') {
  maybeHeather = true
}
//Walter’s event was one day earlier than the person whose last name was DeForest but after the person who lived in Washington. The anniversary was held in Montana.
if (lastname !== 'DeForest' && event === 'anniversary' && state === 'Montana') {
  maybeWalter = true
}

//Step#3
  var combos = []
  for (var i = 0; i < firstName.length; i++) {
     for(var j = 0; j < lastName.length; j++) {
       for(var n = 0; n < states.length; n++) {
         for(var m = 0; m < partyType.length; m++) {
           for(var z = 0; z < relationship.length; z++) {
             for(var k = 0; k < day.length; k++) {
        combos.push(firstName[i] + lastName[j] + states[n] + partyType[m] + relationship[z] + day[k])
              }
            }
          }
        }
     }
   }
