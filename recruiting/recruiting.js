const html = document.documentElement;
const band_member = document.getElementById('band_member')
const general_member = document.getElementById('general_member')

const bandExplain = document.getElementById('band_explain')
const generalExplain = document.getElementById('general_explain')

const bandfeature = document.getElementById('band_feature_BTN')
const bandduty = document.getElementById('band_duty_BTN')
const bandright = document.getElementById('band_right_BTN')
const bandapply = document.getElementById('band_apply_check_BTN')

const generalfeature = document.getElementById('general_feature_BTN')
const generalduty = document.getElementById('general_duty_BTN')
const generalright = document.getElementById('general_right_BTN')
const generalapply = document.getElementById('general_apply_check_BTN')

const bandfeatureContent = document.getElementById('band_feature_content')
const banddutyContent = document.getElementById('band_duty_content')
const bandrightContent = document.getElementById('band_right_content')
const bandapplyContent = document.getElementById('band_apply_content')

const generalfeatureContent = document.getElementById('general_feature_content')
const generaldutyContent = document.getElementById('general_duty_content')
const generalrightContent = document.getElementById('general_right_content')
const generalapplyContent = document.getElementById('general_apply_content')


band_member.addEventListener('click',function() {
    band_member.style.borderWidth = '2px';
    band_member.style.pointerEvents = 'none';
    general_member.style.borderWidth = '0px';
    general_member.style.pointerEvents = 'unset';
    bandExplain.style.zIndex = 2;
    generalExplain.style.zIndex = 1;
});
general_member.addEventListener('click',function() {
    general_member.style.borderWidth = '2px';
    general_member.style.pointerEvents = 'none';
    band_member.style.borderWidth = '0px';
    band_member.style.pointerEvents = 'unset';
    bandExplain.style.zIndex = 1;
    generalExplain.style.zIndex = 2;
});


bandfeature.addEventListener('click',function() {
    bandfeature.style.zIndex = 3;
    bandduty.style.zIndex = 2;
    bandright.style.zIndex = 1;

    bandfeatureContent.style.zIndex = 4;
    banddutyContent.style.zIndex = 3;
    bandrightContent.style.zIndex = 2;
    bandapplyContent.style.zIndex = 1;
});
bandduty.addEventListener('click',function() {
    bandfeature.style.zIndex = 2;
    bandduty.style.zIndex = 3;
    bandright.style.zIndex = 1;

    bandfeatureContent.style.zIndex = 3;
    banddutyContent.style.zIndex = 4;
    bandrightContent.style.zIndex = 2;
    bandapplyContent.style.zIndex = 1;
});
bandright.addEventListener('click',function() {
    bandfeature.style.zIndex = 1;
    bandduty.style.zIndex = 2;
    bandright.style.zIndex = 3;

    bandfeatureContent.style.zIndex = 2;
    banddutyContent.style.zIndex = 3;
    bandrightContent.style.zIndex = 4;
    bandapplyContent.style.zIndex = 1;
});
bandapply.addEventListener('click',function() {
    bandfeature.style.zIndex = 3;
    bandduty.style.zIndex = 2;
    bandright.style.zIndex = 1;

    bandfeatureContent.style.zIndex = 3;
    banddutyContent.style.zIndex = 2;
    bandrightContent.style.zIndex = 1;
    bandapplyContent.style.zIndex = 4;
});


generalfeature.addEventListener('click',function() {
    generalfeature.style.zIndex = 3;
    generalduty.style.zIndex = 2;
    generalright.style.zIndex = 1;

    generalfeatureContent.style.zIndex = 4;
    generaldutyContent.style.zIndex = 3;
    generalrightContent.style.zIndex = 2;
    generalapplyContent.style.zIndex = 1;
});
generalduty.addEventListener('click',function() {
    generalfeature.style.zIndex = 2;
    generalduty.style.zIndex = 3;
    generalright.style.zIndex = 1;

    generalfeatureContent.style.zIndex = 3;
    generaldutyContent.style.zIndex = 4;
    generalrightContent.style.zIndex = 2;
    generalapplyContent.style.zIndex = 1;
});
generalright.addEventListener('click',function() {
    generalfeature.style.zIndex = 1;
    generalduty.style.zIndex = 2;
    generalright.style.zIndex = 3;

    generalfeatureContent.style.zIndex = 2;
    generaldutyContent.style.zIndex = 3;
    generalrightContent.style.zIndex = 4;
    generalapplyContent.style.zIndex = 1;
});
generalapply.addEventListener('click',function() {
    generalfeature.style.zIndex = 3;
    generalduty.style.zIndex = 2;
    generalright.style.zIndex = 1;

    generalfeatureContent.style.zIndex = 3;
    generaldutyContent.style.zIndex = 2;
    generalrightContent.style.zIndex = 1;
    generalapplyContent.style.zIndex = 4;
});
