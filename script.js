document.addEventListener('DOMContentLoaded', function() {

    const audio = document.getElementById('song-player'); 
    const preloader = document.getElementById('preloader');
    
    const clickSound = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    const swooshSound = new Audio('https://www.fesliyanstudios.com/play-mp3/570');
    
    document.querySelectorAll('.tab-button, .close-btn, .links-grid a, .player-ctrl-btn').forEach(element => {
        element.addEventListener('click', () => {
            if (element.matches('.links-grid a')) {
                swooshSound.currentTime = 0;
                swooshSound.play().catch(e => console.log("Error al reproducir swoosh:", e));
            } else {
                clickSound.currentTime = 0;
                clickSound.play().catch(e => console.log("Error al reproducir click:", e));
            }
        });
    });

    document.querySelectorAll('.typewriter').forEach((element, index) => {
        const text = element.innerHTML;
        element.innerHTML = '';
        element.style.opacity = 1;
        let i = 0;
        setTimeout(() => {
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 25);
        }, 500 + index * 100); 
    });

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xOffset = (clientX / innerWidth - 0.5) * -2;
        const yOffset = (clientY / innerHeight - 0.5) * -2;
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.style.backgroundPosition = `calc(50% + ${xOffset}%) calc(50% + ${yOffset}%)`;
        }
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const closeButtons = document.querySelectorAll('.close-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const paneId = button.dataset.tab;
            document.getElementById(paneId).classList.add('active');
            if (paneId === 'stats-tab') { animateStats(); }
        });
    });
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.overlay-pane').classList.remove('active');
        });
    });
    function animateStats() {
        const bars = document.querySelectorAll('.overlay-pane.active .fill');
        bars.forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = '0%';
            void bar.offsetWidth; 
            bar.style.transition = 'width 1s ease-in-out';

            let rawVal = bar.getAttribute('data-p');
            if(rawVal) {
                const percentage = rawVal.replace('%', '').trim();
                setTimeout(() => {
                    bar.style.width = percentage + '%';
                }, 50);
            }
        });
    }
    
    // =================================================================
    // === CONFIGURACIÓN DE CANCIONES ===
    // =================================================================
    const songs = [
        {
            title: "Break My Heart",
            artist: "Dua Lipa",
            src: "song.mp3",
            lyrics: [
  { "time": 9, "line": "Siempre he sido la primera en decir adiós" },
  { "time": 13, "line": "Tuve que amar y perder cien millones de veces" },
  { "time": 17, "line": "Tuve que equivocarme para saber qué me gusta" },
  { "time": 22, "line": "Y ahora estoy cayendo" },
  { "time": 26, "line": "Dices mi nombre como nunca antes lo escuché" },
  { "time": 30, "line": "Soy indecisa, pero esta vez estoy segura" },
  { "time": 34, "line": "Espero no ser la única que siente todo esto" },
  { "time": 40, "line": "¿Tú también estás cayendo?" },
  { "time": 42, "line": "Centro de atención" },
  { "time": 44, "line": "Sabes que puedes obtener lo que quieras de mí" },
  { "time": 48, "line": "Cuando tú quieras, bebé" },
  { "time": 51, "line": "Eres tú en mi reflejo" },
  { "time": 52, "line": "Ahora me asusta todo lo que esto podría hacerme" },
  { "time": 56, "line": "Si lo hubiera sabido, bebé" },
  { "time": 59, "line": "Me habría quedado en casa" },
  { "time": 61, "line": "Porque estaba mejor sola" },
  { "time": 63, "line": "Pero cuando dijiste 'Hola'" },
  { "time": 65, "line": "Supe que ahí terminaba todo" },
  { "time": 67, "line": "Debí quedarme en casa" },
  { "time": 70, "line": "Porque ahora no hay forma de dejarte ir" },
  { "time": 72, "line": "¿Me estoy enamorando" },
  { "time": 74, "line": "De quien podría romper mi corazón?" },
  { "time": 77, "line": "Oh no, estaba mejor sola" },
  { "time": 80, "line": "Pero cuando dijiste 'Hola'" },
  { "time": 83, "line": "Supe que ahí terminaba todo" },
  { "time": 85, "line": "Debí quedarme en casa" },
  { "time": 87, "line": "Porque ahora no hay forma de dejarte ir" },
  { "time": 89, "line": "¿Me estoy enamorando" },
  { "time": 91, "line": "De quien podría romper mi corazón?" },
  { "time": 97, "line": "Me pregunto si cuando te vas, sigo en tu mente" },
  { "time": 103, "line": "Dos pueden jugar ese juego, pero siempre me ganas" },
  { "time": 107, "line": "Todos antes de ti fueron una pérdida de tiempo" },
  { "time": 112, "line": "Sí, me atrapaste" },
  { "time": 115, "line": "Centro de atención" },
  { "time": 117, "line": "Sabes que puedes obtener lo que quieras de mí" },
  { "time": 120, "line": "Cuando tú quieras, bebé" },
  { "time": 123, "line": "Eres tú en mi reflejo" },
  { "time": 125, "line": "Ahora me asusta todo lo que esto podría hacerme" },
  { "time": 129, "line": "Si lo hubiera sabido, bebé" },
  { "time": 131, "line": "Me habría quedado en casa" },
  { "time": 134, "line": "Porque estaba mejor sola" },
  { "time": 136, "line": "Pero cuando dijiste 'Hola'" },
  { "time": 138, "line": "Supe que ahí terminaba todo" },
  { "time": 140, "line": "Debí quedarme en casa" },
  { "time": 142, "line": "Porque ahora no hay forma de dejarte ir" },
  { "time": 144, "line": "¿Me estoy enamorando" },
  { "time": 146, "line": "De quien podría romper mi corazón?" },
  { "time": 149, "line": "Oh no, estaba mejor sola" },
  { "time": 152, "line": "Pero cuando dijiste 'Hola'" },
  { "time": 155, "line": "Supe que ahí terminaba todo" },
  { "time": 157, "line": "Debí quedarme en casa" },
  { "time": 159, "line": "Porque ahora no hay forma de dejarte ir" },
  { "time": 161, "line": "¿Me estoy enamorando" },
  { "time": 163, "line": "De quien podría romper mi corazón?" },
  { "time": 169, "line": "Ooh, romper mi corazón" },
  { "time": 173, "line": "Ooh, romper mi corazón" },
  { "time": 177, "line": "¿Me estoy enamorando" },
  { "time": 180, "line": "De quien podría romper mi corazón?" },
  { "time": 184, "line": "Me habría quedado en casa" },
  { "time": 186, "line": "Porque estaba mejor sola" },
  { "time": 189, "line": "Pero cuando dijiste 'Hola'" },
  { "time": 191, "line": "Supe que ahí terminaba todo" },
  { "time": 193, "line": "Debí quedarme en casa" },
  { "time": 195, "line": "Porque ahora no hay forma de dejarte ir" },
  { "time": 197, "line": "¿Me estoy enamorando" },
  { "time": 199, "line": "De quien podría romper mi corazón?" },
  { "time": 202, "line": "Oh no, estaba mejor sola" },
  { "time": 205, "line": "Pero cuando dijiste 'Hola'" },
  { "time": 208, "line": "Supe que ahí terminaba todo" },
  { "time": 210, "line": "Debí quedarme en casa" },
  { "time": 212, "line": "Porque ahora no hay forma de dejarte ir" },
  { "time": 215, "line": "¿Me estoy enamorando" },
  { "time": 217, "line": "De quien podría romper mi corazón?" }
]
        }
    ];

    let currentSongIndex = 0;
    let currentLyricIndex = -1;

    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const songTitleEl = document.getElementById('song-title');
    const songArtistEl = document.getElementById('song-artist');
    const spotifyIcon = document.querySelector('.spotify-icon');
    
    const lyricsContainer = document.getElementById('lyrics-container');
    
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';

    function loadSong(songIndex) {
        const song = songs[songIndex];
        audio.src = song.src;
        songTitleEl.textContent = song.title;
        songArtistEl.textContent = song.artist;
        loadLyrics(song.lyrics);
        audio.pause();
        playPauseBtn.innerHTML = playIcon;
        spotifyIcon.classList.remove('is-spinning');
    }

    function loadLyrics(lyrics) {
        lyricsContainer.innerHTML = ''; 
        currentLyricIndex = -1; 

        if (!lyrics || lyrics.length === 0) {
            lyricsContainer.innerHTML = '<p class="lyric-line active">♪ No hay letra para esta canción ♪</p>';
            return;
        }

        lyrics.forEach((line, index) => {
            const p = document.createElement('p');
            p.textContent = line.line;
            p.classList.add('lyric-line');
            p.dataset.index = index; 
            lyricsContainer.appendChild(p);
        });
        
        lyricsContainer.style.transform = `translateY(0px)`;
    }

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(e => console.error("Error al intentar reproducir:", e));
            playPauseBtn.innerHTML = pauseIcon;
            spotifyIcon.classList.add('is-spinning');
        } else {
            audio.pause();
            playPauseBtn.innerHTML = playIcon;
            spotifyIcon.classList.remove('is-spinning');
        }
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = songs.length - 1; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    audio.addEventListener('ended', () => {
        nextBtn.click(); 
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const lyrics = songs[currentSongIndex].lyrics;

        if (!lyrics || lyrics.length === 0) return; 

        let newActiveIndex = -1;
        for (let i = lyrics.length - 1; i >= 0; i--) {
            if (currentTime >= lyrics[i].time) {
                newActiveIndex = i;
                break;
            }
        }

        if (newActiveIndex === currentLyricIndex) {
            return;
        }

        currentLyricIndex = newActiveIndex;

        lyricsContainer.querySelectorAll('.lyric-line').forEach(lineEl => {
            lineEl.classList.remove('active');
        });

        if (currentLyricIndex !== -1) {
            const activeLine = lyricsContainer.querySelector(`.lyric-line[data-index="${currentLyricIndex}"]`);
            if (activeLine) {
                activeLine.classList.add('active');
                const scrollOffset = activeLine.offsetTop - (100 / 2) + (activeLine.clientHeight / 2);
                lyricsContainer.style.transform = `translateY(-${scrollOffset}px)`;
            }
        } else {
            lyricsContainer.style.transform = `translateY(0px)`;
        }
    });

    loadSong(currentSongIndex);

    const fnafSticker=document.getElementById('fnaf-sticker');const honkSound=new Audio('https://www.myinstants.com/media/sounds/fnaf-nose-honk.mp3');fnafSticker.addEventListener('click',()=>{honkSound.currentTime=0;honkSound.play().catch(e => {})});
    const copyBtn = document.getElementById('copy-link-btn');
    const originalBtnText = copyBtn.innerHTML;
    copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
            copyBtn.classList.add('copied');
            swooshSound.currentTime = 0;
            swooshSound.play().catch(err => {});
            setTimeout(() => {
                copyBtn.innerHTML = originalBtnText;
                copyBtn.classList.remove('copied');
            }, 2000);
        });
    });

    // OCULTAR PRELOADER AL FINAL
    preloader.classList.add('loaded');

});
                          
