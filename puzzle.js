// Step#1 Data Types:
var firstNameArr = ['Ellen', 'Heather', 'Rick', 'Walter']
var lastNameArr = ['Bartley', 'DeForest', 'Fairview', 'Gray']
var statesArr = ['Ohio', 'Montana', 'Texas', 'Washington']
var eventsArr = ['anniversary', 'birthday', 'house warming', 'wedding']
var relationshipArr = ['cousin', 'father', 'friend', 'sister']
// Step#2 Logical Statements:
// Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio. The birthday girl didn’t have her party on Friday.
if (relationship !== 'friend' && state !== 'Ohio') {
  maybeHeather = true
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
