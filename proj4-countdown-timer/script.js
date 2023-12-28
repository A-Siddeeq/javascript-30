        
        const countdown = () => {
            const countDate = new Date("Dec 31, 2024  00:00:00").getTime()
            const now = new Date().getTime();
            const gap = countDate - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const finalDay = Math.floor(gap/day);
            const textHour = Math.floor(( gap % day) / hour);
            const textMinute = Math.floor(( gap % hour) / minute);
            const textSecond = Math.floor(( gap % minute) / second);

            document.querySelector(".day").innerText = finalDay
            document.querySelector(".hour").innerText = textHour
            document.querySelector(".minute").innerText = textMinute
            document.querySelector(".second").innerText = textSecond
        }
        setInterval(countdown, 1000);
        