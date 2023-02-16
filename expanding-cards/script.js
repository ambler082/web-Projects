//클래스 panel들을 모두 선택해 상수 panels에 담기
const panels = document.querySelectorAll('.panel')

panels.forEach( panel => {
    panel.addEventListener ('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}