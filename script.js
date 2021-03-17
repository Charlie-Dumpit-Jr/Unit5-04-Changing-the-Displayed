
document.getElementById('change-image').addEventListener('click', image)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)
document.getElementById('background').addEventListener('click', background)

function image () {
  document.getElementById('currypicture').src = 'Images/wade.jpg'
  document.getElementById('player').innerHTML = 'This is Wade'
}

function hide () {
  document.getElementById('player').style.display = 'none'
}

function show () {
  document.getElementById('player').style.display = 'block'
}

function background () {
  document.body.style.backgroundColor = 'lightblue'
}
