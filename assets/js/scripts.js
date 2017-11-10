/**
 * Created by Cat on 08.11.2017.
 */
(function ($) {
    $(document).ready(function () {

        var loadImg = document.getElementById('loadImg');
        if (loadImg) {
            loadImg.addEventListener('change', function (event) {
                var previewImg = document.getElementById('previewImg');
                previewImg.src = URL.createObjectURL(event.target.files[0]);
                console.log(previewImg);
                if (previewImg.val != '') {
                    $('.imgUploadBtn').text('');
                };
            })
        }
    })
    })(jQuery);