(function() {

  function updateDuration() {
    var started = moment([2013, 05, 17]),  // TODO: Grab this from configuration.
            now = moment(),
           diff = now.diff(started, 'years', true);

    var duration = diff.toFixed(8) + ' years';
    $('#site-duration').html(duration);
  }

  $(document).ready(function() {
    var frequencyMs = 2000;
    updateDuration();
    setInterval(updateDuration, frequencyMs);
  });

})();
