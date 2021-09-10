document.addEventListener('DOMContentLoaded', () => {

  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')

  let currentPlayer = 1

  for (var i = 0, len = squares.length; i < len; i++)

  (function(index) {
    squares[i].onclick = function(){

      if(squares[index + 7].classList.contains('taken')){

        if(currentPlayer === 1) {
          squares[index].classList.add('taken')
          squares[index].classList.add('player-one')

          ccurentPlayer = 2
          displayCurrentPlayer.innerHTML = currentPlayer

        } else if (currentPlayer === 2) {
          squares[index].classList.add('taken')
          squares[index].classList.add('player-one')

          currentPlayer = 1
          displayCurrentPlayer.innerHTML = currentPlayer
        }
      } else alert('cant go here')
    }
  })(i)

  function checkBoard() {

    const winningArrays = [
      [0, 1, 2, 3], [0, 7, 14, 21], [0, 8, 16, 24], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3],
    ]
  }

})
