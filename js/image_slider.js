var container = document.querySelector(".container");
        var slider = document.getElementById("slider");
        var isDown = false;

        slider.addEventListener('mousedown', function () {
            isDown = true;
        });

        window.addEventListener('mouseup', function () {
            isDown = false;
        });

        window.addEventListener('mousemove', function (e) {
            if (!isDown) return;
            var rect = container.getBoundingClientRect();
            var x = event.clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            var percentage = (x / rect.width) * 100;
            slider.style.left = percentage + '%';
            document.getElementById('image1').style.clipPath = 'inset(0  ' + (100 - percentage) + '% 0 0)'; // Crop left image
            document.getElementById('image2').style.clipPath = 'inset(0 0 0 ' + percentage + '%)'; // Crop right image
        });