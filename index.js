var clicks = 0;
var click_target_id;

var clickMe = document.querySelector("#click-me");
clickMe.addEventListener('click', function(e) {
  incrementClicks();
});

function incrementClicks() {
  clicks += 1
  console.log(clicks)
  clickCount = document.querySelector("#click-me-count")
  clickCount.innerHTML = clicks
}
