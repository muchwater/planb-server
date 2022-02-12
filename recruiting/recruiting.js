// --light-purple: #BD9DEA;
// --purple: #7A77B9;
// --red: #EA7186;
// --yellow: #FEC762;

'use strict';

const bandfeature = document.getElementById('band__feature')
const bandduty = document.getElementById('band__duty')
const bandright = document.getElementById('band__right')
const bandapply = document.getElementById('band__apply')

const generalfeature = document.getElementById('general__feature')
const generalduty = document.getElementById('general__duty')
const generalright = document.getElementById('general__right')
const generalapply = document.getElementById('general__apply')

const bandfeaturebtn = document.getElementById('band__member__feature__btn');
const banddutybtn = document.getElementById('band__member__duty__btn');
const bandrightbtn = document.getElementById('band__member__right__btn');
const generalfeaturebtn = document.getElementById('general__member__feature__btn');
const generaldutybtn = document.getElementById('general__member__duty__btn');
const generalrightbtn = document.getElementById('general__member__right__btn');

function change__page(index) {

    if (index == 0) {
        bandfeature.style.display = 'block';
        bandduty.style.display = 'none';
        bandright.style.display = 'none';
        bandapply.style.display = 'block';
        generalfeature.style.display = 'none';
        generalduty.style.display = 'none';
        generalright.style.display = 'none';
        generalapply.style.display = 'none';

        bandfeaturebtn.style.backgroundColor = '#facfd6'
        banddutybtn.style.backgroundColor = '#ffffff00'
        bandrightbtn.style.backgroundColor = '#ffffff00'
        generalfeaturebtn.style.backgroundColor = '#ffffff00'
        generaldutybtn.style.backgroundColor = '#ffffff00'
        generalrightbtn.style.backgroundColor = '#ffffff00'
    }

    if (index == 1) {
        bandfeature.style.display = 'none';
        bandduty.style.display = 'block';
        bandright.style.display = 'none';
        bandapply.style.display = 'block';
        generalfeature.style.display = 'none';
        generalduty.style.display = 'none';
        generalright.style.display = 'none';
        generalapply.style.display = 'none';

        bandfeaturebtn.style.backgroundColor = '#ffffff00'
        banddutybtn.style.backgroundColor = '#facfd6'
        bandrightbtn.style.backgroundColor = '#ffffff00'
        generalfeaturebtn.style.backgroundColor = '#ffffff00'
        generaldutybtn.style.backgroundColor = '#ffffff00'
        generalrightbtn.style.backgroundColor = '#ffffff00'
    }

    if (index == 2) {
        bandfeature.style.display = 'none';
        bandduty.style.display = 'none';
        bandright.style.display = 'block';
        bandapply.style.display = 'block';
        generalfeature.style.display = 'none';
        generalduty.style.display = 'none';
        generalright.style.display = 'none';
        generalapply.style.display = 'none';

        bandfeaturebtn.style.backgroundColor = '#ffffff00'
        banddutybtn.style.backgroundColor = '#ffffff00'
        bandrightbtn.style.backgroundColor = '#facfd6'
        generalfeaturebtn.style.backgroundColor = '#ffffff00'
        generaldutybtn.style.backgroundColor = '#ffffff00'
        generalrightbtn.style.backgroundColor = '#ffffff00'
    }

    if (index == 3) {
        bandfeature.style.display = 'none';
        bandduty.style.display = 'none';
        bandright.style.display = 'none';
        bandapply.style.display = 'none';
        generalfeature.style.display = 'block';
        generalduty.style.display = 'none';
        generalright.style.display = 'none';
        generalapply.style.display = 'block';

        bandfeaturebtn.style.backgroundColor = '#ffffff00'
        banddutybtn.style.backgroundColor = '#ffffff00'
        bandrightbtn.style.backgroundColor = '#ffffff00'
        generalfeaturebtn.style.backgroundColor = '#ffefd2'
        generaldutybtn.style.backgroundColor = '#ffffff00'
        generalrightbtn.style.backgroundColor = '#ffffff00'
    }

    if (index == 4) {
        bandfeature.style.display = 'none';
        bandduty.style.display = 'none';
        bandright.style.display = 'none';
        bandapply.style.display = 'none';
        generalfeature.style.display = 'none';
        generalduty.style.display = 'block';
        generalright.style.display = 'none';
        generalapply.style.display = 'block';

        bandfeaturebtn.style.backgroundColor = '#ffffff00'
        banddutybtn.style.backgroundColor = '#ffffff00'
        bandrightbtn.style.backgroundColor = '#ffffff00'
        generalfeaturebtn.style.backgroundColor = '#ffffff00'
        generaldutybtn.style.backgroundColor = '#ffefd2'
        generalrightbtn.style.backgroundColor = '#ffffff00'
    }

    if (index == 5) {
        bandfeature.style.display = 'none';
        bandduty.style.display = 'none';
        bandright.style.display = 'none';
        bandapply.style.display = 'none';
        generalfeature.style.display = 'none';
        generalduty.style.display = 'none';
        generalright.style.display = 'block';
        generalapply.style.display = 'block';

        bandfeaturebtn.style.backgroundColor = '#ffffff00'
        banddutybtn.style.backgroundColor = '#ffffff00'
        bandrightbtn.style.backgroundColor = '#ffffff00'
        generalfeaturebtn.style.backgroundColor = '#ffffff00'
        generaldutybtn.style.backgroundColor = '#ffffff00'
        generalrightbtn.style.backgroundColor = '#ffefd2'
    }
}