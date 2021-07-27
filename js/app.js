
const buttons = document.querySelectorAll('.btn')
const imageContainer = document.querySelector('.img-container')
const pictures = [
  'contBcg-0',
  'contBcg-1',
  'contBcg-2',
  'contBcg-3',
  'contBcg-4',
]

let counter = 0

buttons.forEach((button)=>{
  button.addEventListener('click', (e) => {
    if(button.classList.contains('btn-left')){
      counter--

      if(counter < 0){
        counter = pictures.length -1
      }
              imageContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`

    }
if(button.classList.contains('btn-right')){
  counter++

  if(counter > pictures.length -1){
    counter = 0
  }
          imageContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`

}
  })
});

