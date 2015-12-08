var videoProviders = ['vimeo', 'youtube'];

var selectors = $.map(videoProviders, function(item){
  return 'iframe[src*="'+item+'"]';
});

var videoFrames = $(selectors.join(","));
$(videoFrames).wrap('<div />');