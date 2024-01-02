document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero_video video');
    const playButton = document.getElementById('buttonPlay');

    playButton.addEventListener('click', function() {
        if (video.paused || video.ended) {
            video.play();
            playButton.innerHTML = '<svg class="icon_pause_bxs" height="84.521" width="84.521"><use href="./images/icons.svg#icon-pause-bxs"></use></svg>';
        } else {
            video.pause();
            playButton.innerHTML = '<svg class="icon_play_bxs" height="84.521" width="84.521"><use href="./images/icons.svg#icon-bxs"></use></svg>';
        }
    });

    video.addEventListener('ended', function() {
        playButton.innerHTML = '<svg class="icon_play_bxs" height="84.521" width="84.521"><use href="./images/icons.svg#icon-bxs"></use></svg>';
    });

    video.addEventListener('play', function() {
        playButton.style.opacity = 0;
    });

    video.addEventListener('pause', function() {
        playButton.style.opacity = 1;
    });
});
