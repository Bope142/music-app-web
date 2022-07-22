const showListMusic = () => {
    document.querySelector('.swipper').addEventListener('click', () => {
        if (document.querySelector('.swipper').classList.contains('swipper-inactive')) {
            document.querySelector('.swipper').classList.replace('swipper-inactive', 'swipper-active');
            document.querySelector('.container__player').classList.replace('container__player-normal-view', 'container__player-detail-view')
        } else {
            document.querySelector('.swipper').classList.replace('swipper-active', 'swipper-inactive')
            document.querySelector('.container__player').classList.replace('container__player-detail-view', 'container__player-normal-view')
        }

    })
}


window.addEventListener('load', () => {

    showListMusic()
})
