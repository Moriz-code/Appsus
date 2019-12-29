
export default{
  getRandomID,
  getRandomColor
}

function getRandomID(){
  let letters = '1234567890poiiytreqwasdfghjklmnbvcxxssersgyushquiz';
  let id = '';
  for (let i = 0; i < 10; i++) {
      let ind = Math.floor(Math.random() * letters.length)
      id += letters[ind];
  }
  return id;
}


function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


